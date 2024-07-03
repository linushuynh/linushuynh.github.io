import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import curajoyLogo from "../../assets/images/curaJOY.jpg";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  const curajoyCard = {
    role: "Frontend Developer",
    compant: "curaJOY",
    companylogo: curajoyLogo,
    date: "Feb 2024 - Present",
    desc: "As a non-profit organization, curaJOY supports families’ social and mental health by providing practical and collaborative solutions that are proactive and community-driven with personalized and on-demand coaching and behavioral health support",
    descBullets: [
      "Overhauled the UI of the Assessments feature to match newer Figma designs and ensured web responsiveness by employing breakpoints in TailwindCSS which allows users of all devices to interact with the feature",
      "Incorporated a modular header bar that adapts to the current page by conditionally rendering different button groups which resulted in a smoother experience for users as they navigate between pages",
      "Upgraded the Solutions landing page by creating new components and reusing other components from other team developers to enhance product first impressions and increase user base",
    ]
  }

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <ExperienceCard
                isDark={isDark}
                cardInfo={curajoyCard}
              />
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
