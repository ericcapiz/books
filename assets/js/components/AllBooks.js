import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AllBooks extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section className="all-books">
				<div className="book-container">
					<div
						className="book"
						style={{
							backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/781464/781464._SX360_QL80_TTD_.jpg')`
						}}
					></div>
				</div>
			</section>
		);
	}
}
