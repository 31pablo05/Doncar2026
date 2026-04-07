import { useState, useEffect } from 'react';

export default function ClockWidget() {
  const [time, setTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function update() {
      const now = new Date();
      const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
      const arg = new Date(utcMs - (3 * 3600000));
      const h = arg.getHours();
      const m = String(arg.getMinutes()).padStart(2, '0');
      const s = String(arg.getSeconds()).padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
      setIsOpen(h >= 18 || (h === 0 && Number(m) < 30));
    }
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="font-mono font-black text-5xl md:text-6xl" style={{ color: '#FFB800' }}>
        {time}
      </div>
      <div className={`px-6 py-2 rounded-full text-sm font-bold ${
        isOpen
          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
          : 'bg-red-500/20 text-red-300 border border-red-500/30'
      }`}>
        {isOpen ? '🟢 Abierto ahora' : '🔴 Cerrado'}
      </div>
    </div>
  );
}
