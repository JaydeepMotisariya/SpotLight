import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {styles} from "@/styles/auth.styles";
import {Link} from "expo-router";
import {useAuth} from "@clerk/clerk-expo";

export default function Index() {
    const {signOut} = useAuth();
    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={() => signOut()} style={{padding: 10, backgroundColor: "green", borderRadius: 5, width: 150}}>
                    <Text style={{color: "white", fontSize: 18, textAlign: "center"}}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

