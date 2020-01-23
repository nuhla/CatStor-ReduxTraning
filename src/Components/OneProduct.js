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
            href="https://imgix.bustle.com/mic/45a1aaa7ba15f32f0a7b805eb6a36e5b1d28bc6227fc72e24bc32e355e418ee8.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format&q=70"
            className="btn btn-primary"
          >
            Details
          </a>
        </div>
      </div>
    );
  }
}
