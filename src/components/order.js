import React, { Component } from 'react';
import { MdDelete } from "react-icons/md";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'/img/' + this.props.item.Img} alt={this.props.item.Title} />
        <h2>{this.props.item.Title}</h2>
        <p>{this.props.item.Description}</p>
        <b>{this.props.item.Price}$</b>
        <MdDelete 
          className='delete-icon' 
          onClick={() => this.props.onDelete(this.props.item.Id)} 
        />
      </div>
    );
  }
}

export default Order;