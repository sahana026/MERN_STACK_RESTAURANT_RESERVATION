const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "#ecf0f1",
        padding: "40px 30px",
        marginTop: "60px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginBottom: "30px",
            paddingBottom: "30px",
            borderBottom: "1px solid #34495e",
          }}
        >
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "15px" }}>
              🍽️ Our Restaurant
            </h3>
            <p style={{ lineHeight: "1.8" }}>
              Experience fine dining at its best. We serve the most delicious dishes with premium quality ingredients.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
              Contact Info
            </h3>
            <p style={{ marginBottom: "8px" }}>📍 123 Main Street, Downtown</p>
            <p style={{ marginBottom: "8px" }}>📞 +1 (555) 123-4567</p>
            <p style={{ marginBottom: "8px" }}>🕐 Open: 5:00 PM - 12:00 AM</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            textAlign: "center",
          }}
        >
          <div>
            <p style={{ margin: 0 }}>Developed with ❤️ for Food Lovers</p>
          </div>
          <div>
            <p style={{ margin: 0 }}>© 2025 Our Restaurant. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;