import {View } from "react-native";
import products from "../../../assets/data/products";
import ProductListItems from "@/src/components/ProductListIteams";


export default function MenueScreen() {
  return (
    <View>
      <ProductListItems product={products[0]}/>
      <ProductListItems product={products[1]}/>
      <ProductListItems product={products[2]}/>
    </View>
  );
}