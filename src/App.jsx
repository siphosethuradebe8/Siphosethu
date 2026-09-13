import { useMemo, useState } from 'react'
import { categories, products } from './products'

const money = (value) => new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(value)

function App() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [liked, setLiked] = useState([])

  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase().trim()
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesSearch = !q || product.name.toLowerCase().includes(q) || product.category.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      return a.id - b.id
    })
  }, [category, search, sort])

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      return existing
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const changeQuantity = (id, amount) => setCart((current) => current
    .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
    .filter((item) => item.quantity > 0))

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const toggleLiked = (id) => setLiked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top"><span className="brand-mark">LN</span><span><strong>Little Nest</strong><small>Premium baby gear</small></span></a>
        <nav className="desktop-nav"><a className="active" href="#shop">Shop</a><a href="#collections">Collections</a><a href="#standard">Our standard</a><a href="#about">About</a></nav>
        <div className="header-actions"><button className="icon-button" aria-label="Search" onClick={() => document.getElementById('search')?.focus()}>⌕</button><button className="icon-button" aria-label="Account">♙</button><button className="cart-button" onClick={() => setCartOpen(true)}>Bag <span>{itemCount}</span></button></div>
      </header>

      <main id="top">
        <section className="shop-intro">
          <div><span className="eyebrow">Premium baby gear</span><h1>Designed for little moments.<br/>Built for real life.</h1></div>
          <div className="intro-side"><p>Curated baby essentials for modern families.<br/>Safe. Stylish. Practical.</p><label className="search-box"><span>⌕</span><input id="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search prams, car seats, nursery, baby tech..." /></label></div>
        </section>

        <section className="shop-toolbar" id="collections">
          <div className="category-row">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <label className="sort-box"><span>Sort by</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
        </section>

        <section className="product-grid" id="shop">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-visual">
                <span className="visual-tag">{product.tag}</span>
                <button className={`heart-button ${liked.includes(product.id) ? 'liked' : ''}`} onClick={() => toggleLiked(product.id)} aria-label="Save product">♡</button>
                <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <div className="product-top"><h3>{product.name}</h3><strong>{money(product.price)}</strong></div>
                <p>{product.description}</p>
                <button className="add-button" onClick={() => addToCart(product)}>▢ <span>Add to bag</span></button>
              </div>
            </article>
          ))}
        </section>

        {filteredProducts.length === 0 && <div className="empty-state">No products found. Try another category or search.</div>}

        <section className="editorial-banner" id="standard"><div><span className="eyebrow">Our standard</span><h2>Beautiful gear should work hard too.</h2></div><p>We choose pieces that balance design, safety and real-life practicality — from travel systems and i-Size car seats to nursery furniture and useful baby technology.</p></section>
        <section className="trust-section" id="about"><div><span>01</span><h3>Safety first</h3><p>Thoughtful product selection around recognised safety features, practical fit and everyday usability.</p></div><div><span>02</span><h3>Curated, not crowded</h3><p>A smaller premium range makes it easier to compare products and choose confidently.</p></div><div><span>03</span><h3>Made for SA families</h3><p>Pricing in rand, locally relevant products and a mobile-first shopping experience.</p></div></section>
      </main>

      <footer><div className="brand"><span className="brand-mark">LN</span><span><strong>Little Nest</strong><small>Premium baby gear</small></span></div><p>© 2026 Little Nest • South Africa</p></footer>

      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(e) => e.stopPropagation()}><div className="cart-header"><div><span className="eyebrow">Your bag</span><h2>{itemCount} {itemCount === 1 ? 'item' : 'items'}</h2></div><button className="close-button" onClick={() => setCartOpen(false)}>×</button></div><div className="cart-items">{cart.length === 0 ? <div className="cart-empty"><h3>Your bag is empty</h3><p>Add a premium piece to begin your order.</p></div> : cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt=""/><div className="cart-item-copy"><strong>{item.name}</strong><small>{money(item.price)}</small><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)}>+</button></div></div><b>{money(item.price * item.quantity)}</b></div>)}</div><div className="cart-footer"><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><small>Delivery and payment options will be confirmed at checkout.</small><button className="checkout-button" disabled={!cart.length}>Continue to checkout</button></div></aside></div>}
    </div>
  )
}

export default App
