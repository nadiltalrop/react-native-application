import React from 'react';
import { SafeAreaView, Text, View,StyleSheet ,TouchableOpacity,Pressable,Image,ScrollView} from 'react-native';

import BackArrow from './src/asseets/icons/back-arrow.svg'
import MenuIcon from './src/asseets/icons/menu-icon.svg'
import CalenderIcon from './src/asseets/icons/calendar.svg'
import BagIcon from './src/asseets/icons/bag.svg'


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}> 
        <View style={styles.header}>
            <TouchableOpacity onPress={() => console.log('hello')} activeOpacity={0.9}>
              <BackArrow width={50} height={40} />
            </TouchableOpacity>

            <Text style={styles.title}>
                Flash sale
            </Text>

            <TouchableOpacity onPress={() => console.log('hello')} activeOpacity={0.9}>
              <MenuIcon width={50} height={40} />
            </TouchableOpacity>
        </View>




        {/* spotlight section */}
        <View style={styles.spotlightContainer}>
            <View style={styles.spotLightLeft}>
              <Text style={styles.spotTitle}>
                  New Arrivals
              </Text>
              <Text style={styles.description}>
                Sale up to 60% off
              </Text>

              <View style={styles.calenderDiv}>
                  <CalenderIcon width={30} height={30} style={{marginLeft:10}}/>
                  <Text style={styles.calenderText}>25-30 June</Text> 
              </View>
            </View>

            <View style={styles.spotRight}>
              <Image source={require('./src/asseets/images/shoe.png')} style={styles.spotRightImage}/>
            </View>
        </View> 



        {/* section category */}
        
        <ScrollView contentContainerStyle={{height: 200}} horizontal showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity onPress={() => console.log('hello')} activeOpacity={0.8}>
                <Text style={styles.categoryText}>Electronics</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('hello')} activeOpacity={0.8}>
                <Text style={styles.categoryText}>Fasion</Text>
            </TouchableOpacity>
             
            <TouchableOpacity onPress={() => console.log('hello')} activeOpacity={0.8}>
                <Text style={styles.categoryText}>Sports</Text>
            </TouchableOpacity>    
                
            <TouchableOpacity onPress={() => console.log('hello')} activeOpacity={0.8}>
                <Text style={styles.categoryText}>Casual</Text>
            </TouchableOpacity>    
               
            <TouchableOpacity onPress={() => console.log('hello')} activeOpacity={0.8}>
                <Text style={styles.categoryText}>Travel</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => console.log('hello')} activeOpacity={0.8}>
                <Text style={styles.categoryText}>Travel</Text>
            </TouchableOpacity>
                
        </ScrollView>



        {/* product section */}
        <ScrollView>

            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.productContainer}>
                    <View>
                        <Image source={require('./src/asseets/images/shirt.jpg')} style={styles.productImage}/>
                    </View>

                    <View>
                        <Text style={styles.productTitle}>
                            HoMen Regular Shirt
                        </Text>
                        <Text style={styles.productPrice}>
                            $120
                        </Text>
                        <Text style={styles.offerPrice}>
                            $50
                        </Text>

                        <View style={styles.saleBar}>
                            <View style={styles.blackBar}>
                                <Text style={{color:"#fff",alignSelf:"flex-end"}}>346 sold</Text>
                            </View>
                            <View style={styles.whiteBar}></View>
                        </View>
                    </View> 

                    <View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.buyContainer}>
                                <BagIcon width={20} height={20} style={{marginLeft:10}}/>
                                <Text style={{color:'#fff',marginLeft:10}}>Buy</Text>
                            </View>
                        </TouchableOpacity>   
                    </View>   
                </View>
            </TouchableOpacity>



            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.productContainer}>
                    <View>
                        <Image source={require('./src/asseets/images/shirt.jpg')} style={styles.productImage}/>
                    </View>

                    <View>
                        <Text style={styles.productTitle}>
                            HoMen Regular Shirt
                        </Text>
                        <Text style={styles.productPrice}>
                            $120
                        </Text>
                        <Text style={styles.offerPrice}>
                            $50
                        </Text>

                        <View style={styles.saleBar}>
                            <View style={styles.blackBar}>
                                <Text style={{color:"#fff",alignSelf:"flex-end"}}>346 sold</Text>
                            </View>
                            <View style={styles.whiteBar}></View>
                        </View>
                    </View> 

                    <View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.buyContainer}>
                                <BagIcon width={20} height={20} style={{marginLeft:10}}/>
                                <Text style={{color:'#fff',marginLeft:10}}>Buy</Text>
                            </View>
                        </TouchableOpacity>   
                    </View>   
                </View>
            </TouchableOpacity>
            


            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.productContainer}>
                    <View>
                        <Image source={require('./src/asseets/images/bag.jpg')} style={styles.productImage}/>
                    </View>
                    
                    <View>
                        <Text style={styles.productTitle}>
                            Puma Backpack
                        </Text>
                        <Text style={styles.productPrice}>
                            $120
                        </Text>
                        <Text style={styles.offerPrice}>
                            $50
                        </Text>

                        <View style={styles.saleBar}>
                            <View style={styles.blackBar}>
                                <Text style={{color:"#fff",alignSelf:"flex-end"}}>346 sold</Text>
                            </View>
                            <View style={styles.whiteBar}></View>
                        </View>
                    </View> 

                    <View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.buyContainer}>
                                <BagIcon width={20} height={20} style={{marginLeft:10}}/>
                                <Text style={{color:'#fff',marginLeft:10}}>Buy</Text>
                            </View>
                        </TouchableOpacity>   
                    </View>   
                </View>
            </TouchableOpacity>

            
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.productContainer}>
                    <View>
                        <Image source={require('./src/asseets/images/shoe.jpg')} style={styles.productImage}/>
                    </View>
                    
                    <View>
                        <Text style={styles.productTitle}>
                            Nike Shoe
                        </Text>
                        <Text style={styles.productPrice}>
                            $120
                        </Text>
                        <Text style={styles.offerPrice}>
                            $50
                        </Text>

                        <View style={styles.saleBar}>
                            <View style={styles.blackBar}>
                                <Text style={{color:"#fff",alignSelf:"flex-end"}}>346 sold</Text>
                            </View>
                            <View style={styles.whiteBar}></View>
                        </View>
                    </View> 

                    <View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.buyContainer}>
                                <BagIcon width={20} height={20} style={{marginLeft:10}}/>
                                <Text style={{color:'#fff',marginLeft:10}}>Buy</Text>
                            </View>
                        </TouchableOpacity>   
                    </View>   
                </View>
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.productContainer}>
                    <View>
                        <Image source={require('./src/asseets/images/tshirt.jpg')} style={styles.productImage}/>
                    </View>
                    
                    <View>
                        <Text style={styles.productTitle}>
                            Solid Casual Tshirt
                        </Text>
                        <Text style={styles.productPrice}>
                            $120
                        </Text>
                        <Text style={styles.offerPrice}>
                            $50
                        </Text>

                        <View style={styles.saleBar}>
                            <View style={styles.blackBar}>
                                <Text style={{color:"#fff",alignSelf:"flex-end"}}>346 sold</Text>
                            </View>
                            <View style={styles.whiteBar}></View>
                        </View>
                    </View> 

                    <View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.buyContainer}>
                                <BagIcon width={20} height={20} style={{marginLeft:10}}/>
                                <Text style={{color:'#fff',marginLeft:10}}>Buy</Text>
                            </View>
                        </TouchableOpacity>   
                    </View>   
                </View>
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={0.8}>    
                <View style={styles.productContainer}>
                    <View>
                        <Image source={require('./src/asseets/images/tshirt.jpg')} style={styles.productImage}/>
                    </View>
                    
                    <View>
                        <Text style={styles.productTitle}>
                            Solid Casual Tshirt
                        </Text>
                        <Text style={styles.productPrice}>
                            $120
                        </Text>
                        <Text style={styles.offerPrice}>
                            $50
                        </Text>

                        <View style={styles.saleBar}>
                            <View style={styles.blackBar}>
                                <Text style={{color:"#fff",alignSelf:"flex-end"}}>346 sold</Text>
                            </View>
                            <View style={styles.whiteBar}></View>
                        </View>
                    </View> 

                    <View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.buyContainer}>
                                <BagIcon width={20} height={20} style={{marginLeft:10}}/>
                                <Text style={{color:'#fff',marginLeft:10}}>Buy</Text>
                            </View>
                        </TouchableOpacity>    
                    </View>   
                </View>
            </TouchableOpacity>


        </ScrollView>
    </SafeAreaView>

  );
}






