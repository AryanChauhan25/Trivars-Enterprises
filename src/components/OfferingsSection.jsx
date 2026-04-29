import { offerings } from '../data/siteData.js'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { FiPrinter } from 'react-icons/fi'
import { LuPackageCheck } from 'react-icons/lu'
import { MdOutlineWorkspacePremium } from 'react-icons/md'

const OFFERING_ICONS = [HiOutlineBuildingOffice2, FiPrinter, LuPackageCheck, MdOutlineWorkspacePremium]

function OfferingsSection() {
  return (
    <section className="section" id="offerings">
      <div className="section-heading">
        <p className="eyebrow">Offerings</p>
        <h2>Stationery & Office Solutions for Businesses.</h2>
      </div>

      <div className="offering-grid">
        {offerings.map((offering, index) => {
          const Icon = OFFERING_ICONS[index % OFFERING_ICONS.length]

          return (
          <article className="offering-card" key={offering.title}>
            <div className="offering-header">
              <div className="card-index" aria-hidden="true">
                <Icon />
              </div>
              <h3>{offering.title}</h3>
            </div>
            <p>{offering.description}</p>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default OfferingsSection
