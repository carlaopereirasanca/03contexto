import SingleProduct from "./SingleProduct";
import { useContext } from 'react';
import { CartContext } from './CartContext';
import './styles.css';

const CartPage = () => {

    // Acessando o contexto, para recuperar o estado:
    const { carrinho, setCarrinho } = useContext(CartContext);
    // ... e só !!!

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
                        />
                    );
                } ) }
            </div>
        </div>
    );
}

export default CartPage;
