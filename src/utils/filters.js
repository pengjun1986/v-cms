// import { formatTimestamp as utilFormatTimestamp } from './index'
import {
  CONTRACT_TYPE_STATE_ENUM,
  CONTRACT_STATE_ENUM
} from './constants'

export const formatTimestamp = (timestamp, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!timestamp) {
    return ''
  }
  return moment(timestamp).format(format)
}

export const tranEnum = (key, enumeration) => {
  const value = enumeration[key]
  return value || key
}

export const contractTypeState = key => {
  const value = CONTRACT_TYPE_STATE_ENUM[key]
  return value || key
}

export const contractState = key => {
  const value = CONTRACT_STATE_ENUM[key]
  return value || key
}

export const yesOrNo = val => {
  switch (val) {
    case 0:
      return '否'
    case 1:
      return '是'
    default:
      return val
  }
}
