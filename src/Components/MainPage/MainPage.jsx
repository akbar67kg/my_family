import React from "react";
import { Carousel } from "react-bootstrap";
import mainPhoto from "../images/конец.jpg";
import myPhoto from "../images/1 (83).jpg";
import "./MainPage.css";
import CommentBox from "./Comments/Comment";

const MainPage = () => {
  return (
    <div>
      <Carousel
        className="d-flex"
        style={{ justifyContent: "center" }}
        width="100%"
      >
        <Carousel.Item>
          <img className="carouselImg" src={mainPhoto} alt="First slide" />
          <Carousel.Caption style={{ fontWeight: "bold", color: "black" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                border: "40px",
                borderColor: "black",
              }}
            >
              <h2>Добро пожаловать на мой блог</h2>
              <p>Здесь вы узнаете всё обо мне и о моей семье.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={myPhoto} alt="Second slide" />

          <Carousel.Caption>
            <h3>Меня зовут Акбар.</h3>
            <p>Мне 18 лет. Живу в городе Бишкек, Кыргызстан.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CommentBox />
    </div>
  );
};

export default MainPage;
