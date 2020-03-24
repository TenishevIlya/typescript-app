const errors: any = {};

const formLenght = (value: string) => {
  if (value?.length < 5) {
    errors.validFormLength = "Not enough field length";
    return errors.validFormLength;
  } else {
    return null;
  }
};

export default formLenght;
