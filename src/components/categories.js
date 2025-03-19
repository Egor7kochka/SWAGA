import React, { Component } from 'react'
import axios from 'axios';

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'hoodies',
                    name: 'Худи'
                },
                {
                    key: 'shoes',
                    name: 'Обувь'
                },
                {
                    key: 't-shirts',
                    name: 'Футболки'
                },
                {
                    key: 'pendants',
                    name: 'Украшения'
                },
                {
                    key: 'jeans',
                    name: 'Джинсы'
                }
            ]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/categories') 
          .then(response => {
            this.setState({ Category: response.data });
          })
          .catch(error => {
            console.error("Ошибка загрузки категорий:", error);
          });
      }
    
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories


