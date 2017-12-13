import {
  table,
  tableComments,
  users,
  statusEnum
} from '../../../models'

export function getTableNames() {
  return table.findAll({
    include: [{
      model: user
    }, {
      model: statusEnum
    }]
  })
}

export function getTableComments({
  tableId = 0
}) {
  return tableComments.findAll({
    where: {
      tableId: tableId
    },
    include: [{
        model: user
      },
      {
        model: tableComments
      }
    ]
  })
}