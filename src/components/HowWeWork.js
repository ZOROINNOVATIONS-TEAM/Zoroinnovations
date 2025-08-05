import React from "react";

const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <div className="how-we-work-container">
        <div className="how-we-work-header">
          <h2>How we works</h2>
          <p>A systematic approach to understanding your needs and delivering tailored digital solutions.</p>
        </div>
        <div className="process-timeline">
          <div className="timeline-line"></div>
          <div className="process-steps">
            <div className="process-step mt-2">
              <div className="step-number">1</div>
              <div className="step-content rounded-3xl">
                <h3>Discovery</h3>
                <p>
                  We start by understanding your <br />business model, goals, and <br />technical needs through deep <br />consultation and analysis.
                </p>
              </div>
            </div>
            <div className="process-step mt-2">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Strategy</h3>
                <p>
                  Our team crafts a tailored digital roadmap — selecting the <br />right technologies, architecture, and <br />development plan aligned with <br />your vision.
                </p>
              </div>
            </div>
            <div className="process-step mt-2">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>
                  We bring the strategy to life with <br />clean code, AI-powered systems, <br />scalable infrastructure, and <br />seamless deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;