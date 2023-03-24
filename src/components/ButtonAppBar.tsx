import { useAppDispatch, useAppSelector } from "../app/hook";
import { openLoginModal } from "../features/showLoginModal-slice";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

const ButtonAppBar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleOpenLoginModal = () => dispatch(openLoginModal());

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user ? user.value.email : import.meta.env.VITE_APP_TITLE}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
