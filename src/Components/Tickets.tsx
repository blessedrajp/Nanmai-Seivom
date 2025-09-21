import CustomTable from "../Custom/CustomTable";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CustomButton from "../Custom/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFgCodesQuery } from "../Hooks/sampling";

export const Tickets = () => {
  const [open, setOpen] = useState(false);
  const { data: getFgCodes } = useFgCodesQuery();

  const columns = [
    { id: "sno", label: "S.No" },
    { id: "fgCode", label: "Fg code" },
    { id: "materialCodeDescription", label: "Material Code Description" },
    { id: "uom", label: "UOM" },
    { id: "qty", label: "Qty" },
    { id: "storageLocation", label: "Storage location (SL)" },
    { id: "depotCode", label: "Depot code" },
    { id: "batch", label: "Batch" },
    { id: "profitCentre", label: "Profit centre" },
    { id: "brand", label: "Brand" },
    { id: "subCat", label: "Sub Cat" },
    { id: "remarks", label: "Remarks" },
    {
      id: "action",
      label: "Action",
      render: (row: any) => (
        <Box style={{ display: "flex", gap: "8px" }}>
          <IconButton onClick={() => console.log("View", row)} size="small">
            <VisibilityIcon sx={{ color: "var(--grey)", fontSize: "16px" }} />
          </IconButton>
          {/* <IconButton onClick={() => console.log("Edit", row)} size="small">
          <EditIcon sx={{ color: "var(--grey)", fontSize: "16px" }} />
        </IconButton>
        <IconButton onClick={() => console.log("Delete", row)} size="small">
          <DeleteIcon sx={{ color: "var(--grey)", fontSize: "16px" }} />
        </IconButton> */}
        </Box>
      ),
    },
  ];

  const rows = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    sno: index + 1,
    fgCode: `FG00${index + 1}`,
    materialCodeDescription: `Material ${index + 1}`,
    uom: "KG",
    qty: Math.floor(Math.random() * 100) + 1,
    storageLocation: `SL${index + 1}`,
    depotCode: `DPT${index + 1}`,
    batch: `BATCH${index + 1}`,
    profitCentre: `PC${index + 1}`,
    brand: `Brand ${index + 1}`,
    subCat: `SubCat ${index + 1}`,
    remarks: `Remark ${index + 1}`,
  }));

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          my: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width: 600px)": { flexDirection: "column", gap: "10px" },
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Badge
          badgeContent={rows.length}
          sx={{
            "& .MuiBadge-badge": {
              background: "var(--primary)",
              color: "var(--white)",
            },
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Total Tickets</Typography>
        </Badge>
      </Box>
      <CustomTable
        colvis={true}
        rows={rows}
        columns={columns}
        showCheckbox={true}
        sortable={true}
        search={true}
        exportBoolean={true}
        title=" "
      />
    </>
  );
};
