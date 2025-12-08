import { useState } from "react";

const Reservation = ({ user, onLogout, onViewAdmin }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReservation = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/reservation/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFirstName("");
        setLastName("");
        setPhone("");
        setDate("");
        setTime("");
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(data.message || "Reservation failed");
      }
    } catch (err) {
      console.error("Reservation error:", err);
      setError("Error making reservation: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "40px",
          paddingBottom: "20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1 style={{ color: "#333", margin: 0 }}>Restaurant Reservation</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ color: "#666" }}>Welcome, {user?.name}</span>
          <button
            onClick={() => onNavigate("home")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#2196f3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Back to Home
          </button>
          <button
            onClick={onViewAdmin}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Admin Dashboard
          </button>
          <button
            onClick={onLogout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#d32f2f",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Image Section */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
            alt="Restaurant Reservation"
            style={{
              maxWidth: "100%",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <h2 style={{ color: "#333", marginBottom: "15px" }}>
            Make Your Reservation
          </h2>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Join us for an unforgettable dining experience. Reserve your table
            today and enjoy premium service at our restaurant.
          </p>
        </div>

        {/* Form Section */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
              color: "#333",
            }}
          >
            RESERVATION FORM
          </h2>

          {success && (
            <div
              style={{
                color: "#2e7d32",
                marginBottom: "20px",
                padding: "15px",
                backgroundColor: "#e8f5e9",
                borderRadius: "4px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ✓ Reservation confirmed successfully!
            </div>
          )}

          {error && (
            <div
              style={{
                color: "#d32f2f",
                marginBottom: "20px",
                padding: "15px",
                backgroundColor: "#ffebee",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleReservation}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#555",
                }}
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#555",
                }}
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#555",
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#555",
                }}
              >
                Phone Number (11 digits)
              </label>
              <input
                type="tel"
                placeholder="03001234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength="11"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: loading ? "#666" : "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background-color 0.3s",
              }}
            >
              {loading ? "Processing..." : "RESERVE NOW"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
