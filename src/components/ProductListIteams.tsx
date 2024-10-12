import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types";

export const defultImage =
  "https://images.pexels.com/photos/1297911/pexels-photo-1297911.jpeg?auto=compress&cs=tinysrgb&dpr=2&";

type ProductListItemsProps = {
  product: Product;
};
const ProductListItems = ({ product }: ProductListItemsProps) => {
  // console.log(props)
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defultImage }}
        style={styles.image}
      />
      <Text style={styles.main}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};
export default ProductListItems;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  main: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    marginVertical: 10,
    aspectRatio: 1,
  },
});
