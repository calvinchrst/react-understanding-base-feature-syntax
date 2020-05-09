import React from "react";

const withClass = (WrappingComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappingComponent />
    </div>
  );
};

export default withClass;
