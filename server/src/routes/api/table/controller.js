import {table, tableComment, user, statusEnum} from '../../../models'

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
  return tableComment.findAll({
    where: {
      tableId: tableId
    },
    include: [
      {
        model: user
      }, {
        model: tableComment,
        order: [
          ['id', 'DESC']
        ]
      }
    ],
    order: [
      ['id', 'DESC']
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
  return tableComment.create({title: title, tableId: tableId, comment: comment, userId: userId, replyId: replyId})
}