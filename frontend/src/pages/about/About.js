import React from "react";
import PageHeading from "../../components/pageheading/PageHeading";
import Services from "../../components/services/Services";

import "./About.scss";

const About = () => {
  const img =
    "https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
  return (
    <div className="about">
      <PageHeading img={img}>
        <h3 className="heading-lg white">About us</h3>
      </PageHeading>
      <section className="about__intro">
        <h3 className="heading-md">Enjoy a Luxury Experience</h3>
        <div className="about__intro-box">
          <div className="about__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              non ut, odit suscipit quod doloremque, itaque, facilis sunt quis
              possimus aperiam assumenda expedita debitis fugit ea sit deserunt
              quidem beatae delectus. Natus deserunt adipisci itaque quos.
              Necessitatibus vel ipsa tenetur quod quibusdam? Beatae vero vitae
              dicta dolorum ex consectetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              non ut, odit suscipit quod doloremque, itaque, facilis sunt quis
              possimus aperiam assumenda expedita debitis fugit ea sit deserunt
              quidem beatae delectus. Natus deserunt adipisci itaque quos.
              Necessitatibus vel ipsa tenetur quod quibusdam? Beatae vero vitae
              dicta dolorum ex consectetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              non ut, odit suscipit quod doloremque, itaque, facilis sunt quis
              possimus aperiam assumenda expedita debitis fugit ea sit deserunt
              quidem beatae delectus. Natus deserunt adipisci itaque quos.
              Necessitatibus vel ipsa tenetur quod quibusdam? Beatae vero vitae
              dicta dolorum ex consectetur nobis.
            </p>
          </div>
          <div className="about__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              non ut, odit suscipit quod doloremque, itaque, facilis sunt quis
              possimus aperiam assumenda expedita debitis fugit ea sit deserunt
              quidem beatae delectus. Natus deserunt adipisci itaque quos.
              Necessitatibus vel ipsa tenetur quod quibusdam? Beatae vero vitae
              dicta dolorum ex consectetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              non ut, odit suscipit quod doloremque, itaque, facilis sunt quis
              possimus aperiam assumenda expedita debitis fugit ea sit deserunt
              quidem beatae delectus. Natus deserunt adipisci itaque quos.
              Necessitatibus vel ipsa tenetur quod quibusdam? Beatae vero vitae
              dicta dolorum ex consectetur nobis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              non ut, odit suscipit quod doloremque, itaque, facilis sunt quis
              possimus aperiam assumenda expedita debitis fugit ea sit deserunt
              quidem beatae delectus. Natus deserunt adipisci itaque quos.
              Necessitatibus vel ipsa tenetur quod quibusdam? Beatae vero vitae
              dicta dolorum ex consectetur nobis.
            </p>
          </div>
        </div>
        <Services />
        <div className="about__team">
          <h3 className="heading-sm center">The team</h3>
          <div className="about__team-wrapper">
            <div className="about__team-box">
              <div className="about__img-box">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <h4 className="about__name">Jane Doe</h4>
              <h5 className="about__role">CEO</h5>
              <p className="about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus molestiae labore accusamus recusandae autem ducimus
                rerum iste non eius necessitatibus?
              </p>
            </div>
            <div className="about__team-box">
              <div className="about__img-box">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <h4 className="about__name">Jane Doe</h4>
              <h5 className="about__role">CEO</h5>
              <p className="about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus molestiae labore accusamus recusandae autem ducimus
                rerum iste non eius necessitatibus?
              </p>
            </div>
            <div className="about__team-box">
              <div className="about__img-box">
                <img
                  src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <h4 className="about__name">Jane Doe</h4>
              <h5 className="about__role">CEO</h5>
              <p className="about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus molestiae labore accusamus recusandae autem ducimus
                rerum iste non eius necessitatibus?
              </p>
            </div>
            <div className="about__team-box">
              <div className="about__img-box">
                <img
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"
                  alt=""
                />
              </div>
              <h4 className="about__name">Jane Doe</h4>
              <h5 className="about__role">CEO</h5>
              <p className="about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus molestiae labore accusamus recusandae autem ducimus
                rerum iste non eius necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
