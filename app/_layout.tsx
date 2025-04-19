import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import IntialLayout from "@/components/IntialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";


export default function RootLayout() {
    return (
        <ClerkAndConvexProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
                    <IntialLayout/>
                </SafeAreaView>
            </SafeAreaProvider>
        </ClerkAndConvexProvider>
    );
}
