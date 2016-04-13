import React from 'react';

class ThreadItem extends React.Component {
	render() {
		const {id, name, pic, contents, time} = this.props.contact;
		return (
			<li className="thread-item" onClick={this.props.onClick}>
				<a className="_1ht5 _5l-3">
					<div className="clearfix">
						<div className="thread-item_left">
							<img className="img-circle" src={pic} />
						</div>
						<div className="thread-item_right">
							<div className="thread-from">{name}</div>
							<div>
								<span className="thread-content">
									{contents.slice(-1)[0][0]}
								</span>
							</div>
							<span className="thread-time">{time}</span>
						</div>
					</div>
				</a>
			</li>
		);
	}
}

export default ThreadItem;