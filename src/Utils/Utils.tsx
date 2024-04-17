import AsyncStorage  from "@react-native-community/async-storage"
export const setIsLogin=(value:boolean)=>{
     AsyncStorage.setItem('IS_LOGIN',JSON.stringify(value))
}

export const getIsLogin=()=>{
    return AsyncStorage.getItem('IS_LOGIN')
}