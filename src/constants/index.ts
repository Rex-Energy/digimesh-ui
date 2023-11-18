import moment from "moment";

export const validateEmail = (email: string | null) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email === null ? true : emailPattern.test(email);
};

export function validatePhoneNumber(phoneNumber: string | null): string | null {
  let numericOnly = phoneNumber?.replace(/\D/g, "");

  if (numericOnly?.length === 12) {
    const countryCode = numericOnly.slice(0, 2);
    const number = numericOnly.slice(3, 12);
    const formatted = `+${countryCode}${number}`;
    return formatted;
  } else {
    return null;
  }
}

type Validation = {
  length: string;
  hasLowercase: string;
  hasUppercase: string;
  hasDigit: string;
  hasSpecialChar: string;
};

export function validatePassword(password: string | null): Validation {
  let validations = {
    length: false,
    hasLowercase: false,
    hasUppercase: false,
    hasDigit: false,
    hasSpecialChar: false,
  };

  if (password?.length >= 8) {
    validations = {
      ...validations,
      length: true,
    };
  }

  if (/[a-z]/.test(password)) {
    validations = {
      ...validations,
      hasLowercase: true,
    };
  }

  if (/[A-Z]/.test(password)) {
    validations = {
      ...validations,
      hasUppercase: true,
    };
  }

  if (/\d/.test(password)) {
    validations = {
      ...validations,
      hasDigit: true,
    };
  }

  if (/[!@#$%^&*(,)_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    validations = {
      ...validations,
      hasSpecialChar: true,
    };
  }

  return validations;
}

export function formatPhoneNumber(phoneNumber: string) {
  // Remove any non-numeric characters from the input string
  let numericOnly = phoneNumber.replace(/\D/g, "");
  if (numericOnly.slice(2, 3) && numericOnly.slice(2, 3) !== "0") {
    numericOnly = numericOnly.slice(0, 2)?.concat("0", numericOnly.slice(2));
  }

  // Split the numeric string into its constituent parts
  const countryCode = 61;
  //numericOnly.slice(0, 2)
  const dialCode = numericOnly.slice(2, 3);
  const areaCode = numericOnly.slice(3, 6);
  const localNumber1 = numericOnly.slice(6, 9);
  const localNumber2 = numericOnly.slice(9, 12);

  // Format the phone number using the desired format
  const formatted = `+${countryCode}${dialCode ? ` (${dialCode})` : ""}${
    areaCode ? ` ${areaCode}` : ""
  }${localNumber1 ? ` ${localNumber1}` : ""}${
    localNumber2 ? ` ${localNumber2}` : ""
  }`;

  return formatted;
}

export function signoutUser() {
  window.localStorage?.removeItem("userIDToken");
}
