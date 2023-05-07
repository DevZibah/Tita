import React, { useState } from "react";
import "../style/Faq.css";
import { faqsData } from "../utils/faqs-data";
import star from "../assets/svg/star-blue.svg";
import arrow_up from "../assets/svg/arrow-up.svg";
import arrow_down from "../assets/svg/arrow-down.svg";
import megaphone from "../assets/svg/mic.svg";
import ElipsesBg from "../components/ElipsesBg";

const Faq = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const toggleAnswer = (index) => {
    setCurrentIndex((prevIdx) => (prevIdx === index ? null : index));
  };

  return (
    <ElipsesBg>
      <section className="faq-sect">
        <header>
          <div className="faq-header_grp">
            <h4 className="faq-title">FAQs</h4>
            <img src={megaphone} alt="megaphone" />
          </div>
        </header>
        <main>
          <img className="faded-megaphone_1" src={megaphone} alt="megaphone" />
          <img className="faded-megaphone_2" src={megaphone} alt="megaphone" />
          <ul className="faq-list_wrapper">
            {faqsData.map(({ id, question, answer }, idx) => (
              <li key={id} className="faq-list">
                <div className="faq-question_sect">
                  <div className="q-sect">
                    <img
                      className="faq-star_icon"
                      src={star}
                      alt="star-bullet"
                    />
                    <p className="faq-question">{question}</p>
                  </div>
                  <img
                    onClick={() => toggleAnswer(idx)}
                    className="faq-arrow_up"
                    src={currentIndex === idx ? arrow_down : arrow_up}
                    alt="chevron-up"
                  />
                </div>
                {currentIndex === idx && (
                  <div className="faq-answer_sect">
                    <p className="faq-answer">{answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </main>
      </section>
    </ElipsesBg>
  );
};

export default Faq;
