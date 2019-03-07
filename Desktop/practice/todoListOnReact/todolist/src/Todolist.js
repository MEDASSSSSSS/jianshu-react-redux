import React, {Component} from 'react';
import Todoitem from './Todoitem';
import TodolistUI from './TodolistUI';
import './style.css';
import store from './store/index';
import axios from 'axios';
import { initState,getInputChangeAction,getAddItemAction,getDelItemAction } from './store/actionCreators'
class Todolist extends Component{
	constructor(props){
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleItemDel = this.handleItemDel.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.getTodoItem = this.getTodoItem.bind(this);
		store.subscribe(this.handleStoreChange);//订阅store里的数据

	}
	render(){
		return(
			<TodolistUI
			inputValue={this.state.inputValue}
			handleInputChange={this.handleInputChange}
			handleButtonClick={this.handleButtonClick}
			getTodoItem={this.getTodoItem}/>
		)
	}

	componentDidMount(){
		axios.get('/api/todolist')
			 .then((res)=>{
			 	const action = initState(res.data);
			 	store.dispatch(action);
			 })
			 .catch(()=>{alert('error')})
	}

	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<Todoitem 
					key={index}
					content={item} 
					index={index}
					deletItem={this.handleItemDel}/>
			)
		})
	}
	handleInputChange (e){
		//简化后的代码
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action);
		
	}
	handleButtonClick(){
		if(!this.state.inputValue.trim()){return}/*完全输入空格，提交后没有任何反应且input的内容不会自动清空*/
		const action = getAddItemAction()
		store.dispatch(action);//提交数据改变申请
	}
	handleItemDel(index){
		const action = getDelItemAction(index)
		store.dispatch(action);
	}
	handleStoreChange(){
		this.setState(store.getState());
	}
}

export default Todolist