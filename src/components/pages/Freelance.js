import React, { useState } from 'react';
import "../../App.css"; // Check the correct path for your CSS file

function Freelance() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div class="pricing"> 
      <div className="container">
        <h1>Pricing Options</h1>

        <div className="accordion">
          <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
            <h2 className="accordion-header" onClick={() => toggleAccordion(0)}>Hourly Rates</h2>
            <div className="accordion-content">
              <p>Hourly rates are suitable for projects where the scope is not clearly defined or may change over time. It offers flexibility and allows for ongoing adjustments as the project progresses.</p>
              <p><strong>Rate:</strong> $55.00</p>
              <p><strong>Examples:</strong><br/>
                - Minor website updates and maintenance<br/>
                - Consultation and troubleshooting<br/>
                - Small-scale customizations</p>
            </div>
          </div>

          <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
            <h2 className="accordion-header" onClick={() => toggleAccordion(1)}>Flat Rates</h2>
            <div className="accordion-content">
              <p> Flat rates are ideal for projects with well-defined scopes and clear deliverables.</p>
              <p><strong>Pricing:</strong><br/>
                - Basic Website: Starting from $500<br/>
                - Medium-Scale Website: Starting from $1000<br/>
                - Advanced Website: Starting from $1500</p>
              <p><strong>Factors Influencing Price:</strong><br/>
                - Complexity of design and functionality<br/>
                - Integration of third-party services<br/>
                - Customization requirements<br/>
                - Timeline for completion</p>
              <p><strong>Examples:</strong><br/>
                - Landing pages<br/>
                - Portfolio websites<br/>
                - E-commerce platforms<br/>
                - Web applications</p>
            </div>
          </div>

          <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}>
            <h2 className="accordion-header" onClick={() => toggleAccordion(2)}>Customized Solutions</h2>
            <div className="accordion-content">
              <p>For projects that don't fit neatly into predefined categories, customized pricing solutions can be tailored to meet specific needs and budgets.</p>
              <p><strong>Flexibility and Negotiation:</strong><br/>
                - Depending on project requirements and client budget, pricing can be adjusted accordingly.<br/>
                - Open to discussing alternative pricing structures or payment plans.</p>
              <p><strong>Consultation:</strong> Schedule a consultation to discuss your project needs and receive a personalized quote.</p>
            </div>
          </div>
        </div>
      </div>
      <a class="back-up" href="#header">Back to top</a>
      </div>
    );
}

export default Freelance;

