import React, { useState } from "react";
import { makeStyles, Typography, AppBar } from "@material-ui/core";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/color.styles";
import Item from "./Item";
import "./Navmenu.css";

const menu = [
  {
    title: "Home",
    component: "/Home",
  },
  {
    title: "About Us",
    component: "/About",
  },
  {
    title: "Contact Us",
    component: "/Contact",
  },
  {
    title: "The Team",
    component: "/Team",
  },
];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");
  const classes = useStyles();
  return (
    <AppBar
      elevation={0}
      position='fixed'
      style={{ boxShadow: "none", background: COLORS.GREEN_GRADIENT2 }}
    >
      <Navbar
        className='navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow'
        light
      >
        <Container>
          <NavbarBrand tag={Link} to='/'>
            <div>
              <Typography className={classes.title}>John Doe</Typography>
            </div>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => setIsOpen(!isOpen)}
            className='mr-2 white '
          />
          <Collapse
            className='d-sm-inline-flex flex-sm-row-reverse'
            isOpen={isOpen}
            navbar
          >
            <ul className='navbar-nav flex-grow'>
              {menu.map(({ title, component }, idx) => (
                <Item
                  key={idx}
                  title={title}
                  component={component}
                  onClickListener={() => {
                    setSelectedPage(title);
                  }}
                />
              ))}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: 30,
    color: COLORS.WHITE,
    fontFamily: "Pathway Gothic One",
  },

}));
export default NavMenu;
