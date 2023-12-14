import React from "react";
import BreadcrumbSection from "../About/BreadcrumbSection";
import ContactDetails from "../College/ContactDetails";

const ContactComponent = () => {
  return (
    <>
      <BreadcrumbSection title={"Contact us"} subtitle={"Home > Contact"} />
      <div className="mt-5 pt-sm-5">
        <ContactDetails />
      </div>
    </>
  );
};

export default ContactComponent;
