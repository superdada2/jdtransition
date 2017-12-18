import {settings} from '../config'
import axios from 'axios'

export function fetchTranslationComments(translationId = 0) {
  const url = settings.urlBase + 'api/v1/translation/getTranslationComments'
  return {
    type: "FETCH_TRANSLATION_COMMENTS",
    payload: axios.post(url, {translationId: translationId})
  }
}