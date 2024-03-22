import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import { useContext } from "react";
import { ErrorMessageContext } from "../contexts/ErrorMessageContext";

const LayoutContainer = styled.div`
  header {
    width: 100%;
    height: var(--header-height);
    padding: var(--spacing-default);
    background-color: var(--color-bg-light);
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(auto, calc(var(--page-max-width)));
    position: fixed;
    bottom: 0;
    z-index: var(--z-above);
  }

  main {
    min-height: 100dvh;
    padding: var(--spacing-default);
    padding-bottom: calc(var(--header-height) + var(--spacing-default));

    display: grid;
    grid-template-columns: minmax(auto, calc(var(--page-max-width)));
    grid-auto-rows: min-content;
    justify-content: center;
    align-items: start;

    .errorMessageContainer {
      position: absolute;
      bottom: var(--header-height);
      background-color: var(--color-text);
      color: var(--color-bg-dark);
      padding: var(--spacing-default);
      border-radius: var(--radius-full);
      z-index: var(--z-modal);
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Layout = () => {
  const { errorMessage } = useContext(ErrorMessageContext);

  return (
    <LayoutContainer>
      <header>
        <Navigation />
      </header>

      <main>
        {errorMessage && (
          <p className="errorMessageContainer">{errorMessage}</p>
        )}
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

export default Layout;
