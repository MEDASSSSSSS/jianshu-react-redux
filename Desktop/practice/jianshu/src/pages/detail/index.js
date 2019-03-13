import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper,Header,Content,UserInfo,BackTop } from './style.js'
import { actionCreators } from './store'

class Detail extends PureComponent{
	handleScrollTop(){
		window.scrollTo(0,0);
	}
	render(){
		const { userInfo,title,content,showScroll } = this.props
		return (
			<DetailWrapper>
			<Header>
			{title}
			</Header>
			<UserInfo>
				<img alt="" src="https://upload.jianshu.io/users/upload_avatars/14352811/cc50d568-f292-4585-9e58-0c241ac58b2e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"/>
				<div className="userInfo">
					<h4 className="username">
					{userInfo.nickname}
					<span>
					<i className="iconfont">&#xe62f;</i>
					关注</span>
					</h4>
					<p className="articleInfo">
					{userInfo.point}&nbsp;&nbsp;{userInfo.createDate}&nbsp;&nbsp;字数&nbsp;{userInfo.articleWordage}&nbsp;&nbsp;阅读&nbsp;{userInfo.readNum}&nbsp;评论&nbsp;{userInfo.commentNum}&nbsp;喜欢&nbsp;{userInfo.likedNum}
					</p>
				</div>
			</UserInfo>
			<Content dangerouslySetInnerHTML={{__html:content}}>
			</Content>
			{showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
			
			</DetailWrapper>
		)
	}
	componentDidMount(){
		this.props.getDetail(this.props.match.params.id);
		this.bindEvent()
	}
	bindEvent(){
		window.addEventListener('scroll',this.props.changeShowScroll)
	}
}

const stateMap = (state)=>({
	userInfo: state.getIn(['detail','userInfo']),
	title: state.getIn(['detail','title']),
	content:state.getIn(['detail','content']),
	showScroll:state.getIn(['detail','showScroll'])

})
const stateDispatch = (dispatch) =>{
	return{
		getDetail(id){
			const action = actionCreators.getDetailAction(id);
			dispatch(action)
		},
		changeShowScroll(){
			if(document.documentElement.scrollTop > 400){
				const action = actionCreators.changeScroll(true);
				dispatch(action)
			}else{
				const action = actionCreators.changeScroll(false);
				dispatch(action)
			}
		}
	}
}
export default connect(stateMap,stateDispatch)(Detail)