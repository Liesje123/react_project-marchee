import './App.css'
import { useEffect, useState } from "react";
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

function App() {

  const [selectionProduct, setSselectionProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setProducts(res.products))
      .then(console.log(products))
      .catch(error => console.error('Erreur lors de la récupération des produits:', error));
  }, [])



  return (
    <main>
      <ProductList product={products} key={products.id} />


    </main>
  )
}

export default App
{/* <ProductDetails product={product} key={product.id} /> */ }
