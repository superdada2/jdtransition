import {
  field,
  translation,
  translationComment,
  users,
  statusEnum,
  sourceTable
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
        model: 'translationComment',
        order: [
          ['timestamp', 'DESC']
        ]
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
  return translation.create({title: title, translationId: translationId, comment: comment, userId: userId, replyId: replyId})
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
        model: 'dbTypeEnum'
      }, {
        model: 'assignedTo'
      }
    ]
  })
}
