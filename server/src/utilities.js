import {
  field,
  translation,

  user,
  statusEnum,
  table,
  dbTypeEnum,
  assignedTo
} from './models'

import _ from 'lodash'

export async function updateField(fieldId = 0, dbType = 1) {
  var statusList = await statusEnum.findAll()
  statusList = statusList.map(i => {
    return i.dataValues
  })

  var translations = await translation.findAll({
    where: {
      fieldId: fieldId
    }
  })

  translations = translations
    .map(i => {
    return i.dataValues
  })
    .filter(j => {
      return j.dbType == dbType
    })
  console.log(fieldId, dbType)

  //check if there is complete ones
  if (_.findIndex(translations, i => {
    return i.status == 3
  }) != -1) {
    switch (dbType) {
      case 1:
        field.update({
          jdeStatus: 4
        }, {
          where: {
            id: fieldId
          }
        });
        break;
      case 2:
        field.update({
          oracleStatus: 4
        }, {
          where: {
            id: fieldId
          }
        });
        break;
    }

  } else {
    switch (dbType) {
      case 1:
        await field.update({
          jdeStatus: 2
        }, {
          where: {
            id: fieldId
          }
        });
        break;
      case 2:
        await field.update({
          oracleStatus: 2
        }, {
          where: {
            id: fieldId
          }
        });
        break;
    }
  }

  var temp = await field
    .findOne({
    where: {
      id: fieldId
    }
  })
    .then(i => {
      updateTableStatus(i.dataValues.tableId, dbType)
    })

}

export function updateTableStatus(tableId, dbType) {
  var thisTable = table.findOne({
    where: {
      id: tableId
    },
    include: [
      {
        model: field
      }
    ]
  }).then(i => {
    // console.log(i.dataValues)
    var fields = i
      .dataValues
      .fields
      .map(i => i.dataValues)
      .filter(j => j.dbType = dbType)

    //checkif complete
    console.log(fields, fields.filter(i => i.jdeStatus == 4).length)
    if (fields.filter(i => i.jdeStatus == 4).length == fields.length) {
      table.update({
        status: 4
      }, {
        where: {
          id: tableId
        }
      })
    }
    //check if in progress
    if (fields.filter(i => i.jdeStatus == 4).length > 0 || fields.filter(i => i.jdeStatus == 2).length > 0) {
      table.update({
        status: 7
      }, {
        where: {
          id: tableId
        }
      })
    }
  })

}