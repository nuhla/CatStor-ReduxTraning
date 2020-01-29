import React from 'react';

export default class OneProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img
          src={this.props.data.image}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.data.name}</h5>
          <p className="card-text">{this.props.data.description}</p>
          <p className="card-text"> Price :{this.props.data.price} $</p>
          <a
            href={'/ProductPage/' + this.props.data.id}
            className="btn btn-primary"
          >
            Details
          </a>
        </div>
      </div>
    );
  }
}
