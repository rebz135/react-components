var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {props.groceryItems.map((item, idx) => 
        <GroceryListItem item={item} key={idx}/>
      )}
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  render() {
    let style = {
      fontWeight: this.state.clicked ? 'bold' : 'normal'
    } 
    
    return (
      <li key={this.props.key} style={style} onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this)}>
        {this.props.item}
      </li>
    );
  }

  onHover() {
    this.setState({
      clicked: !this.state.clicked
    })
  }
}

ReactDOM.render(<GroceryList groceryItems={['cucumbers', 'kale']} />, document.getElementById('app'))