import React, { Component } from 'react';

export class Item extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className='item'>
        <img src={'/img/' + item.Img} alt={item.Title} onClick={() => this.props.onShowItem(item)} />
        <h2>{item.Title}</h2>
        <p>{item.Description}</p>
        <b>{item.Price}$</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(item)}>
          +
        </div>
      </div>
    );
  }
}

export default Item;