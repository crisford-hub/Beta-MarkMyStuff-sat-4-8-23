import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Button, Pressable } from "react-native";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import fonts from "../config/fonts";

const Register = (props) => {
    return (
        <ImageBackground style={{
            backgroundColor: "#f5f5f5",
            flex: 1,
            paddingTop: 50,
        }}
        >
            <View
            style={{
                padding: Spacing * 2,
            }}
            >
                <View style={{
                    alignItems: "center",
                    paddingTop: 100,
                }}
                >
                    <Text style={{
                        fontSize: FontSize.xLarge,
                        color: "black",
                        fontWeight: "bold",
                        fontFamily: fonts["Poppins"],
                        
                        
                    }}>
                        Register Here
                    </Text>
                    <Text style={{
                        fontFamily: Font["Poppins"],
                        fontSize: FontSize.medium,
                        paddingTop: 50,
                    }}
                    >
                        Create your account by filling up this form. 
                    </Text>
                </View>
                <View style={{
                    paddingTop: 50,
                }}>
                    <TextInput
                    placeholder="Full Name"
                    placeholderTextColor= "black"
                    style={{
                        fontFamily: Font["Poppins"],
                        fontSize: 18,
                        padding: Spacing * 2,
                        backgroundColor: "white",
                        borderRadius: Spacing,
                        marginVertical: Spacing,
                    }}
                    />
                    <TextInput
                    placeholder="Email"
                    placeholderTextColor= "black"
                    style={{
                        fontFamily: Font["Poppins"],
                        fontSize: 18,
                        padding: Spacing * 2,
                        backgroundColor: "white",
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
                        backgroundColor: "white",
                        borderRadius: Spacing,
                        marginVertical: Spacing,
                    }}
                    />
                </View>

                

                <Pressable
                    style={{
                        backgroundColor: Colors.primary,
                        padding: 10,
                        borderRadius: 50,
                        marginHorizontal: 100,
                        marginTop: 50, 
                    }}
                    onPress={() => props.navigation.navigate("LogIn")} title=""
                >
                    <Text
                    style={{
                        fontFamily: Font["Poppins"],
                        fontSize: 25,
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",

                    }}
                    >
                        Register
                    </Text>
                </Pressable>

                <Pressable
                style={{
                    alignSelf: "center",
                    marginTop: 20,
                }}
                onPress={() => props.navigation.navigate("LogIn")} title=""
                >
                    <Text style={{
                        fontFamily: Font["Poppins"],
                        fontSize: 15,
                        color: "black",
                    }}>
                       Already have an account? Login here
                    </Text>
                </Pressable>

            </View>
        </ImageBackground>
    );
}


export default Register;