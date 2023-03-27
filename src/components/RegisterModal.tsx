import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  openRegisterModal,
  closeRegisterModal,
} from "../features/showRegisterModal-slice";

import { userRegister } from "../features/user-slice";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const RegisterModal = () => {
  const showRegisterModal = useAppSelector(
    (state) => state.showRegisterModal.value
  );
  const dispatch = useAppDispatch();

  const handleOpenRegisterModal = () => dispatch(openRegisterModal());
  const handleCloseRegisterModal = () => dispatch(closeRegisterModal());

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

  const handleUserRegister = async () => {
    const result = await dispatch(userRegister(credential));
    window.location.href = "/";
  };

  return (
    <div>
      <Modal
        open={showRegisterModal}
        onClose={handleCloseRegisterModal}
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
              Register
            </Typography>
            <TextField
              required
              name="email"
              id="outlined-required"
              label="E-mail"
              defaultValue=""
              onChange={handleInputChange}
            />
            <TextField
              required
              name="password"
              id="outlined-required"
              label="Password"
              defaultValue=""
              onChange={handleInputChange}
            />
            <br />
            <Button
              style={{ margin: "8px" }}
              variant="contained"
              size="large"
              onClick={handleUserRegister}
            >
              <PersonAddIcon />
            </Button>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        {/* </Box> */}
      </Modal>
    </div>
  );
};

export default RegisterModal;
