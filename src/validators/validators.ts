const errors: any = {};

export const loginFormOnSubmitValidator = (fields: any) => {
  if (fields.loginPassword === undefined || fields.loginEmail === undefined) {
    return "Есть незаполненные поля";
  } else {
    return null;
  }
};

export const registrateFormOnSubmitValidator = (fields: any) => {
  if (
    fields.registrateName === undefined ||
    fields.registrateSecondName === undefined ||
    fields.registrateEmail === undefined ||
    fields.registratePassword === undefined ||
    fields.registratePasswordRepeat === undefined
  ) {
    console.log("Есть незаполненные поля");
    return "Есть незаполненные поля";
  } else {
    return null;
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

export const inputLength = (len: number) => (value: string) => {
  return value?.length < len
    ? `Поле должно содержать ${len} и более символов`
    : null;
};

export const comparePasswords = (initialValue: string) => (
  currentValue: string
) => {
  if (initialValue !== currentValue) {
    return "Пароли не совпадают";
  } else {
    console.log("success");
    return null;
  }
};