const styles = StyleSheet.create({ 
  header: {
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },


  // spotlight section
  spotlightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#FBE8E7',
    width: '90%',
    height: 160,
    alignSelf:'center',
    borderRadius: 15,
    marginTop: 25,
  },
  spotLightLeft: {
    flex: 1,
   
  },
  spotTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 25,
    marginLeft: 25,
  },
  description: {
    fontSize: 18,
    fontWeight: 500,
    color: '#EBA352',
    marginTop: 3,
    marginLeft: 25,
  },
  calenderDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 10,
    backgroundColor:'#ffffff',
    width: 150,
    height: 40,
    padding: 8,
    borderRadius: 15,
  },
  calenderText: {
    fontSize: 13,
    color: '#2d2d2d',
    marginLeft: 10,
  },
  spotRight: {
    position: 'relative',
  },
  spotRightImage: {
    width: 180,
    height: 180,
    position: 'absolute',
    right: 19,
    top: 30,
    resizeMode: 'contain',
  },


  /* section category */
  categoryText: {
    fontSize: 15,
    color: '#999999',
    marginTop: 45,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 20,
    padding:10,
  },


//   product section
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 20,
    marginBottom: 15,
    justifyContent: 'space-between',
    // height: 150
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginTop: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight:500,
    color: '#000',
  },
  productPrice: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },
  offerPrice: {
    fontSize: 18,
    fontWeight: 500,
    color: '#EBA352',
  },
  saleBar: {
    flexDirection: 'row',
    marginTop: 10,
  },
  blackBar: {
    backgroundColor:"#000",
    width:100,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
  },
  whiteBar: {
    backgroundColor:"#F0F0F0",
    height:21,
    width:50,
    borderBottomRightRadius:10,
    borderTopRightRadius:10
  },

  buyContainer: {
    backgroundColor:"#000",
    flexDirection:'row',
    alignItems:'center',
    marginRight:15,
    height:35,
    width:80,
    borderRadius:20,
  }
});


