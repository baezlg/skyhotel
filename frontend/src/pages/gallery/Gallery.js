import React from "react";
import Experience from "../../components/experience/Experience";
import PageHeading from "../../components/pageheading/PageHeading";
import { galleries } from "../../data";
import "./Gallery.scss";

const Gallery = () => {
  const img =
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";
  return (
    <div className="gallery">
      <PageHeading img={img}>
        <h3 className="heading-lg white">Gallery</h3>
      </PageHeading>
      <section className="gallery__wrapper">
        {galleries.map((g) => (
          <div className="gallery__item" key={g.id}>
            <img src={g.img} alt="" />
          </div>
        ))}
      </section>
      <Experience />
    </div>
  );
};

export default Gallery;
