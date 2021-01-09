import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const ProductCard = (props) => {
    const [buttonState, buttonChangeState] = useState('unpressed');

    const changeButtonState = () => {
        if (buttonState==='unpressed') {
            buttonChangeState('pressed');
            {props.increment()};
            {props.increasePrice(parseInt(props.price))};
            {props.increaseItem(props.title)};
            {props.addItemPrice(props.title, props.price)}
        } else {
            buttonChangeState('unpressed');
            {props.decrement()};
            {props.decreasePrice(parseInt(props.price))};
            {props.decreaseItem(props.title)};
        }
    };

    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{uri: props.uri}}></Image>
            <View>
                <Text style={styles.text}>{props.title}</Text> 
                <Text style={styles.price}>Price: {props.price}$ </Text>
            </View>
            <TouchableOpacity onPress={changeButtonState} style={buttonState==='unpressed' ? styles.buttonUnpressed : styles.buttonPressed}>
                <Text style={styles.text}>
                    {buttonState==='unpressed' ? 'Add' : 'Remove'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        borderRadius: 20
    },
    view: {
        margin: 0.05*width,
        width: 0.9*width,
        height: 150,
        padding: 25,
        backgroundColor: '#ff1155',
        borderRadius: 20,
        flexDirection: 'row',
    }, 
    text: {
        padding: 10,
        fontSize: 20,
        color: 'white',
    }, 
    price: {
        paddingLeft: 10,
        fontSize: 18,
        color: 'white'
    },
    buttonUnpressed: {
        padding: 20,
        marginLeft: 0.6*width,
        marginTop: 50,
        borderRadius: 20,
        backgroundColor: 'green',
        height: 20, 
        justifyContent: 'center',
        position: 'absolute'
    },
    buttonPressed: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 0.6*width,
        marginTop: 50,
        borderRadius: 20,
        backgroundColor: 'black',
        height: 20, 
        justifyContent: 'center',
        position: 'absolute'
    }
});


const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
    increasePrice: (price) => dispatch({type: 'INCREASEPRICE', price: price}),
    decreasePrice: (price) => dispatch({type: 'DECREASEPRICE', price: price}),
    increaseItem: (itemName) => dispatch({type: 'ADD_ITEM', itemName: itemName}),
    decreaseItem: (itemName) => dispatch({type: 'REMOVE_ITEM', itemName: itemName}),
    addItemPrice: (itemName, itemPrice) => dispatch({type: 'ADD_PRICE', itemName: itemName, itemPrice: itemPrice})
}); 

export default connect(null, mapDispatchToProps)(ProductCard);