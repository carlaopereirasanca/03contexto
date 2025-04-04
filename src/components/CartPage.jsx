import SingleProduct from "./SingleProduct";
import './styles.css';

const CartPage = ( {carrinho, setCarrinho} ) => {

    // Calcula a quantidade e o valor total dos produtos
    // que estão no carrinho.

    var valorTotal = 0;
    carrinho.map( (prod) => {
        valorTotal = valorTotal + Number(prod.price);
    } )
    var qtdProdutos = carrinho.length;

    return (

        <div>
            <h2>Carrinho de Compras</h2>
            <h3>Produtos: {qtdProdutos} Total: R$ {valorTotal}</h3>
            <div className='productContainer'>

                { carrinho.map( (prod) => {
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
        </div>
    );
}

export default CartPage;
