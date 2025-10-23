'use client'
// dependencies
import { useState } from 'react'
import Container from '../../components/Container'
import styles from './Publish.module.scss'
import Loader from '../../components/Loader/Loader'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import { Toast } from '../../components/Toast'
import * as Yup from 'yup'
import axios from 'axios'
// Publishing form component
// ...

export default function PublishForm() {
  const [toast, setToast] = useState(false);

  return (
    <Container id="submission">
      <div className={styles.publishForm}>
        <h2>PUBLISH WITH US</h2>
        <p>We make all your dreams come true in a successful project.</p>
        <Formik
          initialValues={{
            email: '',
            name: '',
            phoneNo: '',
            studioName: '',
            studioSize: '',
            teamInfo: '',
            studioLocation: '',
            gamePlayVideo: '',
            gameLink: '',
            message: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required*'),
            name: Yup.string('Name is required').required('Required*'),
            phoneNo: Yup.string().required('Required*'),
            studioName: Yup.string('Studio Name is required').required(
              'Required*'
            ),
            studioSize: Yup.string(),
            teamInfo: Yup.string(),
            studioLocation: Yup.string(),
            gamePlayVideo: Yup.string('Gameplay video link is required').required(
              'Required*'
            ),
            gameLink: Yup.string(),
            message: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            axios
              .post('https://2qre6ou61c.execute-api.us-east-1.amazonaws.com/dev/user/publishwithus', values)
              .then(() => {
                setSubmitting(false);
                setToast(true);
                resetForm();
                setTimeout(() => {
                  setToast(false);
                }, 1000);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.publishFormFields}>
              <fieldset>
                <h6>General information</h6>
                <span>
                  <Field
                    name="email"
                    type="text"
                    placeholder="Email*"
                    autoComplete="off"
                  />
                  <p>
                    <ErrorMessage name="email" />
                  </p>
                </span>
                <span>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name*"
                    autoComplete="off"
                  />
                  <p>
                    <ErrorMessage name="name" />
                  </p>
                </span>
                <span>
                  <Field
                    name="phoneNo"
                    type="text"
                    placeholder="Phone Number*"
                    autoComplete="off"
                  />
                  <p>
                    <ErrorMessage name="phoneNo" />
                  </p>
                </span>
              </fieldset>
              <fieldset>
                <h6>Studio information</h6>
                <span>
                  <Field
                    name="studioName"
                    type="text"
                    placeholder="Studio Name*"
                    autoComplete="off"
                  />
                  <p>
                    <ErrorMessage name="studioName" />
                  </p>
                </span>
                <Field
                  name="studioSize"
                  type="text"
                  placeholder="Studio Size"
                  autoComplete="off"
                />
                <Field
                  name="teamInfo"
                  type="text"
                  placeholder="Team Info"
                  autoComplete="off"
                />
                <Field
                  name="studioLocation"
                  type="text"
                  placeholder="Studio Location"
                  autoComplete="off"
                />
              </fieldset>
              <fieldset>
                <h6>Game information</h6>
                <span>
                  <Field
                    name="gamePlayVideo"
                    type="text"
                    placeholder="Gameplay video link*"
                    autoComplete="off"
                  />
                  <p>
                    <ErrorMessage name="gamePlayVideo" />
                  </p>
                </span>
                <Field
                  name="gameLink"
                  type="text"
                  placeholder="Game Link (if applicable)"
                  autoComplete="off"
                />
              </fieldset>
              <fieldset>
                <h6>Message</h6>
                <span>
                  <Field
                    name="message"
                    type="text"
                    placeholder="Message*"
                    autoComplete="off"
                  />
                  <p>
                    <ErrorMessage name="message" />
                  </p>
                </span>
              </fieldset>
              <button type="submit" className="flexRowAndCenter">
                Submit{isSubmitting && <Loader />}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Toast show={toast} message={'Publishing request submitted'} />
    </Container>
  );
}