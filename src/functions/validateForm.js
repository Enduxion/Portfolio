const EMAIL_RGX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_RGX = /^(?=.*[a-zA-Z]).{3,30}$/;

const validateForm = (name, email, message) => {

  // First Level check {lengths}
  if (name.trim().length < 3 || name.trim().length > 30) {
    return { validity: false, errorIn: "Name", errorMsg: "Name has to be between 3 and 30 characters long" }
  }
  if (email.length < 5 || email.length > 255) {
    return { validity: false, errorIn: "Email", errorMsg: "Invalid email" }
  }
  if (!message.trim().length) {
    return { validity: false, errorIn: "Message", errorMsg: "Message can't be empty" }
  }

  // Second level check {valild type}
  if (!EMAIL_RGX.test(email)) {
    return { validity: false, errorIn: "Email", errorMsg: "Invalid email" }
  } 
  if (!NAME_RGX.test(name)) {
    return { validity: false, errorIn: "Name", errorMsg: "Invalid Name" }
  }

  return { validity: true, errorIn: "", errorMsg: "" }
}

export default validateForm;