import styled from "styled-components";

// Colors
import * as color from "../../config/color";

export const Main = styled.div`
  width: 45%;
  margin: 5rem auto;
  background-color: transparent;
`;
export const HeaderSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${color.primaryFontColor};
  h1 {
    font-size: 1.5rem;
  }
  h3 {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.9rem;
    .icon-ligth {
      margin-left: 0.8rem;
      color: ${color.primaryFontColor};
    }
  }
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.5rem;
  border-radius: 10px;
  background-color: ${color.primaryColor};
  span {
    width: 10%;
    display: flex;
    align-items: center;
    color: ${color.segundaryColor};
  }
  input {
    width: 75%;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 600;
    color: ${color.segundaryFontColor};
  }
  button {
    cursor: pointer;
    width: 15%;
    height: 40px;
    border-radius: 10px;
    font-weight: 600;
    color: ${color.primaryFontColor};
    background-color: ${color.buttonColor};
  }
`;
