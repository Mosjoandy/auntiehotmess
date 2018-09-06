import React from "react";

// <Title></Title>
export const Title = ({ children }) => (
  <div className="title">
    <hr />
    {children}
    <hr />
  </div>
);
