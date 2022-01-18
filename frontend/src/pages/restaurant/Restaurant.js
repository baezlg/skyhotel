import React from "react";
import PageHeading from "../../components/pageheading/PageHeading";
import { menu } from "../../data";
import "./Restaurant.scss";

const Restaurant = () => {
  const img =
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <div className="restaurant">
      <PageHeading img={img}>
        <h3 className="heading-lg white">Restaurant</h3>
      </PageHeading>
      <section className="restaurant__menu">
        <h3 className="heading-lg">menu</h3>
        <div className="restaurant__menu-wrapper">
          <div className="restaurant__menu-box">
            <h3 className="heading-sm">starter</h3>
            {menu.starter.map((s) => (
              <h3 key={s.id}>
                {s.name}
                <span>{s.ingredient}</span>
              </h3>
            ))}
          </div>
          <div className="restaurant__menu-box">
            <h3 className="heading-sm">soup</h3>
            {menu.soup.map((s) => (
              <h3 key={s.id}>
                {s.name}
                <span>{s.ingredient}</span>
              </h3>
            ))}
          </div>
          <div className="restaurant__menu-box">
            <h3 className="heading-sm">dessert</h3>
            {menu.dessert.map((s) => (
              <h3 key={s.id}>
                {s.name}
                <span>{s.ingredient}</span>
              </h3>
            ))}
          </div>
          <div className="restaurant__menu-box">
            <h3 className="heading-sm">main dish</h3>
            {menu.mainDish.map((s) => (
              <h3 key={s.id}>
                {s.name}
                <span>{s.ingredient}</span>
              </h3>
            ))}
          </div>
          <div className="restaurant__menu-box">
            <h3 className="heading-sm">drink</h3>
            {menu.drinks.map((s) => (
              <h3 key={s.id}>
                {s.name}
                <span>{s.ingredient}</span>
              </h3>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
