function Hero() {
  return (
    <div className="container">
      <div className="glass flex">
        <div>
          <h1 style={{ color: "white", fontSize: "2.5rem" }}>
            SmartTren Ramadhan
          </h1>

          <p style={{ color: "#d1fae5", marginTop: 15 }}>
            Monitoring santri SMKN 1 Cianjur selama bulan Ramadhan.
            Meningkatkan keimanan, ketakwaan, dan kebersamaan.
          </p>

          <button
            style={{
              marginTop: 20,
              padding: "12px 24px",
              borderRadius: 10,
              border: "none",
              background: "#10b981",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Download Aplikasi
          </button>
        </div>

        <div className="hero-img">
          {/* ilustrasi bebas, bisa masjid */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/2942/2942926.png"
            alt="Mosque"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
