import React, { PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

import { HomeWrapper,HomeLeft, HomeRight,Download,BackTop } from './style';

class Home extends PureComponent{
	handleScrollTop(){
		window.scrollTo(0,0);
	}
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt='img' className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
					<Topic>
					</Topic>
					<List>
					</List>
				</HomeLeft>
				<HomeRight>
					<Recommend>
					</Recommend>
					<Download>
						<img alt='' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
						<h5>下载简书手机App</h5>
						<h6>随时随地发现和创作内容</h6>
					</Download>
					<img alt='' className='adv-img' src='https://oimagea3.ydstatic.com/image?id=3408007620186613300&amp;product=adpublish&amp;w=1280&amp;h=720&amp;sc=0&amp;rm=2&amp;gsb=0&amp;gsbd=60&quot'/>
					<Writer>
					</Writer>
				</HomeRight>
				<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
			</HomeWrapper>
		)
	}
}

export default Home