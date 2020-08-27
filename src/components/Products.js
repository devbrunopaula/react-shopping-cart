import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'
import { CartContext } from '../contexts/CartContext'

// Components
import Product from './Product';

const Products = () => {
	const [products] = useContext(ProductContext)
	const [cart, setCart] = useContext(CartContext)
	console.log(22, cart)


	const addItem = (item) => {
		console.log(item)
		setCart([...cart, item])
	}

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div >
	);
};

export default Products;
