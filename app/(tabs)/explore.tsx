import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MyComponent = () => (
  <SafeAreaView>
    <Text>Explore Page</Text>
    <Link href={"/(nobottombar)/accountinfo"}><Text >"Accounts info page"</Text></Link>

  </SafeAreaView>
);

export default MyComponent;
