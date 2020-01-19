import React from 'react';
import OneProduct from '../Components/OneProduct';

export default function Product() {
  return (
    <div>
      <h1> Product</h1>
      <div className="row">
        <div className={'col-4'}>
          <OneProduct />
        </div>
        <div className={'col-4'}>
          <OneProduct />
        </div>
        <div className={'col-4'}>
          <OneProduct />
        </div>
        <div className={'col-4'}>
          <OneProduct />
        </div>
      </div>
    </div>
  );
}
