import React from "react";

export default function ProfileImage(props) {
  console.log(props);
  return (
    <div className="tweet">
      <img src={props.image} className="profile" alt="profile" />
    </div>
  );
}
