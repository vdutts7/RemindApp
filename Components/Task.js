import React from  'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            
            <View styles={styles.itemLeft}>
            
            <TouchableOpacity style={styles.square}></TouchableOpacity>    
            </View>
            <Text style={styles.itemText}>{props.text}</Text>
            <View style={styles.circular}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
        alignItems: 'flex-end',
    },
    itemText: {
        maxWidth: '80%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;