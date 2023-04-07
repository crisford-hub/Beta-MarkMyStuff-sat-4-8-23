import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    Image, 
    Button, 
    Pressable } from "react-native";
import Font from "../constants/Font";
import Colors from "../constants/Colors";

const Home = (props) => {
    return (
        <ImageBackground 
        style={{
            backgroundColor: "#F5F5F5",
            flex: 1,

        }}>
            <View style={{
                backgroundColor: "black",
            }}>
                <Text
                style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                }}>
                    Home</Text>
            </View>

            <View>
                <Pressable onPress={() => props.navigation.navigate("Found")} title="TEST"
                style={{
                    backgroundColor: Colors.primary,
                        padding: 10,
                        borderRadius: 50,
                        marginHorizontal: 100,
                        marginTop: 50,
                }}
                >
                    <Text
                    style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>Found</Text>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate("LostOne")} title="TEST"
                style={{
                    backgroundColor: Colors.primary,
                        padding: 10,
                        borderRadius: 50,
                        marginHorizontal: 100,
                        marginTop: 50,
                }}
                >
                    <Text
                    style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>Lost</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )

}

export default Home;