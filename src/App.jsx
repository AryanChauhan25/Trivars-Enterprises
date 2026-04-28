import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import CatalogSection from './components/CatalogSection.jsx'
import ContactModal from './components/ContactModal.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import HeroSection from './components/HeroSection.jsx'
import OfferingsSection from './components/OfferingsSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import StorySection from './components/StorySection.jsx'
import TopStrip from './components/TopStrip.jsx'
import WorkflowSection from './components/WorkflowSection.jsx'
import { CONTACT, catalog, descriptionText, footerLinks, metaDescription, pageTitle } from './data/siteData.js'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeModal, setActiveModal] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState('')
  const deferredSearch = useDeferredValue(searchTerm)

  useEffect(() => {
    document.title = pageTitle

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', metaDescription)
  }, [])

  const filteredProducts = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()
    if (!query) return catalog

    return catalog.filter((product) => {
      const haystack = [product.name, product.category, product.description, product.tags.join(' ')].join(' ').toLowerCase()
      return haystack.includes(query)
    })
  }, [deferredSearch])

  function openModal(type, productName = '') {
    setSelectedProduct(productName)
    setActiveModal(type)
  }

  function closeModal() {
    setActiveModal(null)
    setSelectedProduct('')
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Trivars Enterprises, I would like an enquiry for ${selectedProduct || 'your stationery products'}. Please share details.`,
  )

  return (
    <>
      <div className="page-shell" id="top">
        <TopStrip contact={CONTACT} onOpenEmail={() => openModal('email')} />

        <SiteHeader
          whatsappMessage={whatsappMessage}
          contact={CONTACT}
          onOpenEmail={() => openModal('email')}
        />

        <main>
          <HeroSection onOpenEmail={() => openModal('email')} onOpenWhatsapp={() => openModal('whatsapp')} />

          <CatalogSection
            products={filteredProducts}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onOpenEmail={openModal}
            onOpenWhatsapp={openModal}
          />

          <OfferingsSection />
          <StorySection descriptionText={descriptionText} />
          <WorkflowSection />

          <SiteFooter
            contact={CONTACT}
            footerLinks={footerLinks}
            whatsappMessage={whatsappMessage}
            selectedProduct={selectedProduct}
            onOpenEmail={() => openModal('email')}
            onOpenWhatsapp={() => openModal('whatsapp', selectedProduct)}
          />
        </main>
      </div>

      <FloatingActions
        contact={CONTACT}
        whatsappMessage={whatsappMessage}
        onOpenEmail={() => openModal('email')}
      />

      <button className="sticky-quote" type="button" onClick={() => openModal('email')}>
        Product Enquiry
      </button>

      {activeModal && (
        <ContactModal
          type={activeModal}
          contact={CONTACT}
          selectedProduct={selectedProduct}
          whatsappMessage={whatsappMessage}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export default App
