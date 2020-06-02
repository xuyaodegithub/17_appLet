let http = require('./request.js')
export const userLogin = (data) => http.beforRqs('/weapp/User/reportWxUserInfo', data);//登录
export const userInfo = (data) => http.beforRqs('/weapp/User/info', data);//用户信息
export const userBagMoney = (data) => http.beforRqs('/weapp/UserMoney/logs', data);//用户余额
export const userSendSms = (data) => http.beforRqs('/weapp/User/send_sms_code', data);
/**
 * 设置密码
 **/
export const userSetPassword = (data) => http.beforRqs('/weapp/User/set_pay_password', data,'POST');
/**
 * 解密手机号
 **/
export const userPhone = (data) => http.beforRqs('/weapp/User/reportWxPhoneNumber', data, 'POST');
/**
 * 收货地址列表
 **/
export const adressList = (data) => http.beforRqs('/weapp/Order/address_list', data);
/**
 * 收货地址删除
 **/
export const adressDele = (data) => http.beforRqs('/weapp/Order/address_del', data,'POST');
/**
 * 收货地址新增或修改
 **/
export const adressAdd = (data) => http.beforRqs('/weapp/Order/address_save', data, 'POST');
/**
 * 收货地址详情
 **/
export const adressDetail = (data) => http.beforRqs('/weapp/Order/address_get', data);