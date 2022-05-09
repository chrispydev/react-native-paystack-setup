import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import products from '../../consts/products';
import { useStateValue } from '../../provider/StateProvider';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (product) => {
    // console.log(basket.map((item) => item));
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        image: product.image,
        title: product.name,
        price: product.price,
      },
    });
  };

  const Card = ({ product }) => {
    return (
      <TouchableOpacity
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', product)}
      >
        <View style={style.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image
              source={product.image}
              style={{ height: 120, width: 120, borderRadius: 120 / 2 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {product.name}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              ${product.price}
            </Text>
            <View style={style.addToCartBtn}>
              <TouchableOpacity onPress={() => addToBasket(product)}>
                <Icon name='add' size={20} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 32 }}>Hello</Text>
          <Image
            source={require('../../assets/logo.png')}
            style={{ height: 70, width: 70, borderRadius: 25 }}
          />
        </View>
        <Text style={{ marginTop: 1, fontSize: 12, color: COLORS.grey }}>
          We're delighted to have you as our customer. What do you want today
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={({ item }) => <Card product={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
