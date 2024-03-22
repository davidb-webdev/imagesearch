import styled from "styled-components";

interface IMosaicItemProps {
  itemId: string;
  itemTitle: string;
  buttonLabel: string;
  buttonClickHandler: () => void;
}

const MosaicItemContainer = styled.div`
  position: relative;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    max-height: 250px;
    object-fit: cover;
    object-position: 50% 25%;
    border-radius: var(--radius-default);
  }

  button {
    position: absolute;
    bottom: var(--spacing-half);
    right: var(--spacing-half);
    background-color: var(--color-bg-dark);
    padding: var(--spacing-half);
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    line-height: 1;
    box-sizing: content-box;
    -webkit-user-select: none;
    user-select: none;
    border: none;
    color: var(--color-text);
  }
`;

const MosaicItem = ({
  itemId,
  itemTitle,
  buttonLabel,
  buttonClickHandler
}: IMosaicItemProps) => {
  return (
    <MosaicItemContainer>
      <img src={itemId} alt={itemTitle} />

      <button onClick={buttonClickHandler}>{buttonLabel}</button>
    </MosaicItemContainer>
  );
};

export default MosaicItem;
