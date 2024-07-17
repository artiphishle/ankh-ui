export function ThreeColumnLayout(){
  const styles = [
    [".container", "display", "grid"],
    [".container", "grid-template-rows", "auto 1fr auto"],
    [".container", "grid-template-columns", "1fr"],
    [".header", "grid-column", "1 / -1"],
    [".header", "background-color", "#f1f1f1"],
    [".header", "padding", "1rem"],
    [".footer", "grid-column", "1 / -1"],
    [".footer", "background-color", "#f1f1f1"],
    [".footer", "padding", "1rem"],
    [".left-sidebar", "background-color", "#f9f9f9"],
    [".left-sidebar", "padding", "1rem"],
    [".right-sidebar", "background-color", "#f9f9f9"],
    [".right-sidebar", "padding", "1rem"],
    [".main", "padding", "1rem"],
  ];
  
  /*
  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 3fr 1fr;
      grid-template-rows: auto 1fr auto;
    }
  
    .left-sidebar {
      grid-row: 2;
    }
  
    .main {
      grid-row: 2;
    }
  
    .right-sidebar {
      grid-row: 2;
    }
  }
  */


  return <div className="container">
    <div className="header">Header</div>
    <div className="left-sidebar">Left Sidebar</div>
    <div className="main">Main Content</div>
    <div className="right-sidebar">Right Sidebar</div>
    <div className="footer">Footer</div>
</div>

}