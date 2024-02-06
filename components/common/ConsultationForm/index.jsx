import React, { useState } from "react";
import styles from "./ConsultationForm.module.scss";
import ToastMessage from "../Toasts";
import { submitEnquiry } from "@/api";
import Image from "next/image";

const defaultState = {
  fullName: "",
  phone: "",
  email: "",
  message: "",
  source: "Book consultation button",
};

const ConsultationForm = ({
  handleClose,
  source = "Book consultation button",
}) => {
  const [formData, setFormData] = useState({ ...defaultState, source });

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
          <Image
            src="/assets/images/common/contact-modal.webp"
            width="0"
            height="0"
            className={`${styles.leftImg} w-100 h-auto`}
            sizes="100vw"
            alt="about img"
            draggable={false}
          />
        </div>
        <div className="col-md-6 h-100 ps-md-0">
          <div
            className={`${styles.rightPart} p-4 my-4 mx-md-4 d-flex align-items-center justify-content-between`}
          >
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
                  placeholder="Mobile"
                  required
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className={`form-control ${styles.formControl}`}
                  id="email"
                  placeholder="Email"
                  required
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  className={`form-control ${styles.formControl}`}
                  id="interest"
                  placeholder="Interested in?"
                  rows={3}
                  required
                  name="message"
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
