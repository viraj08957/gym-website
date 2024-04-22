/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function MainButton({ children }) {
  return (
    <a className="main--button" href="#">
      {children}
    </a>
  );
}
