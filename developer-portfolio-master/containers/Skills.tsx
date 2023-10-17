import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { skillsSection } from '../portfolio';

const Skills = () => {
  return (
    skillsSection && (
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row className="mt-5">
        {skillsSection.data.map((section, index) => {
          return (
            <Col lg="3" key={index}>
              <Fade left duration={2000}>
                <DisplayLottie animationPath={section.lottieAnimationFile} />
              </Fade>
              <Fade right duration={2000}>
                <h3 className="h5">{section.title}</h3>

                <div>
                  {section.skills.map((skill, i) => {
                    return <p key={i}>{skill}</p>;
                  })}
                </div>
              </Fade>
            </Col>
          );
        })}
            </Row>
      </Container>
    )
  );
};

export default Skills;
