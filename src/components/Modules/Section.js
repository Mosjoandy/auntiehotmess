import React from "react";

// <Section></Section
export const Section = ({ id, children }) => (
  <div className="section" id={id}>
    {children}
  </div>
);
