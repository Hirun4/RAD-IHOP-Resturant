


import React, { useContext, useState } from "react";
import Logo from "../Assets/images.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import { themeContext } from "../contextProviders/ThemeContextProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import PersonIcon from "@mui/icons-material/Person";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
 
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/Home"
    },
    {
      text: "For You",
      icon: <PersonIcon />,
      link: "/About"
    },
    {
      text: "Customer Reviews",
      icon: <CommentRoundedIcon />,
      link: "/Testimonial"
    },
    {
      text: "Contact details",
      icon: <PhoneRoundedIcon />,
      link: "/Contacts"
    },
    {
      text: "About Us",
      icon: <InfoIcon />,
      link: "/Work"
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      
    },

  ];

  const [theme, setTheme] = useContext(themeContext)

  return (
    <nav className={"navbar-container ${theme}"}>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="/Home" className={`navbar-link ${theme}`}>Home</Link>
        <Link to="/About" className={`navbar-link ${theme}`}>For You</Link>
        <Link to="/Testimonial" className={`navbar-link ${theme}`}>Customer Reviews</Link>
        <Link to="/Contacts" className={`navbar-link ${theme}`}>Contact details</Link>
        <Link to="/Work" className={`navbar-link ${theme}`}>About us</Link>
        <a href="" className={`navbar-link ${theme}`}>
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <div className="navbar-buttons-container">
        
        <label className="toggle-container">
          <input 
            type="checkbox" 
            checked={theme === 'dark'} 
            onChange={() => {
              switch (theme) {
                case "dark":
                  setTheme("light");
                  break;
                case "light":
                  setTheme("dark");
                  break;
                default:
                  setTheme("light");
              }
            }} 
          />
          <span className="slider"></span>
          {theme === 'dark' ? <FiMoon className={"theme-icon ${theme}"} /> : <FiSun className={"theme-icon ${theme}"} />}
        </label>
        </div>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;