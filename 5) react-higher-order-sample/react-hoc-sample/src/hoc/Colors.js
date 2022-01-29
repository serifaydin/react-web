import React from 'react';

function Colors(WrappedComponent) {

  return (props) => {
    return (
      <div style={{
        backgroundColor: "red",
        border: "2px solid blue",
        width: "200px",
        height: "200px",
        padding: "60px",
        background: "#1abc9c",
        color: "white",
        fontSize: "30px"
      }}>
        <button>HOC Button</button>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Colors;