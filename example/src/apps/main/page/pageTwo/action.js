import { action, actionProps, Store } from 'reduxm-reactnative';

const pageTwoType = Store.getActionType('pageTwoStore');

@action('pageTwoAction')
class pageTwoAction {
	@actionProps('changeStore')
	static changeStore = pageTwoStore => (dispatch, _this) => {
		dispatch({
			type: pageTwoType.change_pageTwoStore,
			pageTwoStore: pageTwoStore
		});
	};
}
