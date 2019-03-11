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
export const getLoadMore = () => {
	return (dispatch) => {
		axios.get('./api/articleList.json').then((res) =>{
			const action = setMoreList(res.data.articles)
			dispatch(action)
			}
		).catch(console.log('error'))
	};
}
export const getInfo = () =>{
	return (dispatch) => {
		axios.get('/api/writersInfo.json').then((src) => 
			{	
				const action = setWriterInfo(src.data.users);
				dispatch(action);
			}
		).catch(
			console.log('err')
		)
	};
	
}