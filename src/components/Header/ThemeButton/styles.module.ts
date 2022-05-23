import styled from 'styled-components'

export const DarkTheme = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 5rem;
  height: 26px;
  border-radius: 15px;
  background: var(--Dark-theme-button-background);
  box-shadow: 0px 2.0836px 3.77653px rgba(0, 0, 0, 0.25), inset 0px 2.34405px 5.59968px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: var(--Dark-theme-button-background);
    box-shadow: 0px 0.911575px 4.1672px 0.390675px rgba(0, 0, 0, 0.45);
    transition: 0.2s;
  }
`;
export const LightTheme = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 5rem;
  height: 26px;
  box-shadow: 0px 2.0836px 3.77653px rgba(0, 0, 0, 0.25), inset 0px 2.34405px 5.59968px rgba(0, 0, 0, 0.25);
  &:checked + ${DarkTheme} {
    background: var( --Light-bg);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 55px;
      transition: 0.2s;
      background: var( --Light-bg);;
      box-shadow: 0px 0.911575px 4.1672px 0.390675px rgba(0, 0, 0, 0.45);
    }
  }
`;