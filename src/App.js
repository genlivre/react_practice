import React from "react";

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
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

User.defaultProps = {
  age: 0
}

export default App;
