import { useState } from "react";
import IErrorMessageContext from "../models/IErrorMessageContext";
import { ErrorMessageContext } from "../contexts/ErrorMessageContext";
import { Outlet } from "react-router-dom";

const ErrorMessageProvider = () => {
  const [errorMessageState, setErrorMessageState] =
    useState<IErrorMessageContext>({
      errorMessage: undefined,
      setErrorMessage: () => {}
    });

  errorMessageState.setErrorMessage = (newMessage) => {
    setErrorMessageState({
      ...errorMessageState,
      errorMessage: newMessage
    });
    setTimeout(
      () =>
        setErrorMessageState({ ...errorMessageState, errorMessage: undefined }),
      3000
    );
  };

  return (
    <ErrorMessageContext.Provider value={errorMessageState}>
      <Outlet />
    </ErrorMessageContext.Provider>
  );
};

export default ErrorMessageProvider;
