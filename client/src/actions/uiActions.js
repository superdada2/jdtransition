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