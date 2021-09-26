import React, { Component } from "react";

// Icons
import { AiOutlineTwitter, AiOutlineLink } from "react-icons/ai";
import { MdPlace, MdDomain } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsFillBrightnessHighFill } from "react-icons/bs";

// img
import imgUser from "../../img/userImage.png";

// style
import { Main, HeaderSection, InputDiv, GridTemplate } from "./style";

export default class Home extends Component {
  state = {
    input: "",
    infoUser: {},
  };

  hundleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  hundleClick = () => {
    this.buscaUser();
  };

  buscaUser = () => {
    const { input } = this.state;
    async function user(param) {
      const response = await fetch(`https://api.github.com/users/${param}`);
      const date = await response.json();
      return date;
    }
    user(input).then((response) => {
      this.setState({
        infoUser: response,
      });
      console.log(response);
    });
  };

  formatDate = (dateParams) => {
    const date = new Date(dateParams);
    console.log(new Date(date));
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { input, infoUser } = this.state;
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
          <input
            tipy="text"
            placeholder="Search GitHub username_"
            value={input}
            onChange={this.hundleChange}
          />
          <button type="button" onClick={this.hundleClick}>
            Search
          </button>
        </InputDiv>
        <GridTemplate>
          <div className="profile-img-content">
            <div className="profile-img">
              <img
                src={!infoUser.avatar_url ? imgUser : infoUser.avatar_url}
                alt=""
              />
            </div>
          </div>
          <div className="profile">
            <div className="info-profile">
              <h1>{!infoUser.name ? "name not found" : infoUser.name}</h1>
              <h3>
                {!infoUser.login ? "login not found" : `@${infoUser.login}`}
              </h3>
              <p>{!infoUser.bio ? "This profile has no bios" : infoUser.bio}</p>
            </div>
            <div className="create-date-profile">
              <h2>
                {!infoUser.created_at
                  ? ""
                  : this.formatDate(infoUser.created_at)}
              </h2>
            </div>
          </div>
          <div className="profile-two">
            <ul>
              <li>
                <h1>Repos</h1>
                <p>{!infoUser.public_repos ? 0 : infoUser.public_repos}</p>
              </li>
              <li>
                <h1>Followers</h1>
                <p>{!infoUser.followers ? 0 : infoUser.followers}</p>
              </li>
              <li>
                <h1>Following</h1>
                <p>{!infoUser.following ? 0 : infoUser.following}</p>
              </li>
            </ul>
            <div className="grid-info-profile">
              <h2 className="location">
                <MdPlace className="icon" />
                {!infoUser.location ? "not available" : infoUser.location}
              </h2>
              <h2 className="twitter">
                <AiOutlineTwitter className="icon" />
                {!infoUser.twitter_username
                  ? "not available"
                  : infoUser.twitter_username}
              </h2>
              <h2 className="blog">
                <AiOutlineLink className="icon" />
                {!infoUser.blog ? "not available" : infoUser.blog}
              </h2>
              <h2 className="workplace">
                <MdDomain className="icon" />
                {!infoUser.company ? "not available" : infoUser.company}
              </h2>
            </div>
          </div>
        </GridTemplate>
      </Main>
    );
  }
}
