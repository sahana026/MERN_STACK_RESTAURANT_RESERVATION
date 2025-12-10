const Qualities = () => {
  const qualities = [
    {
      id: 1,
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our experienced chefs bring decades of culinary expertise to every dish.',
    },
    {
      id: 2,
      icon: '🌱',
      title: 'Fresh Ingredients',
      description: 'We source only the finest, freshest ingredients for authentic flavors.',
    },
    {
      id: 3,
      icon: '🏆',
      title: 'Award Winning',
      description: 'Recognized for excellence in cuisine and service by industry leaders.',
    },
    {
      id: 4,
      icon: '❤️',
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and care for your satisfaction.',
    },
  ];

  return (
    <section
      style={{
        padding: '60px 30px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
            🌟 Why Choose Us
          </h1>
          <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            We believe in delivering excellence in every aspect of our dining experience.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}
        >
          {qualities.map((quality) => (
            <div
              key={quality.id}
              style={{
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>
                {quality.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                {quality.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;
