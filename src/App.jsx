import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import { faker } from '@faker-js/faker';
import { useState } from "react";

function App() {

    // Criando o catálogo de produtos disponíveis:

    // Definindo uma semente específica para o gerador aleatório,
    // para que gere sempre os mesmos dados (menos imagem):
    faker.seed(100);

    // Cria um array com 20 espaços ocupados por 'undefined':
    const arrayVazio=[...Array(20)];

    // Cria um array ...
    const productsArray = arrayVazio.map( () => {
        return {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.url({ width: 640, height: 480 })
        };
    } );

    // Criando o estado que armazenará nosso carrinho.
    // O armazenamento será no formato de uma lista de objetos JSON,
    // cada um representando um produto armazenado em productsArray.
    const [carrinho, setCarrinho] = useState([]);

    // Vamos passar este estado (getter e setter) via props
    // para os componentes Home e CartPage.

    return (

        <BrowserRouter>

            <Header />
            <div>
                <Routes>
                    
                    <Route path='/' element={ 
                        <Home 
                            catalogo={productsArray}
                            carrinho={carrinho}
                            setCarrinho={setCarrinho}
                        /> 
                    } />

                    <Route path='/cartpage' element={ 
                        <CartPage 
                            carrinho={carrinho}
                            setCarrinho={setCarrinho}
                        /> 
                    } />

                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
