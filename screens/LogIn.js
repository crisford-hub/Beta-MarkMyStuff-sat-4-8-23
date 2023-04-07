import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Button, Pressable } from "react-native";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import fonts from "../config/fonts";

const LogIn = (props) => {
    return (
        <ImageBackground style={{
            backgroundColor: "#F5F5F5",
            flex: 1,
            paddingTop: 100,
        }}>
            <View
            style={{
                padding: Spacing * 2,
            }}>
                <View style={{
                    alignItems: "center",
                    paddingTop: 100,
                }}>
                    <Text style={{
                        fontSize: FontSize.xLarge,
                        color: "#1E1E1E",
                        fontWeight: "bold",
                        fontFamily: fonts["Poppins"],
                        marginVertical: Spacing * 3,
                    }}
                    >
                        Login Here
                    </Text>
                    <Text style={{
                        fontFamily: Font["Poppins"],
                        fontSize: FontSize.medium,
                    }}>Welcome Back! </Text>
                </View>
                <View>
                    <TextInput
                    placeholder="Email"
                    placeholderTextColor= "black"
                    style={{
                        fontFamily: Font["Poppins"],
                        fontSize: 18,
                        padding: Spacing * 2,
                        backgroundColor: "#FFFFFF",
                        borderRadius: Spacing,
                        marginVertical: Spacing,
                    }}
                    />
                    <TextInput
                    placeholder="Password"
                    placeholderTextColor= "black"
                    secureTextEntry={true}
                    style={{
                        fontFamily: Font["Poppins"],
                        fontSize: 18,
                        padding: Spacing * 2,
                        backgroundColor: "#FFFFFF",
                        borderRadius: Spacing,
                        marginVertical: Spacing,
                        
                    }}
                    />
                </View>

                <View>
                    <Text
                    style={{
                        fontFamily: Font["Poppins"],
                        fontSize: FontSize.small,
                        color: Colors.primary,
                        alignSelf: "flex-end",
                    }}>
                        Forgot your Password?
                    </Text>
                </View>

                <Pressable
                    style={{
                        backgroundColor: Colors.primary,
                        padding: 10,
                        borderRadius: 50,
                        marginHorizontal: 100,
                        marginTop: 100,
                    }}
                    onPress={() => props.navigation.navigate("Home")} title="">
                    <Text
                    style={{
                        fontFamily: Font["Poppins"],
                        fontSize: 25,
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",

                    }}
                    >
                        Login
                    </Text>
                </Pressable>

                <Pressable
                style={{
                    alignSelf: "center",
                    marginTop: 20,
                }}
                onPress={() => props.navigation.navigate("Register")} title="">
                    <Text style={{
                        fontFamily: "sans-serif",
                        fontSize: 15,
                        color: "#1E1E1E",
                        fontWeight: "bold",
                    }}>
                        Don't have an account? Create here
                    </Text>
                </Pressable>

            </View>
        </ImageBackground>
    );
}


export default LogIn;