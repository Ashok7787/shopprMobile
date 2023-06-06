import React from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Logo from '../Components/Elements/Logo';
import {useNavigation} from '@react-navigation/native';
import externalStyle from '../style/externalStyle';
import {useState} from 'react';

function MainHeader(props) {
  const [cartItems, setCartItems] = useState(0);
  const navigation = useNavigation();
  const [drawerView, setDrawerView] = useState(props.drawerView);
const  openDrawerView = () => {
    props.drawer.current.openDrawer();
     setDrawerView(true);
}
const  closeDrawerView = () => {
    props.drawer.current.closeDrawer();
     setDrawerView(false);
}
console.warn(drawerView);
  return (
    <>
      <View style={externalStyle.mainHeader}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row'           
          }}
          >
          {/* <Button title="Open" onPress={() => drawer.current.openDrawer()} /> */}
          {drawerView === false ? 
         
            <Avatar
              rounded
              size="large"
              onPress={() => openDrawerView()}
              source={{
                uri: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Allu-Arjun-3.jpg?impolicy=Medium_Widthonly&w=1280&h=900',
              }}
            />
         : 
            <Avatar
              rounded
              size="large"
              onPress={() => closeDrawerView()}
              source={{
                uri: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Allu-Arjun-3.jpg?impolicy=Medium_Widthonly&w=1280&h=900',
              }}
            />
          }

          <View style={{padding: 10}}>
            <Icon
              name="shopping-cart"
              size={30}
              color="black"
              onPress={() => navigation.navigate('User')}
            />
            <Badge
              size="large"
                value={cartItems}
              containerStyle={{position: 'absolute', top: -4, right: -4}}
            />
          </View>
          {/* <Text style={{fontSize: 30, padding: 10}}>{cartItems}</Text> */}
        </View>
      </View>
    </>
  );
}

export default MainHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: '8%',
    color: '#ffffff',
    fontSize: 30,
    letterSpacing: 2,
    fontFamily: 'roboto',
  },
});
