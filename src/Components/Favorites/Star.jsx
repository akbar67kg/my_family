import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { ticketContext } from "../../Contexts/TicketContext";
export default function Star({ item }) {
  const { star, getStar, deleteTicketInStar } = React.useContext(ticketContext);
  console.log(star, "star");
  console.log(getStar, "getStar");
  console.log(deleteTicketInStar, "deleteHello");
  React.useEffect(() => {
    getStar();
  }, []);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Favorites
      </h1>
      <Box
        sx={{
          flexGrow: 1,
          margin: 4,
        }}
      >
        <Paper elevation={6}>
          <Grid container spacing={3} justifyContent="center">
            {star.tickets ? (
              <>
                {star.tickets.map((elem) => (
                  <Grid key={elem.item.id} item xs={12} sm={6} md={3}>
                    <Card sx={{ width: "100%" }}>
                      <CardMedia
                        src={elem.item.image}
                        component="img"
                        width="100%"
                        height="300"
                      />

                      <CardContent>
                        <Typography gutterBottom variant="h5">
                          {elem.item.title}
                        </Typography>
                      </CardContent>

                      <CardContent>
                        <Typography variant="body1">
                          Cтоимость:{elem.item.price}
                        </Typography>
                        <Typography variant="body2">
                          Класс: {elem.item.model}
                        </Typography>
                        <Typography variant="body2">
                          Тип: {elem.item.type}
                        </Typography>
                        <Typography variant="body2">
                          Тип: {elem.item.description}
                        </Typography>
                        <IconButton
                          onClick={() => deleteTicketInStar(elem.item.id)}
                        >
                          <ClearIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </>
            ) : null}
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
