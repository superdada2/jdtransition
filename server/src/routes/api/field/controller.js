import {field, translation, translationComment, users, statusEnum} from '../../../models'

export function getFieldByTableId({
  tableId = 0
}) {
  console.log(123)
  return field.findAll({
    where: {
      tableId: tableId
    },
    include: [
      {
        model: translation,
        order: [
          ['timestamp', 'DESC']
        ]
      }, {

        model: statusEnum,
        as: 'jdeStatusEnum'
      }, {

        model: statusEnum,
        as: 'oracleStatusEnum'
      }
    ]
  })
}