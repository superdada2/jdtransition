import Promise from 'bluebird'

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
import {updateField} from '../../../utilities'

export function addTranslation({
  fieldId = 0,
  value = "",
  status = 1,
  assignedTo = 1,
  dbType = 1,
  translationType = 1
}) {

  translation
    .create({
    fieldId: fieldId,
    value: value,
    status: 5,
    assignedTo: assignedTo,
    dbType: dbType,
    translationType: translationType
  })
    .then(i => {
      updateField(fieldId, 1)
    })
}
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
      }, {
        model: user
      }
    ],
    order: [
      ['id', 'DESC']
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

export function changeStatus({
  translationId = 0,
  status = 0,
  fieldId = 0
}) {
  return new Promise((res, rej) => {
    translation.update({
      status: status
    }, {
      where: {
        id: translationId
      }
    }).catch(err => {
      rej(err)
    }).then(async i => {

      updateField(fieldId, 1)
      res({translationId: translationId, fieldId: fieldId, status: status})
    })
  })
}
