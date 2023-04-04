import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {useStyles} from "./styles/HeaderStyles";
import MenuIcon from "@material-ui/icons/Menu";



const Header = ({ setMode }) => {
  const classes = useStyles();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  const handleMobileMenuClick = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const isMobile = window.innerWidth < 1000;
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <div style={{ display: "flex" }}>
          <img
            onClick={() => scrollToSection("about")}
            className={classes.img}
            src={require("../images/nice.png")}
          ></img>
          <Button
            onClick={() => {
              setMode((prev) => !prev);
            }}
            className={classes.menuButton}
            variant="contained"
          >
            Change Theme
          </Button>
        </div>

        <div>
          {/* Desktop Navbar Links */}

          {!isMobile ? (
            <>
              <Button
                onClick={() => scrollToSection("about")}
                className={classes.navLink}
              >
                About me
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                className={classes.navLink}
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToSection("skills")}
                className={classes.navLink}
              >
                Skills
              </Button>
              <Button
                onClick={() => scrollToSection("experience")}
                className={classes.navLink}
              >
                Experience
              </Button>
              <Button
                onClick={() => scrollToSection("education")}
                className={classes.navLink}
              >
                Education
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="contained"
                color="secondary"
              >
                Contact
              </Button>
            </>
          ) : (
            <>
              <IconButton
                edge="end"
                aria-label="menu"
                className={classes.menuButton}
                onClick={handleMobileMenuClick}
              >
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                keepMounted
                open={Boolean(mobileMenuAnchor)}
                onClose={handleMobileMenuClose}
                className={classes.mobileMenu}
                placement="bottom-start"
              >
                <MenuItem
                  onClick={() => {
                    scrollToSection("about");
                    handleMobileMenuClose();
                  }}
                >
                  關於我
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("projects");
                    handleMobileMenuClose();
                  }}
                >
                  Projects
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("skills");
                    handleMobileMenuClose();
                  }}
                >
                  Skills
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("experience");
                    handleMobileMenuClose();
                  }}
                >
                  Experience
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("education");
                    handleMobileMenuClose();
                  }}
                >
                  Education
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSection("contact");
                    handleMobileMenuClose();
                  }}
                >
                  Contact
                </MenuItem>
              </Menu>
            </>
          )}

          {/* Mobile Navbar Menu */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
