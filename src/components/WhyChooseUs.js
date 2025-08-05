import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-choose-container">
        <div className="why-choose-left">
          <img
            src="images/cf9d9bd50fea3204dbc656240fa732e7075f19b4.jpg"
            alt="Modern Office"
            className="office-image"
          />
        </div>
        <div className="why-choose-right">
          <h2>Why Choose Zoro innovations?</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon expert">
                <img
                  src="images/Overlay.svg"
                  alt="Expert Icon"
                  width="48"
                  height="48"
                />
              </div>
              <div className="feature-content">
                <h3>Expert Innovators</h3>
                <p>
                  Our Employee of tech professionals, developers, and AI
                  engineers bring years of hands-on experience to every digital
                  solution we build.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon tailored">
                <img
                  src="images/Overlay-1.svg"
                  alt="Tailored Icon"
                  width="48"
                  height="48"
                />
              </div>
              <div className="feature-content">
                <h3>Tailored Solutions</h3>
                <p>
                  We craft customized strategies based on your business needs —
                  whether it's building smart web apps, AI models, or scalable
                  SaaS platforms.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon partner">
                <img
                  src="images/Overlay-2.svg"
                  alt="Partner Icon"
                  width="48"
                  height="48"
                />
              </div>
              <div className="feature-content">
                <h3>Your Technology Partner</h3>
                <p>
                  As an independent innovation firm, we offer honest guidance,
                  agile delivery, and long-term support with your growth at the
                  core.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;