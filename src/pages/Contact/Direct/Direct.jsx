import { Formik, Form } from "formik";

import { ContactSchema, sendData } from "../../../resources/api";
import InputField from "./InputField/InputField";
import { useState } from "react";
import Popup from "../Popup/Popup";

const Direct = () => {
  const [showPopup, setShowPopup] = useState({
    show: false,
    title: "",
    message: "",
  });

  return (
    <div className="w-3/5 flex flex-col">
      <span className="font-bold text-xl il-slide">Get in touch</span>
      <span className="text-sm text-primary-4 w-full il-slide">
        Note: If you want to contact due to an urgent/important matter, please
        email me or contact me via facebook or instagram.
      </span>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          let isDataSent = sendData(values);
          if (isDataSent) {
            setShowPopup({
              title: "Message sent successfully",
              message:
                "I have recieved your message, and I'll get back to you shortly after.",
              show: true,
            });
          } else {
            setShowPopup({
              title: "Message not sent",
              message:
                "Message was not sent for some reason! If the problem remains, contact me via email or any other platforms given.",
              show: true,
            });
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full flex flex-col gap-4 mt-8">
            <span className="font-bold text-lg il-slide">Direct Message</span>
            <InputField
              err={errors.name}
              touched={touched.name}
              as="input"
              name="name"
              placeholder="Name"
            />
            <InputField
              err={errors.email}
              touched={touched.email}
              as="input"
              name="email"
              placeholder="Email"
            />
            <InputField
              err={errors.message}
              touched={touched.message}
              as="textarea"
              name="message"
              placeholder="Message"
            />
            <button type="submit" className="button il-slide ml-1">
              Send
            </button>
          </Form>
        )}
      </Formik>
      {showPopup.show && (
        <Popup
          title={showPopup.title}
          message={showPopup.message}
          setPopUp={setShowPopup}
        />
      )}
    </div>
  );
};

export default Direct;
