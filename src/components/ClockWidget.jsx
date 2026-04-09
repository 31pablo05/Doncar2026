import { useState, useEffect } from 'react';

function getIsOpen(h, m, day) {
  const min = h * 60 + m;
  // Sab/Dom/Lun 00:00–00:30: cierre tardío del turno noche VIER-SAB-DOM
  if ((day === 6 || day === 0 || day === 1) && min < 30) return true;
  // Lunes: solo noche 19:30–00:00
  if (day === 1) return min >= 19 * 60 + 30;
  // Mar–Jue: mediodía 11:30–14:30 + noche 19:30–00:00
  if (day >= 2 && day <= 4)
    return (min >= 11 * 60 + 30 && min < 14 * 60 + 30) || min >= 19 * 60 + 30;
  // Vier–Dom: mediodía 11:30–14:30 + noche 19:30–00:30 (pasa medianoche)
  if (day === 5 || day === 6 || day === 0)
    return (min >= 11 * 60 + 30 && min < 14 * 60 + 30) || min >= 19 * 60 + 30;
  return false;
}

export default function ClockWidget() {
  const [time, setTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function update() {
      const now = new Date();
      const argStr = now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
      const arg = new Date(argStr);
      const h = arg.getHours();
      const m = arg.getMinutes();
      const s = arg.getSeconds();
      const day = arg.getDay();
      setTime(`${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
      setIsOpen(getIsOpen(h, m, day));
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
