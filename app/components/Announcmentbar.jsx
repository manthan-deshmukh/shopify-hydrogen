import { useState, useEffect } from "react";

const messages = [
  "🚨 Announcement: Welcome to our store!",
  "🔥 Hot Deal: Get 20% off on your first order!",
  "📦 Free shipping on orders over $50!",
  "🛍️ New arrivals just dropped – check them out!",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="announment-main">
      <div className="announcment-content">
        <p className="announcment-message">
          {messages[index]}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
