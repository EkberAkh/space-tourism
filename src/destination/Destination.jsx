import data from "../data.json";

import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";
import "./Destination.css";

import { useState } from "react";

const Destination = () => {
  const [destination, setDestination] = useState("moon");
  const destinationSelect = (e) => {
    if (e.target.classList.contains("moon")) {
      setDestination("moon");
    } else if (e.target.classList.contains("mars")) {
      setDestination("mars");
    } else if (e.target.classList.contains("europa")) {
      setDestination("europa");
    } else if (e.target.classList.contains("titan")) {
      setDestination("titan");
    }
  };
  return (
    <>
      <section className="destination">
        <div className="container">
          <h1 className="main-title">
            <b>01</b>
            "Pick your destination"
          </h1>

          <div className="main-box">
            {destination === "moon" ? <img src={moon} alt="moon" /> : ""}
            {destination === "mars" ? <img src={mars} alt="mars" /> : ""}
            {destination === "europa" ? <img src={europa} alt="europa" /> : ""}
            {destination === "titan" ? <img src={titan} alt="titan" /> : ""}
            <div className="content">
              <ul>
                <li>
                  <button
                    onClick={destinationSelect}
                    className="text-link moon"
                    type="button"
                  >
                    Moon
                  </button>
                </li>
                <li>
                  <button
                    onClick={destinationSelect}
                    className="text-link mars"
                    type="button"
                  >
                    Mars
                  </button>
                </li>
                <li>
                  <button
                    onClick={destinationSelect}
                    className="text-link europa"
                    type="button"
                  >
                    Europa
                  </button>
                </li>
                <li>
                  <button
                    onClick={destinationSelect}
                    className="text-link titan"
                    type="button"
                  >
                    Titan
                  </button>
                </li>
              </ul>
              <div className="text">
                <h2 className="name">
                  {destination === "moon" ? "Moon" : ""}

                  {destination === "mars" ? "Mars" : ""}
                  {destination === "europa" ? "Europa" : ""}
                  {destination === "titan" ? "Titan" : ""}
                </h2>
                <p className="description">
                  {destination === "moon"
                    ? data.destinations[0].description
                    : ""}

                  {destination === "mars"
                    ? data.destinations[1].description
                    : ""}
                  {destination === "europa"
                    ? data.destinations[2].description
                    : ""}
                  {destination === "titan"
                    ? data.destinations[3].description
                    : ""}
                </p>
                <div className="break"></div>
                <div className="info">
                  <div className="box">
                    <h3>Avg. distance</h3>
                    <p className="distance">
                      {destination === "moon"
                        ? data.destinations[0].distance
                        : ""}

                      {destination === "mars"
                        ? data.destinations[1].distance
                        : ""}
                      {destination === "europa"
                        ? data.destinations[2].distance
                        : ""}
                      {destination === "titan"
                        ? data.destinations[3].distance
                        : ""}
                    </p>
                  </div>
                  <div className="box">
                    <h3>Est. travel time</h3>
                    <p className="travel">
                      {destination === "moon"
                        ? data.destinations[0].travel
                        : ""}

                      {destination === "mars"
                        ? data.destinations[1].travel
                        : ""}
                      {destination === "europa"
                        ? data.destinations[2].travel
                        : ""}
                      {destination === "titan"
                        ? data.destinations[3].travel
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
