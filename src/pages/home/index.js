import React, { Component } from "react";

// Icons
import { FiSearch } from "react-icons/fi";
import { BsFillBrightnessHighFill } from "react-icons/bs";

// style
import { Main, HeaderSection, InputDiv } from "./style";

export default class Home extends Component {
  state = {
    input: "Helo World",
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { input } = this.state;
    return (
      <Main>
        <HeaderSection>
          <h1>devFinder</h1>
          <h3>
            LIGHT
            <BsFillBrightnessHighFill className="icon-ligth" />
          </h3>
        </HeaderSection>
        <InputDiv>
          <span>
            <FiSearch size="30" />
          </span>
          <input tipy="text" placeholder="Search GitHub username_" />
          <button type="button">Search</button>
        </InputDiv>
      </Main>
    );
  }
}
