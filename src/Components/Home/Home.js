import { Grid } from "@mui/material";
import React from "react";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <Grid spacing-md={3} spacing-sm={3}>
        <Content />
        <Sidebar />
      </Grid>
    </div>
  );
};

export default Home;
