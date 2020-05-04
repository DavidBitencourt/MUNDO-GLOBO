import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
export default function HomeServices({ url }) {
  const [uri, setUri] = useState("");

  useEffect(() => {
    if (url) setUri(url);
  }, [url]);
  return (
    <WebView
      source={{ uri: uri }}
      style={{ marginTop: 0 }}
      originWhitelist={["*"]}
    />
  );
}
