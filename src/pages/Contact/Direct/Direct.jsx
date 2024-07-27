import { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicId = import.meta.env.VITE_PUBLIC_ID;

const Direct = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
  });
  const [message, setMessage] = useState("");

  const handleDataChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Send data to email
    emailjs.send(serviceId, templateId, { ...userData, message }, {
      publicKey: publicId
    });

    setUserData({ Name: "", Email: "" });
    setMessage("");
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
            type="text"
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
        >Submit</span>
      </div>
    </div>
  );
};

export default Direct;
