import Header from "../components/Header";
import { InputField, LoginFields, RadialButton } from "./styles/Register";

interface HomeProps {
  setIsDarkTheme: (Theme) => boolean;
  isDarkTheme: boolean;
}

export default function Registration({ setIsDarkTheme, isDarkTheme }: HomeProps) {
  return (
    <>
      <Header setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <LoginFields onSubmit={()=>{
        console.log("Registration")
      }}>
        <InputField isDarkTheme={isDarkTheme} placeholder="First name" type="text" />
        <InputField isDarkTheme={isDarkTheme} placeholder="Last name" type="text" />
        <InputField isDarkTheme={isDarkTheme} placeholder="Nick name" type="text" />
        <InputField isDarkTheme={isDarkTheme} placeholder="User name" type="email" />
        <InputField isDarkTheme={isDarkTheme} placeholder="Password" type="password" />
        <InputField isDarkTheme={isDarkTheme} placeholder="Password" type="password" />
        <RadialButton type="submit" isDarkTheme={isDarkTheme}>Register</RadialButton>
      </LoginFields>

    </>

  )
}