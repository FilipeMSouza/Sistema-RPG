import ThemeButton from "./ThemeButton";


interface HeadProps{
  setIsDarkTheme:(Theme) => boolean;
  isDarkTheme:boolean;
}
export default function Header({setIsDarkTheme, isDarkTheme}:HeadProps) {
  return (
   <>
    <ThemeButton setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme}/>
   </>
  )



}