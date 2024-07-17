import React from 'react';

export function BasicGridLayout() {
  const style = [
    ['.container', 'display', 'grid'],
    ['.container', 'grid-template-rows', 'auto 1fr auto'],
    ['.container', 'min-height', '100vh'],
    ['.container', 'display', 'grid'],
    ['.main', 'padding', '1rem'],
    ['.header', 'background-color', '#f1f1f1'],
    ['.header', 'padding', '1rem'],
    ['.footer', 'background-color', '#f1f1f1'],
    ['.footer', 'padding', '1rem'],
  ];

  return (
    <div className="container">
      <div className="header">Header</div>
      <div className="main">Main Content</div>
      <div className="footer">Footer</div>
    </div>
  );
}
