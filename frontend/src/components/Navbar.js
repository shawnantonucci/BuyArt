import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu>
            <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={handleItemClick}
            >
                Home
            </Menu.Item>

            <Menu.Item
                name="gallery"
                active={activeItem === "gallery"}
                onClick={handleItemClick}
            >
                Gallery
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item
                    name="cart"
                    active={activeItem === "cart"}
                    onClick={handleItemClick}
                >
                    Cart
                </Menu.Item>

                <Menu.Item
                    name="checkout"
                    active={activeItem === "checkout"}
                    onClick={handleItemClick}
                >
                    Checkout
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Navbar;
