import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function CatalogSection({ products, searchTerm, onSearchChange, onOpenEmail, onOpenWhatsapp }) {
  const [activePage, setActivePage] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: products.length > 3,
      slidesToScroll: 1,
      dragFree: false,
      dragThreshold: 12,
    },
    [
      Autoplay({
        delay: 4200,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setActivePage(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit({ align: 'start', loop: products.length > 3, slidesToScroll: 1, dragFree: false })
    setScrollSnaps(emblaApi.scrollSnapList())
    setActivePage(0)
    emblaApi.scrollTo(0, true)
  }, [emblaApi, products])

  function goToPage(index) {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
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

      {!!products.length && (
        <div className="catalog-carousel">
          <div className="catalog-viewport" ref={emblaRef}>
            <div className="catalog-track">
              {products.map((product) => (
                <div className="catalog-slide" key={product.id}>
                  <article className="catalog-card">
                    <div className="catalog-image-wrap">
                      <LazyLoadImage
                        className="catalog-image"
                        src={product.image}
                        alt={product.name}
                        effect="blur"
                        wrapperClassName="catalog-image-lazy-wrapper"
                      />
                    </div>
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
                </div>
              ))}
            </div>
          </div>

          {scrollSnaps.length > 1 && (
            <div className="catalog-dots" aria-label="Catalog pages">
              {scrollSnaps.map((_, index) => (
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
