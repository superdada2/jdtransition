import {settings} from '../config'
import axios from 'axios'

export function toggleSidebar() {
  return {type: "TOGGLE_SIDEBAR"}
}

export function getUserList() {
  const url = settings.urlBase + 'api/v1/system/getUsers'
  return {
    type: "GET_USERS",
    payload: axios.get(url)
  }
}

export function getStatusEnum() {
  const url = settings.urlBase + 'api/v1/system/getStatusEnum'
  return {
    type: "GET_STATUS_ENUM",
    payload: axios.get(url)
  }
}