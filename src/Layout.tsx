import React from "react";

export const Layout: React.FC = function Layout(props) {
  const { children } = props;
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
};
