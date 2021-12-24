import React, { useState } from "react";
import "./styles.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import countries from "../../../utils/countries.json";
import axios from "../../../config";
import { toast } from "react-toastify";

const Project = () => {
  const [didFocus, setDidFocus] = useState({
    fullName: false,
    phoneNumber: false,
    email: false,
    country: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);

  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleFocus = (e) => {
    const { name } = e.target;

    setDidFocus({
      ...didFocus,
      [name]: true,
    });
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      country: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required!"),
      phoneNumber: Yup.string().required("Phone number is required!"),
      email: Yup.string()
        .email("Invalid email address!")
        .matches(emailRegExp, "Invalid email address!")
        .required("Email address is required!"),
      country: Yup.string().required("Country is required!"),
      message: Yup.string().required("Please enter a message!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      try {
        const response = await axios.post("/contact-us", values);

        toast.success(response.data.message);
        resetForm({ values: "" });
      } catch (err) {
        if (err.response && err.response.status === 400) {
          toast.error(err.response.data.error[0]);
        } else {
          toast.error(err.response.data.message);
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="contact-project">
      <div className="contact-project__left">
        <h2>Let's talk about your next big project.</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              placeholder="Add your name"
              id="fullName"
              type="text"
              name="fullName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              onFocus={handleFocus}
            />
            {(!!didFocus.fullName &&
              formik.values.fullName.trim().length > 0 &&
              formik.errors.fullName) ||
            formik.touched.fullName ? (
              <div className="input-error">{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div className="contact-form-group">
            <label htmlFor="country">Country</label>
            <div className="select-wrapper">
              <select
                id="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                onFocus={handleFocus}
              >
                <option value="">Select Country</option>
                {countries?.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {(!!didFocus.country &&
              formik.values.country.trim().length > 0 &&
              formik.errors.country) ||
            formik.touched.country ? (
              <div className="input-error">{formik.errors.country}</div>
            ) : null}
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Add your email"
              id="email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onFocus={handleFocus}
            />
            {(!!didFocus.email &&
              formik.values.email.trim().length > 0 &&
              formik.errors.email) ||
            formik.touched.email ? (
              <div className="input-error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="contact-form-group">
            <label htmlFor="phoneNumber">Phone</label>
            <input
              placeholder="Add your phone number"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              onFocus={handleFocus}
            />
            {(!!didFocus.phoneNumber &&
              formik.values.phoneNumber.trim().length > 0 &&
              formik.errors.phoneNumber) ||
            formik.touched.phoneNumber ? (
              <div className="input-error">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <input
              placeholder="Add your message"
              id="message"
              type="text"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              onFocus={handleFocus}
            />
            {(!!didFocus.message &&
              formik.values.message.trim().length > 0 &&
              formik.errors.message) ||
            formik.touched.message ? (
              <div className="input-error">{formik.errors.message}</div>
            ) : null}
          </div>
          <div className="contact-form-group">
            <div className="submit-btn">
              <button disabled={loading} type="submit">
                {loading ? "Please wait.." : "Submit"}
              </button>
            </div>
          </div>
        </form>

        <div className="contact-form-info">
          <p>
            By submitting, you consent to Slalom processing your information in
            accordance with our <a href="/">Privacy Policy</a>. We take your
            privacy seriously; opt out of <strong>email updates</strong> at any
            time. <br /> This site is protected by reCAPTCHA and the Google{" "}
            <strong>Privacy Policy</strong> and{" "}
            <strong>Terms of Service</strong> apply.
          </p>
        </div>
      </div>

      <div className="contact-project__right"></div>
    </section>
  );
};

export default Project;
