import { useEffect, useMemo, useState } from 'react'

function getVisibleCount(width) {
  if (width <= 640) return 1
  if (width <= 980) return 2
  return 3
}

function CatalogSection({ products, searchTerm, onSearchChange, onOpenEmail, onOpenWhatsapp }) {
  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount(window.innerWidth))
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const productPages = useMemo(() => {
    const pages = []
    for (let index = 0; index < products.length; index += visibleCount) {
      pages.push(products.slice(index, index + visibleCount))
    }
    return pages
  }, [products, visibleCount])

  useEffect(() => {
    setActivePage(0)
  }, [products, visibleCount])

  useEffect(() => {
    if (productPages.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setActivePage((current) => (current + 1) % productPages.length)
    }, 3200)

    return () => window.clearInterval(timer)
  }, [productPages.length])

  function goToPage(index) {
    setActivePage(index)
  }

  return (
    <section className="section" id="catalog">
      <div className="section-heading">
        <p className="eyebrow">Storefront</p>
        <h2>Search the stationery catalog and enquire product by product.</h2>
      </div>

      <div className="catalog-toolbar">
        <label className="search-field" htmlFor="product-search">
          <span>Search products</span>
          <input
            id="product-search"
            type="search"
            placeholder="Search by product, category, or keyword"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>
        <div className="search-meta">
          <strong>{products.length}</strong>
          <span>{products.length === 1 ? 'product found' : 'products found'}</span>
        </div>
      </div>

      {!!productPages.length && (
        <div className="catalog-carousel">
          <div className="catalog-viewport">
            <div
              className="catalog-track"
              style={{ transform: `translateX(-${activePage * 100}%)` }}
            >
              {productPages.map((page, pageIndex) => (
                <div
                  className="catalog-page"
                  key={`page-${pageIndex}`}
                  style={{ gridTemplateColumns: `repeat(${page.length}, minmax(0, 1fr))` }}
                >
                  {page.map((product) => (
                    <article className="catalog-card" key={product.id}>
                      <p className="panel-label">{product.category}</p>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="tag-row">
                        {product.tags.map((tag) => (
                          <span className="tag-chip" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="catalog-footer">
                        <strong>{product.price}</strong>
                        <div className="catalog-actions">
                          <button
                            className="primary-button small-button"
                            type="button"
                            onClick={() => onOpenWhatsapp('whatsapp', product.name)}
                          >
                            WhatsApp
                          </button>
                          <button
                            className="primary-button small-button"
                            type="button"
                            onClick={() => onOpenEmail('email', product.name)}
                          >
                            Email
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {productPages.length > 1 && (
            <div className="catalog-dots" aria-label="Catalog pages">
              {productPages.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  className={index === activePage ? 'catalog-dot active' : 'catalog-dot'}
                  onClick={() => goToPage(index)}
                  aria-label={`Show product group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {!products.length && (
        <div className="empty-state">
          <h3>No products matched your search.</h3>
          <p>Try searching for notebooks, branding, executive, folders, or office.</p>
        </div>
      )}
    </section>
  )
}

export default CatalogSection
