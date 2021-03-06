import axios from 'axios'
import * as constants from './constants'
const changeDetail = (data)=>({
	type:constants.CHANGE_DETAIL,
	title:data.title,
	content:data.content,
	userInfo:data.userInfo
})
export const changeScroll = (data) => ({
	type: constants.CHANGE_SHOW_SCROLL,
	data
})
export const getDetailAction = (id) => {
	return (dispatch) => {
		axios.get('../api/getDetail.json?id=' + id).then((res)=>{
			const action = changeDetail(res.data.data);
			dispatch(action);
		}).catch(()=>{
			console.log('err')
		})
	}
}