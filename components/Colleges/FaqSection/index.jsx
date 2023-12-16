import React from "react";
import styles from "./FaqSection.module.scss";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "Is there a cost to use Collegeveda's services?",
    answer:
      "Collegeveda offers both free and premium services. While basic program exploration and recommendations are usually available for free, premium features might include personalized application assistance, expert consultations, and additional resources.",
  },
  {
    id: 2,
    question: "Can Collegeveda help with the application process?",
    answer:
      "Yes, Collegeveda provides guidance to help with the application process. This could include tips on writing effective statements of purpose, preparing for interviews, and understanding admission requirements.",
  },
  {
    id: 3,
    question: "Can Collegeveda help me find scholarships?",
    answer:
      "Yes, Collegeveda provides information about scholarships and financial help opportunities available for the programs you're interested in. This can help you identify potential sources of funding for your education.",
  },
  {
    id: 4,
    question: "How can personalized recommendations benefit me?",
    answer:
      "This can save you time by narrowing down your choices to programs that closely match your goals and interests.",
  },
  {
    id: 5,
    question: "Can I connect with other students through Collegeveda?",
    answer:
      "Some platforms offer networking opportunities, allowing you to connect with other students interested in similar programs. ",
  },
];

const FaqSection = () => {
  return (
    <section className={`py-sm-5 ${styles.faqSection}`}>
      <div className="container-lg py-5">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className={styles.leftContent}>
              <div className="">
                <span className="">Learn how to get started</span>
                <h2 className="">Frequently Asked Questions</h2>
              </div>
              <p>
                {`If you're interested in doing BAMS, Collegeveda can
                show you lots of information about different colleges and what
                they offer. Connect with us today.`}
              </p>

              <div className={styles.readBtn}>
                <Link href="/about">Read our full FAQ</Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="faq__item-wrapper pl-100 mt-3">
              <div className="faq__accordion">
                <div className="accordion" id="faqaccordion">
                  {faqs.map((item) => (
                    <div key={`faqs=${item.id}`} className="accordion-item">
                      <h2 className="accordion-header" id={`faq-${item.id}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${item.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse-${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${item.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`faq-${item.id}`}
                        data-bs-parent="#faqaccordion"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
