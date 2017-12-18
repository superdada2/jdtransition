import {settings} from '../config'
import axios from 'axios'

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
  console.log("Action", comment)
  const url = settings.urlBase + 'api/v1/translation/saveComment'
  return {
    type: "SAVE_TRANSLATION_COMMENT",
    payload: axios.post(url, comment)
  }
}