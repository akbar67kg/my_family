export function calcSubPrice(ticket) {
  return ticket.count * ticket.item.price; //только отношение суммы и количества одного вида товара
}

export function calcTotalPrice(tickets) {
  let totalPrice = 0;
  tickets.forEach((elem) => {
    totalPrice = totalPrice + elem.subPrice; // применяется для общей суммировки
  });
  return totalPrice;
}

export function getCountTicketsInCart() {
  let cart = JSON.parse(localStorage.getItem("cart")); // для выведения суммы
  return cart ? cart.tickets.length : 0;
}
