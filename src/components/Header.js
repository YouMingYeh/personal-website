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
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navLink: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: "white",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  name: {
    color: "white",
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
    padding: 0,
    fontWeight: "bold",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  mobileMenu: {
    "& .MuiMenu-paper": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
}));

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

  const isMobile = window.innerWidth < 600;
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <div style={{display: 'flex'}}>
          <Typography
            variant="h5"
            color="white"
            onClick={() => scrollToSection("about")}
            className={classes.name}
          >
            YYM
          </Typography>
          <Button
            onClick={() => {
              setMode((prev) => !prev);
            }}
            className={classes.menuButton}
            variant='contained'
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
                關於我
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
