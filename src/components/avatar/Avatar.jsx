import React, { Component } from 'react';
import AvatarImgSrc from "../../assets/img/avatar.jpeg";
import "./Avatar.css";

export default class Avatar extends Component {
  render() {
    return (
      <img className='Avatar' src={AvatarImgSrc} alt="avatart" />
    );
  }
}
