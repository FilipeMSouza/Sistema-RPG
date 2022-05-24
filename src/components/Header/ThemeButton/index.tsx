import { ButtonTheme } from "./styles";
import {MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';  

interface ThemeButtonProps{
  setIsDarkTheme:(Theme) => boolean;
  isDarkTheme:boolean;
}
export default function ThemeButton({setIsDarkTheme, isDarkTheme}:ThemeButtonProps){
  return(
    <>
     <ButtonTheme isDarkTheme={isDarkTheme} onClick={()=> setIsDarkTheme(!isDarkTheme)}>
       {isDarkTheme? <MdOutlineModeNight/> : <MdOutlineLightMode/> }
     </ButtonTheme>
    </>
  )
}