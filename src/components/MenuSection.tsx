import { useState, useEffect } from 'react';
import type { MenuItem } from '../data/menuItems';

interface CartItem extends MenuItem {
  quantity: number;
}

interface Props {
  menuItems: MenuItem[];
  categories: { id: string; label: string; emoji: string }[];
}

export default function MenuSection({ menuItems, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('doncar-cart') || '[]');
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    address: '',
    payment: 'Efectivo',
    reference: '',
    notes: '',
  });

  useEffect(() => {
    localStorage.setItem('doncar-cart', JSON.stringify(cart));
    document.dispatchEvent(new CustomEvent('cart:update', {
      detail: { count: cart.reduce((t, i) => t + i.quantity, 0) }
    }));
  }, [cart]);

  useEffect(() => {
    const open = () => setIsCartOpen(true);
    document.addEventListener('cart:open', open);
    return () => document.removeEventListener('cart:open', open);
  }, []);

  function addToCart(item: MenuItem) {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function updateQuantity(id: number, q: number) {
    if (q <= 0) {
      removeFromCart(id);
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: q } : i));
    }
  }

  function removeFromCart(id: number) {
    setCart(prev => prev.filter(i => i.id !== id));
  }

  function getTotalPrice() {
    return cart.reduce((t, i) => t + i.price * i.quantity, 0);
  }

  function getTotalItems() {
    return cart.reduce((t, i) => t + i.quantity, 0);
  }

  function sendWhatsAppOrder() {
    if (!orderForm.name.trim() || !orderForm.address.trim()) return;

    const lines = cart.map(i => `• ${i.name} x${i.quantity} — $${i.price * i.quantity}`).join('\n');
    const total = getTotalPrice();

    const msg = encodeURIComponent(
      `🍔 *PEDIDO CAFÉ DONCAR* 🍔\n\n` +
      `👤 *Cliente:* ${orderForm.name}\n` +
      `📍 *Dirección:* ${orderForm.address}\n` +
      `${orderForm.reference ? `🏠 *Referencia:* ${orderForm.reference}\n` : ''}` +
      `💳 *Pago:* ${orderForm.payment}\n\n` +
      `📋 *DETALLE:*\n${lines}\n\n` +
      `💰 *TOTAL: $${total}*\n\n` +
      `${orderForm.notes ? `📝 *Notas:* ${orderForm.notes}\n\n` : ''}` +
      `🕒 ${new Date().toLocaleString('es-AR')}\n\n` +
      `¡Gracias por elegir Café Doncar! 🚀`
    );

    window.open(`https://wa.me/5492804518716?text=${msg}`, '_blank');
    setCart([]);
    setIsCartOpen(false);
    setOrderForm({ name: '', address: '', payment: 'Efectivo', reference: '', notes: '' });
  }

  const filtered = menuItems.filter(item => {
    const matchCat = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Barra de búsqueda */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 border outline-none focus:border-orange-500/50"
          style={{ background: '#181818', borderColor: 'rgba(255,255,255,0.1)' }}
        />
      </div>

      {/* Filtros de categoría */}
      <div className="flex gap-3 overflow-x-auto pb-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === cat.id ? 'text-black font-bold' : 'text-white/60 hover:text-white'
            }`}
            style={{
              background: selectedCategory === cat.id
                ? 'linear-gradient(135deg, #FF4D00, #FFB800)'
                : 'rgba(255,255,255,0.05)',
            }}
          >
            <span>{cat.emoji}</span> {cat.label}
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:border-orange-500/30"
            style={{ background: '#181818', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-900">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `/placeholder.svg?text=${encodeURIComponent(item.name)}`;
                }}
              />
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-syne font-bold text-white text-sm leading-tight">{item.name}</h3>
                {item.popular && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold ml-2 flex-shrink-0"
                    style={{ background: 'rgba(255,77,0,0.2)', color: '#FF4D00' }}
                  >
                    Popular
                  </span>
                )}
              </div>
              <p className="text-white/40 text-xs mb-3 line-clamp-2">{item.description}</p>

              <div className="flex items-center justify-between">
                <span className="font-black text-lg" style={{ color: '#FFB800' }}>${item.price}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 rounded-xl text-white text-sm font-bold transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #FF4D00, #FFB800)' }}
                >
                  + Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sin resultados */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-white/40">
          <div className="text-4xl mb-4">🔍</div>
          <p>No encontramos productos para "{searchTerm}"</p>
        </div>
      )}

      {/* ===== DRAWER DEL CARRITO ===== */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Panel */}
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md flex flex-col border-l"
            style={{ background: '#111111', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            {/* Header carrito */}
            <div
              className="flex items-center justify-between p-5 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <h3 className="font-syne font-black text-xl text-white">🛒 Tu Pedido</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-white/50 hover:text-white text-2xl">
                ×
              </button>
            </div>

            {/* Contenido scrollable */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">🛒</div>
                  <p className="text-white/50">Tu carrito está vacío</p>
                </div>
              ) : (
                <>
                  {/* Items */}
                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{item.name}</p>
                        <p className="font-bold" style={{ color: '#FFB800' }}>${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg text-white font-bold flex items-center justify-center"
                          style={{ background: 'rgba(255,77,0,0.3)' }}
                        >
                          −
                        </button>
                        <span className="text-white font-bold w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg text-white font-bold flex items-center justify-center"
                          style={{ background: 'rgba(255,184,0,0.3)' }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/30 hover:text-red-400 ml-1"
                      >
                        🗑
                      </button>
                    </div>
                  ))}

                  {/* Total */}
                  <div
                    className="flex justify-between items-center py-3 border-t"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <span className="text-white font-bold">Total</span>
                    <span className="font-black text-2xl" style={{ color: '#FFB800' }}>
                      ${getTotalPrice()}
                    </span>
                  </div>

                  {/* ===== FORMULARIO ===== */}
                  <div className="space-y-4 pt-2">
                    <h4 className="font-syne font-bold text-white">Datos del pedido</h4>

                    <input
                      type="text"
                      placeholder="Tu nombre *"
                      value={orderForm.name}
                      onChange={e => setOrderForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 border outline-none"
                      style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.1)' }}
                    />

                    <input
                      type="text"
                      placeholder="Dirección de entrega *"
                      value={orderForm.address}
                      onChange={e => setOrderForm(f => ({ ...f, address: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 border outline-none"
                      style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.1)' }}
                    />

                    <input
                      type="text"
                      placeholder="Referencia / piso / depto (opcional)"
                      value={orderForm.reference}
                      onChange={e => setOrderForm(f => ({ ...f, reference: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 border outline-none"
                      style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.1)' }}
                    />

                    <div>
                      <p className="text-white/50 text-sm mb-2">Método de pago</p>
                      <div className="flex gap-2">
                        {['Efectivo', 'Transferencia', 'Mercado Pago'].map(method => (
                          <button
                            key={method}
                            onClick={() => setOrderForm(f => ({ ...f, payment: method }))}
                            className="flex-1 py-2 rounded-xl text-xs font-bold transition-all"
                            style={{
                              background: orderForm.payment === method
                                ? 'linear-gradient(135deg, #FF4D00, #FFB800)'
                                : 'rgba(255,255,255,0.05)',
                              color: orderForm.payment === method ? 'black' : 'rgba(255,255,255,0.6)',
                            }}
                          >
                            {method === 'Efectivo' ? '💵' : method === 'Transferencia' ? '🏦' : '💙'} {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <textarea
                      placeholder="Aclaraciones del pedido (opcional)"
                      value={orderForm.notes}
                      onChange={e => setOrderForm(f => ({ ...f, notes: e.target.value }))}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 border outline-none resize-none"
                      style={{ background: '#1a1a1a', borderColor: 'rgba(255,255,255,0.1)' }}
                    />

                    <button
                      onClick={sendWhatsAppOrder}
                      disabled={!orderForm.name.trim() || !orderForm.address.trim()}
                      className="w-full py-4 rounded-xl font-black text-white text-lg transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                      style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                    >
                      💬 Enviar pedido por WhatsApp
                    </button>
                    <p className="text-white/30 text-xs text-center">* Los campos con * son obligatorios</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
