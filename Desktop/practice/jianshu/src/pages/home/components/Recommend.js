import React, { PureComponent } from 'react'
import { RecommendWrapper } from '../style.js'

class Recommend extends PureComponent{
	render(){
		return (
			<RecommendWrapper>
				<li className='membership'>简书会员</li>
				<li className='sdays-top'>7日热门</li>
				<li className='tdays-top'>30日热门</li>
				<li className='lianzai'>优选连载</li>
				<li className='banquan'>简书版权</li>
				<li className='xuetang'>简书大学堂</li>
			</RecommendWrapper>
		)
	}
}

export default Recommend