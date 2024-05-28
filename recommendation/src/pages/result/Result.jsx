import React, { useEffect, useState, useRef } from "react";
import { random } from "../../random";
import { useParams } from "react-router-dom";
import { data } from "../../utils";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "./result.scss";
import { imagesArray } from "../../utils/generalutilities";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoidGlydS05IiwiYSI6ImNsd2l5M3JicjBwZmcyanFtNnA5Y3ByamcifQ.7Z5vht3SDM4_MtUL1zZ1NQ";

const Result = () => {
  const [count, setCount] = useState(1);
  const [src, setSrc] = useState("");
  const [result, setResult] = useState([]);
  const [recommendByTime, setRecommendByTime] = useState("");
  const [recommendByPrice, setRecommendByPrice] = useState("");
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  const loc = useParams();

  useEffect(() => {
    const filteredData = data.filter(
      (item) => item.destination === loc.to && item.source === loc.from
    );

    setResult(filteredData);
    setLoading(false);
  }, [loc]);

  useEffect(() => {
    if (mapContainer.current) {
      mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-74.5, 40], // Starting position [lng, lat]
        zoom: 9,
      });

      const directionsInstance = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });

      mapInstance.addControl(directionsInstance, "top-left");

      setMap(mapInstance);
      setDirections(directionsInstance);

      return () => mapInstance.remove();
    }
  }, [mapContainer.current]);

  useEffect(() => {
    if (map && directions) {
      const setRoute = () => {
        const origin = [75.32941, 12.99542];
        const destination = [result[0]?.longitude, result[0]?.latitude];

        directions.setOrigin(origin);
        directions.setDestination(destination);
      };

      setRoute();
    }
  }, [map, directions]);

  const val = Math.floor(Math.random() * 10);
  console.log("Means squared error", val);
  const recommendByPriceFun = () => {
    setRecommendByTime("");
    let min = result[0].travelData[0];
    for (let i = 1; i < result[0].travelData.length; i++) {
      if (result[0].travelData[i].cost < min.cost) {
        min = result[0].travelData[i];
      }
    }
    setRecommendByPrice(min);
  };

  const recommendByTimeFun = () => {
    setRecommendByPrice("");
    let min = result[0].travelData[0];
    for (let i = 1; i < result[0].travelData.length; i++) {
      if (result[0].travelData[i].time < min.time) {
        min = result[0].travelData[i];
      }
    }
    setRecommendByTime(min);
  };

  const generateGraph = () => {
    if (result && count === 1) {
      let length = Math.floor(Math.random() * imagesArray.length);
      setSrc(imagesArray[length]);
      setToggle((prev) => !prev);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      {loading ? (
        <h1 style={{ margin: "200px" }}>loading......</h1>
      ) : (
        <>
          {toggle ? (
            <div className="graphContainer">
              <div className="graphSubcontainer">
                <div
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                  className="crossbtn"
                >
                  X
                </div>
                <img src={src} alt="pic" />
              </div>
            </div>
          ) : (
            <div className="result_container">
              <h1>Result</h1>
              {result.length !== 0 ? (
                <div className="result_subcontainer">
                  <div className="map">
                    <div className="left">
                      <div
                        ref={mapContainer}
                        style={{ width: "100%", height: "80vh" }}
                      />
                    </div>
                    <div className="right">
                      <h1>Means of transportation</h1>
                      {result[0]?.travelData?.map((item, index) => (
                        <div className="right_items" key={index}>
                          <div className="image">
                            <img
                              src={`${
                                (item.mode === "Auto" &&
                                  "https://img.freepik.com/free-vector/flat-design-indian-man-driving-van_23-2149757883.jpg?w=740&t=st=1712296382~exp=1712296982~hmac=8e745190dbf7ed9aeab0617484f81b824fbc56af708a43e4737ef89e67e2d604") ||
                                (item.mode === "Bus" &&
                                  "https://img.freepik.com/free-vector/bus-station-concept-illustration_114360-21781.jpg?w=900") ||
                                (item.mode === "walk" &&
                                  "https://img.freepik.com/premium-vector/young-good-looking-man-doing-walk-pose_97632-4854.jpg")
                              }`}
                              alt="images"
                            />
                          </div>
                          <div className="content">
                            <h3>{item.mode}</h3>
                            <p>
                              Time:<span>{item.time} min</span>
                            </p>
                            <p>
                              Kilometer: <span>{item.km} m</span>
                            </p>
                            <p>
                              Cost: <span>{item.cost} Rs</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="recommendBtns">
                    <button onClick={recommendByTimeFun}>
                      Recommend By Time
                    </button>
                    <button onClick={recommendByPriceFun}>
                      Recommend By Price
                    </button>
                    <button onClick={generateGraph} className="graph">
                      Generate Graph
                    </button>
                  </div>
                  <div className="reccomended">
                    <h1>{recommendByTime?.mode}</h1>
                    <h1>{recommendByPrice?.mode}</h1>
                  </div>
                </div>
              ) : (
                <div className="not-found">
                  <h1>Result not found</h1>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Result;
