const Navbar = ({ user, onLogout, onNavigate, setActiveSection }) => {
  return (
    <nav
      style={{
        backgroundColor: "#2c3e50",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <h1 style={{ color: "#fff", margin: 0, fontSize: "24px", fontWeight: "bold" }}>
          🍽️ Restaurant
        </h1>
        <div style={{ display: "flex", gap: "30px" }}>
          <button
            onClick={() => setActiveSection("home")}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e74c3c")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection("menu")}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e74c3c")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveSection("about")}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e74c3c")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            About Us
          </button>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span style={{ color: "#ecf0f1", fontSize: "14px" }}>Welcome, {user?.name}</span>
        <button
          onClick={() => onNavigate("reservation")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#c0392b")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#e74c3c")}
        >
          Book Table
        </button>
        <button
          onClick={onLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#34495e",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#2c3e50")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#34495e")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
