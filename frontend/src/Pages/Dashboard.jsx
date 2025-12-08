import { useState, useEffect } from 'react';

const Dashboard = ({ user, onLogout, onNavigate }) => {
  const [reservations, setReservations] = useState([]);
  const [stats, setStats] = useState({
    totalReservations: 0,
    todayReservations: 0,
    upcomingReservations: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    const endpoints = [
      'http://localhost:5000/reservation/all',
      'http://localhost:5000/api/v1/reservation/all',
    ];

    // Reset state
    setReservations([]);
    setStats({
      totalReservations: 0,
      todayReservations: 0,
      upcomingReservations: 0,
    });
    setError('');
    setLoading(true);

    for (const url of endpoints) {
      try {
        const response = await fetch(url);
        if (!response.ok) continue;
        const data = await response.json();
        if (data && data.success && Array.isArray(data.data)) {
          const reservationsData = data.data || [];
          setReservations(reservationsData);

          const today = new Date().toISOString().split('T')[0];
          const todayReservations = reservationsData.filter((r) => r.date === today).length;
          const upcomingReservations = reservationsData.filter((r) => new Date(r.date) > new Date(today)).length;

          setStats({
            totalReservations: reservationsData.length,
            todayReservations,
            upcomingReservations,
          });
          setLoading(false);
          return;
        }
      } catch (err) {
        console.error(`Fetch failed for ${url}:`, err.message);
        continue;
      }
    }

    setError('Failed to fetch dashboard data from server');
    setLoading(false);
  };

  const filteredReservations = filterDate
    ? reservations.filter((r) => r.date === filterDate)
    : reservations;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
          marginBottom: '40px',
          paddingBottom: '20px',
          borderBottom: '2px solid #333',
        }}
      >
        <div>
          <h1 style={{ color: '#333', margin: 0, fontSize: '36px' }}>
            📊 Dashboard
          </h1>
          <p style={{ color: '#666', margin: '5px 0 0 0', fontSize: '14px' }}>
            Welcome back, {user?.name || 'User'}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button
            onClick={fetchDashboardData}
            disabled={loading}
            style={{
              padding: '10px 20px',
              backgroundColor: loading ? '#666' : '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {loading ? 'Refreshing...' : '🔄 Refresh'}
          </button>
          <button
            onClick={() => onNavigate('home')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2196f3',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            Back to Home
          </button>
          <button
            onClick={onLogout}
            style={{
              padding: '10px 20px',
              backgroundColor: '#d32f2f',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Stats Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {[
            {
              label: 'Total Reservations',
              value: stats.totalReservations,
              icon: '📋',
              color: '#2196f3',
            },
            {
              label: "Today's Reservations",
              value: stats.todayReservations,
              icon: '📅',
              color: '#4caf50',
            },
            {
              label: 'Upcoming Reservations',
              value: stats.upcomingReservations,
              icon: '🔜',
              color: '#ff9800',
            },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '25px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderLeft: `4px solid ${stat.color}`,
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>
                {stat.icon}
              </div>
              <div
                style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: stat.color,
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* User Info Card */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '40px',
            borderLeft: '4px solid #333',
          }}
        >
          <h2 style={{ margin: '0 0 20px 0', color: '#333', fontSize: '20px' }}>
            👤 User Information
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: '#666',
                  marginBottom: '5px',
                  fontWeight: 'bold',
                }}
              >
                Name
              </label>
              <span style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>
                {user?.name || 'N/A'}
              </span>
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: '#666',
                  marginBottom: '5px',
                  fontWeight: 'bold',
                }}
              >
                Email
              </label>
              <span style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>
                {user?.email || 'N/A'}
              </span>
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: '#666',
                  marginBottom: '5px',
                  fontWeight: 'bold',
                }}
              >
                Role
              </label>
              <span
                style={{
                  fontSize: '16px',
                  color: '#333',
                  fontWeight: 'bold',
                  backgroundColor: '#e3f2fd',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',
                }}
              >
                {user?.role || 'User'}
              </span>
            </div>
          </div>
        </div>

        {/* Reservations Section */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              flexWrap: 'wrap',
              gap: '15px',
            }}
          >
            <div>
              <h2 style={{ margin: 0, color: '#333', fontSize: '20px' }}>
                📅 Recent Reservations
              </h2>
              <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#666' }}>
                {filteredReservations.length} reservation(s)
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
              />
              <button
                onClick={() => {
                  setFilterDate('');
                  fetchDashboardData();
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#333',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Refresh
              </button>
            </div>
          </div>

          {loading && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              Loading reservations...
            </div>
          )}

          {error && (
            <div
              style={{
                color: '#d32f2f',
                padding: '15px',
                backgroundColor: '#ffebee',
                borderRadius: '4px',
                marginBottom: '20px',
              }}
            >
              {error}
            </div>
          )}

          {!loading && filteredReservations.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
              No reservations found
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '14px',
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>
                      #
                    </th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>
                      Name
                    </th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>
                      Email
                    </th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>
                      Phone
                    </th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>
                      Date & Time
                    </th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>
                      Booked
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReservations.map((reservation, index) => (
                    <tr
                      key={reservation._id}
                      style={{
                        borderBottom: '1px solid #ddd',
                        backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9',
                      }}
                    >
                      <td style={{ padding: '12px' }}>{index + 1}</td>
                      <td style={{ padding: '12px' }}>
                        {reservation.firstName} {reservation.lastName}
                      </td>
                      <td style={{ padding: '12px' }}>{reservation.email}</td>
                      <td style={{ padding: '12px' }}>{reservation.phone}</td>
                      <td style={{ padding: '12px' }}>
                        {reservation.date} at {reservation.time}
                      </td>
                      <td
                        style={{
                          padding: '12px',
                          color: '#666',
                          fontSize: '12px',
                        }}
                      >
                        {new Date(reservation.createdAt).toLocaleDateString() +
                          ' ' +
                          new Date(reservation.createdAt).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
