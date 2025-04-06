import { useContext } from 'react';
import { CartContext } from './CartContext';
import './styles.css';

const SingleProduct = ( {prod} ) => {

    // Acessando o contexto, para recuperar o estado:
    const { carrinho, setCarrinho } = useContext(CartContext);
    // ... e só !!!

    const adicionaCarrinho = () => {
        setCarrinho( [...carrinho, prod] );
    };

    // Função para remover do carrinho:
    // Esta função filtra o carrinho, mantendo apenas os itens 
    // cujo ID é diferente do ID do produto atual, efetivamente removendo-o.

    const removeCarrinho = () => {
        setCarrinho( carrinho.filter( (c) => c.id !== prod.id) )
    };

    return (

        <div className="products">

            <img src={prod.image} alt={prod.name} />
            <div className="productDesc">
                <span style={ {fontWeight:700} }>{prod.name}</span>
                <span> ${prod.price}</span>
            </div>

            {carrinho.some(item => item.id === prod.id) ?
                ( <button className="add" onClick={ removeCarrinho }>
                    Retirar do carrinho
                </button> )
                :
                ( <button className="add" onClick={ adicionaCarrinho }>
                    Colocar no carrinho
                </button>)
            }
        </div>
    );
}

export default SingleProduct;
