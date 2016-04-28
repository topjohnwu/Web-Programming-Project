import React from 'react';
import UserData from '../component/UserData'

export default class User extends React.Component {
	constructor(props) {
		super(props);
		this.id = this.props.params.username;
	}
	render() {
		return(
			<div className="container">
				<div className="row" style={{marginTop: 10+"px"}}>
					<div className="col-md-2"></div>
					<img className="col-md-4" src={UserData[this.id].pic} />
					<div className="col-md-4" style={{marginTop: 10+"px"}}>
						<h2>{UserData[this.id].name}</h2>
						{UserData[this.id].info}
					</div>
					<div className="col-md-2"></div>
					
				</div>
			</div>
		);
	}
}

// {UserData[this.id].info}