import React, { Component } from 'react';
import logo from './logo.svg';
import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal';
import ItemDetails from './components/ItemDetails';
import PromoCodeDiscount from './components/PromoCode';
import './App.css';
import { connect } from 'react-redux';
import { handleChange } f 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }


  
  this.setState((state, props) => { return { 

    
   }})
  omponentDidMount = () => {
    this.setState({
      taxes: (!this.state.total + this.state.pickupSavings) * 0.0874
    },
    function() {``
      this.setState({
        estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
      });
    })
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
            <h1>Hello World</h1>
            <Subtotal price={this.state.total.toFixed(2)}/>
            <PickupSavings price={this.state.pickupSavings}/>
            <TaxesFees taxes={this.state.taxes.toFixed(2)} />
            <hr />
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} /> 
            <ItemDetails  price={this.state.estimatedTotal.toFixed(2)} />
            <br />
            <PromoCodeDiscount 
              giveDiscount={ () => this.giveDiscountHandler()}
              isDisabled={this.state.disablePromoButton }
            />
        </Grid>
      </div>
    );
  }
}

export default App;
