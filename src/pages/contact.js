"use client";
// dependencies
import { useState } from "react";
import Container from "../components/Container";
import Tabs from "../pagesComponents/contact/Tabs";
import styles from "../pagesComponents/contact/Contact.module.scss";
import Image from "next/image";
import Lahore from "../pagesComponents/contact/images/lahore.webp";
import Islamabad from "../pagesComponents/contact/images/islamabad.webp";
import USA from "../pagesComponents/contact/images/austin.png";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import Loader from "../components/Loader/Loader";
import Head from "next/head";
import axios from "axios";
import { Toast } from "../components/Toast";

// text area field for form using formik
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <span className={styles.formField}>
      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <p style={{ marginBottom: 0 }}>{meta.error}</p>
      ) : null}
    </span>
  );
};

// Contact us page component
export default function Contact() {
  const [toast, setToast] = useState(false);
  // component contact us
  return (
    <>
      <Head>
        <title>Terafort | Contact</title>
      </Head>
      <Container
        fwcCls={styles.outerContainer}
        containerCls={styles.containerClass}
      >
        <div className={styles.technologies}>
          <Tabs>
            {/* LAHORE tab */}
            <div label="LAHORE" icon={"hello"}>
              <div className={styles.outletData}>
                {/* Outlet address */}
                <div className={styles.address}>
                  <h2>Lahore</h2>
                  <p>
                    Terafort, 7th Floor, Business Hub Broadway Commercial,{" "}
                    <br /> DHA Phase 8, Lahore, 54792 <br /> 0301 - 1166523
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Terafort+Limited/@31.5023446,74.4238181,17z/data=!3m1!4b1!4m5!3m4!1s0x39190f89b16c30d1:0xb19291aa320b0aad!8m2!3d31.50234!4d74.4260068"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.locationLink}
                  >
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ fontSize: "1rem" }}
                    ></i>
                    <span>View Location</span>
                  </a>
                </div>
                {/* Outlet image */}
                <Image
                  src={Lahore}
                  className={styles.outletImage}
                  alt="terafort-lahore-office"
                />
              </div>
            </div>

            {/* ISLAMABAD tab */}
            <div label="ISLAMABAD" icon={"world"}>
              <div className={styles.outletData}>
                {/* Outlet address */}
                <div className={styles.address}>
                  <h2>Islamabad</h2>
                  <p>
                    Terafort, Ground Floor, Software Technology Park, I-9/3,
                    Islamabad, Pakistan. 051 - 8772520
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Terafort+Limited/@33.664372,73.050271,17z/data=!3m1!4b1!4m5!3m4!1s0x38df953ec17583b9:0x140b61ae7f3e9f7c!8m2!3d33.6643676!4d73.0524597"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.locationLink}
                  >
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ fontSize: "1rem" }}
                    ></i>
                    <span>View Location</span>
                  </a>
                </div>
                {/* Outlet image */}
                <Image
                  src={Islamabad}
                  className={styles.outletImage}
                  alt="terafort-Islamabad-office"
                />
              </div>
            </div>
            {/* USA tab */}
            <div label="AUSTIN" icon={"US"}>
              <div className={styles.outletData}>
                {/* Outlet address */}
                <div
                  className={styles.address}
                  style={{ marginBottom: "1rem" }}
                >
                  <h2>AUSTIN</h2>
                  <p>
                    Terafort Limited, 701 Brazos Street,Ste. 720, Austin, Texas,
                    78701
                  </p>
                  {/* <a
                    href="https://www.google.com/maps/place/Terafort+Limited/@33.664372,73.050271,17z/data=!3m1!4b1!4m5!3m4!1s0x38df953ec17583b9:0x140b61ae7f3e9f7c!8m2!3d33.6643676!4d73.0524597"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.locationLink}
                  >
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ fontSize: "1rem" }}
                    ></i>
                    <span>View Location</span>
                  </a> */}
                </div>
                {/* Outlet image */}
                <Image
                  src={USA}
                  className={styles.outletImage}
                  alt="terafort-Islamabad-office"
                />
              </div>
            </div>
          </Tabs>

          {/* Contact form */}
          <div className={styles.contactForm}>
            <h2>Contact us</h2>
            <p>
              Have an idea? Let’s make it come true. Submit your query. Better
              today than tomorrow.
            </p>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phoneNo: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required*"),
                phoneNo: Yup.string().required("Required*"),
                email: Yup.string().email().required("Required*"),
                message: Yup.string().required("Required*"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                axios
                  .post(
                    "https://2qre6ou61c.execute-api.us-east-1.amazonaws.com/dev/user/contactus",
                    values
                  )
                  .then((res) => {
                    setToast(true);
                    setSubmitting(false);
                    setTimeout(() => {
                      setToast(false);
                    }, 1000);
                    resetForm();
                  })
                  .catch((error) => {
                    console.error(error);
                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <span className={styles.formField}>
                    <Field name="name" type="text" placeholder="Name" />
                    <p>
                      <ErrorMessage name="name" />
                    </p>
                  </span>

                  <span className={styles.formField}>
                    <Field name="email" type="email" placeholder="Email" />
                    <p>
                      <ErrorMessage name="email" />
                    </p>
                  </span>

                  <span className={styles.formField}>
                    <Field
                      name="phoneNo"
                      type="text"
                      placeholder="Phone No"
                      maxLength={11}
                    />
                    <p>
                      <ErrorMessage name="phone" />
                    </p>
                  </span>

                  <MyTextInput
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="20"
                    style={{ resize: "none", padding: "1rem" }}
                  />

                  <button type="submit" className="flexRowAndCenter">
                    Submit
                    {isSubmitting && <Loader />}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/* Toast component */}
        <Toast show={toast} message="Message has been sent" />
      </Container>
    </>
  );
}
