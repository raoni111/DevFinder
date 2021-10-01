import styled from "styled-components";

// Colors
import * as color from "../../config/color";

export const Main = styled.div`
  width: 53%;
  margin: 2rem auto;
  background-color: transparent;
  @media (max-width: 900px) {
    width: 65%;
  }
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: ${color.primaryFontColor};
    font-size: 1.5rem;
  }
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.9rem;
    color: ${color.primaryFontColor};
    background-color: transparent;
    .icon-ligth {
      margin-left: 0.8rem;
      color: ${color.primaryFontColor};
    }
    .icon-night {
      margin-left: 0.8rem;
      color: ${color.segundaryColor};
    }
  }
  &[value="true"] {
    h1 {
      color: ${color.backgroundColor};
    }
    button {
      color: ${color.backgroundColor};
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
  &[value="true"] {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    background-color: ${color.lightPrimaryColor};
  }
  @media (max-width: 420px) {
    input {
      width: 70%;
    }
    button {
      width: 20%;
    }
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
    display: flex;
    justify-content: center;
    align-items: start;
    grid-area: profileContent;
    img {
      width: 100px;
      margin-top: 1rem;
      border-radius: 50%;
    }
  }
  .profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-area: infoProfile;
    padding: 1.5rem;
    .info-profile {
      display: grid;
      grid-template-columns: 200px 85%;
      grid-template-areas:
        "profileName profileDate"
        "profileLogin profileDate"
        "profileBios profileDate";
      width: 250px;
      .info-profile-name {
        font-size: 1.5rem;
        color: ${color.primaryFontColor};
        grid-area: profileName;
      }
      .info-profile-login {
        font-size: 1rem;
        color: ${color.buttonColor};
        grid-area: profileLogin;
      }
      .info-profile-bios {
        margin-top: 1rem;
        font-family: inherit;
        color: ${color.segundaryFontColor};
        grid-area: profileBios;
      }
      .info-profile-date {
        font-size: 1rem;
        color: ${color.segundaryFontColor};
        grid-area: profileDate;
      }
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
  &[value="true"] {
    background-color: ${color.lightPrimaryColor};
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    .profile {
      .info-profile {
        h1 {
          color: ${color.backgroundColor};
        }
      }
    }
    .profile-two {
      ul {
        background-color: ${color.lightBackground};
        li {
          h1 {
            color: ${color.segundaryFontColor};
          }
          p {
            color: ${color.backgroundColor};
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    grid-template-areas:
      "profileContent infoProfile"
      "profileTwo profileTwo";
  }
  @media (max-width: 600px) {
    .profile {
      padding: 1rem;
      .info-profile {
        width: 100%;
        grid-template-columns: 100%;
        grid-template-areas:
          "profileName"
          "profileLogin"
          "profileDate"
          "profileBios";
      }
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 30% 70%;
    .grid-info-profile {
      grid-template-columns: 100% !important;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "location"
        "blog"
        "twitter"
        "workplace" !important;
    }
    .profile-img-content {
      img {
        width: 80px;
      }
    }
    .profile {
      .info-profile {
        .info-profile-name {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
