import styled from 'styled-components'

interface ButtonThemeProps{
  isTheme: boolean;
}

export const ButtonTheme = styled.button<ButtonThemeProps>`
  background: none;
  border: none;

  color: ${(props)=>props.isTheme? 'var(--Light-bg)':'var(--background)'};
  font-size: 1.5rem;
`;
