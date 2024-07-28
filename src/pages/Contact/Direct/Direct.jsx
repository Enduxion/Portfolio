import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "framer-motion";
import Popup from "../Popup/Popup";
import validateForm from "../../../functions/validateForm";
import Tooltip from "../../../components/Tooltip/Tooltip";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicId = import.meta.env.VITE_PUBLIC_ID;

const Direct = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
  });
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState({ show: false, message: "", title: "" });
  const [err, setErr] = useState({ msg: "", rId: 0 });

  const handleDataChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const sendMsg = () => {
    emailjs
      .send(
        serviceId,
        templateId,
        { ...userData, message },
        {
          publicKey: publicId,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setPopUp({
            show: true,
            message:
              "You message was successfully sent to me and I will get back to you shortly.",
            title: "Message sent successfully",
          });
        }
      })
      .catch((error) => {
        setPopUp({
          show: true,
          message: "Something went wrong. Please try again later.",
          title: "Error sending message",
        });
      });
  };

  const handleSubmit = () => {
    let isValid = validateForm(userData.Name, userData.Email, message);
    if (isValid.validity) {
      sendMsg();
      setUserData({ Name: "", Email: "" });
      setMessage("");
    } else {
      setErr({ msg: isValid.errorMsg, rId: Math.random() })
    }
  };

  return (
    <div className="flex w-3/5 flex-col justify-between">
      <span className="font-bold text-lg il-slide">Get in Touch</span>
      <span className="text-sm text-primary-4 w-full il-slide">
        Note: If you want to contact due to an urgent/important matter, please
        email me or contact me via facebook or instagram.
      </span>
      <div className="mt-8 gap-8 flex flex-col w-full max-h-max il-slide">
        <span className="font-bold text-lg">Direct Message</span>
        {Object.keys(userData).map((data, index) => (
          <input
            name={data}
            key={index}
            type={index === 0 ? "text" : "email"}
            placeholder={data}
            value={userData[data]}
            onChange={(e) => handleDataChange(e)}
            className="w-full border-b-2 py-1 rounded-sm bg-transparent border-primary-1/50 outline-none hover:border-primary-4 focus:border-primary-3 hover:placeholder:text-primary-1/90 placeholder:text-primary-4 il-slide indent-2"
          />
        ))}
        <textarea
          name="message"
          className="w-full border-b-2 rounded-sm p-1 bg-transparent border-primary-1/50 outline-none hover:border-primary-4 focus:border-primary-3 hover:placeholder:text-primary-1/90 placeholder:text-primary-4 resize-none il-slide"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
          placeholder="Message"
          rows="2"
        />
        <span
          onClick={() => handleSubmit()}
          className="text-primary-2 cursor-pointer font-bold hover:text-primary-1 hover:bg-transparent border-2 border-primary-1 w-fit bg-primary-1 px-3 py-1 rounded-md duration-100 il-slide"
        >
          Submit
        </span>
      </div>
      <AnimatePresence>
        {popUp.show && (
          <Popup
            message={popUp.message}
            title={popUp.title}
            setPopUp={() => setPopUp({ show: false, message: "", title: "" })}
          />
        )}
      </AnimatePresence>
      {err.msg !== "" && (
        <Tooltip
          duration={3000}
          position={{ x: 1, y: 1 }}
          key={err.rId}
          className="text-primary-6 bg-primary-1 mb-2 mr-2 flex flex-col rounded-md"
        >
          <span className="text-inherit font-bold px-4 py-3 flex flex-row gap-2 items-baseline">
            <i className="fa fa-exclamation-triangle text-inherit"></i>
            {err.msg}
          </span>
          <span className="w-full h-1 bg-primary-6 rounded-b-md"></span>
        </Tooltip>
      )}
    </div>
  );
};

export default Direct;
