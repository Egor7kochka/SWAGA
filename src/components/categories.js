import React, { Component } from 'react';
import axios from 'axios';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [] // Начинаем с пустого массива
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/categories') 
            .then(response => {
                console.log("🔹 Получены категории:", response.data); // Выводим в консоль
                const categoriesWithAll = [{ Category: 'all' }, ...response.data]; // Добавляем "all"
                this.setState({ categories: categoriesWithAll });
            })
            .catch(error => {
                console.error("❌ Ошибка загрузки категорий:", error);
            });
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.length > 0 ? (
                    this.state.categories.map(el => (
                        <div key={el.Category} onClick={() => this.props.chooseCategory(el.Category)}>
                            {el.Category === 'all' ? 'All' : el.Category}
                        </div>
                    ))
                ) : (
                    <p>Загрузка категорий...</p>
                )}
            </div>
        );
    }
}

export default Categories;