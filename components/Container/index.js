import Button from "@/components/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Container = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    console.log("call handleClose");
    console.log("value of open", open);
    setOpen(false);
  };

  const props = {
    open,
    setOpen,
  };

  return (
    <div className="container">
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Check In Details</DialogTitle>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Sucessfully Login
            </Typography>
          </CardContent>
        </Card>
      </Dialog>
      <Button props={props} />
    </div>
  );
};

export default Container;
