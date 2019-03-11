import styeled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styeled.div`
	width:100%;
	position: relative;
	height:56px;
	border-bottom:1px solid #f0f0f0;
`

export const Logo = styeled.div`
	position:absolute;
	top:0;
	left:0;
	display:block;
	width:100px;
	height:56px;
	background:url(${logoPic});
	background-size:contain;
`

export const Nav = styeled.div`
	width:960px;
	height:100%;
	margin:0 auto;
	box-sizing:border-box;
	padding-right:70px;
`

export const NavItem = styeled.div`
	line-height:56px;
	padding:0 15px;
	font-size:17px;
	color:#333;
	&.left{
		float:left;
	}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a;
	}
`
export const SearchWrapper = styeled.div`
	float:left;
	position:relative;
	.iconfont{
		position:absolute;
		right:5px;
		bottom:5px;
		width:30px;
		line-height:30px;
		text-align:center;
		border-radius:15px;
		&.focused{
			background:#777;
			color:#fff;
		}
	}
`
export const NavSearch = styeled.input.attrs({placeholder:'搜索'})`
	width:160px;
	height:38px;
	padding:0 30px 0 20px;
	margin-top:9px;
	border:none;
	outline:none;
	border-radius: 19px;
	box-sizing:border-box;
	background:#eee;
	font-size:14px;
	margin-left:20px;
	color:#666;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:240px;
	}
	&.slide-enter{
		transition:all 0.2s ease-out;
	}
	&.slide-enter-active{
	}
	&.slide-exit{
		transition:all 0.2s ease-out;
	}
	&.slide-exit-active{
	}

`
export const SearchInfo = styeled.div`
	position:absolute;
	left:0;
	top:56px;
	width:240px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	padding:0 20px;
	background:#fff;
	z-index:10;
`
export const SearchInfoTitle = styeled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color:#969696;
`
export const SearchInfoSwitch = styeled.a`
	float:right;
	font-size:13px;
	cursor:pointer;
	border-bottom:1px solid #ddd; 
	.iconfont{
		position:static;
		line-height:20px;
	}
	.spin{
		display:block;
		float:left;
		font-size:12px;
		margin-right:2px;
		transition:all 0.4s ease-in;
		transform-origin:center center;
	}
`
export const SearchInfoItem = styeled.a`
	display:block;
	float:left;
	line-height:20px;
	font-size:12px;
	padding:0 5px;
	margin-right:10px;
	margin-bottom:5px;
	border:1px solid #ddd;
	color:#787878;
	border-radius:3px;
`
export const Addition = styeled.div`
	position: absolute;
	right:0;
	top:0;
	height:56px;
`

export const Button = styeled.button`
	line-height:38px;
	border-radius:19px;
	margin-top:9px;
	background:#fff;
	border: 1px solid #ec6149;
	outline:none;
	margin-right: 15px;
	padding:0 20px;
	font-size:14px;
	&.reg{
		color:#ec6149;
	}
	&.writing{
		color:#fff;
		background:#ec6149;
	}
`