/**
 * 格式化时间戳
 * @param {*} timestamp 时间戳
 * @param {*} format 格式化规则
 * @return 格式化后的时间字符串
 */
export const formatTimestamp = (timestamp, format = 'yyyy-MM-dd hh:mm:ss') => {
  return '2019-12-12 12:00:00'
}

/**
 * 格式化小区列表
 * @param {*} communities 小区列表
 */
export const tranCommunities = communities => {
  communities.map(community => {
    if (community.attribute.regionTreeType !== 3) {
      community.code = Math.random()
      community.disabled = true
      if (community.children.length) {
        tranCommunities(community.children)
      }
      return false
    }
  })
  return communities
}

/**
 * 枚举对像转换为数组
 * @param {object} data 枚举对像
 * @param {boolean} isParseIntKey 是否将key值转成int型
 * @param {*} data 枚举对像
 */
export const enumToArray = (data, isParseIntKey = false) => {
  let array = []
  Object.keys(data).forEach(key => {
    let item = {
      text: data[key]
    }
    if (isParseIntKey) {
      item.code = parseInt(key)
    } else {
      item.code = key
    }
    array.push(item)
  })
  return array
}
