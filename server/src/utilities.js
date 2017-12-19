import {
  field,
  translation,

  user,
  statusEnum,

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
  console.log(_.findIndex(translations, i => {
    return i.status == 3
  }) != -1)
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

  }
}