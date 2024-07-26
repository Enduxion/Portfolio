import { useState } from "react";

const Direct = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleDataChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(userData);
  };

  return (
    <div className="flex w-1/2 h-full flex-col justify-center">
      <span className="font-bold text-lg">Get in Touch</span>
      <span className="text-sm text-primary-4">
        Note: If you want to contact due to an urgent/important matter, please
        email me or contact me via facebook or instagram.
      </span>
      <div className="mt-8 gap-8 flex flex-col border-[1px] border-primary-4/50 p-4 w-5/6 backdrop-blur-md bg-gradient-to-bl from-primary-4/10 to-transparent max-h-max">
        <span className="font-bold text-lg indent-1">Direct Message</span>
        {Object.keys(userData).map((data, index) => (
          <input
            name={data}
            key={index}
            type="text"
            placeholder={data}
            value={userData[data]}
            onChange={(e) => handleDataChange(e)}
            className="w-full border-b-2 py-1 rounded-sm bg-transparent border-primary-1/50 outline-none indent-2 hover:border-primary-4 focus:border-primary-3 hover:placeholder:text-primary-1/90 placeholder:text-primary-4"
          />
        ))}
        <span onClick={() => handleSubmit()}>Submit</span>
      </div>
    </div>
  );
};

export default Direct;
