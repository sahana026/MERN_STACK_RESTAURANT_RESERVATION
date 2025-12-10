const About = () => {
  const handleExploreMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        padding: "60px 30px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
            About Us
          </h1>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "15px", lineHeight: "1.8" }}>
            The only thing we're serious about is food.
          </p>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "25px", lineHeight: "1.8" }}>
            Welcome to our restaurant! We pride ourselves on delivering exceptional dining experiences with the finest cuisine. Our experienced team of chefs uses only premium, fresh ingredients to create dishes that delight your senses. From traditional recipes to modern innovations, every plate is a masterpiece prepared with passion and care.
          </p>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "25px", lineHeight: "1.8" }}>
            With over 15 years of experience in the hospitality industry, we've built a reputation for excellence, outstanding service, and a warm, welcoming atmosphere. Whether you're celebrating a special occasion or enjoying a casual meal with friends and family, we're committed to making your experience unforgettable.
          </p>
          <button
            onClick={handleExploreMenu}
            style={{
              padding: "12px 30px",
              backgroundColor: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#c0392b")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#e74c3c")}
          >
            Explore Menu →
          </button>
        </div>

        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src="/about.png"
            alt="Restaurant"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
