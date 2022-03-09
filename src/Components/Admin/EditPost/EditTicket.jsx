import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { ticketContext } from "../../../Contexts/TicketContext";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function EditTicket() {
  const [values, setValues] = React.useState({
    title: "",
    image: "",
    price: "",
    type: "",
    description: "",
  });

  const { edit, editTicket, saveEditedTicket, handleChange, type } =
    React.useContext(ticketContext);

  const { id } = useParams();

  React.useEffect(() => {
    editTicket(id);
  }, [id]);

  React.useEffect(() => {
    if (edit) {
      setValues(edit);
    }
  }, [edit]);

  const handleEditInp = (e) => {
    let obj = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(obj);
  };

  const handleSave = () => {
    saveEditedTicket(values);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: "40px auto",
          maxWidth: 1000,
          height: "auto",
          p: "10px",
        },
      }}
    >
      <Paper elevation={3}>
        <h1>Изменить данные фото:</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "black",
          }}
        >
          <div>
            <img width="300" src={values.image} alt={values.title} />
          </div>
          <div
            style={{
              width: "450px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <form
              noValidate
              autoComplete="off"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                style={{ padding: "10px" }}
                name="title"
                onChange={handleEditInp}
                value={values.title}
                variant="outlined"
                label="Title"
              />
              <TextField
                style={{ padding: "10px" }}
                name="image"
                onChange={handleEditInp}
                value={values.image}
                variant="outlined"
                label="Image"
              />
              <TextField
                style={{ padding: "10px" }}
                name="price"
                onChange={handleEditInp}
                value={values.price}
                variant="outlined"
                label="Price"
              />
              <FormControl style={{ width: "200px" }}>
                <InputLabel id="demo-simple-select-label">
                  Место кадра :
                </InputLabel>
                <Select
                  style={{ padding: "-7px" }}
                  name="type"
                  value={type}
                  variant="outlined"
                  label="Type"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                >
                  <MenuItem value={"Мероприятие"}>Мероприятие</MenuItem>
                  <MenuItem value={"Дом"}>Дом</MenuItem>
                  <MenuItem value={"Школа"}>Школа</MenuItem>
                  <MenuItem value={"Улица"}>Улица</MenuItem>
                  <MenuItem value={"Парк"}>Парк</MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ padding: "10px" }}
                name="description"
                onChange={handleEditInp}
                value={values.description}
                variant="outlined"
                label="Description"
              />
            </form>
            <Link to="/">
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                onClick={handleSave}
              >
                Сохранить изменения
              </Button>
            </Link>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
