import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "Taro", age: 1 },
    { name: "Hanako", age: 6 },
    { name: "NoName" }
  ]
  return <div>
    {
      profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />;
      })
    }
  </div>;
}

const User = (props) => {
  return <p>Hi, I am {props.name}, and {props.age} years old!</p>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

export default App;
