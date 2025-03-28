import React from "react";
import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/categories";
import ShowFullItem from "./components/showFullItem";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [],
      showFullItem: false,
      fullItem: null, 
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/items")
      .then((response) => {
        this.setState({
          items: response.data,
          currentItems: response.data, 
        });
      })
      .catch((error) => {
        console.error("Ошибка загрузки товаров:", error);
      });
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.Category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.Id !== id) }); 
  }

  addToOrder(item) {
    let isInArray = this.state.orders.some((el) => el.Id === item.Id); 

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;