export default interface IErrorMessageContext {
  errorMessage: string | undefined;
	setErrorMessage: (message: string) => void;
}