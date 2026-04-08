import { useState, useEffect } from 'react';
import type { MenuItem } from '../data/menuItems';

interface CartItem extends MenuItem {
  quantity: number;
  selectedSize?: string;
  cartKey: string;
}

interface Props {
  menuItems: MenuItem[];
  categories: { id: string; label: string; emoji: string }[];
  whatsappNumber: string;
}

export default function MenuSection({ menuItems, categories, whatsappNumber }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('doncar-cart') || '[]');
      // Filter out stale entries from old cart format that lack cartKey
      return stored.filter((i: any) => i.cartKey);
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
  const [formErrors, setFormErrors] = useState({ name: false, address: false });

  // Reset visible count when category or search changes
  useEffect(() => {
    setVisibleCount(8);
  }, [selectedCategory, searchTerm]);

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

  function addToCart(item: MenuItem, size: string, price: number) {
    const cartKey = `${item.id}-${size}`;
    setCart(prev => {
      const existing = prev.find(i => i.cartKey === cartKey);
      if (existing) {
        return prev.map(i => i.cartKey === cartKey ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, price, quantity: 1, selectedSize: size, cartKey }];
    });
  }

  function updateQuantity(cartKey: string, q: number) {
    if (q <= 0) {
      removeFromCart(cartKey);
    } else {
      setCart(prev => prev.map(i => i.cartKey === cartKey ? { ...i, quantity: q } : i));
    }
  }

  function removeFromCart(cartKey: string) {
    setCart(prev => prev.filter(i => i.cartKey !== cartKey));
  }

  function getTotalPrice() {
    return cart.reduce((t, i) => t + i.price * i.quantity, 0);
  }

  function getTotalItems() {
    return cart.reduce((t, i) => t + i.quantity, 0);
  }

  function sendWhatsAppOrder() {
    const errors = {
      name: !orderForm.name.trim(),
      address: !orderForm.address.trim(),
    };
    if (errors.name || errors.address) {
      setFormErrors(errors);
      return;
    }

    const lines = cart.map(i => {
      const sizeLabel = i.selectedSize && i.selectedSize !== 'Único' ? ` (${i.selectedSize})` : '';
      return `• ${i.name}${sizeLabel} x${i.quantity} — $${i.price * i.quantity}`;
    }).join('\n');
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

    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    setCart([]);
    setIsCartOpen(false);
    setFormErrors({ name: false, address: false });
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
          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 border outline-none transition-colors"
          style={{ background: '#0f0f1a', borderColor: 'rgba(255,255,255,0.08)' }}
          onFocus={e => (e.target.style.borderColor = 'rgba(0,229,255,0.5)')}
          onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
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
                ? 'linear-gradient(135deg, #00E5FF, #B44FFF)'
                : 'rgba(255,255,255,0.05)',
              color: selectedCategory === cat.id ? '#070710' : 'rgba(255,255,255,0.6)',
            }}
          >
            <span>{cat.emoji}</span> {cat.label}
          </button>
        ))}
      </div>

      {/* Banner informativo burgers */}
      {(selectedCategory === 'Hamburguesas' || selectedCategory === 'Todos') && (
        <div
          className="rounded-xl px-4 py-2 mb-4 text-center text-xs font-semibold"
          style={{
            background: 'rgba(0,229,255,0.08)',
            border: '1px solid rgba(0,229,255,0.2)',
            color: '#00E5FF',
          }}
        >
          💡 Todas las burgers admiten medallón extra por $4.000
        </div>
      )}

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.slice(0, visibleCount).map(item => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/25"
            style={{ background: '#0f0f1a', borderColor: 'rgba(255,255,255,0.06)' }}
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
                    style={{ background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}
                  >
                    Popular
                  </span>
                )}
              </div>
              <p className="text-white/40 text-xs mb-3 line-clamp-2">{item.description}</p>

              {item.priceDouble && !(item.sizes && item.sizes.length > 1) && (
                <p className="text-xs mb-2" style={{ color: '#B44FFF' }}>También en Doble: ${item.priceDouble}</p>
              )}
              {item.priceExtra && !(item.sizes && item.sizes.length > 1) && (
                <p className="text-xs mb-2" style={{ color: '#B44FFF' }}>800g: ${item.priceExtra}</p>
              )}

              {item.sizes && item.sizes.length > 1 ? (
                <div className="flex gap-2 mt-2">
                  {item.priceDouble !== undefined ? (
                    <>
                      <button
                        onClick={() => addToCart(item, 'Simple', item.price)}
                        className="flex-1 py-2 rounded-xl text-xs font-bold transition-all hover:scale-[1.02]"
                        style={{ background: 'rgba(0,229,255,0.12)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.3)' }}
                      >
                        Simple ${item.price}
                      </button>
                      <button
                        onClick={() => addToCart(item, 'Doble', item.priceDouble!)}
                        className="flex-1 py-2 rounded-xl text-xs font-bold transition-all hover:scale-[1.02]"
                        style={{ background: 'rgba(180,79,255,0.12)', color: '#B44FFF', border: '1px solid rgba(180,79,255,0.3)' }}
                      >
                        Doble ${item.priceDouble}
                      </button>
                    </>
                  ) : item.priceExtra !== undefined ? (
                    <>
                      <button
                        onClick={() => addToCart(item, item.sizes![0], item.price)}
                        className="flex-1 py-2 rounded-xl text-xs font-bold transition-all hover:scale-[1.02]"
                        style={{ background: 'rgba(0,229,255,0.12)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.3)' }}
                      >
                        {item.sizes![0]} ${item.price}
                      </button>
                      <button
                        onClick={() => addToCart(item, item.sizes![1], item.priceExtra!)}
                        className="flex-1 py-2 rounded-xl text-xs font-bold transition-all hover:scale-[1.02]"
                        style={{ background: 'rgba(180,79,255,0.12)', color: '#B44FFF', border: '1px solid rgba(180,79,255,0.3)' }}
                      >
                        {item.sizes![1]} ${item.priceExtra}
                      </button>
                    </>
                  ) : null}
                </div>
              ) : (
                <div className="flex items-center justify-between mt-2">
                  <span className="font-black text-lg" style={{ color: '#00E5FF' }}>${item.price}</span>
                  <button
                    onClick={() => addToCart(item, 'Único', item.price)}
                    className="px-4 py-2 rounded-xl text-xs font-bold transition-all hover:scale-[1.02]"
                    style={{ background: 'rgba(0,229,255,0.12)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.3)' }}
                  >
                    + Agregar
                  </button>
                </div>
              )}
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

      {/* Ver más / Ver menos */}
      {filtered.length > 8 && (
        <div className="flex flex-col items-center gap-2 mt-8">
          <p className="text-white/30 text-xs">
            Mostrando {Math.min(visibleCount, filtered.length)} de {filtered.length} productos
          </p>
          <div className="flex gap-3">
            {visibleCount < filtered.length && (
              <button
                onClick={() => setVisibleCount(v => v + 8)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-[1.03] active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #00E5FF, #B44FFF)',
                  color: '#070710',
                  boxShadow: '0 4px 20px rgba(0,229,255,0.25)',
                }}
              >
                Ver más <span className="text-base">⬇️</span>
              </button>
            )}
            {visibleCount > 8 && (
              <button
                onClick={() => {
                  setVisibleCount(8);
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-[1.03] active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                Ver menos ↑
              </button>
            )}
          </div>
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
            style={{ background: '#0f0f1a', borderColor: 'rgba(0,229,255,0.12)' }}
          >
            {/* Header carrito */}
            <div
              className="flex items-center justify-between p-5 border-b"
              style={{ borderColor: 'rgba(0,229,255,0.12)' }}
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
                      key={item.cartKey}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{item.name}</p>
                        {item.selectedSize && item.selectedSize !== 'Único' && (
                          <p className="text-white/50 text-xs">{item.selectedSize}</p>
                        )}
                        <p className="font-bold text-sm" style={{ color: '#00E5FF' }}>${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg font-bold flex items-center justify-center"
                          style={{ background: 'rgba(180,79,255,0.2)', color: '#B44FFF' }}
                        >
                          −
                        </button>
                        <span className="text-white font-bold w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg font-bold flex items-center justify-center"
                          style={{ background: 'rgba(0,229,255,0.2)', color: '#00E5FF' }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartKey)}
                        className="text-white/30 hover:text-red-400 ml-1"
                      >
                        🗑
                      </button>
                    </div>
                  ))}

                  {/* Total */}
                  <div
                    className="flex justify-between items-center py-3 border-t"
                    style={{ borderColor: 'rgba(0,229,255,0.12)' }}
                  >
                    <span className="text-white font-bold">Total</span>
                    <span className="font-black text-2xl" style={{ color: '#00E5FF' }}>
                      ${getTotalPrice()}
                    </span>
                  </div>

                  {/* ===== FORMULARIO ===== */}
                  <div className="space-y-4 pt-2">
                    <h4 className="font-syne font-bold text-white">Datos del pedido</h4>

                    <div>
                      <input
                        type="text"
                        placeholder="Tu nombre *"
                        value={orderForm.name}
                        onChange={e => {
                          setOrderForm(f => ({ ...f, name: e.target.value }));
                          if (formErrors.name) setFormErrors(f => ({ ...f, name: false }));
                        }}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 border outline-none transition-colors"
                        style={{ background: '#161625', borderColor: formErrors.name ? 'rgba(224,64,251,0.8)' : 'rgba(255,255,255,0.08)' }}
                      />
                      {formErrors.name && <p className="text-xs mt-1" style={{ color: '#E040FB' }}>Este campo es obligatorio</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Dirección de entrega *"
                        value={orderForm.address}
                        onChange={e => {
                          setOrderForm(f => ({ ...f, address: e.target.value }));
                          if (formErrors.address) setFormErrors(f => ({ ...f, address: false }));
                        }}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 border outline-none transition-colors"
                        style={{ background: '#161625', borderColor: formErrors.address ? 'rgba(224,64,251,0.8)' : 'rgba(255,255,255,0.08)' }}
                      />
                      {formErrors.address && <p className="text-xs mt-1" style={{ color: '#E040FB' }}>Este campo es obligatorio</p>}
                    </div>

                    <input
                      type="text"
                      placeholder="Referencia / piso / depto (opcional)"
                      value={orderForm.reference}
                      onChange={e => setOrderForm(f => ({ ...f, reference: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 border outline-none"
                      style={{ background: '#161625', borderColor: 'rgba(255,255,255,0.08)' }}
                    />

                    <div>
                      <p className="text-white/50 text-sm mb-2">Método de pago</p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {['Efectivo', 'Transferencia', 'Mercado Pago'].map(method => (
                          <button
                            key={method}
                            onClick={() => setOrderForm(f => ({ ...f, payment: method }))}
                            className="py-2.5 rounded-xl text-[11px] font-bold transition-all leading-tight text-center"
                            style={{
                              background: orderForm.payment === method
                                ? 'linear-gradient(135deg, #00E5FF, #B44FFF)'
                                : 'rgba(255,255,255,0.05)',
                              color: orderForm.payment === method ? '#070710' : 'rgba(255,255,255,0.6)',
                            }}
                          >
                            <span className="block text-base leading-none mb-0.5">
                              {method === 'Efectivo' ? '💵' : method === 'Transferencia' ? '🏦' : '💙'}
                            </span>
                            {method === 'Transferencia' ? 'Transfer.' : method === 'Mercado Pago' ? 'Mercado P.' : method}
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
                      style={{ background: '#161625', borderColor: 'rgba(255,255,255,0.08)' }}
                    />

                    <button
                      onClick={sendWhatsAppOrder}
                      className="w-full py-4 rounded-xl font-black text-[#070710] text-lg transition-all hover:scale-[1.02]"
                      style={{ background: 'linear-gradient(135deg, #00E5FF, #B44FFF)', boxShadow: '0 4px 20px rgba(0,229,255,0.2)' }}
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
