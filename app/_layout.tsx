import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>

      {/* matches status bar to color scheme */}
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
