import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {

    return (

        <header>

            <span className="header">Aula sobre React Context API</span>

            <ul className="nav">

                <li>
                    <Link to="/">Catálogo de Produtos</Link>
                </li>

                <li>
                    <Link to="/cartpage">Carrinho de Compras</Link>
                </li>

            </ul>

        </header>
    );
}

export default Header;
