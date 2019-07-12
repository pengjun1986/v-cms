export const PAGINATION = {
  'pageSizes': [10, 20, 40, 50],
  'pageSize': 10,
  'layout': 'total,sizes, prev, pager, next, jumper'
}

export const pagination1 = {
  'pageSizes': [10, 20, 40, 50],
  'pageSize': 10,
  'layout': 'total, prev, pager, next, jumper'
}

export const pagination2 = {
  'pageSizes': [10, 30, 50, 100, 200],
  'pageSize': 10,
  'layout': 'total, prev, pager, next, jumper'
}

export const pagination3 = {
  'pageSizes': [10, 20, 50],
  'pageSize': 10,
  'layout': 'total, prev, pager, next, jumper'
}

export const TaskTypeEnum = {
  NONE: { code: 0, name: '默认无', flag: '' },
  ROLLING_DIFFERENTIAL_DELIVERY: { code: 1, name: '轧差交收', flag: '' },
  PAYABLE_ONE_BY_ONE: { code: 2, name: '逐笔应收', flag: '' },
  COPING_WITH_EACH_OTHER: { code: 3, name: '逐笔应付', flag: '' }
}

export const TaskStatusEnum = {
  WAIT_HANDLE: { code: 0, name: '等待处理' },
  HANDLING: { code: 1, name: '处理中' },
  HANDLE_SUCCESS: { code: 2, name: '处理成功' },
  HANDLE_FAIL: { code: 3, name: '处理失败' },
  BATCH_BOOKED: { code: 4, name: '部分处理成功' }
}

export const BusinessTypeEnum = {
  /** 预存账户去核销应收账单 */
  PRESTORE_TO_RECE: { code: 1, name: '预存核销应收' },
  /** 零头账户去核销应收账单，相当于应收账单转出一部分应收金额到零头账户 */
  ODD_TO_RECE: { code: 2, name: '零头核销应收' },
  /** 预存账户去核销零头账户余额 */
  PRESTORE_TO_ODD: { code: 3, name: '预存核销零头' },
  /** 减免核销应收账单 */
  DERATE_TO_RECE: { code: 4, name: '减免核销' },
  PAID_TO_PRESTORE: { code: 5, name: '预存收款' },
  PRESTORE_REFUND: { code: 6, name: '预存退款' },
  RECE_BILL_CREATE: { code: 7, name: '应收账单创建' },
  PAID_PRESTORE_TO_RECE: { code: 9, name: '收款核销' },
  YHDK_PAID_PRESTORE_TO_RECE: { code: 23, name: '银行代扣-收款核销' },
  /** 冲正添加 **/
  CANCEL_TO_REVERSAL: { code: 10, name: '核销冲正' },
  BILL_TO_REVERSAL: { code: 11, name: '应收账单冲正' },
  RECEIPT_TO_REVERSAL: { code: 12, name: '收款冲正' },
  /** 应收转移 **/
  BILL_YS_ZY: { code: 14, name: '账单应收转移' },
  BILL_TO_RECE: { code: 15, name: '转移核销' },
  /** 预存转移 **/
  PRESTORE_TO_PRESTORE_OUT: { code: 16, name: '预存转移-转出' },
  PRESTORE_TO_PRESTORE_INT: { code: 17, name: '预存转移-转入' },

  /**  付款相关 */
  PAYMENT: { code: 8, name: '付款核销' },
  PAYABLE_TO_RECE: { code: 18, name: '暂收转收款' },
  PAYMENT_TO_PREPAY: { code: 19, name: '付款单创建' },
  PAYMENT_TO_REVERSAL: { code: 13, name: '付款单冲正' },
  /** 应付-暂收 创建**/
  PAYABLE_BILL_ZS_CREATE: { code: 20, name: '应付-暂收账单创建' },
  /** 应付-代收 创建 **/
  PAYABLE_BILL_DS_CREATE: { code: 21, name: '应付-代收账单创建' },
  /** 应付-垫付 创建 **/
  PAYABLE_BILL_DF_CREATE: { code: 25, name: '应付-垫付账单创建' },

  PAYABLE_BILL_TO_REVERSAL: { code: 22, name: '应付账单冲正' },
  GACHA_TRANSFER_BATCH: { code: 24, name: '轧差交收核销' },
  PREPAY_TO_PAYABLE: { code: 26, name: '预付核销' },
  /** 代付转入   27是应收账单类型  28是发生核销的转账业务类型  都有对应的recordTitleEnum **/
  BILL_YS_DAIFU: { code: 27, name: '代付转入' },
  BILL_YS_DAIFU_TO_RECE: { code: 28, name: '代付转出' },
  CUSHION_ADJUSTMENT: { code: 29, name: '垫付调整' }
}

