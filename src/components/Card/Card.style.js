import { Dimensions, StyleSheet } from "react-native";
const numColumns = 2;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  centeredCard: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ECEFF1",
    height: screenHeight/numColumns,
    flex:1,
  },
  productImage: {
    flex:1,
    borderRadius: 5,
    resizeMode: "contain",
    backgroundColor: "white"
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    marginTop:5
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    color: "#808080",
  },
  inStock: {
    fontWeight:"bold",
    textAlign:"left",
    color:"#FF0000",
    fontSize: 16,
  },



});
