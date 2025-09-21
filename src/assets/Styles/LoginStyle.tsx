export const LoginStyles = {
  backgroundColor: "var(--background)",
  width: "100%",
  minHeight: "100vh",
  padding: { xs: "16px", md: "30px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: { xs: "16px", md: "24px" },
  flexDirection: { xs: "column", md: "row" },
};

export const LeftBoxStyle = {
  padding: { xs: 0, md: "20px" },
  borderRadius: "10px",
  display:{ xs: "none", md: "block" },
  width: { xs: "100%", md: "50%" },
  height: "max-content",
  marginBottom: { xs: "8px", md: 0 },
  "& img": {
    width: { xs: "30%", sm:"30%",md: "100%",lg: "85%" },
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: "auto",
    display: "block",
  },
};

export const RightBoxStyle = {
  width: { xs: "100%", md: "50%" },
  padding: { xs: "24px", sm: "32px", md: "40px" ,lg: "40px 110px" },
  borderRadius: "10px",
  textAlign: "start",
  "& h2": {
    fontSize: { xs: "18px", md: "20px" },
    fontFamily: "SemiBold_M",
    marginTop: { xs: "16px", md: "16px" },
  },
  "& h3": {
    fontSize: { xs: "12px", md: "14px" },
    fontFamily: "Medium_M",
    color: "var(--titleSec)",
    padding: { xs: "10px 0 24px", md: "10px 0 40px" },
  },
  "& h4": {
    fontSize: "12px",
    fontFamily: "Medium_M",
    color: "var(--titleThird)",
    textAlign: { xs: "left", sm: "right" },
    cursor: "pointer",
  },
  "& img": {
    width: { xs: "100px", md: "130px" },
    margin: "auto",
    display: "block",
  },
  "& h5": {
    fontSize: "11px",
    fontFamily: "Medium_M",
    color: "var(--titleSec)",
    marginTop: "20px",
    textAlign: "center",
  },
};

export const formBottomStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: { xs: "flex-start", sm: "center" },
  flexDirection: { xs: "column", sm: "row" },
  rowGap: { xs: 1, sm: 0 },
  mb: 1,
  mt: 1,
  "& .MuiFormControlLabel-root": {
    marginRight: 0,
  },
  "& .MuiCheckbox-root": {
    color: "var(--border-color)",
    "&.Mui-checked": {
      color: "var(--primary)",
    },
    "& svg": {
      fontSize: "20px",
    },
  },
  "& p": {
    fontSize: "12px",
    fontFamily: "SemiBold_M",
    color: "var(--titleSec)",
  },
};