// 物业费提现的支付途径对应的number
export const WuYeFeiTiXianPayTypeEnum = {
  PAY_TYPE_INIT: { code: 999, name: '未知' },
  PAY_TYPE_CASH: { code: 11, name: '现金' },
  PAY_TYPE_POS: { code: 21, name: 'pos' },
  PAY_TYPE_TRAFFIC_POS: { code: 22, name: '交行POS' },
  PAY_TYPE_TRAFFIC_POS_OTHER: { code: 23, name: '其他-交行POS' },
  PAY_TYPE_TRAFFIC_POS_ALI: { code: 24, name: '支付宝-交行POS' },
  PAY_TYPE_TRAFFIC_POS_WX: { code: 25, name: '微信-交行POS' },
  PAY_TYPE_TRAFFIC_POS_BAIDU: { code: 26, name: '百度-交行POS' },
  PAY_TYPE_TRAFFIC_POS_QQ: { code: 27, name: 'QQ-交行POS' },
  PAY_TYPE_CHONG_POS: { code: 29, name: '重银联POS' },
  PAY_TYPE_DY: { code: 93, name: '电银支付' },
  PAY_TYPE_ZHIFUBAO: { code: 31, name: '支付宝' },
  PAY_TYPE_WX_QR: { code: 35, name: '微信扫码' },
  PAY_TYPE_ALI_QR: { code: 36, name: '支付宝扫码' },
  PAY_TYPE_WEIXIN: { code: 41, name: '微信公众号' },
  PAY_TYPE_WEIXINAPP: { code: 51, name: '微信APP' },
  PAY_TYPE_PREDEPOSIT: { code: 61, name: '钱包' },
  PAY_TYPE_TIMES_CARD: { code: 71, name: '次卡' },
  PAY_TYPE_BJ_PS_CARD: { code: 101, name: '保洁预存卡' },
  PAY_TYPE_INTEGRAL: { code: 121, name: '积分' },
  PAY_TYPE_TRANSFER: { code: 103, name: '转账' },
  PAY_TYPE_BANK_TRANSFER: { code: 104, name: '订单支付的时候银行转账付款' },
  PAY_TYPE_MIX: { code: 91, name: '组合支付' },
  PAY_TYPE_PROVIDER_CASH: { code: 151, name: '供方现金收款' },
  PAY_TYPE_ONE_NET: { code: 161, name: '招行一网通' }
}

// 物业费提现的支付途径对应的number
export const WuYeFeiTiXianOrderTypeEnum = {
  ORDER_SOURCETYPE_APP: { code: 0, name: 'app下单' },
  ORDER_SOURCETYPE_ADMIN: { code: 1, name: '代客下单' },
  ORDER_SOURCETYPE_WEIXIN: { code: 2, name: '微信下单' },
  ORDER_SOURCETYPE_CUSTOMSERVICE: { code: 3, name: '客服下单I' },
  ORDER_SOURCETYPE_ALIPAYSERVICE: { code: 4, name: '支付宝服务窗' },
  ORDER_SOURCETYPE_HKBRCODE: { code: 5, name: ' 管家扫码' },
  ORDER_SOURCETYPE_MACHINESERVICE: { code: 6, name: ' 自助缴费机' },
  ORDER_SOURCETYPE_ALIPYSMALLROUTINE: { code: 7, name: '支付宝小程序' }
}

// 物业费提现的支付途径对应的number
export const payModeNum = [
  { code: '1', name: '现金' },
  { code: '2', name: '支票' },
  { code: '3', name: 'pos刷卡' },
  { code: '4', name: '转账' },
  { code: '5', name: '银行代扣' },
  { code: '6', name: '千丁' },
  { code: '7', name: '千丁临停' },
  { code: '8', name: '微信支付' },
  { code: '9', name: '银联支付' },
  { code: '10', name: '空置房转账' }
]

// 票据类别
export const BankTypeEnum = [
  { code: 104, name: '中国银行' },
  { code: 105, name: '建设银行' },
  { code: 103, name: '农业银行' },
  { code: 102, name: '工商银行' },
  { code: 308, name: '招商银行' },
  { code: 901, name: '成都建设' },
  { code: 902, name: '中国银联' },
  { code: 903, name: '通联支付' },
  { code: 301, name: '交通银行' }
]

// 合同类别状态枚举
export const CONTRACT_TYPE_STATE_ENUM = {
  0: '禁用',
  1: '启用'
}

// 合同状态枚举
export const CONTRACT_STATE_ENUM = {
  0: '草稿',
  1: '待确认',
  2: '已发布',
  3: '已关闭'
}

// 合同权益归属枚举
export const CONTRACT_OWNERSHIP_ENUM = {
  0: '公区',
  1: '非公区'
}

// 费用计算方式枚举
export const FEE_CALC_TYPE_ENUM = {
  0: '按每月单价',
  1: '按计费周期总额'
}

// 费用计费周期枚举
export const FEE_REGION_ENUM = {
  1: '一个月',
  3: '三个月',
  6: '半年',
  12: '一年'
}

// 费用计算方式枚举
export const FEE_TYPE_ENUM = {
  1: '按自然月',
  2: '按非自然月',
  3: '按自然月分摊'
}
