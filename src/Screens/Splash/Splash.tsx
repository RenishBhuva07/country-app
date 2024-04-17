import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {getIsLogin} from "../../Utils/Utils";
import Images from "../../assets/styles/Images";


interface ISplashProps {}

const Splash = (props) => {

  useEffect(()=>{
    async function fetchData()
    {
      let isLogin = await getIsLogin() || false
      isLogin = JSON.parse(isLogin)
      if(isLogin){
        props.navigation.navigate('Dashboard')
      }else{
        props.navigation.navigate('Login')
      }
    }

    fetchData()
  },[])
  return (
    <View style={styles.mainView}>
      <Image style={styles.image} source={Images.splashLogo}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    display: 'flex',
    justifyContent:'center',
    backgroundColor:'#fff',
    alignItems:'center'
  },
  image:{
    height:150,
    width:150
  }
});

export default Splash;
