import styled from "styled-components";

interface IMosaicItemProps {
  itemId: string;
	itemTitle: string;
  buttonLabel: string;
  buttonClickHandler: () => void;
}

const MosaicItemContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  button {
    position: absolute;
    bottom: var(--half-spacing);
    right: var(--half-spacing);
    background-color: var(--dark-bg-color);
    padding: var(--half-spacing);
    border-radius: 100%;
    width: 1em;
    height: 1em;
    line-height: 1;
    box-sizing: content-box;
    -webkit-user-select: none;
    user-select: none;
    border: none;
    color: var(--text-color);
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

      <button
        onClick={buttonClickHandler}
      >
        {buttonLabel}
      </button>
    </MosaicItemContainer>
  );
};

export default MosaicItem;
