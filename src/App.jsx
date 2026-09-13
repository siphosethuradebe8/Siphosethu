import { useMemo, useState } from 'react'
import { categories, products } from './products'

const money = (value) => new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(value)

function App() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const filteredProducts = useMemo(() => products.filter((product) => {
    const q = search.toLowerCase()
    return (category === 'All' || product.category === category) && (product.name.toLowerCase().includes(q) || product.category.toLowerCase().includes(q))
  }), [category, search])

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const changeQuantity = (id, amount) => setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0))
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="app-shell">
      <div className="announcement">Complimentary Gauteng delivery on selected premium orders over R10,000</div>
      <header className="site-header"><a className="brand" href="#top"><span className="brand-mark">LN</span><span><strong>Little Nest</strong><small>Premium baby gear</small></span></a><nav className="desktop-nav"><a href="#shop">Shop</a><a href="#collections">Collections</a><a href="#why-us">Our standard</a></nav><button className="cart-button" onClick={() => setCartOpen(true)}>Bag <span>{itemCount}</span></button></header>

      <main id="top">
        <section className="hero premium-hero"><div className="hero-copy"><span className="eyebrow">Premium baby gear • South Africa</span><h1>Beautiful gear for life with baby.</h1><p>Curated prams, travel systems, car seats, nursery pieces and baby technology chosen for families who want safety, design and quality without compromise.</p><div className="hero-actions"><a className="primary-button" href="#shop">Shop premium gear</a><a className="text-link" href="#collections">Explore collections →</a></div><div className="hero-points"><span>✓ Premium selection</span><span>✓ South African pricing</span><span>✓ Secure checkout coming next</span></div></div><div className="hero-showcase"><div className="showcase-kicker">THE TRAVEL EDIT</div><div className="showcase-product">AERO<br/>LUXE</div><div className="showcase-footer"><span>3-in-1 Travel System</span><strong>{money(8999)}</strong></div></div></section>

        <section className="collection-strip" id="collections"><div><small>01</small><strong>Travel Systems</strong><span>From R8 999</span></div><div><small>02</small><strong>Car Seats</strong><span>Safety, elevated</span></div><div><small>03</small><strong>Nursery</strong><span>Designed to last</span></div><div><small>04</small><strong>Baby Tech</strong><span>Smarter peace of mind</span></div></section>

        <section className="section" id="shop"><div className="section-heading"><div><span className="eyebrow">The premium collection</span><h2>Statement pieces. Serious function.</h2></div><label className="search-box"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search prams, car seats, nursery..." /></label></div><div className="category-row">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="product-grid premium-grid">{filteredProducts.map((product, index) => <article className="product-card premium-card" key={product.id}><div className={`product-visual tone-${product.tone}`}><div className="visual-index">{String(index + 1).padStart(2, '0')}</div><span className="visual-tag">{product.tag}</span><div className="visual-name">{product.category}</div><img className="product-image" src={product.image} alt={product.name} loading="lazy" referrerPolicy="no-referrer" style={{width:'100%',height:'100%',objectFit:'contain',padding:'48px 26px 34px',display:'block'}} /></div><div className="product-info"><div className="product-top"><h3>{product.name}</h3><strong>{money(product.price)}</strong></div><p>{product.description}</p><button onClick={() => addToCart(product)}>Add to bag</button></div></article>)}</div>{filteredProducts.length === 0 && <div className="empty-state">No premium products found. Try another search or category.</div>}</section>

        <section className="editorial-banner"><div><span className="eyebrow">Built around real family life</span><h2>Premium does not mean complicated.</h2></div><p>We focus on the pieces parents use every day: travel systems that fold beautifully, car seats that prioritise safety, nursery furniture that earns its space, and technology that genuinely helps.</p></section>
        <section className="trust-section" id="why-us"><div><span>01</span><h3>Safety-led selection</h3><p>Our range is positioned around trusted features like ISOFIX, i-Size compatibility, impact protection and practical everyday usability.</p></div><div><span>02</span><h3>Premium, not overpriced</h3><p>South African pricing with a curated range across accessible premium and luxury tiers.</p></div><div><span>03</span><h3>Designed to feel special</h3><p>No bargain-bin presentation. The store is built around considered products, clean design and a luxury retail experience.</p></div></section>
      </main>

      <footer><div className="brand"><span className="brand-mark">LN</span><span><strong>Little Nest</strong><small>Premium baby gear</small></span></div><p>© 2026 Little Nest • South Africa</p></footer>

      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(e) => e.stopPropagation()}><div className="cart-header"><div><span className="eyebrow">Your bag</span><h2>{itemCount} {itemCount === 1 ? 'item' : 'items'}</h2></div><button className="close-button" onClick={() => setCartOpen(false)}>×</button></div><div className="cart-items">{cart.length === 0 ? <div className="cart-empty"><h3>Your bag is empty</h3><p>Add a premium piece to begin your order.</p></div> : cart.map((item) => <div className="cart-item" key={item.id}><div className={`cart-icon tone-${item.tone}`}></div><div className="cart-item-copy"><strong>{item.name}</strong><small>{money(item.price)}</small><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)}>+</button></div></div><b>{money(item.price * item.quantity)}</b></div>)}</div><div className="cart-footer"><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><small>Delivery and payment options will be confirmed at checkout.</small><button className="checkout-button" disabled={!cart.length}>Continue to checkout</button></div></aside></div>}
    </div>
  )
}

export default App
