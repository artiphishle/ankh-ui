export function NestedGridLayout(){
  const styles = [
    [".container", "display", "grid"],
    [".container", "grid-template-rows", "auto 1fr auto"],
    [".container", "min-height", "100vh"],
    [".header", "background-color", "#f1f1f1"],
    [".header", "padding", "1rem"],
    [".footer", "background-color", "#f1f1f1"],
    [".footer", "padding", "1rem"],
    [".content", "display", "grid"],
    [".content", "grid-template-rows", "auto 1fr"],
    [".content", "grid-template-columns", "1fr"],
    [".subheader", "background-color", "#e2e2e2"],
    [".subheader", "padding", "1rem"],
    [".main", "padding", "1rem"],
    [".sidebar", "background-color", "#f9f9f9"],
    [".sidebar", "padding", "1rem"],
  ];
 
  /*
  @media (min-width: 768px) {
    .content {
      grid-template-columns: 3fr 1fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "subheader subheader"
        "main sidebar";
    }
  
    .subheader {
      grid-area: subheader;
    }
  
    .main {
      grid-area: main;
    }
  
    .sidebar {
      grid-area: sidebar;
    }
  }
  */

  return (<div className="container">
  <div className="header">Header</div>
  <div className="content">
    <div className="subheader">Subheader</div>
    <div className="main">Main Content</div>
    <div className="sidebar">Sidebar</div>
  </div>
  <div className="footer">Footer</div>
</div>);

}