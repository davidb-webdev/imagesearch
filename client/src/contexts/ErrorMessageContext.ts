import { createContext } from "react";
import IErrorMessageContext from "../models/IErrorMessageContext";

export const ErrorMessageContext = createContext<IErrorMessageContext>({
  errorMessage: undefined,
  setErrorMessage: () => {}
});
