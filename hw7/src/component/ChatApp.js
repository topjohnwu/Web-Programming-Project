import React from 'react';
import ThreadItem from './ThreadItem'
import MessageItem from './MessageItem'
import UserData from './UserData'

export default class ChatApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: UserData,
			current: 0,
			idList: [0, 1, 2, 3, 4, 5],
		}
		this.scroll = false;
	}

	/* Mapping functions */

	mapContact(id) {
		return <ThreadItem key={id} id={id} contact={this.state.contacts[id]} onClick={this.setContact(id)}/>;
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
