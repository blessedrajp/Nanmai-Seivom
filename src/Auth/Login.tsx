import { CustomInput } from "../Custom/CustomInput";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { LoginSchema } from "../assets/Validation/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import {
  formBottomStyle,
  LeftBoxStyle,
  LoginStyles,
  RightBoxStyle,
} from "../assets/Styles/LoginStyle";
import { images } from "../assets/Images/Images";
import CustomButton from "../Custom/CustomButton";
import { commonWord } from "../assets/CommonWord";
import { useNavigate } from "react-router-dom";
import { useLoginApi } from "../Hooks/login";
import Cookies from "js-cookie";
import { showError, showSuccess } from "../Custom/CustomToast";
export const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const [isloading, setLoading] = useState(false);
  const { mutate: loginFunction } = useLoginApi();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { rememberMe: false },
  });

  const onsubmit = (data: { email: string; password: string }) => {
    setLoading(true);
    loginFunction(
      { email: data.email, password: data.password },
      {
        onSuccess: (data) => {
          reset();
          showSuccess(data.message || "Login successful");
          if(data.user.role === "requestor"){
            navigate("/tickets");
          }
          else if(data.user.role === "BH"){
            navigate("/pending-approvals");
          }
          else if(data.user.role === "FOH"){
            navigate("/approved-requests")
          }
          else if(data.user.role === "claims"){
            navigate("/sampling-requests");
          }
          Cookies.set("sampling_token", data.user.token);
          Cookies.set("role", data.user.role);
          Cookies.set("name", data.user.name);
          Cookies.set("id", data.user.id);
          Cookies.set("email", data.user.email);
        },
        onError: (error: any) => {
          showError(error.rawResponse.error || "Error in login");
        },
        onSettled: () => {
          setTimeout(() => {
            setLoading(false);
          }, 800);
        },
      }
    );
  };

  return (
    <>
      {/* <Box sx={{ ...LoginStyles }}>
        <Box sx={{ ...LeftBoxStyle }}>
          <Box component={"img"} src={images.loginimage}></Box>
        </Box>
        <Box sx={{ ...RightBoxStyle }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px",justifyContent:"start" }}>
            <Box
              component={"img"}
              src={images.logincompany}
              sx={{ width: "40px !important",margin:"0px !important", }}
            ></Box>
            <Typography sx={{fontSize:"14px",fontWeight:"bold"}}>{commonWord.title}</Typography>
          </Box>
          <Typography variant="h2">Welcome,</Typography>
          <Typography variant="h3">
            back to {commonWord.title}. Login to Proceed
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit(onsubmit)}>
            <CustomInput
              label="Email"
              required
              placeholder="Enter your email"
              type="text"
              name="email"
              register={register}
              errors={errors}
              startAdornment={<EmailIcon />}
              boxSx={{ mb: 3 }}
            />
            <CustomInput
              label="Password"
              required
              placeholder="Enter your password"
              type={visibility ? "text" : "password"}
              name="password"
              register={register}
              errors={errors}
              startAdornment={<LockIcon />}
              endAdornment={
                visibility ? (
                  <VisibilityIcon
                    sx={{ color: "var(--customIcon)", cursor: "pointer" }}
                    onClick={() => setVisibility(!visibility)}
                  />
                ) : (
                  <VisibilityOffIcon
                    sx={{ color: "var(--customIcon)", cursor: "pointer" }}
                    onClick={() => setVisibility(!visibility)}
                  />
                )
              }
            />
            <Box
              sx={{
                ...formBottomStyle,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={watch("rememberMe") || false}
                    onChange={(e) => setValue("rememberMe", e.target.checked)}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      fontFamily: "SemiBold_M",
                      color: "var(--titleSec)",
                    }}
                  >
                    Remember me
                  </Typography>
                }
              />
              <Typography variant="h4">Forget Password?</Typography>
            </Box>
            <CustomButton
              type="submit"
              variant="contained"
              size="medium"
              label="Login"
              loading={isloading}
            />
          </Box>
          <Typography variant="h5">
            &copy; {commonWord.title} {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box> */}
    </>
  );
};
