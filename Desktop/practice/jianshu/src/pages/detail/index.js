import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper,Header,Content,UserInfo } from './style.js'
import { actionCreators } from './store'

class Detail extends PureComponent{

	render(){
		return (
			<DetailWrapper>
			<Header>
			{this.props.title}
			</Header>
			<UserInfo>
			</UserInfo>
			<Content dangerouslySetInnerHTML={{__html:this.props.content}}>
			</Content>
			</DetailWrapper>
		)
	}
	componentDidMount(){
		this.props.getDetail(this.props.match.params.id);
	}
}

const stateMap = (state)=>({
	userInfo: state.getIn(['detail','userInfo']),
	title: state.getIn(['detail','title']),
	content:state.getIn(['detail','content']),

})
const stateDispatch = (dispatch) =>{
	return{
		getDetail(id){
			const action = actionCreators.getDetailAction(id);
			dispatch(action)
		}
	}
}
export default connect(stateMap,stateDispatch)(Detail)