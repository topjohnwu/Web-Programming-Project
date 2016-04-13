import React from 'react';

class MessageItem extends React.Component {
	render() {
		return (
			<div className={"message-item message-from-" + (this.props.self ? "me" : "other")}>
				<span>{this.props.text}</span>
			</div>
		);
	}
}

export default MessageItem;