import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactDetails = () => {
  return (
    <section className="container-lg mb-5">
      <div className="row">
        <div className="col-sm-5 ps-0 mb-sm-0 mb-4">
          <div className="border rounded overflow-hidden contact-form-college h-100">
            <h5 className="bg-green-common p-3 text-white ">Contact Details</h5>
            <div className="p-5">
              <h3>
                <strong>Office Address</strong>
              </h3>
              <div className="d-flex align-items-center gap-3 mt-2">
                <FaLocationDot fontSize={24} />
                <p className="mb-0">
                  814, 8th Floor, Wave Silver Tower, Sec-18 Noida, Uttar Pradesh
                  - 201301 India
                </p>
              </div>
              <hr className="w-100 mt-5 mb-0" />
            </div>
            <div className="px-5 pb-5">
              <h3>
                <strong>Contact Info</strong>
              </h3>
              <div className="d-flex align-items-center gap-3 mt-3">
                <BsFillTelephoneFill fontSize={20} />
                <p className="mb-0">+91 123456789</p>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <MdEmail fontSize={24} />
                <p className="mb-0">info@collegeveda.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-7 pe-0">
          <div className="p-sm-5 py-sm-0 py-5 rounded d-flex flex-column align-items-center contact-form-college h-100">
            <form action=" " className="">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control bg-gray"
                  placeholder="Enter Your Name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control bg-gray"
                  placeholder="Enter Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control bg-gray"
                  placeholder="Enter Your Phone"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div className="input-group mb-4">
                <textarea
                  row="4"
                  type="text"
                  className="form-control bg-gray"
                  placeholder="Write Your Message"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
              <button
                type="submit"
                className="bg-green-common border-none rounded-pill outline-none px-5 py-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
