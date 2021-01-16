import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');


const AddDelButton = (props) => {

    const funcIncreaseItem = () => {
        {props.increment()};
        {props.increasePrice(parseInt(props.itemPrice[props.title]))};
        {props.increaseItem(props.title)};
    }
    
    const funcDecreaseItem = () => {
        {props.decrement()};
        {props.decreasePrice(parseInt(props.itemPrice[props.title]))};
        {props.decreaseItem(props.title)};
    }
    
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={funcIncreaseItem} style={styles.add}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <View style={styles.mid}>
                <Text style={styles.midText}>{props.quantity}</Text>
            </View>
            <TouchableOpacity onPress={funcDecreaseItem} style={styles.del}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        position: 'absolute',
        marginLeft: (0.62*(0.9*width))
    },  
    add: {
        padding: 5,
        height: 35,
        width: 35,
        backgroundColor: 'green',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        color: 'white'
    },
    del: {
        padding: 5,
        height: 35,
        width: 35,
        backgroundColor: '#ff1155',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mid: {
        padding: 5,
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    midText: {
        color: 'white',
        fontSize: 18
    }
})    

const mapStateToProps = state => ({
    itemPrice: state.itemPrice.arr
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
    increasePrice: (price) => dispatch({type: 'INCREASEPRICE', price: price}),
    decreasePrice: (price) => dispatch({type: 'DECREASEPRICE', price: price}),
    increaseItem: (itemName) => dispatch({type: 'ADD_ITEM', itemName: itemName}),
    decreaseItem: (itemName) => dispatch({type: 'REMOVE_ITEM', itemName: itemName})
})

export default connect(mapStateToProps,mapDispatchToProps)(AddDelButton);