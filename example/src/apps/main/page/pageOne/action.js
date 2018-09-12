import { action, actionProps, Store } from 'reduxm-reactnative';

const pageOneType = Store.getActionType('pageOneStore');

@action('pageOneAction')
class pageOneAction {
	@actionProps('changeStore')
	static changeStore = pageOneStore => (dispatch, _this) => {
		dispatch({
			type: pageOneType.change_pageOneStore,
			pageOneStore: pageOneStore
		});
	};
}
