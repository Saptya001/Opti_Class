import React from "react";
import { X } from "lucide-react"; // for close icon

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        )}

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
