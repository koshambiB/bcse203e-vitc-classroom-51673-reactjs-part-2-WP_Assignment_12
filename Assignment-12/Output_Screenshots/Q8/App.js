import React from "react";

function Header() {
  return <h1>My Website</h1>;
}

function Content() {
  return <p>This is the main content.</p>;
}

function Footer() {
  return <p>© 2025 My Website</p>;
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
