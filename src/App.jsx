import React, { useState, useEffect } from "react";
import image from "./assets/images/ramadhan5.png";
import smakzieLogo from "./assets/images/logo_smakzie.png";
import ziekirLogo from "./assets/images/logo_ziekir.png";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route,createBrowserRouter, Navigate, RouterProvider, } from 'react-router-dom';
function Home() {
  const [downloadUrl, setDownloadUrl] = useState("#");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/repos/Rafa-Smart/smartren/releases/latest")
      .then((res) => res.json())
      .then((data) => {
        if (data.assets && data.assets.length > 0) {
          setDownloadUrl(data.assets[0].browser_download_url);
          console.log(data.assets[0].browser_download_url)
        } else {
          setDownloadUrl(
            "https://github.com/Rafa-Smart/smartren/releases/download/latest/ziekirplus.apk"
          );
        }
        setLoading(false);
      })
      .catch(() => {
        setDownloadUrl(
          "https://github.com/Rafa-Smart/smartren/releases/download/latest/ziekirplus.apk",
        );
        setLoading(false);
      });
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    if (downloadUrl === "#") return;

    if (window.Swal) {
      window.Swal.fire({
        title: "Download Dimulai!",
        text: "Aplikasi Ziekir sedang diunduh. Terima kasih!",
        icon: "success",
        iconColor: "#10b981",
        timer: 2000,
        showConfirmButton: false,
        background: "#f0fdf4",
        color: "#064e3b",
        customClass: {
          popup: "rounded-3xl shadow-2xl",
          title: "font-bold text-2xl",
          htmlContainer: "text-base",
        },
        buttonsStyling: false,
      });
    } else {
      alert("Download dimulai!");
    }

    window.location.href = downloadUrl;
  };

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

        .container {
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

        @media (min-width: 768px) {
          .container {
            flex-direction: row;
            gap: 4rem;
            padding: 2rem;
          }
        }

        .left-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .logos {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          margin-bottom: 3rem;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .logos {
            justify-content: flex-start;
          }
        }

        .logo-item {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(8px);
          padding: 0.7rem 1.8rem 0.7rem 1.5rem;
          border-radius: 100px;
          box-shadow: 0 15px 30px -10px rgba(5,150,105,0.15), 0 0 0 1px rgba(5,150,105,0.1) inset;
          border: 1px solid rgba(5,150,105,0.25);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          max-width: 100%;
        }

        .logo-item:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 25px 40px -12px rgba(5,150,105,0.3), 0 0 0 1px rgba(5,150,105,0.3) inset;
          background: white;
        }

        .logo-img {
          height: 48px;
          width: auto;
          margin-right: 0.9rem;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 4px 4px rgba(0,0,0,0.05));
        }

        .logo-item:hover .logo-img {
          transform: scale(1.1) rotate(2deg);
        }

        .logo-text {
          font-weight: 700;
          color: #047857;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(5,150,105,0.1);
        }

        .content-left {
          text-align: center;
        }

        @media (min-width: 768px) {
          .content-left {
            text-align: left;
          }
        }

        .title {
          font-size: 2.6rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.2rem;
          color: #064e3b;
        }

        .title span {
          color: #059669;
          position: relative;
          display: inline-block;
          /* text-shadow dihapus */
        }

        .title span::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #059669, #34d399, #059669);
          border-radius: 3px;
          opacity: 0.4;
        }

        @media (min-width: 640px) {
          .title {
            font-size: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .title {
            font-size: 3.5rem;
          }
        }

        .description {
          font-size: 1.2rem;
          color: #065f46;
          max-width: 36rem;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2.2rem;
          line-height: 1.7;
          font-weight: 400;
          /* text-shadow dihapus */
        }

        @media (min-width: 768px) {
          .description {
            margin-left: 0;
            margin-right: 0;
          }
        }

        /* Penyesuaian tombol agar sama besar */
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: stretch; /* memenuhi lebar container */
        }

        @media (min-width: 640px) {
          .button-group {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (min-width: 768px) {
          .button-group {
            justify-content: flex-start;
          }
        }

        .btn {
          display: inline-block;
          padding: 0.9rem 1.2rem; /* padding horizontal lebih kecil agar fleksibel */
          font-weight: 600;
          text-decoration: none;
          border-radius: 60px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          border: 2px solid transparent;
          cursor: pointer;
          font-size: 1.05rem;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          width: 100%; /* lebar penuh di mobile */
        }

        @media (min-width: 640px) {
          .btn {
            width: auto; /* tidak full width */
            flex: 1 1 0; /* bagi rata lebar */
            min-width: 200px; /* lebar minimum agar konsisten */
          }
        }

        @media (min-width: 768px) {
          .btn {
            flex: 0 1 auto; /* di desktop, biarkan sesuai konten, atau pertahankan min-width */
            min-width: 200px;
          }
        }

        .btn-primary {
          background: linear-gradient(135deg, #059669, #10b981);
          color: white;
          box-shadow: 0 12px 20px -10px rgba(5,150,105,0.4);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #047857, #059669);
          transform: translateY(-3px);
          box-shadow: 0 20px 25px -8px rgba(5,150,105,0.5);
        }

        .btn-outline {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(4px);
          border: 2px solid #059669;
          color: #047857;
          box-shadow: none;
        }

        .btn-outline:hover {
          background: white;
          transform: translateY(-3px);
          border-color: #047857;
          color: #065f46;
          box-shadow: 0 15px 20px -8px rgba(5,150,105,0.3);
        }

        .content-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 40%, rgba(5,150,105,0.2), transparent 70%);
          border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%;
          animation: morph 16s infinite alternate ease-in-out;
          z-index: -1;
          filter: blur(10px);
        }

        .image-wrapper::after {
          content: '';
          position: absolute;
          width: 110%;
          height: 110%;
          background: radial-gradient(circle at 70% 30%, rgba(16,185,129,0.1), transparent 70%);
          border-radius: 50% 50% 40% 60% / 50% 40% 60% 50%;
          animation: morph 18s infinite alternate-reverse ease-in-out;
          z-index: -1;
          filter: blur(15px);
        }

        @keyframes morph {
          0% { border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%; }
          100% { border-radius: 60% 40% 40% 60% / 50% 40% 60% 50%; }
        }

        .illustration {
          width: 100%;
          max-width: 45rem;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 25px 30px -10px rgba(5,150,105,0.25)) drop-shadow(0 10px 15px -5px rgba(0,0,0,0.1));
          transition: transform 0.6s ease;
        }

        .illustration:hover {
          transform: scale(1.03) translateY(-5px);
        }

        @media (min-width: 768px) {
          .illustration {
            max-width: 50rem;
          }
        }

        @media (min-width: 1280px) {
          .illustration {
            max-width: 55rem;
          }
        }

        .accent-line {
          width: 6rem;
          height: 0.3rem;
          background: linear-gradient(90deg, #059669, #34d399, #059669);
          margin-top: 2.2rem;
          display: none;
          border-radius: 1rem;
        }

        @media (min-width: 768px) {
          .accent-line {
            display: block;
          }
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

        @media (max-width: 640px) {
          .logos {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .logo-item {
            padding: 0.5rem 1.2rem;
          }
          .logo-img {
            height: 36px;
            margin-right: 0.6rem;
          }
          .logo-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 380px) {
          .logo-item {
            padding: 0.4rem 0.8rem;
          }
          .logo-img {
            height: 30px;
          }
          .logo-text {
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Elemen latar */}
      <div className="pattern-bg"></div>
      <div className="floating-ornament orn-1"></div>
      <div className="floating-ornament orn-2"></div>
      <div className="floating-ornament orn-3"></div>
      <div className="crescent crescent-1">☪︎</div>
      <div className="crescent crescent-3">☪︎</div>
      <div className="crescent crescent-4">☪︎</div>
      <div className="crescent crescent-2">☪︎</div>

      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>

      <div className="container">
        <div className="left-wrapper">
          <div className="logos">
            <div className="logo-item">
              <img src={smakzieLogo} alt="Smakzie" className="logo-img" />
              <span className="logo-text">SMKN 1 CIANJUR</span>
            </div>
            <div className="logo-item">
              <img src={ziekirLogo} alt="Ziekir" className="logo-img" />
              <span className="logo-text">ZieKIR+</span>
            </div>
          </div>

          <div className="content-left">
            <h1 className="title">
              Selamat Datang di <span>Ramadhan </span>
            </h1>
            <p className="description">
              Ramadhan bukan sekadar ibadah, tetapi momentum perubahan. Bersama
              SMARTREN 2026 SMAKZIE, tingkatkan keimanan, ketakwaan, dan
              karakter melalui kajian, pesantren kilat.
            </p>

            <div className="button-group">
              <a
                href={downloadUrl}
                onClick={handleDownload}
                className="btn btn-primary"
              >
                {loading ? "Memuat..." : "Download ZieKIR+"}
              </a>
              <a
                href="https://drive.google.com/file/d/14wcSx83vTRArvj1rbeuHP9-0oHqoqOLc/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Alternative Link
              </a>
            </div>

            <div className="accent-line"></div>
          </div>
        </div>

        <div className="content-right">
          <div className="image-wrapper">
            <img
              src={image}
              alt="Ilustrasi Ramadhan"
              className="illustration"
            />
          </div>
        </div>
      </div>

      <div className="footer">
        © 2026 <span>ZieKIR+</span> — SMKN 1 Cianjur
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/download" replace />,
  },
  {
    path: "/download",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
