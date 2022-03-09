import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import Sidebar from "../../Home/Sidebar/Sidebar";
import { ticketContext } from "../../../Contexts/TicketContext";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function MyNavbar() {
  const { cartLength, getTickets, useAuth, logout } =
    React.useContext(ticketContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = React.useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const currentUser = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    setSearchParams({
      q: searchVal,
      _limit: 3,
      _page: 1,
    });
  }, [searchVal]);

  const handleValue = (e) => {
    const search = new URLSearchParams(window.location.search);
    search.set("q", e.target.value);
    setSearchVal(e.target.value);
    setSearchParams({
      q: searchVal,
      _limit: 3,
      _page: 1,
    });
    getTickets();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link
        style={{ textDecoration: "none" }}
        to={!currentUser ? "/login" : "#"}
      >
        <MenuItem
          disabled={currentUser ? true : false}
          onClick={handleMenuClose}
        >
          Войти
        </MenuItem>
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to={!currentUser ? "/register" : "#"}
      >
        <MenuItem
          disabled={currentUser ? true : false}
          onClick={handleMenuClose}
        >
          Зарегистрироваться
        </MenuItem>
      </Link>
      {currentUser ? (
        <Button
          variant="success"
          disabled={!currentUser}
          onClick={handleLogout}
        >
          Выйти
        </Button>
      ) : null}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/cart" style={{ color: "red" }}>
        <IconButton color="inherit">
          <Badge badgeContent={cartLength} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box fullWidth sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
          backgroundAttachment: "scroll",
          backgroundColor: "black",
          backgroundSize: "cover",
        }}
      >
        <Toolbar>
          <IconButton>
            <img
              src="https://logos.textgiraffe.com/logos/logo-name/Akbar-designstyle-panda-m.png"
              width="80px"
              style={{ borderRadius: "20px" }}
            />
          </IconButton>
          <Link to="/main" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Life Blog
            </Typography>
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск..."
              inputProps={{ "aria-label": "search" }}
              value={searchVal}
              onChange={handleValue}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          {currentUser?.email === "akbar67.kg@gmail.com" ? (
            <Link to="/add" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundColor: "alpha", color: "white" }}>
                <AddAPhotoIcon />
              </Button>
            </Link>
          ) : null}
          {currentUser?.email}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/favourites" style={{ color: "white" }}>
              <IconButton>
                <Badge>
                  <VolunteerActivismIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/cart" style={{ color: "white" }}>
              <IconButton>
                <Badge badgeContent={cartLength} color="secondary">
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Link>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
