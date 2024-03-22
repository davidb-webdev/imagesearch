import styled from "styled-components";

interface IMosaicProps {
  children: React.ReactNode;
}

const MosaicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--spacing-half);

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Mosaic = ({ children }: IMosaicProps) => {
  return <MosaicContainer>{children}</MosaicContainer>;
};

export default Mosaic;
