import styled from 'styled-components';

export const LoginWrapper = styled.div`
	position: absolute;
	left:0;
	right:0;
	bottom:0;
	top:56px;
	background:#eee;
	z-index:5;
`

export const LoginBox = styled.div`
	width:300px;
	height:400px;
	margin:80px auto;
	padding-top:10px;
	background:#fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`
export const Input = styled.input`
	display:block;
	width:200px;
	height:30px;
	line-height:30px;
	background:#fff;
	margin:10px auto;
	color:#777;
`
export const Button = styled.div`
	display:block;
	width:180px;
	height:30px;
	line-height:30px;
	background:#3194d0;
	margin:10px auto;
	color:#fff;
	border-radius:15px;
	text-align:center;
`