import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, CardActions, IconButton, Typography } from "@mui/material";
import { calcTotalPrice } from "../../../Helpers/CalcPrice";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { ticketContext } from "../../../Contexts/TicketContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart({ item }) {
  const { cart, getCart, changeTicketCount, deleteTicketInCart } =
    React.useContext(ticketContext);
  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Фото</StyledTableCell>
            <StyledTableCell align="right">Авто(g)</StyledTableCell>
            <StyledTableCell align="right">Стоимость(g)</StyledTableCell>
            <StyledTableCell align="right">Количество(g)</StyledTableCell>
            <StyledTableCell align="right">
              Итоговая стоимость(g)
            </StyledTableCell>
            <StyledTableCell align="right">Очистить(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.tickets ? (
            <>
              {cart.tickets.map((elem) => (
                <StyledTableRow key={elem.item.id}>
                  <StyledTableCell component="th" scope="row">
                    <img width="150" src={elem.item.image} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {elem.item.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {elem.item.price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <input
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeTicketCount(e.target.value, elem.item.id)
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {elem.subPrice}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => deleteTicketInCart(elem.item.id)}
                  >
                    <DeleteIcon />
                  </StyledTableCell>
                  {/* {icons} */}
                </StyledTableRow>
              ))}
            </>
          ) : null}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>
              <Typography variant="h4">Итоговая стоимость:</Typography>
            </TableCell>
            {cart.tickets ? (
              <TableCell align="right">
                <Typography variant="h5">
                  {calcTotalPrice(cart.tickets)}
                </Typography>
              </TableCell>
            ) : null}
          </TableRow>

          <TableRow>
            <TableCell colSpan={3} align="right">
              <Link to="/pay" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Купить
                </Button>
              </Link>
            </TableCell>
            <TableCell colSpan={3} align="right">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Главная
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
