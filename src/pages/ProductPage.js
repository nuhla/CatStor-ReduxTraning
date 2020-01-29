import React from 'react';

export default class ProductPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
  }
  render() {
    return <div> hi</div>;
  }
}
