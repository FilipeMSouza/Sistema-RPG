import Header from "../components/Header";

interface HomeProps{
  setIsDarkTheme:(Theme) => boolean;
  isDarkTheme:boolean;
}

export default function Home({setIsDarkTheme, isDarkTheme}:HomeProps) {
  return (
   <Header/>
   
  )
}
