'use client';
import { useState } from 'react';
import { Bell } from 'lucide-react';

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative p-2 rounded-full hover:bg-gray-100 transition"
      >
        <Bell className="w-6 h-6 text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border p-3 z-50">
          <h3 className="font-semibold text-sm border-b pb-2 mb-2">알림 센터</h3>
          <p className="text-xs text-gray-500 py-2 text-center">새로운 알림이 없습니다.</p>
        </div>
      )}
    </div>
  );
}