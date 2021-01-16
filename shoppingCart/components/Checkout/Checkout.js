import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Products/Header';
import Footer from './CheckoutFooter';
import CheckoutCard from './CheckoutCard';

const Checkout = (props) => {
    
    const renderItems = (arr) => {
    return Object.keys(arr).map((title) => 
        arr[title]>0 ? <CheckoutCard key={title} title={title} quantity={arr[title]}/> : null
    )
    }
    
    return (
        <View style={styles.container}>
             <View stickyHeaderIndices={[0]}>
                <Header />
            </View>
            <ScrollView>
                {renderItems(props.items)}
            </ScrollView>
            <Footer />
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const mapStateToProps = state => ({
    items: state.listItems.arr,
})

export default connect(mapStateToProps)(Checkout);