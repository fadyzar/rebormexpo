import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <>
      <WebView
        source={{ uri: "https://reborn-fuel-8efcc028.base44.app/" }}
        originWhitelist={["*"]}
        allowsInlineMediaPlayback
        javaScriptEnabled
        domStorageEnabled
        setSupportMultipleWindows={false}
      />
      <StatusBar style="light" />
    </>
  );
}
