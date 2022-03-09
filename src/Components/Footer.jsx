import { MDBCol, MDBContainer, MDBModalFooter, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBModalFooter className="text-center bg-dark text-white">
      <MDBContainer className="p-4">
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>
                    Не все любят BMW, но однажды проедешь на ней и ты поменяешь
                    свое решение!
                  </strong>
                </p>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>Наш диллер отвечает за качество</p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="7" md="6" className="mb-4 mb-md-0">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/main"}
              >
                <h6 className="text-uppercase">Главная</h6>
              </Link>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/" className="text-white">
                    Каталог
                  </a>
                </li>
                <li>
                  <a href="/cart" className="text-white">
                    Корзина
                  </a>
                </li>
                <li>
                  <a href="/login" className="text-white">
                    Войти
                  </a>
                </li>
                <li>
                  <a href="/register" className="text-white">
                    Зарегистрироваться
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase">Наша деятельность</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Наши услуги
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Наши контакты
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    История создания BMW
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Own Blog:
        <a className="text-white">Akbar's Blog</a>
      </div>
    </MDBModalFooter>
  );
}
