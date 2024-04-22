import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";

export default function About() {
  const { sectionRefs } = React.useContext(AppContext);

  return (
    <section
      ref={(element) => (sectionRefs.current[1] = element)}
      id="about"
      className="about"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            choose <span className="orange--word">program</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            incidunt blanditiis autem at alias earum nobis ad eos doloremque
            quod totam, culpa sapiente quam harum provident dolores aliquid
            voluptatum dolor.
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="about--card-container">
          <div className="about--card">
            <div className="about--card-content">
              <div className="card--title">Basic Fitness</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <div className="about--card-content">
              <div className="card--title">Advanced Muscle Course</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <div className="about--card-content">
              <div className="card--title">New Gym Training</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <div className="about--card-content">
              <div className="card--title">Yoga Training</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <div className="about--card-content">
              <div className="card--title">Basic Muscle Course</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <div className="about--card-content">
              <div className="card--title">Body Building Course</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
