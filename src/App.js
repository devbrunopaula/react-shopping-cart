import React from 'react';
import { Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext'
import { CartProvider } from './contexts/CartContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


const App = () => {


	return (
		<ProductProvider>
			<CartProvider>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/">

						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartProvider>
		</ProductProvider>
	);
}

export default App;
