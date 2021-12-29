import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import "./../App.css";

const Contact = () => {
  return (
    <div className="contact_info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-sm-flex  justify-content-between">
            {/* for phone number */}
            <div className="contact_info_item">
              <AiFillPhone fontSize={30} className="mx-4 text-primary" />
              <div className="contact_info_content flex">
                <div className="contact_info_title h4 text-primary fw-bold">
                  Phone
                </div>
                <div className="contact_info_text h5 text-secondary">
                  +91 8688668145
                </div>
              </div>
            </div>
            {/* for Email */}
            <div className="contact_info_item mx-sm-5 ">
              <AiFillMail fontSize={30} className="mx-4 text-primary" />
              <div className="contact_info_content flex">
                <div className="contact_info_title h4 text-primary fw-bold">
                  Email
                </div>
                <div className="contact_info_text h5 text-secondary">
                  pavansharma.mg143@gmail.com
                </div>
              </div>
            </div>
            <div className="contact_info_item">
              <MdLocationCity fontSize={30} className="mx-4 text-primary" />
              <div className="contact_info_content flex">
                <div className="contact_info_title h4 text-primary fw-bold">
                  Address
                </div>
                <div className="contact_info_text h5 text-secondary">
                  Tattiannaram, Hyderabad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact us form */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5 shadow">
                <div className="contact_form_title text-primary text-bold">
                  Get in Touch
                </div>
                <form id="contact_form" className="mt-5">
                  <div className="contact_form_name d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="input_field"
                      placeholder="Your name"
                      required="true"
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      className="input_field"
                      placeholder="Your name"
                      required="true"
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="input_field"
                      placeholder="Your name"
                      required="true"
                    />
                  </div>

                  <div className="mt-5 ">
                    <textarea
                      className="w-100 textarea_field"
                      placeholder="Your message"
                      rows={5}
                      cols={30}
                    />
                  </div>
                  <div className="contact_form_btn d-flex justify-content-end align-items-center mt-5">
                    <button type="submit" className="bg-primary submitBtn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
