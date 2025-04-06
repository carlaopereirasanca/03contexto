import "./App.css";
import { faker } from '@faker-js/faker';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";

function App() {

    // Criando o catálogo de produtos disponíveis:
    faker.seed(100);
    const arrayVazio=[...Array(20)];
    const productsArray = arrayVazio.map( () => {
        return {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.urlPicsumPhotos({ width: 640, height: 480 })
        };
    } );

    //
    // A CRIAÇÃO DO ESTADO SAIU DAQUI!!!!
    // FOI PARA CartContext.js
    //
    // OUTRA MUDANÇA:
    // NÃO PRECISAMOS MAIS PASSAR O ESTADO VIA PROPS
    // PARA HOME E PARA CARTPAGE!!!
    //

    return (

        <BrowserRouter>

            <CartProvider>

                <Header />
                <div>
                    <Routes>
                        <Route path='/' element={ <Home catalogo={productsArray} /> } />
                        <Route path='/cartpage' element={ <CartPage /> } />
                    </Routes>
                </div>

            </CartProvider>

        </BrowserRouter>
    );
}

export default App;
