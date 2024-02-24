import './App.css';
import Items from './components/Items';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <h1>Add To Cart</h1>
      <div className='items'>
      <Items name='Macbook air M3 max' price={200000} />
      <Items name='Sandisk Pendrive' price={400} />
      <Items name='Galaxy S 24 Ultra' price={3500} />
      <Items name='Iphone 15 Pro Max' price={5000} />
      </div>
      <h1>Cart</h1>
      <Cart />
    </div>
  );
}

export default App;
