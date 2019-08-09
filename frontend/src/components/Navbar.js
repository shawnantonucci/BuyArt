import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu>
            <Link to={`/`}>
                <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={handleItemClick}
                >
                    Home
                </Menu.Item>
            </Link>

            <Link to={`/gallery`}>
                <Menu.Item
                    name="gallery"
                    active={activeItem === "gallery"}
                    onClick={handleItemClick}
                >
                    Gallery
                </Menu.Item>
            </Link>

            <Menu.Menu position="right">
                <Link to={`/cart`}>
                    <Menu.Item
                        name="cart"
                        active={activeItem === "cart"}
                        onClick={handleItemClick}
                    >
                        Cart
                    </Menu.Item>
                </Link>

                <Link to={`/checkout`}>
                    <Menu.Item
                        name="checkout"
                        active={activeItem === "checkout"}
                        onClick={handleItemClick}
                    >
                        Checkout
                    </Menu.Item>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};

export default Navbar;
