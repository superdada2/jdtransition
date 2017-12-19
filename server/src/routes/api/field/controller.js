import {
  field,
  translation,
  translationComment,
  user,
  statusEnum,
  tableComment,
  fieldComment
} from '../../../models'
import Promise from 'bluebird'

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
        ],
        include: [
          {
            model: user
          }
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

export function changeAssigned({
  fieldId = 1,
  userId = 1
}) {
  return new Promise((res, rej) => {
    field.update({
      assignedTo: userId
    }, {
      where: {
        id: fieldId
      }
    }).then(i => {
      res({fieldId: fieldId, userId: userId})
    }).catch(err => {
      rej(err)
    })
  })

}