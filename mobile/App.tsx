import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import { Archivo_400Regular, Archivo_700Bold, useFonts } from "@expo-google-fonts/archivo";
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import AppStack from "./src/routes/AppStack";
import theme from "./src/styles/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <AppStack />
        <StatusBar style="light" />
      </ThemeProvider>
    );
  }
}
