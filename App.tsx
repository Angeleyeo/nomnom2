import React, { useState } from "react";
import Navigator from "./routes/routes.js";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFont = () => {
  return Font.loadAsync({
<<<<<<< HEAD
    'Dancing-Script': require('./assets/fonts/DancingScript-VariableFont_wght.ttf')
  })
}
=======
    "Dancing-Script": require("./assets/fonts/DancingScript-VariableFont_wght.ttf"),
  });
};
>>>>>>> 9c2c557c518fdbcfbfeff4d9e21dfc45307bae38

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
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
