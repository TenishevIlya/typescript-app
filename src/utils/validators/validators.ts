// import store there because when i call it
// in the Registrate container it causes
// maximum update depth exceeded error
import store from "../../store/index.store";

// same logic of functions but i think it is better to separete then into different once
export const loginFormOnSubmitValidator = (fields: any) => {
  if (fields.loginPassword === undefined || fields.loginEmail === undefined) {
    return "Есть незаполненные поля";
  } else {
    return null;
  }
};

// same logic of functions but i think it is better to separete then into different once
export const registrateFormOnSubmitValidator = (fields: any) => {
  if (
    fields.registrateName === undefined ||
    fields.registrateSecondName === undefined ||
    fields.registrateEmail === undefined ||
    fields.registratePassword === undefined ||
    fields.registratePasswordRepeat === undefined
  ) {
    return "Есть незаполненные поля";
  } else {
    return null;
  }
};

// upperCase starting letter
export const startsWithUpperCase = (value?: string) => {
  const upperCaseStartingLetter = value?.[0].toUpperCase();
  if (value?.[0] === upperCaseStartingLetter) {
    return null;
  } else {
    return "Поле должно начинаться с заглавной буквы";
  }
};

export const isEmailCorrect = (value: string) => {
  if (
    value?.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i) &&
    value.length !== 0
  ) {
    return null;
  } else {
    return "Неправильный формат электронной почты";
  }
};

export const comparePasswords = (value: string) => {
  if (store.getState().getValue !== value) {
    return "Пароли не совпадают";
  } else {
    return null;
  }
};
