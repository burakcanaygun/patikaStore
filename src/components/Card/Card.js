import React from "react";
import { Image, Text, View } from "react-native";

import styles from './Card.style';
const Card = ({id, title, imgURL, price, inStock}) => {
  return (
    <View style={styles.centeredCard} key={id}>
      <Image style={styles.productImage} source={{uri: imgURL}}/>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <Text style={styles.inStock}>{inStock ? '' : 'STOKTA YOK'}</Text>
    </View>
  );
};

export default Card;
