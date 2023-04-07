import React from "react";
import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import Font from "../constants/Font";

const Welcome = (props) => {
    return (
        <ImageBackground
        style={{
            flex: 1,
            paddingTop: 50,
            backgroundColor: "#262a33",
        }}>
            <View>
            <Text style={{
                    fontFamily: Font["Poppins"],
                    fontSize: 40,
                    color: "#d4d4d6",
                    fontWeight: "bold",
                    alignContent: "center",
                    textAlign: "center",
                    paddingTop: 50,
                }}>
                    Track
                    My
                    Stuff
                    </Text>
                <Image style={{
                    height: 250,
                    width: 300,
                    alignSelf: "center",
                    marginTop: 70,
                }}
                source={require('../assets/bg3.png')}
                />

                
                <Text style={{
                        fontSize: 30,
                        color: "#d4d4d6",
                        textAlign: "center",
                        marginTop: 35,
                        fontWeight: "bold",
                }}>
                    Help others find their lost items
                    </Text>
                <Text style={{
                    alignSelf: "center",
                    color: "#d4d4d6",
                    fontWeight: "300",
                    textAlign: "center",
                }}>
                    Found something you think is someone’s lost item?
                Create a post in a few steps!
                </Text>
            </View>

            <View style={{
                flexDirection: "row",
                alignSelf: "center",
            }}>
                <Pressable style={{
                    borderRadius: 10,
                    alignSelf: "center",
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 50,
                    marginTop: 50,}} 
                onPress={() => props.navigation.navigate("LogIn")}
                title="">
                  <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#262a33",
                    }}>
                        Login
                    </Text>
                </Pressable>
                <Pressable style={{
                    borderRadius: 35,
                    alignSelf: "center",
                    backgroundColor: "#262a33",
                    paddingVertical: 10,
                    paddingHorizontal: 50,
                    marginTop: 50,
                }} 
                onPress={() => props.navigation.navigate("Register")}
                title="">
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                        }}>
                        Register
                    </Text>
                </Pressable>
            </View> 
        </ImageBackground>
        

        
    );
}



export default Welcome;