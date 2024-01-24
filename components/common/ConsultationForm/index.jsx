import React, { useState } from "react";
import styles from "./ConsultationForm.module.scss";
import ToastMessage from "../Toasts";
import { submitEnquiry } from "@/api";

const defaultState = {
  fullName: "",
  phone: "",
  email: "",
  message: "",
  source: "Book consultation button",
};

const ConsultationForm = ({ handleClose }) => {
  const [formData, setFormData] = useState(defaultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitEnquiry(formData);
      ToastMessage({
        type: "success",
        message:
          "Contact form submitted succesfully!, our team will connect with you shortly.",
      });
      setFormData({ ...defaultState });
      handleClose();
    } catch (err) {
      ToastMessage({
        type: "error",
        message: "Oops something went wrong!",
      });
      setFormData({ ...defaultState });
      handleClose();
      console.log("error", err);
    }
  };

  return (
    <div className={styles.connectModal}>
      <div className="row">
        <div className="col-md-6 pe-0">
          <div className={`${styles.leftPart} p-4`}>
            <p className="p-4">
              Why choose to register with us?
              <ul className="ps-3 mt-2">
                <li>
                  Access expert guidance to navigate through a wide array of
                  course options and select the one that suits you best.
                </li>
                <li>
                  Enhance your preparation by gaining in-depth insights into the
                  syllabus and exam format.
                </li>
                <li>
                  Discover courses offered by various colleges that fit with
                  your unique skill set.
                </li>
                <li>
                  Simplify the college admission process with our completely
                  online admission system, eliminating the need to physically
                  visit campuses.
                </li>
              </ul>
            </p>
            <img
              src="/assets/img/contact-modal-left.webp"
              width="100%"
              alt=""
              className={styles.leftImg}
            />
          </div>
        </div>
        <div className="col-md-6 h-100 ps-md-0">
          <div className={`${styles.rightPart} p-4 my-4 mx-md-4`}>
            <p>
              Were you aware that CollegeVeda facilitated admissions for
              thousands of students last year? Consult our experts and gain
              valuable insights into BAMS courses.
            </p>
            <form action="#" onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <input
                  type="name"
                  className={`form-control ${styles.formControl}`}
                  id="name"
                  placeholder="Name"
                  required
                  name="fullName"
                  onChange={handleChange}
                  value={formData.fullName}
                />
              </div>
              <div className="input-group mb-4">
                <div className="pe-3">
                  <div className="input-group-prepend">
                    <div className={`input-group-text ${styles.formControl}`}>
                      +91
                    </div>
                  </div>
                </div>
                <input
                  type="tel"
                  className={`form-control ${styles.formControl}`}
                  id="mobile"
                  name="phone"
                  placeholder="Mobile"
                  required
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className={`form-control ${styles.formControl}`}
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  className={`form-control ${styles.formControl}`}
                  id="interest"
                  name="message"
                  placeholder="Interested in?"
                  required
                  rows={3}
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>
              <div className={`${styles.whatsappText} text-center mb-4`}>
                Receive updates and essential information via
                <span> WhatsApp</span>.
              </div>
              <div className="form-group mb-4">
                <button className={`${styles.submitButton} btn btn-block`}>
                  Register Now
                </button>
              </div>
              <div className={`${styles.infoText} text-center`}>
                By proceeding, you explicitly consent to the Terms & Conditions
                and Privacy Policy of CollegeVeda.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
