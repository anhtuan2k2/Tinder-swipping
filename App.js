import React from "react";
// import { AppLoading } from "expo";
// import { Asset } from "expo-asset";

import { Profiles, type Profile } from "./components";

const profiles: Profile[] = [
  {
    id: "1",
    name: "Caroline",
    age: 24,
    profile: require("./assets/profiles/1.jpg"),
  },
  {
    id: "2",
    name: "Jack",
    age: 30,
    profile: require("./assets/profiles/2.jpg"),
  },
  {
    id: "3",
    name: "Anet",
    age: 21,
    profile: require("./assets/profiles/3.jpg"),
  },
  {
    id: "4",
    name: "John",
    age: 28,
    profile: require("./assets/profiles/4.jpg"),
  },
  {
    id: "4",
    name: "John",
    age: 28,
    profile: require("./assets/profiles/4.jpg"),
  },
];
const App =()=> {
 
    return (
      <Profiles {...{ profiles }} />
    );

  
}
export default App;