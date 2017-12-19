import {user} from '../../../models'

export function getUsers() {
  return user.findAll()
}