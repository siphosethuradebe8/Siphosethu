import { useMemo, useState } from 'react'
import { categories, products } from './products'

const money = (value) => new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(value)

function App() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...current, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const changeQuantity = (id, amount) => {
    setCart((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0))
  }

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Little Nest home">
          <span className="brand-mark">LN</span>
          <span><strong>Little Nest</strong><small>Baby essentials, made simple</small></span>
        </a>
        <nav className="desktop-nav">
          <a href="#shop">Shop</a>
          <a href="#why-us">Why us</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="cart-button" onClick={() => setCartOpen(true)}>Cart <span>{itemCount}</span></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">For tiny humans & big love</span>
            <h1>Everyday baby essentials for softer, simpler days.</h1>
            <p>Thoughtfully selected products for feeding, sleep, play, bath time and every little adventure in between.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#shop">Shop the collection</a>
              <a className="text-link" href="#why-us">Why parents choose us →</a>
            </div>
            <div className="hero-points"><span>✓ South Africa delivery</span><span>✓ Secure checkout ready</span><span>✓ Parent-friendly support</span></div>
          </div>
          <div className="hero-art" aria-label="Baby essentials illustration">
            <div className="hero-card card-one">🍼<small>Feeding</small></div>
            <div className="hero-card card-two">🧸<small>Comfort</small></div>
            <div className="hero-card card-three">🌙<small>Sleep</small></div>
            <div className="hero-bubble"></div>
          </div>
        </section>

        <section className="section" id="shop">
          <div className="section-heading">
            <div><span className="eyebrow">Shop baby essentials</span><h2>Made for the moments that matter.</h2></div>
            <label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" /></label>
          </div>

          <div className="category-row">
            {categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-visual"><span>{product.icon}</span><b>{product.category}</b></div>
                <div className="product-info">
                  <div className="product-top"><h3>{product.name}</h3><strong>{money(product.price)}</strong></div>
                  <p>{product.description}</p>
                  <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
              </article>
            ))}
          </div>
          {filteredProducts.length === 0 && <div className="empty-state">No products found. Try another search or category.</div>}
        </section>

        <section className="trust-section" id="why-us">
          <div><span>01</span><h3>Baby-first selection</h3><p>A focused catalogue that keeps shopping calm and uncomplicated.</p></div>
          <div><span>02</span><h3>Built for local families</h3><p>Pricing in rand, South African delivery messaging and a store designed for mobile shoppers.</p></div>
          <div><span>03</span><h3>Ready to grow</h3><p>The starter can be connected to real stock, customer accounts and online payments next.</p></div>
        </section>

        <section className="newsletter" id="contact">
          <div><span className="eyebrow">Join the nest</span><h2>Offers, new arrivals and parent-friendly finds.</h2></div>
          <form onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Email address" required /><button>Keep me updated</button></form>
        </section>
      </main>

      <footer><div className="brand"><span className="brand-mark">LN</span><span><strong>Little Nest</strong><small>Baby essentials, made simple</small></span></div><p>© 2026 Little Nest. Built with care in South Africa.</p></footer>

      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}>
        <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
          <div className="cart-header"><div><span className="eyebrow">Your basket</span><h2>{itemCount} {itemCount === 1 ? 'item' : 'items'}</h2></div><button className="close-button" onClick={() => setCartOpen(false)}>×</button></div>
          <div className="cart-items">
            {cart.length === 0 ? <div className="cart-empty"><span>🧺</span><h3>Your basket is empty</h3><p>Add something lovely for the little one.</p></div> : cart.map((item) => <div className="cart-item" key={item.id}><div className="cart-icon">{item.icon}</div><div className="cart-item-copy"><strong>{item.name}</strong><small>{money(item.price)}</small><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)}>+</button></div></div><b>{money(item.price * item.quantity)}</b></div>)}
          </div>
          <div className="cart-footer"><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><small>Delivery and payment options will be added at checkout.</small><button className="checkout-button" disabled={!cart.length}>Continue to checkout</button></div>
        </aside>
      </div>}
    </div>
  )
}

export default App
