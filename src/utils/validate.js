export const checkValidData = (
    isSignInForm,
    emailOrPhone,
    password,
    phone,
    email
  ) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(
        password
      );
    const isPhoneValid = /^(?:\+\d{1,3}\s?)?\d{10}$/.test(phone);
    const isEmailOrPhone =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$|^[+]{1}(?:[0-9()/.-]\s?){6,15}[0-9]{1}$/.test(
        emailOrPhone
      );
  
    if (isSignInForm) {
      if (!isEmailOrPhone) return "Please enter a valid Email or Phone number";
      if (!isPasswordValid) return "Password is not valid";
    } else {
      if (!isEmailValid) return "Email ID is not valid";
      if (!isPhoneValid) return "Phone Number is not valid";
      if (!isPasswordValid) return "Password is not valid";
    }
  
    return null;
  };
  