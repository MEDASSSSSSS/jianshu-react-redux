import React,{Component} from 'react'

class Todoitem extends Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	render(){
		const { content } = this.props
		return (
			<div 
			className='item'
			onClick={this.handleClick}
			>
			{content}
			</div>
			)
	}

	handleClick(){
		const { deletItem, index } = this.props;
		deletItem(index)
	}
}

export default Todoitem;