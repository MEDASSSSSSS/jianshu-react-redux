import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState=fromJS({
	focused: false,
	searchList:[],
	page:1,
	totalPage:1,
	mouseEnter:false,
})

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.SEARCH_FOCUS :
			// immutable 对象的set方法，会结合之前immutable对象的值和设置的值返回一个全新的对象
			return state.set('focused', true);
		case constants.SERACH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.set('searchList',action.data).set('totalPage',action.totalPage);
		case constants.LIST_MOUSE_ENTER:
			return state.set('mouseEnter',true);
		case constants.LIST_MOUSE_LEAVE:
			return state.set('mouseEnter',false);
		case constants.LIST_CHANGE_PAGE:
			let nextPage = state.get('page') + 1;
			let totalPage = state.get('totalPage') -1;
			if(nextPage > totalPage){
				return state.set('page',1);
			}
			return state.set('page', nextPage);
		default:
			return state
	}
}