import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store/index'
import { ListItem, ListInfo, LoadMore} from '../style.js';
import { Link } from 'react-router-dom'

class List extends PureComponent{

	render(){
		return (
			<div>
				{this.props.listItem.map((item,index)=>{
				return (<Link key={index} to={'/detail/' + item.get('id')}><ListItem key={item.get('id')}><img alt='' className='item-pic' src={item.get('imgUrl')}/>
								<ListInfo>
									<a className='title'>{item.get('title')}</a>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						</Link>
						)
				})}
				<LoadMore onClick={this.props.loadMore}>加载更多
				</LoadMore>
			</div>
		);
	}

	
}

const mapState = (state) => ({
	listItem:state.get('home').get('listItem')
	
})
const mapDispatch = (dispatch) => {
	return {
		loadMore(){
			const action = actionCreators.getLoadMore()
			dispatch(action)
		}
	}
}

export default connect(mapState,mapDispatch)(List)