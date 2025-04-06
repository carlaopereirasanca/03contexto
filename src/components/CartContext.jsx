import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // Criando o estado que armazenará nosso carrinho.
    // O armazenamento será no formato de uma lista de objetos JSON,
    // cada um representando um produto armazenado em productsArray.
    const [carrinho, setCarrinho] = useState([]);

    return (

        <CartContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CartContext.Provider>
    );
};
