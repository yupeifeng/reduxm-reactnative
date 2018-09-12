import { store, storeActionType } from 'reduxm-reactnative';

@store('pageThreeStore', 'change_pageThreeStore')
class pageThreeStore {
	@storeActionType('change_text')
	static text = '我是第三个页面';
}
