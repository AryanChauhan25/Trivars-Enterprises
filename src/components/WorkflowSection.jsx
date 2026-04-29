import { workflow } from '../data/siteData.js'
import { LuSearch } from 'react-icons/lu'
import { FiMessageSquare } from 'react-icons/fi'
import { MdOutlineLocalShipping } from 'react-icons/md'

const WORKFLOW_ICONS = [LuSearch, FiMessageSquare, MdOutlineLocalShipping]

function WorkflowSection() {
  return (
    <section className="section workflow-section" id="workflow">
      <div className="section-heading">
        <p className="eyebrow">Workflow</p>
        <h2>Simple & Fast Ordering Process</h2>
      </div>

      <div className="workflow-list">
        {workflow.map((step, index) => {
          const Icon = WORKFLOW_ICONS[index % WORKFLOW_ICONS.length]

          return (
            <article className="workflow-step" key={step.title}>
              <div className="workflow-step-heading">
                <div className="workflow-step-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default WorkflowSection
