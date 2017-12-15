import axios from 'axios'
import {settings} from '../config'

export function fetchFields(tableId = 0) {
  console.log(tableId)
  const url = settings.urlBase + 'api/v1/field/getFieldByTableId'

  return ({
    type: 'FETCH_FIELD_BY_TABLE_ID',
    payload: axios.post(url, {tableId: tableId})
  })
}