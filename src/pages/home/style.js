import styled from "styled-components";

// Colors
import * as color from "../../config/color";

export const Main = styled.div`
  width: 50%;
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
export const GridTemplate = styled.div`
  display: grid;
  grid-template-areas:
    "profileContent infoProfile"
    "profileContent profileTwo";
  grid-template-columns: 24% 76%;
  grid-template-rows: auto auto;
  margin-top: 1rem;
  border-radius: 10px;
  background-color: ${color.primaryColor};
  .profile-img-content {
    grid-area: profileContent;
    .profile-img {
      display: flex;
      overflow: hidden;
      width: 100px;
      margin: 2rem;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
  }
  .profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-area: infoProfile;
    padding: 1.5rem;
    .info-profile {
      width: 400px;
      h1 {
        font-size: 1.5rem;
        color: ${color.primaryFontColor};
      }
      h3 {
        font-size: 1rem;
        color: ${color.buttonColor};
      }
      p {
        margin-top: 1rem;
        font-family: inherit;
        color: ${color.segundaryFontColor};
      }
    }
    .create-date-profile {
      display: flex;
      justify-content: start;
      align-items: start;
      width: 100px;
      font-size: 0.7rem;
      color: ${color.segundaryFontColor};
    }
  }
  .profile-two {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    grid-area: profileTwo;
    padding: 1rem;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      width: 95%;
      padding: 1rem;
      border-radius: 10px;
      background-color: ${color.backgroundColor};
      li {
        margin-right: 1.4rem;
        h1 {
          font-size: 0.8rem;
          color: ${color.segundaryFontColor};
        }
        p {
          color: ${color.primaryFontColor};
        }
      }
    }
    .grid-info-profile {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "location twitter"
        "blog workplace";
      width: 100%;
      padding: 0.5rem;
      margin-top: 1rem;
      h2 {
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 0.5rem;
        font-size: 1rem;
        color: ${color.segundaryFontColor};
        .icon {
          margin-right: 0.5rem;
        }
      }
      .location {
        grid-area: location;
      }
      .twitter {
        grid-area: twitter;
      }
      .blog {
        grid-area: blog;
      }
      .workplace {
        grid-area: workplace;
      }
    }
  }
`;
