import styled from 'styled-components'

export const DetailWrapper = styled.div`
	width:620px;
	padding-bottom:100px;
	margin:0 auto;
	overflow:hidden;
`

export const Header = styled.div`
	margin: 50px 0 20px 0;
	line-height:44px;
	font-size:34px;
	color: #333;
	font-weight:bold;
`
export const Content = styled.div`
	color:#2f2f2f;
	img{
		width:100%;
	}
	p{
		margin:25px 0;
		font-size:16px;
		line-height:30px;
	}

`
export const UserInfo = styled.div`
	width:100%;
	height:80px;
	img{
		float:left;
		height:50px;
		width:50px;
		border-radius:50%;
		margin-left:5px;
		margin-top:15px;
	}
	.userInfo{
		height:100%;
		margin-left:70px;
		.username{
			padding-top:18px;
			font-size:15px;
			line-height:20px;
			span{
				margin-left:5px;
				padding:0 5px;
				font-size:11px;
				width:30px;
				line-height:14px;
				color:#fff;
				background:green;
				border-radius:8px;
			}
		}
		.articleInfo{
			font-size:12px;
			line-height:20px;
			margin-top:5px;
			color:#aaa;
		}

	}
`
export const BackTop = styled.div`
	position:fixed;
	right:30px;
	bottom:30px;
	font-size:12px;
	line-height:50px;
	text-align:center;
	width:50px;
	height:50px;
	border:1px solid #ccc;
	background-color:#fff;
	cursor:pointer;
`