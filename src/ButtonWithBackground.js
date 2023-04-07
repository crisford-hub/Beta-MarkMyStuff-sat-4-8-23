import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Button, Pressable } from 'react-native';

export default function ButtonWithBackground(){
    return (
        <Pressable>
            <View style={styles.Button}>
                <Text style={styles.buttonText}>  </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "black",
    },

    buttonText: {
        color: "black",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center",
    }

})