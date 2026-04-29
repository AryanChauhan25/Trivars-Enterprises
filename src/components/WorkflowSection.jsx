import { workflow } from '../data/siteData.js'

function WorkflowSection() {
  return (
    <section className="section workflow-section" id="workflow">
      <div className="section-heading">
        <p className="eyebrow">Workflow</p>
        <h2>Simple enough for repeat orders, polished enough for brand-critical projects.</h2>
      </div>

      <div className="workflow-list">
        {workflow.map((step, index) => (
          <article className="workflow-step" key={step}>
            <span>{`0${index + 1}`}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkflowSection
