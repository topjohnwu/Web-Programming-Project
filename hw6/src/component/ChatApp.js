import React from 'react';
import ThreadItem from './ThreadItem'
import MessageItem from './MessageItem'

class ChatApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [{
					id: 0,
					name: "蔡英文",
					pic: "image/tsai.png",
					contents: [
						["誒誒你知道你的貼圖現在很夯嗎XD", true],
						["什麼鬼= =", false],
						[<img className="attach" src="image/fun.jpg"/>, true],
						["...........", false],
					],
					time: "11:20pm",
				}, {
					id: 1,
					name: "蔣介石",
					pic: "image/chiang1.jpg",
					contents: [
						["漢賊不兩立！", false],
						["...?", true],
						["退出聯合國！", false],
						["...........?!", true],
					],
					time: "2:24pm",
				}, {
					id: 2,
					name: "蔣經國",
					pic: "image/chiang2.jpg",
					contents: [
						["快快快！十大建設！", false],
						["好好好", true],
						["讚讚讚！解嚴囉！", false],
						["呵呵呵", true],
					],
					time: "6:18pm",
				}, {
					id: 3,
					name: "李登輝",
					pic: "image/lee.jpg",
					contents: [
						["這麼晚了你怎麼還不睡？", true],
						["我是第一任民選總統，啊你現在是想怎樣", false],
						["...沒啊，關心你而已啊= =兇啥", true],
						["爺可是日本皇民，休想污辱我", false],
						["日本人可以當台灣總統？", true],
					],
					time: "4:13am",
				}, {
					id: 4,
					name: "陳水扁",
					pic: "image/chen.jpg",
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
					id: 5,
					name: "馬英九",
					pic: "image/ma.png",
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
		}
	}

	getTime() {
		let d = new Date(),
			hour = d.getHours(),
			minute = d.getMinutes();
		return (hour % 12 ? hour % 12 : 12) + ":" +
			(minute < 10 ? "0" + minute : minute) +
			(hour < 12 ? "am" : "pm");
	}

	setContact(key) {
		function set() {
			this.setState({ current: key });
		}
		return set.bind(this);
	}

	mapContact(contact) {
		return <ThreadItem key={contact.id} contact={contact} onClick={this.setContact(contact.id)}/>
	}

	input(event) {
		if (event.keyCode !== 13) return;
		if (event.target.value === "") return;
		this.state.contacts[this.state.current].contents.push([event.target.value, true]);
		this.state.contacts[this.state.current].time = this.getTime();
		event.target.value = "";
		this.setState({ contacts: this.state.contacts });
		let list = document.getElementById('message-list');
		list.scrollTop = list.scrollHeight ;
	}

	render() {
		let i = 0;
		return (
			<div className="chat-app clearfix">
				<div className="chat-app_thread">
					<div className="heading">
						<h3 className="messenger-title">中華民國總統會談</h3>
					</div>
					<div className="thread-list">
						{this.state.contacts.map(this.mapContact.bind(this))}
					</div>
				</div>
				<div className="chat-app_message">
					<div className="heading">
						<div className="current-target">
							{this.state.contacts[this.state.current].name}
						</div>
					</div>
					<div className="message-list" id="message-list">
						{
							this.state.contacts[this.state.current].contents.map(
								function(content) {
									return <MessageItem key={i++} text={content[0]} self={content[1]} />;
								}
							)
						}
					</div>
					<div className="footer">
						<input className="new-message" type="text" onKeyDown={this.input.bind(this)}/>
					</div>
				</div>
			</div>
		);
	};
};

export default ChatApp;
