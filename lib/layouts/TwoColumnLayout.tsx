import React from "react";

export function TwoColumnLayout(){
  const style = [
    [".container", "display", "grid"],
    [".container", "grid-template-rows", "auto 1fr auto"],
    [".container", "grid-template-columns", "1fr"],
    [".header", "grid-column", "1 / -1"],
    [".header", "background-color", "#f1f1f1"],
    [".header", "padding", "1rem"],
    [".footer", "grid-column", "1 / -1"],
    [".footer", "background-color", "#f1f1f1"],
    [".footer", "padding", "1rem"],
    [".sidebar", "background-color", "#f9f9f9"],
    [".sidebar", "padding", "1rem"],
    [".main", "min-width", "1rem"],
    ["", "", ""],
    ["", "", ""],
  ];

  /*
  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto 1fr auto;
    }
  
    .sidebar {
      grid-row: 2;
    }
  
    .main {
      grid-row: 2;
    }
  }
 */

  return <div className="container">
    <div className="header">Header</div>
    <div className="sidebar">Sidebar</div>
    <div className="main">Main Content</div>
    <div className="footer">Footer</div>
  </div>
}