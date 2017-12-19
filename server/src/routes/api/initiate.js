import convertExcel from 'excel-as-json'
import _ from 'lodash'
import {
  table,
  field,
  translation,
  user,
  dbTypeEnum,
  statusEnum,
  sourceTable
} from '../../models'

import logger from '../../logger'

export function loadData() {
  convertExcel.processFile('C:/Users/admin/data.xlsx', null, {
    sheet: 1,
    omitEmptyFields: true
  }, (err, data) => {
    data.forEach((i, index) => {
      if (!_.isEmpty(i)) {
        table
          .create({name: i.Summary, status: 1})
          .catch(err => {
            logger.error({err: err, name: i.Summary})
          })
          .then(res => {
            var tableId = res.dataValues.id - 1
            convertExcel.processFile('C:/Users/admin/data.xlsx', null, {
              sheet: index + 1,
              omitEmptyFields: true
            }, (err2, data2) => {
              data2.forEach(j => {
                if (_.has(j, 'Oracle Table Name')) {
                  sourceTable.create({tableId: tableId, name: j['Oracle Table Name'], status: 2, dbType: 2}).catch(err => {
                    logger.error({err: err, tableId: tableId})
                  })
                }

                if (_.has(j, 'JD Edwards Table Names')) {
                  sourceTable.create({tableId: tableId, name: j['JD Edwards Table Names'], status: 2, dbType: 1}).catch(err => {
                    logger.error({err: err, tableId: tableId})
                  })
                }
                if (!_.isEmpty(j)) {
                  field.create({
                    tableId: tableId,
                    name: j['Column Names in Datawarehouse'],
                    jdeStatus: (_.has(j, 'Oracle Column Mapping') || _.has(j, 'Where Clause/Lookup Codes'))
                      ? 2
                      : 1,
                    oracleStatus: (_.has(j, 'JD Edwards Column Names') || _.has(j, 'JD Edwards Where Clause/Subquery/Lookup codes'))
                      ? 2
                      : 1
                  }).catch(err => {
                    logger.error({err: err, value: j, tableId: tableId})
                  }).then(res => {
                    const fieldId = res.dataValues.id
                    createTranslation(j, fieldId)
                  })
                }
              })
              // console.log(data2)
            })
          })

        // console.log(i, index)
      }
    })
    // console.log(err, data)
  })
}

function createTranslation(row, fieldId) {
  if (_.has(row, 'Oracle Column Mapping')) {
    translation.create({fieldId: fieldId, value: row['Oracle Column Mapping'], status: 2, dbType: 2, translationType: 1}).catch(err => {
      logger.error({err: err, value: row['Oracle Column Mapping']})
    })
  }
  if (_.has(row, 'Where Clause/Lookup Codes')) {
    translation.create({fieldId: fieldId, value: row['Where Clause/Lookup Codes'], status: 2, dbType: 2, translationType: 2}).catch(err => {
      logger.error({err: err, value: row['Where Clause/Lookup Codes']})
    })
  }
  if (_.has(row, 'JD Edwards Column Names')) {
    translation.create({fieldId: fieldId, value: row['JD Edwards Column Names'], status: 2, dbType: 1, translationType: 1}).catch(err => {
      logger.error({err: err, value: row['JD Edwards Column Names']})
    })
  }
  if (_.has(row, 'JD Edwards Where Clause/Subquery/Lookup codes')) {
    translation.create({fieldId: fieldId, value: row['JD Edwards Where Clause/Subquery/Lookup codes'], status: 2, dbType: 1, translationType: 2}).catch(err => {
      logger.error({err: err, value: row['JD Edwards Where Clause/Subquery/Lookup codes']})
    })
  }
}

export async function initiate() {
  const status = [
    {
      id: 1,
      data: 'empty'
    }, {
      id: 2,
      data: 'populated'
    }, {
      id: 3,
      data: 'confirmed'
    }, {
      id: 4,
      data: 'complete'
    }, {
      id: 5,
      data: 'proposed'
    }, {
      id: 6,
      data: 'rejected'
    }, {
      id: 7,
      data: 'partial'
    }
  ]

  const dbType = [
    {
      id: 1,
      data: 'JDE'
    }, {
      id: 2,
      data: 'Oracle'
    }
  ]
  try {

    await statusEnum.bulkCreate(status)
    await dbTypeEnum.bulkCreate(dbType)
    await user.create({username: 'unassigned'})
    await user.create({username: 'admin'})
  } catch (err) {
    // console.log(err)
  }
}