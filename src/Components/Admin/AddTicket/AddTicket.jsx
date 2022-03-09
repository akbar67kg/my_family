import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ticketContext } from "../../../Contexts/TicketContext";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import zabyl from "../../images/забыл.jpg";

const AddTicket = () => {
  const [values, setValues] = React.useState({
    title: "",
    model: "",
    image: "",
    price: "",
    type: "",
    description: "",
  });

  const { addTicket } = useContext(ticketContext);

  const navigate = useNavigate();

  const handleInp = (e) => {
    let obj = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(obj);
  };

  const handleSave = () => {
    if (!values.image) values.image = zabyl;
    addTicket({ ...values, price: +values.price, type: type, model: model });
    navigate("/");
  };

  const [type, setType] = useState("");

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const [model, setModel] = useState("");

  const handleModelChange = (e) => {
    setModel(e.target.value);
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
        },
      }}
    >
      <Paper elevation={3} style={{ backgroundColor: "white" }}>
        <h1
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "blue",
            color: "black",
          }}
        >
          Добавить фото
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "black",
          }}
        >
          <div style={{ marginLeft: "30px" }}>
            <img
              width="400"
              src={
                values.image
                  ? values.image
                  : "https://fotovramku.ru/uploads/results/2020/07/31/8837352_1596200324_5f241521f30d1.jpg"
              }
              alt=""
            />
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
                onChange={handleInp}
                value={values.title}
                variant="outlined"
                label="Тематика"
              />
              <FormControl style={{ width: "200px" }}>
                <InputLabel id="demo-simple-select-label">
                  Время сьёмки:
                </InputLabel>
                <Select
                  style={{ padding: "-5px" }}
                  name="model"
                  value={model}
                  variant="outlined"
                  label="Model"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleModelChange}
                >
                  <MenuItem value={"Утро"}>Утро</MenuItem>
                  <MenuItem value={"День"}>День</MenuItem>
                  <MenuItem value={"Вечер"}>Вечер</MenuItem>
                  <MenuItem value={"Ночь"}>Ночь</MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ padding: "10px" }}
                name="image"
                onChange={handleInp}
                value={values.image}
                variant="outlined"
                label="Фото в виде ссылки"
              />
              <TextField
                style={{ padding: "10px" }}
                name="price"
                onChange={handleInp}
                value={values.price}
                variant="outlined"
                label="Стоимость
                    "
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
                onChange={handleInp}
                value={values.description}
                variant="outlined"
                label="Подробное описание"
              />
            </form>
            <Link to="/">
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                onClick={handleSave}
                variant="contained"
              >
                Выложить
              </Button>
            </Link>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default AddTicket;
