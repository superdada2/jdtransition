import {user, statusEnum} from '../../../models'

export function getUsers() {
  return user.findAll()
}
export function getStatusEnum() {
  return statusEnum.findAll()
}