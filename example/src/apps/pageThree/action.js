import { action, actionProps, Store } from 'reduxm-reactnative';

const pageThreeType = Store.getActionType('pageThreeStore');

@action('pageThreeAction')
class pageThreeAction {
	@actionProps('changeStore')
	static changeStore = pageThreeStore => (dispatch, _this) => {
		dispatch({
			type: pageThreeType.change_pageThreeStore,
			pageThreeStore: pageThreeStore
		});
	};
}
