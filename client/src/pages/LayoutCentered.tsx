import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutCenteredContainer = styled.div`
  main {
    min-height: 100dvh;
    padding: var(--spacing-default);

    display: grid;
    grid-template-columns: minmax(auto, calc(var(--page-max-width)));
    justify-content: center;
    align-items: center;
  }
`;

const LayoutCentered = () => {
  return (
    <LayoutCenteredContainer>
      <main>
        <Outlet />
      </main>
    </LayoutCenteredContainer>
  );
};

export default LayoutCentered;
