import SingleProduct from './SingleProduct';
import './styles.css';

const Home = ( {catalogo} ) => {

    // Criando componentes SingleProduct baseados nos objetos em productsArray.

    return (
        <div className='productContainer'>
            { catalogo.map( (prod) => {
                return (
                    <SingleProduct
                        key={prod.id}
                        prod={prod}
                    />
                );
            } ) }
        </div>
    );
}

export default Home;
