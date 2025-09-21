import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  btnStyleContainer,
  iconStyle,
  styleModalNew,
} from "../assets/Styles/CustomModalStyle";
import CustomButton from "../Custom/CustomButton";
import { CustomInput } from "../Custom/CustomInput";
import { LoginSchema } from "../assets/Validation/Schema";
import { useState } from "react";
import { showError, showSuccess } from "../Custom/CustomToast";
import { useNavigate } from "react-router-dom";
import { useCityApi } from "../Hooks/city";
import { CustomAutocomplete } from "../Custom/CustomAutocomplete";

const CustomUploadInvoice = ({
  open,
  onClose,
  onSubmit,
  userData,
  isEdit,
}: any) => {
  const navigate = useNavigate();
  const { mutate: cityFunction } = useCityApi();
  const [isloading, setLoading] = useState<boolean>(false);
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
    defaultValues: {
      format:'',
    }
  });

  const onsubmit = (data: { format:string }) => {
    console.log(data);
    handleClose()
  };
  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <>
      {open && (
        <Modal
          open={open}
          //   onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ zIndex: "999999999" }}
        >
          <Box sx={styleModalNew}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ fontSize: "14px", fontFamily: "SemiBold_M" }}
              >
                {isEdit ? "Edit City" : "Select Formats"}
              </Typography>
            </Box>
            <Box
              component={"form"}
              onSubmit={handleSubmit(onsubmit)}
              sx={{ m: "15px 0px 30px 0px" }}
            >
              <CustomAutocomplete
                label="Select Format"
                required={true}
                name="format"
                control={control}
                error={errors}
                placeholder="Select Format"
                options={[{ label:"format 1",title: "Format 1" }, { label:"format 2",title: "Format 2" }]}
              />
            </Box>
            <Box
              sx={{
                ...btnStyleContainer,
                display: "flex",
                justifyContent: "end",
              }}
            >
              <CustomButton
                type="submit"
                variant="contained"
                size="medium"
                label="Submit"
                onClick={handleSubmit(onsubmit)}
                loading={isloading}
                boxSx={{ width: "max-content" }}
              />
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default CustomUploadInvoice;
