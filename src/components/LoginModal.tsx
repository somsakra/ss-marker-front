import { ReactEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  openLoginModal,
  closeLoginModal,
} from "../features/showLoginModal-slice";
import {
  openRegisterModal,
  closeRegisterModal,
} from "../features/showRegisterModal-slice";
import { userLogin } from "../features/user-slice";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockResetIcon from "@mui/icons-material/LockReset";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RegisterModal from "./RegisterModal";

const style = {
  "& .MuiTextField-root": { m: 1, width: "40ch" },
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginModal = () => {
  interface ICredential {
    email: string;
    password: string;
  }
  const [credential, setCredential] = useState<ICredential>({
    email: "",
    password: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };
  const showLoginModal = useAppSelector((state) => state.showLoginModal.value);

  const dispatch = useAppDispatch();

  const handleOpenLoginModal = () => dispatch(openLoginModal());
  const handleCloseLoginModal = () => dispatch(closeLoginModal());

  const handleOpenRegisterModal = () => dispatch(openRegisterModal());
  const handleCloseRegisterModal = () => dispatch(closeRegisterModal());

  const handleUserLogin = async () => {
    const result = await dispatch(userLogin(credential));
    dispatch(closeLoginModal());
    localStorage.setItem("token", result.payload.token);
    window.location.href = "/";
  };

  return (
    <div>
      {/* <Button onClick={handleOpenLoginModal}>Login</Button> */}
      <Modal
        open={showLoginModal}
        onClose={handleCloseLoginModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
        <Card sx={style}>
          <CardContent>
            <Typography
              style={{ margin: "8px" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Login
            </Typography>
            <TextField
              required
              id="outlined-required"
              name="email"
              label="E-mail"
              defaultValue=""
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-required"
              name="password"
              label="Password"
              defaultValue=""
              onChange={handleInputChange}
            />
            <br />
            <Button
              style={{ margin: "8px" }}
              variant="contained"
              size="large"
              onClick={handleUserLogin}
            >
              <LoginIcon />
            </Button>
            <Button
              style={{ margin: "8px" }}
              variant="contained"
              size="large"
              onClick={handleOpenRegisterModal}
            >
              <PersonAddIcon />
            </Button>
            <Button style={{ margin: "8px" }} variant="contained" size="large">
              <LockResetIcon />
            </Button>
          </CardContent>
          <RegisterModal />
        </Card>
        {/* </Box> */}
      </Modal>
    </div>
  );
};

export default LoginModal;
