import { View, Button, Text, Image, navigation } from "react-native";
import { style } from "./Style_Splash";
import Fast from "../../Assets/Fast.png";

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Valid");
  }, 2000);

  return (
    <View style={style.container}>
      <Image source={Fast} style={style.logo} />
    </View>
  );
};

export default Splash;
