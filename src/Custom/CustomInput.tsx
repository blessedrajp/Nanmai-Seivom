import { Box, InputAdornment, TextField, Tooltip } from "@mui/material";
import get from "lodash/get";
import { CustomInputStyles } from "../assets/Styles/CustomStyles";
import type { CustomInputProps } from "../Interface/Custom";

export const CustomInput = ({
  label,
  required,
  placeholder,
  type,
  name,
  disabled,
  startAdornment,
  endAdornment,
  register,
  helperText,
  errors,
  value,
  boxSx,
}: CustomInputProps) => {
  const errorMessage = get(errors, `${name}.message`, null);
  return (
    <>
      <Box
        sx={{
          ...CustomInputStyles,
          ...boxSx,
        }}
      >
        <TextField
          label={
            <>
              <Tooltip title={label} arrow>
                {label.length > 14 ? label.slice(0, 14) + "..." : label}
              </Tooltip>
              {required && <Box component={"span"}>*</Box>}
            </>
          }
          placeholder={placeholder}
          focused
          color="primary"
          name={name}
          value={value}
          type={type}
          disabled={disabled}
          {...(register && register(name))}
          error={errorMessage ? true : false}
          helperText={errorMessage ? errorMessage.toString() : helperText}
          slotProps={{
            input: {
              startAdornment: startAdornment ? (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ) : undefined,
              endAdornment: endAdornment ? (
                <InputAdornment position="start">{endAdornment}</InputAdornment>
              ) : undefined,
            },
          }}
        />
      </Box>
    </>
  );
};
