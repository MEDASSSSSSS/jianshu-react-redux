import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS(
	{
	userInfo:{},
	title:'',
	content:'',
	showScroll:false,
}
);

export default (state = defaultState, action) => {
	switch (action.type)  {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title:action.title,
				content:action.content,
				userInfo:action.userInfo,
			});
		case constants.CHANGE_SHOW_SCROLL:
			return state.set('showScroll',action.data)
		default:
			return state;
	}

}