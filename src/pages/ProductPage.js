import React from 'react';
import { getById } from '../api/products';

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    getById(id).then(product => {
      console.log(product);
      this.setState({
        product: product,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return 'loading ....';
    }
    return (
      <div>
        <br />
        <div className={'row'}>
          <div className="col-6">
            <img src={this.state.product.image} width="100%" />
          </div>
          <div className="col-6">
            <h3>{this.state.product.name}</h3>
            <p className="card-text">{this.state.product.description}</p>
            <p className="card-text"> Price :{this.state.product.price} $</p>

            <input type="number" />
            <br />
            <br />
            <button className="btn btn-primary"> Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
