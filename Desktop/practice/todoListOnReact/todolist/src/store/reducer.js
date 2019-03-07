import { INIT_STATE,CHANGE_INPUT_VALUE, ADD_TODOITEM, DEL_TODOITEM } from './actionTypes'
const defaultState = {
	inputValue:'',
	list:[]
}

export default (state = defaultState, action) => {//可设置默认值，有dispatch传递时，state接受的是上一次存储的数据，否则是默认数据
	if (action.type === INIT_STATE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.src;
		return newState;
	};

	if (action.type === CHANGE_INPUT_VALUE){
		const newState = JSON.parse(JSON.stringify(state));//可以接受state但不可修改state，所以先取得state数据
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === ADD_TODOITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if (action.type === DEL_TODOITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}