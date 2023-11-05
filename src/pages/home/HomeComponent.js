import React from "react";

import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";

export default function Home(props) {
  return (
    <div id="home">
      <Header theme={props.theme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <TopButton theme={props.theme} />

    </div>
  );
}
