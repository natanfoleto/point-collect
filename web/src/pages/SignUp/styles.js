import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const SelectGroup = styled.div`
  display: ${props => (props.selectVisible ? '' : 'none')};

  h1 {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    text-align: left;
    margin: 0 0 3px 0;
  }
`;

export const Select = styled.div`
  .select {
    background: ${props => (props.selected ? '#ff8' : '')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    padding-left: 15px;
    margin: 7px 0 0;

    &:hover {
      background: ${props => (props.selected ? '#ff8' : '')};
    }
  }

  .select img {
    height: 60px;
    width: 60px;
    padding-right: 10px;
    border-right: 1px solid #ccc;
  }

  .select .entity {
    display: flex;
    flex-direction: column;
  }

  .select .entity h1 {
    font-size: 14px;
    margin: 0 0 5px;
    text-align: center;
    color: #1E9E76;
  }

  .select .entity p {
    font-size: 13px;
    margin: 0 10px 0 10px;
    font-weight: normal;
  }
`;

export const Next = styled.div`
  display: ${props => (props.nextVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;

    &:disabled {
      background: rgba(255, 255, 255, 0.6);
      cursor: not-allowed;
    }
  }
`;

export const InputGroup = styled.div`
  display: ${props => (props.inputVisible ? 'flex' : 'none')};
  flex-direction: column;

  .button-back {
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    text-align: left;
    width: 25px;

    &:hover {
      background: none;
    }
  }

  .input-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    
    input {
      width: 80%;
    }
  }

  .material {
    cursor: pointer;
  }
`;

export const MaterialList = styled.div`
  position: absolute;
  left: calc(50% + 185px);
  top: calc(50% + 65px);
  width: 250px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 0 5px;
  display: ${props => (props.materialVisible ? 'block' : 'none')};

  .close {
    position: absolute;
    right: 5px;
    top: 0px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      height: 18px;
      width: 18px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 20px);
    left: -20px;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid rgba(0, 0, 0, 0.3);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  align-items: center;
  max-height: 160px;
  min-height: 170px;
  padding: 0px 20px 5px 10px;
  margin: 30px 0px 5px 0;

  .materials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;

    button {
      background: rgba(255, 255, 255, 0.8);
      font-size: 12px;
      height: 32px;
      padding: 0 10px;
    }
  }

  h1 {
    font-size: 16px;
    color: #ff1;
  }

  p {
    color: #fff;
    text-align: center;
    margin-top: 5px;
  }
`;

export const Material = styled.div`
  
`;

export const Trash = styled.div`
  display: ${props => (props.trashVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    height: 20px !important;
    width: 20px;
    margin-top: 100px;
  }
`;
