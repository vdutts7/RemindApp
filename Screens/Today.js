import React from 'react';
import {
    View,
    Text,
    StyleSheet,
}   from 'react-native';


const App = () => {
    return (
        <View style={style.body}>
            <Text style={style.headerText}> Today</Text>
            <View style={style.tapWrapper}>
                <Text style={style.tap}> Add </Text>
                <Text style={style.tap}> List </Text>
                <Text style={style.tap}> Delete </Text>
                <Text style={style.tap}> Edit </Text>
                <Text style={style.tap}> Login </Text>
            </View>
        </View>
    );
};

const style=StyleSheet.create({
    body:{
        backgroundColor: "#333",
        flex: 1
    },
    headerText:{
        color: '#fff',
        fontSize: 50,
        alignSelf: 'center'
    },
    tapWrapper:{
        flex:1,
        padding:50,
        flexDirection:'row',
        flexWrap:'wrap'
    },  
    tap:{
        backgroundColor:'blue',
        width: 150,
        height: 150,
        margin:2,
        color:"#fff",
        lineHeight:150,
        textAlign:'center',
        fontSize:30,
    }  
})
export default Today;