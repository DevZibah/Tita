import React, { ReactNode } from "react";
import ellipse from "../assets/svg/ellipse-blue.svg";
import ellipse_2 from "../assets/svg/ellipse-2-blue.svg";
import ellipse_3 from "../assets/svg/ellipse-3-blue.svg";

interface Props {
  children: ReactNode;
}

const ElipsesBg = ({ children }: Props): JSX.Element => {
  return (
    <section className="faq-ellipses">
      <img className="ellipse-1" src={ellipse} alt="ellipse" />
      <img className="ellipse-2" src={ellipse_2} alt="ellipse-2" />
      <img className="ellipse-3" src={ellipse_3} alt="ellipse-3" />
      {children}
    </section>
  );
};

export default ElipsesBg;
