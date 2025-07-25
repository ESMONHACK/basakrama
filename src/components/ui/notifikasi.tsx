import React, { useEffect } from "react";

interface NotifikasiProps {
  message: string;
  type?: "success" | "error";
  show: boolean;
  onClose?: () => void;
}

export const Notifikasi: React.FC<NotifikasiProps> = ({ message, type = "success", show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 px-6 py-3 rounded-xl shadow-lg font-bold z-50 transition-all duration-300
        ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}
        animate-fade-in
      `}
      style={{ minWidth: 220 }}
    >
      {message}
    </div>
  );
};

// Tambahkan animasi fade-in di global CSS jika ingin lebih halus:
// @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
// .animate-fade-in { animation: fade-in 0.3s ease; }
