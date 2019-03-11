import * as constants from './constants';
import axios from 'axios';
import {fromJS} from  'immutable';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length/10)
})

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: constants.SERACH_BLUR
})

export const listMouseEnter = () =>({
	type: constants.LIST_MOUSE_ENTER
})
export const listMouseLeave = () =>({
	type: constants.LIST_MOUSE_LEAVE

})
export const listChangePage = () => ({
	type: constants.LIST_CHANGE_PAGE
})

export const getList = () => {
	return  (dispatch) => {
		axios.get('/api/searchList.json').then((res)=>{
			const data = res.data;
			const action = changeList(data.data);
			dispatch(action);
		}).catch(()=>{
			console.log('err')
		})
	};
}