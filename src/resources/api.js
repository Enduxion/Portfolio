import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const SERVICE_KEY = import.meta.env.VITE_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_ID;
const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_ID;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "too short")
    .max(30, "too long")
    .required("name is required"),
  email: Yup.string().email("invalid email").required("email is required"),
  message: Yup.string()
    .min(10, "too short")
    .max(255, "too long")
    .required("message is required"),
});

const sendData = async (user) => {
  await emailjs
    .send(SERVICE_KEY, TEMPLATE_KEY, user, {
      publicKey: PUBLIC_KEY,
    })
    .then((response) => {
      if (response === 200) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      return false;
    });
};

export { ContactSchema, sendData };
