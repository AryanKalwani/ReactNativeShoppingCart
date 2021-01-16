import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
    return( 
        <View style={styles.header}>
            <Icon name='shopping-cart' color='white' size={45}/>
            <Text style={styles.text}>{props.counter} Items Added</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 90,
        padding: 40,
        backgroundColor: 'black',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    text: {
        fontSize: 25,
        paddingTop: 4,
        paddingLeft: 15,
        color: '#ff1155',
        textAlign: 'left',
        fontFamily: 'monospace',
    }
});

const mapStateToProps = (state) => ({
    counter: state.counter
});

export default connect(mapStateToProps)(Header);