import React from 'react';
import {connect} from 'react-redux';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Touchable} from 'react-native';

const {width, height} = Dimensions.get('window');

const Footer = (props) => {
    return (
        <View style={styles.view}> 
            <Text style={styles.text}>Total: {props.price}$</Text> 
            <TouchableOpacity onPress={props.navigateFunc} style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </View> 
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        backgroundColor: 'black',
        height: 78,
        padding: 20,
        alignItems: 'center'
    },
    text: {
        color: '#ff1155',
        fontSize: 25
    },
    button: {
        padding: 20,
        marginLeft: 0.65*width,
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        height: 20, 
        justifyContent: 'center',
        position: 'absolute'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});

const mapStateToProps = (state) => ({
    price: state.totalPrice
});

export default connect(mapStateToProps)(Footer);