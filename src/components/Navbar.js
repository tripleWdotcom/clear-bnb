const Navbar = () => {
  return ( 
      <nav className="navbar">
        <h1>ClearBnB</h1>
        <div className="links">
        <p>Home</p>
        <p style={{
          color: "whitesmoke",
          backgroundColor:"crimson",
          borderRadius: "8px"
        }}>Sign in</p>
        </div>
      </nav>
   );
}
 
export default Navbar;

// <p> - change it later when other 
// components for Navbar is done