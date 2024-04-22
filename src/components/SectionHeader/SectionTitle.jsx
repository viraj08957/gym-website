/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import lines from "../../assets/images/line-dec.png";

export default function SectionTitle({ children }) {
  return (
    <>
      <h2>{children}</h2>
      <img src={lines} />
    </>
  );
}
