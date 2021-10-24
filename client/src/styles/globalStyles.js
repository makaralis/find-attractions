import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${props => props.hover ? '#c8d5ef' : '#96afdf'};
    min-width: 250px;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
`;

export const AttractionCard = styled.div`
    background: #96afdf;
    width: 400px;
    border: 1px solid white;
    border-radius: 4px;
    padding: 15px;
    color: black;и
    font-size: 14px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        background: #c8d5ef;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const StyledDiv = styled.div`
    display: ${props => props.display};
    flex-direction: ${props => props.flexdirection};
    align-items: ${props => props.alignitems};
    margin-top: ${props => props.margintop};
    margin-bottom: ${props => props.marginbottom};
    text-align: ${props => props.textalign};
    cursor: ${props => props.cursor};

`

export const SelectWrapper = styled.div`
    overflow: hidden;
    &:after {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1em;
        background-color: #34495e;
        transition: .25s all ease;
        pointer-events: none;
    }

    background: #96afdf;
    width: 400px;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
    padding-inline-end: 15px;
    color: white;
    font-size: 14px;
    margin: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        background: #c8d5ef;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
`;


export const StyledSelect = styled.select`
  outline: 0;
  border: 0;
  width: 100%;
  box-shadow: none;
  /* Personalize */
  padding: 15px;
  color: black;
  background-color: var(--darkgray);
  background-image: none;
  cursor: pointer;
  &:-ms-expand {
    display: none;
  }
`;
