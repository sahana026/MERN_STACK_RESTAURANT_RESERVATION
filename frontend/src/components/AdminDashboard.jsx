import { useState, useEffect } from "react";

const AdminDashboard = ({ user, onLogout, onNavigate }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/reservation/all");
      const data = await response.json();

      if (data.success) {
        setReservations(data.data);
      } else {
        setError("Failed to fetch reservations");
      }
    } catch (err) {
      setError("Error fetching data: " + err.message);
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
          borderBottom: "2px solid #333",
        }}
      >
        <h1 style={{ color: "#333", margin: 0, fontSize: "32px" }}>
          Admin Dashboard
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ color: "#666", fontSize: "14px" }}>
            Welcome, {user?.name}
          </span>
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <h2 style={{ margin: 0, color: "#333" }}>
              All Reservations ({reservations.length})
            </h2>
            <button
              onClick={fetchReservations}
              style={{
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Refresh
            </button>
          </div>

          {loading && (
            <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
              Loading reservations...
            </div>
          )}

          {error && (
            <div
              style={{
                color: "#d32f2f",
                padding: "15px",
                backgroundColor: "#ffebee",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              {error}
            </div>
          )}

          {!loading && reservations.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
              No reservations yet
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "14px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                      #
                    </th>
                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                      First Name
                    </th>
                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                      Last Name
                    </th>
                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                      Email
                    </th>
                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                      Phone
                    </th>
                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                      Date
                    </th>
                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                      Time
                    </th>
                    <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold" }}>
                      Booked
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation, index) => (
                    <tr
                      key={reservation._id}
                      style={{
                        borderBottom: "1px solid #ddd",
                        backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                      }}
                    >
                      <td style={{ padding: "12px" }}>{index + 1}</td>
                      <td style={{ padding: "12px" }}>{reservation.firstName}</td>
                      <td style={{ padding: "12px" }}>{reservation.lastName}</td>
                      <td style={{ padding: "12px" }}>{reservation.email}</td>
                      <td style={{ padding: "12px" }}>{reservation.phone}</td>
                      <td style={{ padding: "12px" }}>{reservation.date}</td>
                      <td style={{ padding: "12px" }}>{reservation.time}</td>
                      <td style={{ padding: "12px", color: "#666", fontSize: "12px" }}>
                        {new Date(reservation.createdAt).toLocaleDateString() +
                          " " +
                          new Date(reservation.createdAt).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Data Storage Info */}
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#e3f2fd",
            padding: "20px",
            borderRadius: "8px",
            borderLeft: "4px solid #2196f3",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", color: "#1976d2" }}>
            💾 Data Storage Information
          </h3>
          <p style={{ margin: "8px 0", color: "#555" }}>
            <strong>Database:</strong> MongoDB (restaurant_reservation)
          </p>
          <p style={{ margin: "8px 0", color: "#555" }}>
            <strong>Collection:</strong> reservations
          </p>
          <p style={{ margin: "8px 0", color: "#555" }}>
            <strong>Connection:</strong> mongodb://localhost:27017
          </p>
          <p style={{ margin: "8px 0", color: "#555" }}>
            <strong>Total Reservations:</strong> {reservations.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
