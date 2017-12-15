import {store} from '../store'
import {push} from 'react-router-redux'

export function nav(url = "/home") {
  store.dispatch(push(url))
}