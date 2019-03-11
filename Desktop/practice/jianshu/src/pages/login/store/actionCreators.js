import axios from 'axios';
import * as constants from './constants'

const changeLogin = (result)=>({
	type:constants.CHANGE_LOGIN,
	value:true
})
export const logoutAction = ()=>({
	type: constants.CHANGE_LOGOUT,
	value:false
})
export const loginAction = (account,password) =>{
	return (dispatch) => {
		axios.get('api/login.json?account='+ account +'&password='+ password).then((res)=>{
			const result = res.data.data;
			if(result){
				const action = changeLogin()
				dispatch(action)
			}else{
				alert('login fail')
			}
		}).catch(()=>{
			console.log('err')
		})
	}
}