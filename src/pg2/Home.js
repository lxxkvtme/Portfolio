import React, { useState } from "react";
import IsiFamily from "../comp2/IsiFamily";

const Home = () => {
  const [showHobbies, setShowHobbies] = useState(false);
  const [myIdentity, setMyIdentity] = useState({
    name: "Danu Mahendra",
    age: 22,
    year: 1999,
    address: "Karadenan, Cibinong, Bogor",
    hobbies: ["Gaming", "Coding", "Design", "Listening to Music"],
  });

  const [family, setFamily] = useState([
    {
      name: "Heny Kumalasari",
      age: 25,
      sex: "female",
    },
    {
      name: "Danu Mahendra",
      age: 22,
      sex: "male",
    },
    {
      name: "Della Ananda P",
      age: 17,
      sex: "female",
    },
  ]);

  const myAge = (lahir) => {
    const yearNow = new Date().getFullYear();
    const age = yearNow - lahir;
    return age;
  };

  const handleHobbies = () => {
    setShowHobbies(!showHobbies);
  };

  const deleteFamily = (param) => {
    const familyCopy = [...family];
    const newFamily = familyCopy.filter((orang, index) => index !== param);
    // const newFamily = familyCopy.splice(param, 1);
    setFamily(newFamily);
  };

  return (
    <div>
      my name is {myIdentity.name}, my age is {myAge(myIdentity.year)}, and my
      address in {myIdentity.address} <br />
      my hobbies is : <button onClick={handleHobbies}>Show Hobbies</button>
      {showHobbies === true ? (
        <ul>
          {myIdentity.hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      ) : null}
      <table border="1">
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Action</th>
        </thead>
        <tbody>
          {family.map((orang, index) => (
            <IsiFamily isi={orang} idx={index} hapus={deleteFamily} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
