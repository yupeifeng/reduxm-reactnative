import { store, storeActionType } from 'reduxm-reactnative';

@store('pageOneStore', 'change_pageOneStore')
class pageOneStore {
	@storeActionType('change_text')
	static text = '我是第一个页面';

	@storeActionType('change_inputText')
	static inputText = '';
}
