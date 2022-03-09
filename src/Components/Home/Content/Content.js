import { Grid } from "@mui/material";
import React from "react";
import TicketsList from "../../Tickets/TicketsList/TicketsList";

const Content = () => {
  return (
    <div>
      <Grid>
        <TicketsList />
      </Grid>
    </div>
  );
};

export default Content;
