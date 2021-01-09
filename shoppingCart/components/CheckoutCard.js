import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import AddDelButton from './AddDelButton';

const {width, height} = Dimensions.get('window');

const CheckoutCard = (props) => {
    return (
        <View style={styles.view}> 
            <Text style={styles.text}>{props.title}</Text>
            <AddDelButton quantity={props.quantity} title={props.title}/>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        padding: 20,
        marginLeft: 0.05*width,
        marginTop: 20,
        marginRight: 0.05*width,
        width: 0.9*width,
        backgroundColor: 'black',
        borderRadius: 50,
        alignItems: 'center'
    },
    text: {
        padding: 5,
        fontSize: 25,
        color: 'white'
    },
});

export default CheckoutCard;