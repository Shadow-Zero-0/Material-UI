import { Box, InputAdornment, styled, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useNavigate } from "react-router-dom";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
const Create = () => {
  const navgeta = useNavigate();

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = ({ title, price }) => {
    fetch("http://localhost:3100/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    }).then(() => {
      navgeta("/");
    });
  };
  return (
    <Box 
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="textfield"
      component="form"
    >
      <TextField
        {...register("title",{ required: true})}
        fullWidth={true}
        label="transaction Title"
        id="filled-start-adornment"
        sx={{ mb: "15px" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        error={Boolean(errors.title)}
      />

      <TextField
        {...register("price",{ required: true})}
        fullWidth={true}
        label="Amount"
        id="filled-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        type="number"
        error={Boolean(errors.price)}
      />
      <ColorButton
        type="submit"
        onClick={() => {}}
        sx={{ mt: "10px" }}
        variant="contained"
      >
        submit <KeyboardArrowRightIcon />
      </ColorButton>
    </Box>
  );
};

export default Create;
