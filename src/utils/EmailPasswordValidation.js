export const isEmailValid = (email) => {
  // A basic email validation check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPasswordValid = (password) => {
  // Password should be at least 6 characters, contain a number, and a special character
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  return passwordRegex.test(password);
};
