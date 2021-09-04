import React, { useState } from "react";
import Navigator from "./routes/routes.js";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFont = () => {
  return Font.loadAsync({
    'Dancing-Script': require('./assets/fonts/DancingScript-VariableFont_wght.ttf')
  })
}

export default function App() {
  const[fontLoaded, setfontLoaded] = useState(false);
  /*if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFont}
        onError={() => console.log('ERROR')}
        onFinish={() => {
          setfontLoaded(true);
        }}
      />
    );
  }*/
  console.disableYellowBox = true;
  return <Navigator />;
}
