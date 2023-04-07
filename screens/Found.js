import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Button, Pressable } from "react-native";

const Found = (props) => {
    return (
        <ImageBackground
        style={{
            backgroundColor: "#F5F5F5",
            flex: 1,
            paddingTop: 10,
        }}>
            <View>
                <Pressable
                onPress={() => props.navigation.navigate("Home")} title=""
                >
                    <Text
                    style={{
                        fontSize: 20,
                        color: "#1E1E1E",
                        paddingTop: 20,
                    }}>
                        back

                    </Text>
                </Pressable>
                <Text
                style={{
                    fontSize: 20,
                    color: "#1E1E1E",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingTop: 100,
                }}>
                    Register Item
                </Text>
            </View>
        </ImageBackground>
    )
    
}

export default Found;