import {table, tableComments, user, statusEnum} from '../../../models'

export function getTables() {
  return table.findAll({
    include: [
      {
        model: user
      }, {
        model: statusEnum
      }
    ]
  })
}

export function getTableComments({
  tableId = 0
}) {
  return tableComments.findAll({
    where: {
      tableId: tableId
    },
    include: [
      {
        model: user
      }, {
        model: tableComments
      }
    ]
  })
}

export function saveComment({
  title = "",
  tableId = 0,
  comment = "",
  userId = 0,
  replyId = 0
}) {
  return tableComments.create({title: title, tableId: tableId, comment: comment, userId: userId, replyId: replyId})
}