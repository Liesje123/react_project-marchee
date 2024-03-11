// import './ProductList.css'

const ProductList = ({ products }) => {


    return (

        <div classe='gallery'>
            {products.map(product => (
                <div classe='gallery-item' key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <button onClick={() => toggleProductDetails(product.id)}>
                        {productDetailsVisible[product.id] ? 'Masquer les détails' : 'Afficher les détails'}
                    </button>
                    {productDetailsVisible[product.id] && (
                        <div>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            {/* Ajoutez ici d'autres détails du produit */}
                        </div>
                    )}
                </div>
            ))}
        </div>

    )
};

export default ProductList;
