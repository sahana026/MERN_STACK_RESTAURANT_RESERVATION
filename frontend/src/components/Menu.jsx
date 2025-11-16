const Menu = () => {
  const dishes = [
    { id: 1, title: "Grilled Salmon", category: "Seafood", price: "$18", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" },
    { id: 2, title: "Beef Steak", category: "Meat", price: "$22", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop" },
    { id: 3, title: "Pasta Carbonara", category: "Italian", price: "$14", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop" },
    { id: 4, title: "Chicken Biryani", category: "Indian", price: "$12", image: "https://images.unsplash.com/photo-1584438190112-8bab933d9de2?w=300&h=300&fit=crop" },
    { id: 5, title: "Vegetable Sushi", category: "Asian", price: "$15", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop" },
    { id: 6, title: "Margherita Pizza", category: "Italian", price: "$13", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop" },
  ];

  return (
    <section
      style={{
        padding: "60px 30px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
            🍽️ POPULAR DISHES
          </h1>
          <p style={{ fontSize: "16px", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            Discover our signature dishes prepared by our experienced chefs. Each dish is made with fresh, premium ingredients and served with excellence.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {dishes.map((dish) => (
            <div
              key={dish.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={dish.image}
                alt={dish.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "20px", color: "#333" }}>
                  {dish.title}
                </h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <button
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {dish.category}
                  </button>
                  <span style={{ fontSize: "18px", fontWeight: "bold", color: "#e74c3c" }}>
                    {dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
