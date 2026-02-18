import React from 'react';

function NotFound() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background: #fafdf9;
          color: #064e3b;
          line-height: 1.5;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

        .pattern-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 25% 30%, rgba(5,150,105,0.03) 0%, transparent 28%),
            radial-gradient(circle at 75% 70%, rgba(5,150,105,0.03) 0%, transparent 32%),
            repeating-linear-gradient(45deg, rgba(5,150,105,0.01) 0px, rgba(5,150,105,0.01) 2px, transparent 2px, transparent 8px);
          z-index: 0;
          pointer-events: none;
        }

        .floating-ornament {
          position: fixed;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(5,150,105,0.1) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .orn-1 {
          top: -5%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%);
          animation: float 25s infinite alternate;
        }

        .orn-2 {
          bottom: -5%;
          right: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(5,150,105,0.1) 0%, transparent 70%);
          animation: float 30s infinite alternate-reverse;
        }

        .orn-3 {
          top: 30%;
          left: 10%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%);
          animation: float 20s infinite alternate;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(4%, 4%) scale(1.1); }
        }

        .crescent {
          position: fixed;
          color: rgba(5,150,105,0.1);
          font-size: 3rem;
          z-index: 0;
          pointer-events: none;
          user-select: none;
        }

        .crescent-1 {
          top: 10%;
          right: 5%;
          transform: rotate(15deg);
        }

        .crescent-2 {
          bottom: 15%;
          left: 3%;
          transform: rotate(-10deg);
          font-size: 4rem;
        }

        .bg-accent {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 0.5rem;
          background: linear-gradient(90deg, #10b981, #34d399, #10b981, #059669);
          z-index: 10;
          box-shadow: 0 2px 15px rgba(5,150,105,0.3);
        }

        .bg-blob-1 {
          position: fixed;
          top: -15%;
          left: -10%;
          width: 45rem;
          height: 45rem;
          background: radial-gradient(circle, #d1fae5 0%, transparent 70%);
          border-radius: 9999px;
          filter: blur(120px);
          opacity: 0.2;
          z-index: 0;
          animation: blobMove 35s infinite alternate;
        }

        .bg-blob-2 {
          position: fixed;
          bottom: -15%;
          right: -10%;
          width: 45rem;
          height: 45rem;
          background: radial-gradient(circle, #a7f3d0 0%, transparent 70%);
          border-radius: 9999px;
          filter: blur(140px);
          opacity: 0.2;
          z-index: 0;
          animation: blobMove 30s infinite alternate-reverse;
        }

        @keyframes blobMove {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(6%, 6%) scale(1.15); }
        }

        .notfound-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }

        .notfound-content {
          text-align: center;
          max-width: 36rem;
        }

        .notfound-code {
          font-size: 8rem;
          font-weight: 800;
          line-height: 1;
          color: #059669;
          margin-bottom: 1rem;
          text-shadow: none; /* tanpa bayangan */
          letter-spacing: -0.02em;
        }

        @media (min-width: 640px) {
          .notfound-code {
            font-size: 10rem;
          }
        }

        .notfound-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #064e3b;
          margin-bottom: 1.5rem;
          text-shadow: none;
        }

        @media (min-width: 640px) {
          .notfound-title {
            font-size: 3rem;
          }
        }

        .notfound-description {
          font-size: 1.2rem;
          color: #065f46;
          margin-bottom: 2.5rem;
          line-height: 1.7;
          text-shadow: none;
        }

        .btn-home {
          display: inline-block;
          padding: 0.9rem 2.5rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 60px;
          background: linear-gradient(135deg, #059669, #10b981);
          color: white;
          box-shadow: 0 12px 20px -10px rgba(5,150,105,0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          border: 2px solid transparent;
          cursor: pointer;
          font-size: 1.05rem;
          letter-spacing: 0.02em;
          min-width: 200px; /* agar konsisten dengan tombol di halaman utama */
        }

        .btn-home:hover {
          background: linear-gradient(135deg, #047857, #059669);
          transform: translateY(-3px);
          box-shadow: 0 20px 25px -8px rgba(5,150,105,0.5);
        }

        .illustration-small {
          width: 160px;
          height: auto;
          margin: 0 auto 1.5rem;
          filter: drop-shadow(0 20px 25px -5px rgba(5,150,105,0.3));
        }

        .footer {
          margin: 2rem auto 1rem;
          width: fit-content;
          font-size: 0.9rem;
          color: #047857;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          padding: 0.5rem 2rem;
          border-radius: 9999px;
          border: 1px solid rgba(5,150,105,0.25);
          box-shadow: 0 8px 15px -5px rgba(5,150,105,0.2);
          font-weight: 500;
          letter-spacing: 0.02em;
          text-align: center;
        }

        .footer span {
          color: #059669;
          font-weight: 700;
        }
      `}</style>

      {/* Elemen latar */}
      <div className="pattern-bg"></div>
      <div className="floating-ornament orn-1"></div>
      <div className="floating-ornament orn-2"></div>
      <div className="floating-ornament orn-3"></div>
      <div className="crescent crescent-1">☪︎</div>
      <div className="crescent crescent-2">☪︎</div>
 
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>

      <div className="notfound-container">
        <div className="notfound-content">
          {/* Ilustrasi kecil (opsional, bisa dihapus jika tidak ada gambar) */}
          <img 
            src="../images/logo_ziekir.png" 
            alt="Ilustrasi Ramadhan" 
            
            className="illustration-small" 
          />
          <div className="notfound-code">404</div>
          <h1 className="notfound-title">Halaman Tidak Ditemukan</h1>
          <p className="notfound-description">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. 
            Kembali ke beranda untuk melanjutkan menjelajah.
          </p>
          <a href="/" className="btn-home">Kembali ke Beranda</a>
        </div>
      </div>

      <div className="footer">
        © 2026 <span>Smakzie</span> & <span>Ziekir</span> — Ramadhan Berkah
      </div>
    </>
  );
}

export default NotFound;