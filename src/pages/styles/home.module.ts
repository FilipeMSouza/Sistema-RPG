import styled from "styled-components";

interface Props{
  isDarkTheme: boolean;
}


export const InputField = styled.input <Props>`
  width: 20rem;
  height: 45px;
  
  background: ${(props)=> props.isDarkTheme ?
  'var(--Dark-bg)' : 'var(--Light-bg)'};
  
  border: ${(props)=> props.isDarkTheme ?'2px solid var(--Dark-theme-button-background)':'2px solid rgba(240, 240, 240, .5)'};
  border-radius: 10px;
  
  box-shadow: ${(props)=> props.isDarkTheme ?'3px 4px 3px var(--Light-Shadow)':'3px 4px 3px var(--Dark-Shadow)'};

  color: ${(props)=> props.isDarkTheme ?'var(--Light-bg)':'var(--Dark-bg)'};
  
  text-align: center;
`;

 export const LoginFields = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;

  padding: 2rem;
  gap:4rem;

  margin-top: 20rem;
  margin-bottom: 0rem;
 `;


export const RadialButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
  mar

`;

export const SingInBtn = styled.button <Props>`
  background: ${(props)=> props.isDarkTheme ?
  'var(--Dark-bg)' : 'var(--Light-bg)'};
  width: 8rem;
  height: 45px;
  
  border-radius:9px;
  border:none;

  color: ${(props)=> props.isDarkTheme ?
  'var(--Light-bg)' : 'var(--Dark-bg)'};

  box-shadow: ${(props)=> props.isDarkTheme ?'3px 4px 3px var(--Light-Shadow)':'3px 4px 3px var(--Dark-Shadow)'};

  
`;
export const SingUpBtn = styled.button <Props>`
  background: ${(props)=> props.isDarkTheme ?
  'var(--Highlighter-red)' : 'var(--Highlighter-blue)'};
  
  width: 8rem;
  height: 45px;

  border: none;
  border-radius:9px;
  
  color: var(--Light-bg);

  box-shadow: ${(props)=> props.isDarkTheme ?'3px 4px 3px var(--Light-Shadow)':'3px 4px 3px var(--Dark-Shadow)'};


`;