import React from "react";
import Navigation from "./src/navigations/Navigation";
import FlashMessage from "react-native-flash-message";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Input } from "react-native-elements";

let customFonts = {
  "Poppins-Bold": require("./assets/fonts/SFUIDisplayBold.otf"),
  "Poppins-Medium": require("./assets/fonts/SFUIDisplayMedium.otf"),
  "Poppins-Light": require("./assets/fonts/SFUIDisplayLight.ttf"),
  "Poppins-Regular": require("./assets/fonts/SFUIDisplayRegular.otf"),
};

export default function App() {
  const [fonts, setFonts] = React.useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFonts(true);
  };

  React.useEffect(() => {
    _loadFontsAsync();
  }, []);

  if (!fonts) {
    return <AppLoading />;
  } else {
    return (
      <View flex={1}>
        <Navigation />
        <FlashMessage
          style={{
            position: "absolute",
            top: 50,
            width: "70%",
            alignItems: "center",
            paddingVertical: 10,
          }}
          titleStyle={{ fontSize: 18, lineHeight: 50, textAlign: "center" }}
          position="center"
          useRef="myLocalFlashMessage"
          icon="auto"
          duration={500}
        />
      </View>
    );
  }
}
