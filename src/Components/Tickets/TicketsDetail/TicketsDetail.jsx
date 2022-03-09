import { Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ticketContext } from "../../../Contexts/TicketContext";

const TicketsDetail = () => {
  const { id } = useParams();
  const { detail, getDetail } = useContext(ticketContext);

  useEffect(() => {
    getDetail(id);
  }, [id]);
  return (
    <Paper
      elevation={3}
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        margin: "auto",
        width: "800px",
      }}
    >
      {detail ? (
        <div>
          <div>
            <img width="450px" src={detail.image} />
          </div>
          <div>
            <Typography variant="h5">Фото:{detail.title}</Typography>
            <Typography variant="h4">Цена фото:{detail.price}</Typography>
            <Typography variant="h6">Дата:{detail.model}</Typography>
            <Typography variant="subtitle1">Локация:{detail.type}</Typography>
            <Typography variant="body1">{detail.description}</Typography>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </Paper>
  );
};

export default TicketsDetail;
