import { fromJS } from 'immutable';

const defaultState=fromJS({
	topicList:[{
		id:1,
		title:'手绘',
		imgUrl:'https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
	},{
		id:2,
		title:'社会热点',
		imgUrl:'https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
	}],
	listItem:[{
		id:"1",
		title:"你确定这是招聘和应聘的么",
		desc:"有的时候会忽然讨厌自己一直以来正做着的事，没了兴趣，就少了坚持下去的动力，这不，忽然就想换个工作。昨儿个无聊，手欠在同城网制作了一个简历，然后各种投，然后就接到各种招聘的电话，当然，保险公司的最多。",
		imgUrl:"upload-images.jianshu.io/upload_images/8004869-fc7a190ebab79852.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	},{
		id:"2",
		title:"你确定这是招聘和应聘的么",
		desc:"有的时候会忽然讨厌自己一直以来正做着的事，没了兴趣，就少了坚持下去的动力，这不，忽然就想换个工作。昨儿个无聊，手欠在同城网制作了一个简历，然后各种投，然后就接到各种招聘的电话，当然，保险公司的最多。",
		imgUrl:"upload-images.jianshu.io/upload_images/8004869-fc7a190ebab79852.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	},{
		id:"3",
		title:"你确定这是招聘和应聘的么",
		desc:"有的时候会忽然讨厌自己一直以来正做着的事，没了兴趣，就少了坚持下去的动力，这不，忽然就想换个工作。昨儿个无聊，手欠在同城网制作了一个简历，然后各种投，然后就接到各种招聘的电话，当然，保险公司的最多。",
		imgUrl:"upload-images.jianshu.io/upload_images/8004869-fc7a190ebab79852.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	}],
	writerInfo:[],
	curPageOfWriter:0,
	totalPageOfWriter:0,
})

export default (state = defaultState, action) => {
	switch (action.type){
		case 'set_writer_info' :
			return state.merge({
				totalPageOfWriter:Math.ceil(action.data.length/5),
				writerInfo:fromJS(action.data)
			})
			 
		case 'change_page':
			return state.merge({
				curPageOfWriter:action.curPageOfWriter+1
			})
		case 'set_more_list':
			return state.merge({
				listItem:state.get('listItem').concat(fromJS(action.data))
			})

		default:
			return state
	}
}