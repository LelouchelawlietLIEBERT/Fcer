import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Form = ({ setClick, setEmail, email, pw, setPw, setUser }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const getPas = (e) => {
    var x = e.target.value;
    setEmail(x);
  };
  const getPw = (e) => {
    var x = e.target.value;
    setPw(x);
  };

  const checkml = () => {
    if (!email && !pw) {
      alert("EMAIL AND PASSWORD CANNOT BE EMPTY!!!");
    } else if (!email) {
      alert("EMAIL CANNOT BE EMPTY!!!");
    } else if (!pw) {
      alert("PASSWORD CANNOT BE EMPTY!!!");
    } else {
      setUser((p) => [...p, { Email: email, Password: pw }]);
      setClick("msg");
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        style={{ marginLeft: "30px", marginRight: "30px", marginTop: "-10px" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            ml: -2.7,
            mt: -1,
            mb: 0.5,
          }}
        >
          <EmailIcon
            sx={{
              color: "action.active",
              ml: 25,
              mr: -24,
              mb: 2,
              position: "relative",
              right: "-40px",
            }}
          />
          <TextField
            id="input"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              getPas(e);
            }}
            sx={{ width: "30.5ch" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", ml: -2.7 }}>
          <FormControl
            sx={{ mt: 1, ml: 4, width: "30.5ch" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              onChange={(e) => {
                getPw(e);
              }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <div style={{ marginLeft: "80px", marginTop: "10px" }}>
          <Button variant="contained" color="success" onClick={checkml}>
            REGISTER
          </Button>
        </div>
      </div>
    </>
  );
};

export default Form;
