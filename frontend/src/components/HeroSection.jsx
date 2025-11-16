const HeroSection = ({ onNavigate }) => {
  return (
    <section
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "100px 30px",
        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1517521271305-cd4628902046?w=1200')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "56px", fontWeight: "bold", marginBottom: "20px" }}>
        Welcome to Our Restaurant
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "40px", maxWidth: "600px", lineHeight: "1.6" }}>
        Experience the finest dining with our premium food and outstanding service. Reserve your table today!
      </p>
      <button
        onClick={() => onNavigate("reservation")}
        style={{
          padding: "15px 40px",
          backgroundColor: "#e74c3c",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#c0392b";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#e74c3c";
          e.target.style.transform = "scale(1)";
        }}
      >
        Reserve Now
      </button>
    </section>
  );
};

export default HeroSection;
