import React, { Component } from 'react';
import BuyerTopnav from './buyertopnav';
import BuyerCategoryNav from './buyercategorynav';
import BuyProducts from './BuyProducts';

class BuyerHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategoryIndex: 0,
      coins: 200,
    };
  }

  handlePurchase = (numberOfCoins) => {
    this.setState((prevState) => ({ coins: prevState.coins - numberOfCoins }));
  };

  handleSetCoins = (newCoinsValue) => {
    this.setState({ coins: newCoinsValue });
  };

  handleCategorySelect = (index) => {
    this.setState({ selectedCategoryIndex: index });
  };

  render() {
    const { selectedCategoryIndex, coins } = this.state;

    return (
      <div>
        <BuyerTopnav
          logoUrl="https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc"
          profilePhotoUrl="https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc"
          coins={coins}
        />
        <BuyerCategoryNav
          selectedCategoryIndex={selectedCategoryIndex}
          onSelectCategory={this.handleCategorySelect}
        />
        <BuyProducts selectedCategoryIndex={selectedCategoryIndex} coins={coins} onPurchase={this.handlePurchase} onSetCoins={this.handleSetCoins}/>
      </div>
    );
  }
}

export default BuyerHome;