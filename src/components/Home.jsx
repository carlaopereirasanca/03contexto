import SingleProduct from './SingleProduct';
import './styles.css';

const Home = ( {catalogo, carrinho, setCarrinho} ) => {

    console.log(carrinho);

    // Criando componentes SingleProduct baseados nos objetos em productsArray.
    // Passando para SingleProduct o 'estado' do carrinho (o getter e o setter).
    return (
        <div className='productContainer'>
            { catalogo.map( (prod) => {
                return (
                    <SingleProduct
                        key={prod.id}
                        prod={prod}
                        carrinho={carrinho}
                        setCarrinho={setCarrinho}
                    />
                );
            } ) }
        </div>
    );
}

export default Home;
