const isValidData = (email, password, fullname) => {

  const emailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
    email
  );

  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const nameValid =
    fullname === (null || undefined)
      ? true
      : /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(fullname);

  if (!nameValid) return " Enter a Valid Name";
  if (!emailValid) return "Email is Not Valid";
  if (!passwordValid) return "Password is Not Valid";

  return null;
};

export default isValidData;
