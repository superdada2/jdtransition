import {settings} from '../config'
import axios from 'axios'
import {store} from '../store'

export function fetchTranslationComments(translationId = 0) {
  const url = settings.urlBase + 'api/v1/translation/getTranslationComments'
  return {
    type: "FETCH_TRANSLATION_COMMENTS",
    payload: axios.post(url, {translationId: translationId})
  }
}

export function fetchTranslations(fieldId = 0) {
  const url = settings.urlBase + 'api/v1/translation/getTranslationByFieldId'
  return {
    type: "FETCH_TRANSLATIONS",
    payload: axios.post(url, {fieldId: fieldId})
  }
}

export function saveComment(comment) {

  const url = settings.urlBase + 'api/v1/translation/saveComment'
  return {
    type: "SAVE_TRANSLATION_COMMENT",
    payload: axios.post(url, comment)
  }
}

export function saveTranslation(value = "", fieldId = 0) {
  const url = settings.urlBase + 'api/v1/translation/addTranslation'

  const state = store
    .getState()
    .ui
  const translation = {
    fieldId: fieldId,
    value: value,
    status: 1,
    assignedTo: state.user,
    dbType: state.database,
    translationType: 1
  }
  return {
    type: "ADD_TRANSLATION",
    payload: axios.post(url, translation)
  }
}
