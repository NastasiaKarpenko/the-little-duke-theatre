"use client"
import Class from "./Class";
import React, { useState, useEffect } from "react";
import { getElements } from "../db/firebase";

const NUMBER_OF_EVENTS = 4;

function ClassesList() {
  const [data, setData] = useState([]);
  const [cursor, setCursor] = useState();
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    getElements(NUMBER_OF_EVENTS).then((data) => {
      setData(data.data);
      setCursor(data.cursor);
    });
  }, []);

  const handleClick = () => {
    getElements(NUMBER_OF_EVENTS, cursor).then((res) => {
      if (res.data.length < NUMBER_OF_EVENTS || !res.cursor) {
        setIsDone(true);
        return;
      }
      setData([...data, ...res.data]);
      setCursor(res.cursor);
    });
  };

  if (data.length > 0) {
    return (
      <>
        <div className="eventContainer">
          {data.map((event, key) => (
            <Event
              key={key}
              name={event.name}
              img={event.img}
              date={event.date}
              description={event.description}
              place={event.place}
              eventURL={event.eventURL}
            />
          ))}
        </div>
        {!isDone && (
          <div className="eventBtnSpace">
            <button
              className="eventBtn roboto-serif-ireland"
              onClick={handleClick}
            >
              More Events
            </button>
          </div>
        )}
      </>
    );
  } else {
    return <h1>event is loading... Give us a second ;)</h1>;
  }
}

export default ClassesList;
