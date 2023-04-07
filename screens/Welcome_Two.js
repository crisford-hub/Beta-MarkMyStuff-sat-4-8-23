import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from "react-native";
import Font from "../constants/Font";

const Welcome_Two = (props) => {
    return (
        <ImageBackground
        style={styles.background}>
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

                <Image style={styles.bg1}
                source={require('../assets/bg2.png')}
                />

                
                <Text style={styles.conText}>See if anyone find your Lost Item</Text>
                <Text style={styles.text}
                >Check the list of all lost items that are found to claim if it is yours</Text>
            </View>
            <Pressable style={styles.buttonNew} onPress={() => props.navigation.navigate("Welcome")} title="">
                <Text style={styles.texts}>Next</Text>
            </Pressable>
            
            
        </ImageBackground>
        

        
    );
}

const styles = StyleSheet.create({
    butones: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingHorizontal: 50,

    },
    conText: {
        fontSize: 30,
        color: "#d4d4d6",
        textAlign: "center",
        marginTop: 35,
        fontWeight: "bold",
    },
    text: {
        alignSelf: "center",
        color: "#d4d4d6",
        fontWeight: "300",
    },
    background: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#262a33",
    },
    bg1: {
        height: 250,
        width: 250,
        alignSelf: "center",
        marginTop: 70,
    },
    texts: {
        color: "#262a33",
        fontSize: 20,
    },
    buttonNew: {
        borderRadius: 35,
        alignSelf: "center",
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 13,
        marginTop: 50,
    }
});


export default Welcome_Two;