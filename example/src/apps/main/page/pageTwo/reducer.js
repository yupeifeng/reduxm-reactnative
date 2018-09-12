import { store, storeActionType } from 'reduxm-reactnative';

@store('pageTwoStore', 'change_pageTwoStore')
class pageTwoStore {
	@storeActionType('change_text')
	static text = '我是第二个页面';
}
