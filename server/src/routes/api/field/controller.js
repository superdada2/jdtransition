import {
  field,
  translation,
  translationComment,
  users,
  statusEnum
} from '../../../models'


export function getFieldByTableId({
  tableId = 0
}) {
  return field.findAll({
    where: {
      tableId: tableId
    },
    include: [{
      model: 'translation',
      order: [
        ['timestamp', 'DESC']
      ]
    }]
  })
}