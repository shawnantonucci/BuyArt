import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <Menu>
            <Link to={`/`}>
                <Menu.Item name="home">
                    Home
                </Menu.Item>
            </Link>

            <Link to={`/gallery`}>
                <Menu.Item name="gallery">
                    Gallery
                </Menu.Item>
            </Link>

            <Menu.Menu position="right">
                <Link to={`/cart`}>
                    <Menu.Item name="cart">
                        Cart
                    </Menu.Item>
                </Link>

                <Link to={`/checkout`}>
                    <Menu.Item name="checkout">
                        Checkout
                    </Menu.Item>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};

export default Navbar;
