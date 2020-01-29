import React from 'react';
import { getById } from '../api/products';

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    //------------------------------------//
    //--- Define Our Needed States -------//
    //------------------------------------//
    this.state = {
      loading: true,
      quantuty: 0,
      product: {}
    };
  }

  componentDidMount() {
    //-------------------------------------------------------------------//
    //------ getting the id of the component from its props.params-------//
    //-------------------------------------------------------------------//
    const id = this.props.match.params.id;
    //-------------------------------------------------------------------//
    //--------- get all information for this id from data stor ----------//
    //-------------------------------------------------------------------//
    getById(id).then(product => {
      //-----------------------------------------------------------------------------------------------------------------------------//
      //------ put the value of this object in Ouer State Object to force the component to re-render with the proper info -----------//
      //-----------------------------------------------------------------------------------------------------------------------------//
      this.setState({
        product: product,
        loading: false
      });
    });
  }

  handelQuantityChange(e) {
    //---------------------------------------------------------//
    //---- getting the value form the input by handling--------//
    //--------------- input onChange Method -------------------//
    //---------------------------------------------------------//
    let quantutyVariable = 0;

    //----------------------------------------------------------//
    //--------- if the quntity is larger than 0 ---------------//
    //----------------------------------------------------------//
    quantutyVariable = e.target.value;
    //----------------------------------------------------------//
    //--------- if the quntity is smaller than 0 ---------------//
    //----------------------------------------------------------//
    if (e.target.value < 0) {
      quantutyVariable = 0;
      e.target.value = 0;
    }
    this.setState({
      quantuty: quantutyVariable
    });
  }

  render() {
    //-------------------------------------------------------------------------------//
    //------ if the data is not ready yet so return looding to the interface --------//
    //-------------------------------------------------------------------------------//
    if (this.state.loading) {
      return 'loading ....';
    }
    //----------------------------------------------------------------------------------//
    //------------- When the data is ready to be shown then we have to return ----------//
    //------------------------- the real component content -----------------------------//
    //----------------------------------------------------------------------------------//
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
            <input
              type="number"
              onChange={this.handelQuantityChange.bind(this)}
            />
            <br />
            <br />
            <p>
              {'Total :' + this.state.quantuty * this.state.product.price + '$'}
            </p>

            <button className="btn btn-primary"> Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
