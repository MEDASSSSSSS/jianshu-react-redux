import { INIT_STATE,CHANGE_INPUT_VALUE, ADD_TODOITEM, DEL_TODOITEM } from './actionTypes'

export const initState = (src) => ({
	type:INIT_STATE,
	src
})

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
})

export const getAddItemAction = () => ({
	type: ADD_TODOITEM
})

export const getDelItemAction = (index) => ({
	type: DEL_TODOITEM,
	index
})