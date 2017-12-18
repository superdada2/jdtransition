import {settings} from '../config'
import axios from 'axios'

export function fetchTableNames() {
  const url = settings.urlBase + 'api/v1/table/getTables'

  return {
    type: "FETCH_TABLE_NAMES",
    payload: axios.get(url)
  }
}

export function fetchTableComments(tableId = 0) {
  console.log("fetching tableCOmments", tableId)
  const url = settings.urlBase + 'api/v1/table/getTableComments'
  return {
    type: "FETCH_TABLE_COMMENTS",
    payload: axios.post(url, {tableId: tableId}),
    tableId: tableId
  }
}

export function fetchSourceTables(tableId = 0) {
  const url = settings.urlBase + 'api/v1/table/getSourceTables'
  return {
    type: "FETCH_SOURCE_TABLES",
    payload: axios.post(url, {tableId: tableId})
  }
}

export function saveComment(comment) {
  console.log("Action", comment)
  const url = settings.urlBase + 'api/v1/table/saveComment'
  return {
    type: "SAVE_TABLE_COMMENT",
    payload: axios.post(url, comment)
  }
}