"use client";

import React, { useState, useEffect } from "react";
import { db } from "../db/firebase";
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
} from "firebase/firestore";
import ClassItem from "./ClassItem";
import Button from "./Button";

const NUMBER_OF_CLASSES = 3;

async function getElements(classLimit, cursor = null) {
  let q = query(collection(db, "classes"), limit(classLimit));
  if (cursor) {
    q = query(collection(db, "classes"), startAfter(cursor), limit(classLimit));
  }
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const newCursor = querySnapshot.docs[querySnapshot.docs.length - 1];
  return { data, cursor: newCursor };
}

function ClassesList() {
  const [data, setData] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    getElements(NUMBER_OF_CLASSES).then((result) => {
      setData(result.data);
      setCursor(result.cursor);
    });
  }, []);

  const handleClick = () => {
    getElements(NUMBER_OF_CLASSES, cursor).then((res) => {
      setData([...data, ...res.data]);
      setCursor(res.cursor);
      
      if (res.data.length < NUMBER_OF_CLASSES || !res.cursor) {
        setIsDone(true);
        return;
      }
      
    });
  };

  if (data.length > 0) {
    return (
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((classItem) => (
              <ClassItem
                key={classItem.id}
                name={classItem.name}
                description={classItem.description}
                day={classItem.day}
                hours={classItem.hours}
              />
            ))}
          </div>
          {!isDone && (
            <div className="text-center mt-8">
              <button
                className="bg-gradient-to-r from-sky-500 to-blue-400 hover:from-pink-500 hover:to-sky-500 text-white font-bold py-3 px-6 rounded"
                onClick={handleClick}
              >
                More Classes
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Classes are loading... Give us a second ;)</h1>;
  }
}

export default ClassesList;
