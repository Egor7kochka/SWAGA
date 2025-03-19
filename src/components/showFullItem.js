import React, { Component } from 'react';

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <img 
            src={'/img/' + this.props.item.Img} 
            onClick={() => this.props.onShowItem(this.props.item)}
            alt={this.props.item.Title}
          />
          <h2>{this.props.item.Title}</h2>
          <p>{this.props.item.Description}</p>
          <b>{this.props.item.Price}$</b>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;