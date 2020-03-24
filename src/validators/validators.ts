const errors: any = {};

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
  // if (value?.length < len) {
  //   return `Поле должно содержать ${len} и более символов`;
  // } else {
  //   return null;
  // }
};

//export default formLenght;
