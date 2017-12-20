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

export function fetchFieldComments(fieldId = 0) {
  const url = settings.urlBase + 'api/v1/field/getFieldComment'
  return {
    type: "FETCH_FIELD_COMMENT",
    payload: axios.post(url, {fieldId: fieldId})
  }
}

export function fetchFieldById(fieldId = 0) {
  const url = settings.urlBase + 'api/v1/field/getFieldById'
  return {
    type: "FETCH_FIELD",
    payload: axios.post(url, {fieldId: fieldId})
  }
}

export function fetchFieldByUser(userId = 0) {
  const url = settings.urlBase + 'api/v1/field/getFieldByUser'
  return {
    type: "FETCH_FIELD_USER",
    payload: axios.post(url, {userId: userId})
  }
}

export function changeAssigned(userId = 0, fieldId = 1) {
  console.log("changing assigned", userId, fieldId)
  const url = settings.urlBase + 'api/v1/field/changeAssigned'
  return {
    type: "CHANGE_ASSIGNED_USER",
    package: {
      userId: userId,
      fieldId: fieldId
    },
    payload: axios.post(url, {
      fieldId: fieldId,
      userId: userId
    },)
  }

}