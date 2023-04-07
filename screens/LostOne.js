import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Button, Pressable } from "react-native";
import { SearchBar } from "react-native-screens";


const LostOne = (props) => {
    return (
        <ImageBackground
        style={{
            backgroundColor: "#F5F5F5",
            flex: 1,
            
        }}>
            <View
            style={{
                backgroundColor: "black",
                right: 0,
            }}>
            <SearchBar
            style={{
                backgroundColor: "black",
            }}
            placeholder="Search"
            placeholderTextColor="black"
      />
            </View>
        </ImageBackground>
    )
}

export default LostOne;