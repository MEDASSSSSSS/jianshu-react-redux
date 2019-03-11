import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button} from './style';
import { actionCreators } from './store'

class Login extends PureComponent {
	render(){
		const { loginStatus } = this.props;
		if(!loginStatus){
			return (
				<LoginWrapper>
				<LoginBox>
				<Input placeholder='账号' ref={(input)=>{this.account=input}}></Input>
				<Input placeholder='密码' type='password' ref={(input)=>{this.password=input}}></Input>
				<Button onClick={()=> this.props.loginFn(this.account,this.password)}>登录</Button>
				</LoginBox>
				</LoginWrapper>
			)
		}else{
			console.log('back')
			return <Redirect to='/'/>
		}
	}
}
const mapState =(state) =>({
	loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => {
	return{
		loginFn(accountEle,passwordEle){
			console.log(accountEle.value,passwordEle.value)
			const action =  actionCreators.loginAction(accountEle.value,passwordEle.value)
			dispatch(action)
		}
	}
}

export default connect(null,mapDispatch)(Login)