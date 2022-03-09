import axios from "axios";
import React, { createContext, useReducer, useEffect, useState } from "react";
import { calcSubPrice, calcTotalPrice } from "../Helpers/CalcPrice.js";
import { API } from "../Helpers/Constans.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "../Firebase.js";

export const ticketContext = createContext();
const INIT_STATE = {
  tickets: null,
  edit: null,
  cart: {},
  cartLength: 0,
  star: {},
  starLength: 0,
  paginatedPages: 1,
  detail: {},
};
const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TICKETS":
      return {
        ...state,
        tickets: action.payload.data,
        paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "GET_EDIT_TICKET":
      return { ...state, edit: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_DETAIL_TICKET":
      return { ...state, detail: action.payload };
    case "GET_STAR":
      return { ...state, star: action.payload };
    case "CHANGE_STAR_COUNT":
      return { ...state, starLength: action.payload };
    default:
      return state;
  }
};

const TicketsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  //! CREATE
  const addTicket = async (newTicket) => {
    try {
      await axios.post(API, newTicket);
      getTickets();
    } catch (error) {
      alert(error);
    }
  };

  // !READ
  const getTickets = async () => {
    try {
      let res = await axios(`${API}${window.location.search}`);
      let action = {
        type: "GET_TICKETS",
        payload: res,
      };
      dispatch(action);
    } catch (error) {
      alert(error);
    }
  };
  // ! DELETE
  const deleteTicket = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTickets();
  };

  // !EDIT  TICKET
  const editTicket = async (id) => {
    try {
      let res = await axios(`${API}/${id}`);
      let action = {
        type: "GET_EDIT_TICKET",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  // ! SAVE EDITED TICKET
  const saveEditedTicket = async (updatedTicket) => {
    try {
      await axios.patch(`${API}/${updatedTicket.id}`, updatedTicket);
      getTickets();
    } catch (error) {
      console.log(error);
    }
  };

  // ! ADD TO CART FUNCTION

  const addToCart = (ticket) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tickets: [],
        totalPrice: 0,
      };
    }
    let newTicket = {
      item: ticket,
      count: 1,
      subPrice: 0,
    };

    let filteredCart = checkTicketInCart(ticket.id);
    if (filteredCart === true) {
      cart.ticket = cart.tickets.filter((elem) => elem.item.id !== ticket.id);
    } else {
      cart.tickets.push(newTicket);
    }

    newTicket.subPrice = calcSubPrice(newTicket);
    cart.totalPrice = calcTotalPrice(cart.tickets);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.tickets.length,
    });
  };

  // ! Считает количество продуктов в корзине нижняя функция

  const getCartLength = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tickets: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.tickets.length,
    });
  };

  // !для стягивания и отображения данных с корзины
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tickets: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const changeTicketCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.tickets = cart.tickets.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count >= 0 ? count : 0;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.tickets);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  // ! DELETETICKETINCART
  const deleteTicketInCart = (id) => {
    let toDelete = JSON.parse(localStorage.getItem("cart"));
    toDelete.tickets = toDelete.tickets.filter((elem) => elem.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(toDelete));
    getCart();
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: toDelete.tickets.length,
    });
  };
  // ! CHECK TICKET IN CART

  const checkTicketInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tickets: [],
        totalPrice: 0,
      };
    }
    let newCart = cart.tickets.filter((elem) => elem.item.id === id);
    return (newCart.length = 0 ? true : false);
  };

  // ! get detail

  const getDetail = async (id) => {
    const res = await axios(`${API}/${id}`);
    let action = {
      type: "GET_DETAIL_TICKET",
      payload: res.data,
    };
    dispatch(action);
  };

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
      return unsub;
    }, []);

    return currentUser;
  }

  // ! FAVORITES
  const addToStar = (ticket) => {
    let star = JSON.parse(localStorage.getItem("star"));
    if (!star) {
      star = {
        tickets: [],
      };
    }
    let newTicket = {
      item: ticket,
      count: 1,
    };
    let filteredStar = checkTicketInStar(ticket.id);
    if (filteredStar === true) {
      star.tickets = star.tickets.filter((elem) => elem.item.id !== ticket.id);
    } else {
      star.tickets.push(newTicket);
    }
    localStorage.setItem("star", JSON.stringify(star));
    dispatch({
      type: "CHANGE_STAR_COUNT",
      payload: star.ticket.length,
    });
  };
  const getStarLength = () => {
    let star = JSON.parse(localStorage.getItem("star"));
    if (!star) {
      star = {
        tickets: [],
      };
    }
    dispatch({
      type: "CHANGE_STAR_COUNT",
      payload: star.tickets.length,
    });
  };

  // !для стягивания и отображения данных с корзины
  const getStar = () => {
    let star = JSON.parse(localStorage.getItem("star"));
    if (!star) {
      star = {
        tickets: [],
      };
    }
    dispatch({
      type: "GET_STAR",
      payload: star,
    });
  };
  const checkTicketInStar = (id) => {
    let star = JSON.parse(localStorage.getItem("star"));
    if (!star) {
      star = {
        tickets: [],
      };
    }
    let newStar = star.tickets.filter((elem) => elem.item.id === id);
    // console.log(newCart);
    return (newStar.length = 0 ? true : false);
  };
  // ! DELETETICKETINstar
  const deleteTicketInStar = (id) => {
    let toDelete = JSON.parse(localStorage.getItem("star"));
    toDelete.tickets = toDelete.tickets.filter((elem) => elem.item.id !== id);
    localStorage.setItem("star", JSON.stringify(toDelete));
    getStar();
    dispatch({
      type: "CHANGE_STAR_COUNT",
      payload: toDelete.tickets.length,
    });
  };

  return (
    <ticketContext.Provider
      value={{
        addTicket,
        getTickets,
        deleteTicket,
        editTicket,
        saveEditedTicket,
        addToCart,
        checkTicketInCart,
        getCartLength,
        getCart,
        changeTicketCount,
        getDetail,
        deleteTicketInCart,
        signUp,
        signIn,
        logout,
        useAuth,
        addToStar,
        getStarLength,
        checkTicketInStar,
        deleteTicketInStar,
        getStar,
        edit: state.edit,
        tickets: state.tickets,
        cartLength: state.cartLength,
        cart: state.cart,
        paginatedPages: state.paginatedPages,
        detail: state.detail,
        starLength: state.starLength,
        star: state.star,
      }}
    >
      {children}
    </ticketContext.Provider>
  );
};

export default TicketsContextProvider;
