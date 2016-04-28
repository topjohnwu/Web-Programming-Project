import React from 'react';

class ThreadItem extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	newPage() {
		this.context.router.push(`/users/${this.props.id}`);
	}

	render() {
		const {name, pic, contents, time} = this.props.contact;
		return (
			<li className="thread-item">
				<a className="_1ht5 _5l-3">
					<div className="clearfix">
						<div className="thread-item_left" onClick={this.newPage.bind(this)}>
							<img className="img-circle" src={pic} />
						</div>
						<div className="thread-item_right" onClick={this.props.onClick}>
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