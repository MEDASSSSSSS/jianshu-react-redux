import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width:960px;
	margin:0 auto;
	overflow:hidden;
`

export const HomeLeft = styled.div`
	float:left;
	margin-left:15px;
	padding-top:30px;
	width:625px;
	.banner-img{
		width: 625px;
		height: 270px;
		border-radius: 8px;
	}
`;
export const HomeRight = styled.div`
	float:right;
	margin-left:15px;
	padding-top:30px;
	width:300px;
	.adv-img{
		width:270px;
		height:160px;
		border-radius:4px;
	}
`;
export const Download = styled.a`
	display:block;
	width:270px;
	overflow:hidden;
	cursor:pointer;
	box-shadow:0 0 8px #ddd;
	box-sizing:border-box;
	border-radius:4px;
	padding: 10px 15px;
	margin-left:20px;
	img{
		width: 60px;
		height:60px;
		float: left;
	}
	h5{
		margin-left:10px;
		color:#3c3c3c;
		font-size:15px;
		line-height:30px
	}
	h6{
		margin-left:10px;
		color:#666;
		font-size:13px;
		line-height:20px

	}
`
export const TopicWrapper = styled.div`
	overflow:hidden;
	padding:20px 0 10px 0;
	margin-left:-18px;
	border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
	float:left;
	background-color:#f7f7f7;
	height:32px;
	padding-right:10px;
	margin-left:18px;
	margin-bottom:10px;
	line-height:32px;
	color:#000;
	font-size:14px;
	border-radius:4px;
	border:1px solid #dcdcdc;
	img{
		display:block;
		float: left;
		width: 32px;
		height:32px;
		margin-right: 10px;
	}
`
export const MoreTopic = styled.a`
	font-size:13px;
	color:#333;
	line-height:32px;
	cursor:pointer;
	margin-left:18px;
	cursor:pointer;
`
export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom:1px solid #dcdcdc;
	overflow:hidden;
	itemWrapper{
		border-bttom:
	}
	.item-pic{
		display: block;
		float: right;
		width: 125px;
		height: 100px;
	}
`
export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
		cursor: pointer;
		color: #333;
	}
	.desc{
		font-size: 13px;
		line-height: 24px;
		color:#999;
	}
`
export const LoadMore = styled.div`
	width:100%;
	height:40px;
	line-height:40px;
	background-color:#acacac;
	border-radius:20px;
	color:#fff;
	margin: 20px 0;
	cursor:pointer
	text-align:center;
`
export const RecommendWrapper = styled.ul`
	width:300px;
	margin-left:20px;
	li{
		width:90%;
		height:46px;
		font-size:16px;
		line-height:46px;
		box-sizing:border-box;
		padding-left:20px;
		margin-bottom:10px;
		color:#fff;
		font-weight:bold;
		border-radius:4px;
	}
	.membership{
		background-color:#ff9933;
	}
	.sdays-top{
		background-color:#ff6633;
	}
	.tdays-top{
		background-color:#ff3333;
	}
	.lianzai{
		background-color:#ffcc99;
		color:#cc6600;
	}
	.banquan{
		background-color:#66ffcc;
		color:#33cc99;
	}
	.xuetang{
		background-color:#66ffff;
		color:#3399ff;
	}
`
export const WriterWrapper = styled.div`
	width:270px;
	margin-left:20px;
`
export const Title = styled.div`
	width:270px;
	height:30px;
	h4{
		float:left;
		display:block;
		color:#666;
		font-size:14px;
	}
	span{
		float:right;
		font-size:14px;
		color:#666;
		cursor:pointer;
	}
	.spin{
		display:block;
		float:left;
		font-size:12px;
		line-height:14px;
		margin-right:2px;
		transition:all 0.4s ease-in;
		transform-origin:center center;
	}
`
export const WriterInfo = styled.div`
	width:270px;
	height:50px;
	position:relative;
	margin-top:10px;
	.portrait{
		float:left;
		width:46px;
		height:46px;
		border-radius:50%;
		margin-right:10px;
	}
	.username{
		font-size:14px;
		line-height:20px;
		padding-top:6px;
	}
	.info-detail{
		font-size:12px;
		color:#666;
		line-height:20px;
	}
	.subscrib{
		position:absolute;
		font-size:14px;
		line-height:20px;
		right:0;
		top:6px;
		color:#390;
	}
`
export const AllWriter = styled.div`
	width:270px;
	height:34px;
	margin-top:20px;
	border:1px solid #ccc;
	background-color:#efefef;
	border-radius:4px;
	text-align:center;
	font-size:14px;
	line-height:34px;
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