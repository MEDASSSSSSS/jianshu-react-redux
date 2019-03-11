import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

import { TopicWrapper,TopicItem,MoreTopic } from '../style.js'

class Topic extends PureComponent{
	render(){
		const { topicList } = this.props;
		return (
			<TopicWrapper>
				{topicList.map((item)=>{
					return(
						<TopicItem key={item.get('id')}>
							<img alt='' src={item.get('imgUrl') }/>
							{item.get('title')}
						</TopicItem>
						)
				})}
				<MoreTopic>更多热门专题</MoreTopic>
			</TopicWrapper>
		)
	}
}
const mapState = (state)=>({
	topicList:state.get('home').get('topicList')
})
export default connect(mapState, null)(Topic)