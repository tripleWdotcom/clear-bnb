const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ClearBnB</h1>
      <div className="links">
        <a>Home</a>
        <a style={{
          color: "whitesmoke",
          backgroundColor: "crimson",
          borderRadius: "8px"
        }}>Sign in</a>
      </div>
    </nav>
  );
}

export default Navbar;
