import React, { Component }from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import  { actionCreators }  from './store/'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
	HeaderWrapper, Logo, Nav, NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem
} from './style.js'



class Header extends Component {
	getSearchList(show){
		const { focused,searchList,page,handleMouseEnter,mouseEnter,handleMouseLeave,handleChangePage } = this.props;
		const jsSearchList = searchList.toJS();
		const pageList = [];
		if(focused||mouseEnter){
			for (let i = (page-1) * 10 ; i < page*10 && i < jsSearchList.length ;i++ ){
					pageList.push((<SearchInfoItem key={jsSearchList[i]}>{jsSearchList[i]}</SearchInfoItem>))
				}
			return(
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
					热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(this.spinIcon)}>
						<i ref={(icon) => {this.spinIcon = icon} } className="iconfont spin">&#xe635;</i>
						换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<div>
					{pageList}
					</div>
				</SearchInfo>
				)
		}
	}
	render(){
		const { focused,handleFocused,handleBlur,searchList,login,logOut} = this.props;
		return(
			<HeaderWrapper>
				<Link key='logo' to='/'><Logo href='.'/></Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{login ? 
						<NavItem className='right' onClick={logOut}>退出</NavItem>:
						<Link to='./login'><NavItem className='right'>登录</NavItem></Link>
					}
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
					<CSSTransition
						in={focused}
						timeout={200}
						classNames="slide"
					>
					<NavSearch 
						className={focused ? 'focused':''}
						onFocus={() => handleFocused(searchList)}
						onBlur={handleBlur}
					>
					</NavSearch>
					</CSSTransition>
					<i className={focused ? 'focused iconfont':'iconfont'}>&#xe60c;</i>
					{this.getSearchList()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='reg'>注册</Button>
					<Button className='writing'>
						<i className="iconfont">&#xe639;</i>
						写文章
					</Button>

				</Addition>
			</HeaderWrapper>
		)
	}

}
const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		searchList: state.getIn(['header','searchList']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage']),
		mouseEnter: state.getIn(['header','mouseEnter']),
		login:state.getIn(['login','login'])
	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		handleFocused(searchList){
			// console.log(searchList)
			(searchList.size === 0)&&dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleBlur(){
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.listMouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.listMouseLeave());
		},
		logOut(){
			dispatch(loginActionCreators.logoutAction());
		}
		,
		handleChangePage(icon){
			let angle = icon.style.transform.replace(/[^0-9]/ig,'');
			if(angle){
				angle = parseInt(angle,10);
			}else{
				angle = 0;
			}
			icon.style.transform = 'rotate(' + (angle+360) + 'deg)';
			dispatch(actionCreators.listChangePage())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Header)