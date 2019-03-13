import axios from 'axios';
const setWriterInfo = (data) => ({
	type:'set_writer_info',
	data: data,
})
const setMoreList = (res) => ({
	type:'set_more_list',
	data:res
})
export const nextPage = (curPage) => ({
	type:'change_page',
	curPageOfWriter:curPage
})
export const toggleBackAction = (data) =>({
	type:'toggle_back_top',
	data
})
export const getLoadMore = () => {
	return (dispatch) => {
		axios.get('/api/articleList.json').then((res) =>{
			const action = setMoreList(res.data.data)
			console.log(res.data);
			dispatch(action)
			}).catch(console.log('list load more error'))
	};
}
export const getInfo = () =>{
	return (dispatch) => {
		axios.get('/api/writersInfo.json').then((src) => 
			{	
				const action = setWriterInfo(src.data.users);
				console.log(src.data)
				dispatch(action);
			}
		).catch(
			console.log('err')
		)
	};
	
}