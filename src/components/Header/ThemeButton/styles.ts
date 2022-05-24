import styled from 'styled-components'
import { darken, transparentize } from "polished";


interface ButtonThemeProps{
  isDarkTheme: boolean;
}

export const ButtonTheme = styled.button<ButtonThemeProps>`
  background: none;
  border: none;

  color: ${(props)=>props.isDarkTheme? darken(.6, '#E0E5EC' ) :transparentize(0.6, '#23262A' )};
  font-size: 1.5rem;

  position: absolute;
  top: 1rem;
  right: 2rem
`;
