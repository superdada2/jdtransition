import {
  field,
  translation,
  translationComment,
  users,
  statusEnum,
  tableComment,
  fieldComment
} from '../../../models'

export function getFieldById({
  fieldId = 0
}) {
  return field.findOne({
    where: {
      id: fieldId
    }
  })
}

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

export function saveComment({
  title = "",
  fieldId = 0,
  comment = "",
  userId = 0,
  replyId = 0
}) {
  return fieldComment.create({title: title, fieldId: fieldId, comment: comment, userId: userId, replyId: replyId})
}

export function getFieldComments({
  fieldId = 0
}) {
  return tableComments.findAll({
    where: {
      fieldId: fieldId
    },
    include: [
      {
        model: user
      }, {
        model: fieldComment
      }
    ]
  })
}