import { Box, Grid, Pagination, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ticketContext } from "../../../Contexts/TicketContext";
import TicketsCard from "../TicketsCard/TicketsCard";

const TicketsList = () => {
  const { tickets, getTickets, paginatedPages } = useContext(ticketContext);
  const search = new URLSearchParams(window.location.search);
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const navigate = useNavigate();

  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    setSearchParams({
      _limit: limit,
      _page: page,
    });
  }, [limit, page]);

  const handlePage = (e, pageVal) => {
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchParams({ _page: pageVal, _limit: limit });
    setLimit(4);
    getTickets();
    setPage(pageVal);
  };
  return (
    <Box sx={{ flexGrow: 1, margin: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {tickets ? (
          tickets.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <TicketsCard item={item} />
            </Grid>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Grid>
      <Stack spacing={2}>
        <Pagination count={paginatedPages} onChange={handlePage} page={+page} />
      </Stack>
    </Box>
  );
};

export default TicketsList;
