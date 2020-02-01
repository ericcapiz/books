import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
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
			<section id="modal">
				<div className="modal-container">
					<div className="close-modal">
						<i className="fas fa-times"></i>
					</div>
					<div className="modal-grid">
						<div className="images">
							<div
								className="cover"
								style={{
									backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/781464/781464._SX360_QL80_TTD_.jpg')`
								}}
							></div>
						</div>
						<div className="info">
							<h2>Title</h2>
							<div className="info-line">
								<span className="bold">Author: Jim Starlin</span>
							</div>
							<div className="info-line">
								<span className="bold">Category: Superhero</span>
							</div>
							<div className="info-line">
								<span className="bold">Published: 1991</span>
							</div>
							<p>
								The Mad Titan Thanos has seized control of Infinity Gauntlet and
								with it near-omnipotent power! Who can stop this deadly new
								overlord? All of Marvel's top heroes star in this epic of cosmic
								proportions!
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
