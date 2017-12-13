import {
  field,
  translation,
  translationComment,
  users,
  statusEnum
} from '../../../models'

export function getTranslationByFieldId({
  fieldId = 0
}) {
  return translation.findAll({
    where: {
      fieldId: fieldId
    },
    include: [{
      model: 'translationComment',
      order: [
        [
          'timestamp', 'DESC'
        ]
      ]
    }]
  })
}