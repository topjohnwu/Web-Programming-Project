import React from 'react';
import ThreadItem from './ThreadItem'
import MessageItem from './MessageItem'

export default class ChatApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [{
					name: "蔡英文",
					pic: "http://i.imgur.com/tSfIYtw.png",
					contents: [
						["誒誒你知道你的貼圖現在很夯嗎XD", true],
						["什麼鬼= =", false],
						[<img className="attach" src="http://i.imgur.com/n8MgSNB.jpg"/>, true],
						["...........", false],
					],
					time: "11:20pm",
				}, {
					name: "蔣介石",
					pic: "http://i.imgur.com/eb1dwwf.jpg",
					contents: [
						["漢賊不兩立！", false],
						["...?", true],
						["退出聯合國！", false],
						["...........?!", true],
					],
					time: "2:24pm",
				}, {
					name: "蔣經國",
					pic: "http://i.imgur.com/4ROT3HG.jpg",
					contents: [
						["快快快！十大建設！", false],
						["好好好", true],
						["讚讚讚！解嚴囉！", false],
						["呵呵呵", true],
					],
					time: "6:18pm",
				}, {
					name: "李登輝",
					pic: "http://i.imgur.com/6QapKnL.jpg",
					contents: [
						["這麼晚了你怎麼還不睡？", true],
						["我是第一任民選總統，啊你現在是想怎樣", false],
						["...沒啊，關心你而已啊= =兇啥", true],
						["爺可是日本皇民，休想污辱我", false],
						["日本人可以當台灣總統？", true],
					],
					time: "4:13am",
				}, {
					name: "陳水扁",
					pic: "http://i.imgur.com/YcMPPxS.jpg",
					contents: [
						["阿扁錯了嗎？", false],
						["誒...你要我怎麼回答", true],
						["阿扁錯了嗎？", false],
						["不要跳針好嗎= =", true],
						["難道阿扁錯了嗎？", false],
						["........你錯了....", true],
					],
					time: "12:04am",
				}, {
					name: "馬英九",
					pic: "http://i.imgur.com/jJ3bYTi.png",
					contents: [
						["一個總統，施政滿意度只剩18%就可以下台了，不下台就是沒有羞恥心！", false],
						["嗯...可是你只有9%誒", true],
						["你說什麼？我聽不到", false],
						["你耳朵長毛嗎？", true],
						["你說什麼？", false],
					],
					time: "3:21pm",
				},
			],
			current: 0,
			idList: [0, 1, 2, 3, 4, 5],
		}
		this.scroll = false;
	}

	/* Mapping functions */

	mapContact(id) {
		return <ThreadItem key={id} contact={this.state.contacts[id]} onClick={this.setContact(id)}/>;
	}

	mapContent(content, index) {
		return <MessageItem key={index} text={content[0]} self={content[1]} />;
	}

	/* Function Generators */

	setContact(key) {
		function set() {
			let input = document.getElementById('input');
			input.value = "";
			this.setState({ current: key });
		}
		return set.bind(this);
	}

	/* Events */

	input(event) {
		if (event.keyCode !== 13) return;
		if (event.target.value === "") return;
		this.state.contacts[this.state.current].contents.push([event.target.value, true]);
		this.state.contacts[this.state.current].time = this.getTime();
		event.target.value = "";
		this.state.idList.splice(this.state.idList.indexOf(this.state.current), 1);
		this.state.idList.unshift(this.state.current);
		this.setState({ idList: this.state.idList });
		this.scroll = true;
	}


	/* Helper functions */

	getTime() {
		let d = new Date(),
			hour = d.getHours(),
			minute = d.getMinutes();
		return (hour % 12 ? hour % 12 : 12) + ":" +
			(minute < 10 ? "0" + minute : minute) +
			(hour < 12 ? "am" : "pm");
	}

	componentDidUpdate() {
		if(this.scroll){
			let mList = document.getElementById('message-list');
			let tList = document.getElementById('thread-list');
			mList.scrollTop = mList.scrollHeight;
			tList.scrollTop = 0;
			this.scroll = false;
		}
	}

	/* Render */

	render() {
		let i = 0;
		return (
			<div className="chat-app clearfix">
				<div className="chat-app_thread">
					<div className="heading">
						<h3 className="messenger-title">中華民國總統會談</h3>
					</div>
					<div className="thread-list" id="thread-list">
						{this.state.idList.map(this.mapContact.bind(this))}
					</div>
				</div>
				<div className="chat-app_message">
					<div className="heading">
						<div className="current-target">
							{this.state.contacts[this.state.current].name}
						</div>
					</div>
					<div className="message-list" id="message-list">
						{this.state.contacts[this.state.current].contents.map(this.mapContent.bind(this))}
					</div>
					<div className="footer">
						<input className="new-message" id="input" type="text" onKeyDown={this.input.bind(this)}/>
					</div>
				</div>
			</div>
		);
	};
};
