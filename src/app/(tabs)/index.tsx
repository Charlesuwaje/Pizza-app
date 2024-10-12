import { StyleSheet,Text,View,Image } from 'react-native';
import Colors from '../../constants/Colors';
import products from '../../../assets/data/products';

const product = products[0];

// import EditScreenInfo from '@/src/components/EditScreenInfo';
// import {  } from '@/src/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One Hello World !</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <Image source={{uri:product.image}} style={styles.image}/>
      <Text style={styles.main}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'white',
    padding:10,
    borderRadius:20

  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
  main:{
    fontSize:30,
    color:'red',
    fontWeight:'bold',
    marginVertical:10
 },
 price:{
   fontSize:20,
   color:Colors.light.tint,
   fontWeight:'bold',
 },
 image:{
   width:'100%',
   marginVertical:10,
  //  height:100,
   aspectRatio:1
 }
});
