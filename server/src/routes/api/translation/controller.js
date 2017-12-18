import {
  field,
  translation,
  translationComment,
  user,
  statusEnum,
  sourceTable,
  dbTypeEnum,
  assignedTo
} from '../../../models'

export function getTranslationByFieldId({
  fieldId = 0
}) {
  return translation.findAll({
    where: {
      fieldId: fieldId
    },
    include: [
      {
        model: translationComment,
        include: [
          {
            model: user
          }, {
            model: translationComment
          }
        ],
        order: [
          ['id', 'DESC']
        ]
      }, {
        model: statusEnum
      }
    ]
  })
}

export function saveComment({
  title = "",
  translationId = 0,
  comment = "",
  userId = 0,
  replyId = 0
}) {
  return translationComment.create({title: title, translationId: translationId, comment: comment, userId: userId, replyId: replyId})
}

export function getSourceTables({
  tableId = 0
}) {
  return sourceTable.findAll({
    where: {
      tableId: tableId
    },
    include: [
      {
        model: dbTypeEnum
      }, {
        model: assignedTo
      }
    ]
  })
}
