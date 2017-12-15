import {settings} from '../config'
import axios from 'axios'

export function fetchTableNames() {
  const url = settings.urlBase + 'api/v1/table/getTables'
  console.log(url)
  return {
    type: "FETCH_TABLE_NAMES",
    payload: axios.get(url)
  }
}