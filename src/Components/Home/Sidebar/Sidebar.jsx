import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  RadioGroup,
  Slider,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { Button, InputGroup } from "react-bootstrap";
import { ticketContext } from "../../../Contexts/TicketContext";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Sidebar = () => {
  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const { getTickets } = useContext(ticketContext);
  const [type, setType] = useState(search.get("type") || "");
  const [price, setPrice] = useState(search.get("price_lte") || "");

  const filterTickets = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setType(search.get("type") || "");
    setPrice(search.get("price_lte" || ""));
    getTickets();
  };

  const handleChangeType = (e, value) => {
    search.set(e, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setType(search.get("type") || "");
    getTickets();
  };

  const resetFilter = () => {
    navigate("/");
    setType("");
    setPrice("");
    getTickets();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}
      >
        <Grid>
          <Paper elevation={9}>
            <FormControl component="fieldset">
              <RadioGroup
                style={{
                  justifyContent: "center",
                  flexDirection: "-moz-initial",
                }}
                aria-label="gender"
                name="gender1"
                value={type}
                onChange={(e) => handleChangeType("type", e.target.value)}
              >
                <FormControlLabel
                  value="Мероприятие"
                  control={<Radio style={{ color: "black" }} />}
                  label="Мероприятие"
                />
                <FormControlLabel
                  value="Дом"
                  control={<Radio style={{ color: "black" }} />}
                  label="Дом"
                />
                <FormControlLabel
                  value="Школа"
                  control={<Radio style={{ color: "black" }} />}
                  label="Школа"
                />
                <FormControlLabel
                  value="Улица"
                  control={<Radio style={{ color: "black" }} />}
                  label="Улица"
                />
                <FormControlLabel
                  value="Парк"
                  control={<Radio style={{ color: "black" }} />}
                  label="Парк"
                />
              </RadioGroup>
              <input
                type="number"
                style={{
                  width: "18rem",
                  margin: "10px",
                  justifyContent: "center",
                  display: "flex",
                }}
                onChange={(e) => filterTickets("price_lte", e.target.value)}
                valuelabeldisplay="auto"
                min={0}
                max={120000}
                step={10000}
              />
              <Button
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                  marginLeft: "35px",
                  marginBottom: "10px",
                }}
                onClick={resetFilter}
                variant="dark"
              >
                Сбросить
              </Button>
            </FormControl>

            <Grid></Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sidebar;
