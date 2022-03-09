import React from "react";
import { Carousel } from "react-bootstrap";
import mainPhoto from "../images/конец.jpg";
import myPhoto from "../images/1 (83).jpg";
import "./MainPage.css";
import CommentBox from "./Comments/Comment";
import myphoto1 from "../images/я1.jpg";
import myphoto2 from "../images/я2.jpg";
import myphoto3 from "../images/я3.jpg";
import myParents from "../images/Родители.jpg";
import myBrother from "../images/Bakyt.jpg";
import myBrother2 from "../images/УлукбекБайке2.jpg";
import myphoto5 from "../images/племяши.jpg";

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
            <h3>Я родился в 2004 году</h3>
            <p>Детство у меня было одно из самых лучших!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel
        className="d-flex"
        style={{ justifyContent: "center", paddingTop: "20px" }}
        width="100%"
      >
        <Carousel.Item>
          <img className="carouselImg" src={myphoto2} alt="First slide" />
          <Carousel.Caption style={{ fontWeight: "bold", color: "black" }}>
            <div
              style={{
                backgroundColor: "gray",
                borderRadius: "15px",
                border: "40px",
                borderColor: "black",
              }}
            >
              <h2>Фотографии из моего детства</h2>
              <p></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={myphoto1} alt="Second slide" />

          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "gray",
                borderRadius: "15px",
                border: "40px",
                borderColor: "black",
              }}
            >
              {" "}
              <h3>В семье у нас было 3 брата.</h3>
              <p>Я самый младший.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={myphoto3} alt="Third slide" />

          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "gray",
                borderRadius: "15px",
                border: "40px",
                borderColor: "black",
              }}
            >
              {" "}
              <h3>
                Садик - одного из самых незабываемых частей моего детства.{" "}
              </h3>
              <p></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel
        className="d-flex"
        style={{ justifyContent: "center", paddingTop: "20px" }}
        width="100%"
      >
        <Carousel.Item>
          <img className="carouselImg" src={myParents} alt="First slide" />
          <Carousel.Caption style={{ fontWeight: "bold", color: "white" }}>
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "15px",
                border: "40px",
                borderColor: "white",
              }}
            >
              <h2>Мои самые любимые - Мама и Папа</h2>
              <p></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={myBrother} alt="Second slide" />

          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "gray",
                borderRadius: "15px",
                border: "40px",
                borderColor: "black",
              }}
            >
              {" "}
              <h3>Это семья моего старшего брата - Бакыта.</h3>
              <p>У него 2 дочки и один сын.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={myBrother2} alt="Third slide" />

          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "gray",
                borderRadius: "15px",
                border: "40px",
                borderColor: "black",
              }}
            >
              {" "}
              <h3>Семья моего второго брата - Улукбека </h3>
              <p>У него два сына.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={myphoto5} alt="Third slide" />

          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "gray",
                borderRadius: "15px",
                border: "40px",
                borderColor: "black",
              }}
            >
              {" "}
              <h3>Племянники самые лучшие! </h3>
              <p></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <CommentBox />
    </div>
  );
};

export default MainPage;
