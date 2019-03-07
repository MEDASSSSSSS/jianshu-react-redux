import React, { Component, Fragment } from 'react'

const TodolistUI = (props)=>{
	return (
			<Fragment>
			<div>
				<input 
				className='input'
				value={props.inputValue} 
				placeholder='todo item'
				onChange={props.handleInputChange}/>
				<button className='button' onClick={props.handleButtonClick}>Submit</button>
			</div>
			<ul>
				{props.getTodoItem()}
			</ul>
			</Fragment>
		)

}

// class TodolistUI extends Component {
// 	render(){
// 		return (
// 			<Fragment>
// 			<div>
// 				<label htmlFor="insertArea">Input Plan</label>
// 				<input 
// 				id="insertArea"
// 				className='input'
// 				value={this.props.inputValue} 
// 				placeholder='todo item'
// 				onChange={this.props.handleInputChange}/>
// 				<button onClick={this.props.handleButtonClick}>Submit</button>
// 			</div>
// 			<ul>
// 				{this.props.getTodoItem()}
// 			</ul>
// 			</Fragment>
// 		)
// 	}
// }

export default TodolistUI