import React from "react";

// Importing Images
import homeImage from "../images/Home.svg";
import beeBackdrop from "../images/Bee Backdrop.svg";
import hiveBackdrop from "../images/Hive Backdrop.svg";
import separator from "../images/How it works title.svg";
import takeawayCardImage from "../images/Takeaway.svg";
import reserveCardImage from "../images/Reserve Table.svg";
import bookCardImage from "../images/Book Hall.svg";

const Home = () => {
  return (
    <>
      <div className="home-section">
        {/* <h1>This is the Home Page of BeeAhead</h1> */}
        <div className="home-left-section">
          <h1>
            Welcome to <br /> BeeAhead
          </h1>
          <p>
            Want to order food for takeaway <br /> or book a marquee/hall? Then
            <br /> beeahead!
          </p>
          <button className="button-style">Get Started</button>
        </div>
        <div className="home-right-section">
          <img src={homeImage} alt="" width="500px" />
        </div>
      </div>
      <div className="how-it-works">
        <img src={beeBackdrop} alt="" className="bee-backdrop" width="400px" />
        <div className="how-it-works-title">
          <h1>How it works</h1>
          <img src={separator} alt="" width="150px" />
        </div>
        <div className="how-it-works-cards">
          <div className="card">
            <img src={takeawayCardImage} alt="" width="300px" />
            <h1>Takeaway</h1>
            <p>
              Tired of waiting an hour for your takeaway? <br /> Well not
              anymore, just place the order <br /> through this website and pick
              it on the way
            </p>
            <button className="button-style card-button">Start Now</button>
          </div>
          <div className="card">
            <img src={reserveCardImage} alt="" width="300px" />
            <h1>Reserve a table</h1>
            <p>
              Reserve a table of your favourite restaurant <br /> from here so
              you don't have to worry <br /> about it later
            </p>
            <button className="button-style card-button ">Start Now</button>
          </div>
          <div className="card">
            <img src={bookCardImage} alt="" width="300px" />
            <h1>Book a hall</h1>
            <p>
              Looking for a marquee/hall to celebrate an <br /> event? Find best
              marquee/halls in your city <br /> at reasonable rates
            </p>
            <button className="button-style card-button">Book Now</button>
          </div>
        </div>
        <img
          src={hiveBackdrop}
          alt=""
          className="hive-backdrop"
          width="400px"
        />
      </div>
    </>
  );
};

export default Home;
