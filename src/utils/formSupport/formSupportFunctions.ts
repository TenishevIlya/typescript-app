export const checkError = (
  error: any,
  setErrorFunc: (value: string) => void
) => {
  switch (`${error.message}`) {
    case "GraphQL error: Incorrect password":
      return setErrorFunc("Неправильный пароль");
    case "GraphQL error: No user with that email":
      return setErrorFunc("Нет пользователя с этим email");
    case "Network error: Failed to fetch":
      return setErrorFunc("Ошибка подключения к серверу");
    case "GraphQL error: This email is already registered":
      return setErrorFunc("Пользователь с таким email уже существует");
  }
};

export const hideWarning = (hideFunc: (value: string) => void) => {
  hideFunc("");
};
