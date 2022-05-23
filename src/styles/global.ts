import { createGlobalStyle } from 'styled-components'

interface GlobalStyle{
  isDarkTheme:boolean;
}


export const GlobalStyle = createGlobalStyle<GlobalStyle>`
:root{
  //Dark therm
  --Dark-bg: #15181C;
  --Dark-theme-button-background: #23262A;

  //Light theme
  --Light-bg: #E0E5EC;
  --Light-theme-button-background: #E0E5EC;

  //Common Colors
  --Life-bar: #0CF25D;
  --Life-bar-background: #038C3E;
  --Mana-bar: #04D9C4;
  --Mana-bar-background: #03588C;
  --Highlighter-red: #FF5145;
  --Highlighter-blue: #04ADBF;
  
  
  //Supply colors
  --White: #ffffff;
  --Black: #000000;
  --green-250: #02735E;
  --green-300: #025951;
  --Blue-250: #034159;
} 
*{

  body{ 
    background: ${(props)=> props.isDarkTheme ? 'var(--Dark-bg)' :  'var(--Light-bg)' }
  }
}
`