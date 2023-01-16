import React from "react";

const fetchData = (setUser) => {
    fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json())
    // why it's called data not response
    .then((data) => setUser(data))
  };

function App() {
  const [user, setUser] = React.useState([]);

  //True or false: You don't have to always make multiple hook calls in the same sequence.
  React.useEffect(() => {
    fetchData(setUser);
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt=""></img>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
