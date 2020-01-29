import React from 'react';
import OneProduct from '../Components/OneProduct';
import getAll from '../api/products';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    // console.log(getAll());
  }
  componentDidMount() {
    //------------------------------------------//
    //---------- getting Data from Data.json----//
    //------------------------------------------//
    getAll().then(result => {
      this.setState({
        products: result
      });
    });
  }
  render() {
    //--------------------------------------------------------------------------------------------------//
    //--------- loop in the array to creat a product component and pass props to its contents ----------//
    //--------------------------------------------------------------------------------------------------//
    var arrayOfProducts = [];
    this.state.products.forEach((value, index) => {
      arrayOfProducts.push(
        <div className={'col-4'} key={index}>
          <OneProduct data={value} key={value.id} />
        </div>
      );
    });
    return (
      <div>
        <h1> Product</h1>
        <div className="row">{arrayOfProducts}</div>
      </div>
    );
  }
}
