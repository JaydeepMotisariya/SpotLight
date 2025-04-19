import {Stack} from "expo-router";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ClerkProvider} from "@clerk/clerk-expo";
import {tokenCache} from "@clerk/clerk-expo/token-cache";
import IntialLayout from "@/components/IntialLayout";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
    throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
               <IntialLayout/>
            </SafeAreaView>
        </SafeAreaProvider>
            </ClerkProvider>
    );
}
