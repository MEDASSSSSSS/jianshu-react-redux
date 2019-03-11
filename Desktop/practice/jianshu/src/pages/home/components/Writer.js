import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  { actionCreators }  from '../store/index.js';
import { WriterWrapper,Title,WriterInfo,AllWriter } from '../style.js';

class Writer extends PureComponent{
	getWriterList(){
		const listArr = [];
		//第一次render界面的时候并不会将数据发放到writer里，所以要判断writerInfo是否有数据，之后在进行渲染
		if(this.props.writerInfo.size > 0 ){
			const { writerInfo,curPageOfWriter } = this.props;
			const jsWriterInfo = writerInfo.toJS();
			for (var i = curPageOfWriter*5 ; i < curPageOfWriter*5+5; i ++){
							listArr.push(
								(<WriterInfo key={jsWriterInfo[i].id}>
									<img className='portrait' src={jsWriterInfo[i].portraitUrl} alt=''/>
									<p className='username'>{jsWriterInfo[i].nickname}</p>
									<p className='info-detail'>
									写了{this.getNumEdited(jsWriterInfo[i].total_wordage)}k字&nbsp;·&nbsp;{this.getNumEdited(jsWriterInfo[i].total_likes_count)}k喜欢
									</p>
									<span className='subscrib'>						
									<i className='iconfont'>&#xe62f;</i>关注</span>
								</WriterInfo>)
							)
						}
		}
		return listArr;
	}
	render(){
		const { curPageOfWriter,totalPageOfWriter }	= this.props;
		return (
			<WriterWrapper>
				<Title>
					<h4>推荐作者</h4>
					<span onClick={() => {this.props.changePage(curPageOfWriter,totalPageOfWriter,this.spinicon)}}>
					<i ref={(icon) => {this.spinicon = icon}} className="iconfont spin">&#xe635;</i>
					换一批
					</span>
				</Title>
				{ this.getWriterList()}
				<AllWriter>
					查看全部
				</AllWriter>
			</WriterWrapper>
		)
	}

	componentWillMount(){
		this.props.getWriterInfo()
	}
	getNumEdited = (num) => {
		return num.toString().replace(/(?=(\d{3})$)/,'.').replace(/(\d{2})$/,'');
	}
}


const mapState = (state) => ({
	writerInfo:state.get('home').get('writerInfo'),
	totalPageOfWriter:state.get('home').get('totalPageOfWriter'),
	curPageOfWriter:state.get('home').get('curPageOfWriter')
})

const mapDispatchToProps = (dispatch) => {
	return {
		getWriterInfo(){
			dispatch(actionCreators.getInfo())
		},
		changePage(curPage,totalPage,icon){
			let angle = icon.style.transform.replace(/[^0-9]/ig,'');
			if(angle){
				angle = parseInt(angle,10);
			}else{
				angle = 0;
			}
			icon.style.transform = 'rotate(' + (angle+360) + 'deg)';
			
			if (curPage < totalPage-1) {
							dispatch(actionCreators.nextPage(curPage))
			}else{
				dispatch(actionCreators.nextPage(-1))
			}

		}
	}
}

export default connect(mapState,mapDispatchToProps)(Writer)
