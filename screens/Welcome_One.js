import React from "react"
import {
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    Image,
    Pressable,
    } from "react-native"
import Font from "../constants/Font";
import Colors from "../constants/Colors";

const Welcome_One = (props) => {
    return (
        <ImageBackground style={styles.background}>
            <View>
                <Text style={{
                    fontFamily: Font["Poppins"],
                    fontSize: 40,
                    color: "black",
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
                source={require('../assets/bg1.png')}
                />
                <Text style={styles.conText}>Lost Something?</Text>
                <Text style={styles.text}
                >find an item and let your friends know</Text>
            </View>
            
           
            

            <Pressable style={styles.buttonNew} onPress={() => props.navigation.navigate("Welcome_Two")} title="TEST">
                <Text style={styles.texts}>Next</Text>
            </Pressable>

        </ImageBackground>


        
    );
}

const styles = StyleSheet.create({
    
    conText: {
        fontSize: 40,
        color: "black",
        textAlign: "center",
        marginTop: 50,
        fontWeight: "bold",
    },
    text: {
        alignSelf: "center",
        color: "black",
        fontWeight: "300",
    },
    background: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#FFFFFF",
    },
    bg1: {
        height: 250,
        width: 250,
        alignSelf: "center",
        marginTop: 70,
    },
    button: {
        borderRadius: 50,
        backgroundColor: "white",
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignSelf: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#262a33",
        fontFamily: Font["Poppins"],
        fontSize: 20,
        fontWeight: "bold",
        
    },
    texts: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    buttonNew: {
        borderRadius: 35,
        alignSelf: "center",
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 13,
        marginTop: 50,
    }
});

export default Welcome_One;