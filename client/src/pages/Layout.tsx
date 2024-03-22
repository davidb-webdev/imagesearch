import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import styled from "styled-components";

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
    align-items: top;
  }
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

export default Layout;
