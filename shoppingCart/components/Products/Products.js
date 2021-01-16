import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

const Products = () => {
    const navigation = useNavigation();

    const navigateToCheckout = () => {
        navigation.navigate("Checkout");
    }

    return (
    <View style={styles.container}> 
        <View stickyHeaderIndices={[0]}>
            <Header />
        </View>
        <ScrollView style={styles.container}>
            <ProductCard title='Burger' uri='https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg' price='2'/>
            <ProductCard title='Wrap' uri='https://media.istockphoto.com/photos/delicious-fresh-chicken-wrap-closeup-shot-picture-id1134292628?k=6&m=1134292628&s=612x612&w=0&h=IgdrEttXuZFUQma-vV2kMNCGaZedO_0iZoos0ypPEb0=' price='4'/>
            <ProductCard title='Sandwich' uri='https://media.istockphoto.com/photos/fresh-submarine-sandwich-picture-id619636950?k=6&m=619636950&s=612x612&w=0&h=eKSo8M6mD1dIaXdmCkgMWBhg8_I8KVPlgKOS8_SByUM=' price='3'/>
            <ProductCard title='Pizza' uri='https://thumbs.dreamstime.com/b/pizza-31112718.jpg' price='5'/>
            <ProductCard title='Noodles' uri='https://media.istockphoto.com/photos/instant-noodles-in-the-bowl-picture-id643845272?k=6&m=643845272&s=612x612&w=0&h=qu6AnrFTDoEFvjPipW5ddHcm_js6FwumNHF8m8qjwkI=' price='6'/>
            <ProductCard title='Subway' uri='https://media.istockphoto.com/photos/fresh-submarine-sandwich-picture-id619636950?k=6&m=619636950&s=612x612&w=0&h=eKSo8M6mD1dIaXdmCkgMWBhg8_I8KVPlgKOS8_SByUM=' price='9'/>
        </ScrollView>
        <Footer navigateFunc={navigateToCheckout}/>
    </View>   
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  
  export default Products;