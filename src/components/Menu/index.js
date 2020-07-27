import React from "react";
import logo from "../../assets/img/logo.png";
import "./Menu.css";
import ButtonLink from "./components/ButtonLink";
import Button from "../Button";


function Menu() {
    return (
        <nav className="Menu">
            <ButtonLink href="/">
                <img className="logo" src={logo} alt="CassinoFlix"/>
            </ButtonLink>

            <Button as="a" className="ButtonLink" href="/">
                New video
            </Button>
        </nav>
    );
}

export default Menu;