import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTicket from "./Components/Admin/AddTicket/AddTicket";
import Cart from "./Components/Admin/Cart/Cart";
import EditTicket from "./Components/Admin/EditPost/EditTicket";
import MyNavbar from "./Components/Admin/Header/MyNavbar";
import Home from "./Components/Home/Home";
import MainPage from "./Components/MainPage/MainPage";
import TicketsDetail from "./Components/Tickets/TicketsDetail/TicketsDetail";
import TicketsContextProvider from "./Contexts/TicketContext";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Star from "./Components/Favorites/Star";
import Footer from "./Components/Footer";

const MyRoutes = () => {
  return (
    <TicketsContextProvider>
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/add" element={<AddTicket />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit/:id" element={<EditTicket />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/detail/:id" element={<TicketsDetail />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/favourites" element={<Star />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </TicketsContextProvider>
  );
};

export default MyRoutes;
