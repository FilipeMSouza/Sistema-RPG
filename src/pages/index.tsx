import { useState } from "react";
import Header from "../components/Header";

import {InputField, LoginFields, RadialButtons, SingInBtn, SingUpBtn } from "./styles/home.module";

interface HomeProps {
  setIsDarkTheme: (Theme) => boolean;
  isDarkTheme: boolean;
}

export default function Home({ setIsDarkTheme, isDarkTheme }: HomeProps) {
  return (
    <>
      <Header setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <LoginFields>
        <InputField isDarkTheme={isDarkTheme} placeholder="User name" />
        <InputField isDarkTheme={isDarkTheme} placeholder="Password" type="password" />
      </LoginFields>
      <RadialButtons>
        <SingInBtn isDarkTheme={isDarkTheme}>Sing In</SingInBtn>
        <SingUpBtn isDarkTheme={isDarkTheme}>Sing Up</SingUpBtn>
      </RadialButtons>

    </>

  )
}
