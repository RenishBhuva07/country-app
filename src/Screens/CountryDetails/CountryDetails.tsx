import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {CustomHeader} from "../../Components/CustomHeader";
import Images from "../../assets/styles/Images";
import {goBack} from "../../Navigation/Navigator";

const CountryDetailsScreen = (props) => {
    const { country } = props.route.params;

    const handleBack=()=>{
        goBack()
    }
    return (
        <>
            <CustomHeader title={'Country Details'} leftImage={Images.back} handleLeftImageClick={()=>handleBack()}/>
            <View style={styles.container}>
                <Image resizeMode={'stretch'} style={styles.countryImage} src={country.flags.png}/>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailTitle}>Capital:</Text>
                        <Text style={styles.detailText}>{country.capital}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailTitle}>Languages:</Text>
                        <Text style={styles.detailText}>{Object.values(country.languages).join(', ')}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailTitle}>Timezone:</Text>
                        <Text style={styles.detailText}>{country.timezones.join(', ')}</Text>
                    </View>
                </View>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    countryImage:{
        height:150,
        marginVertical:10 ,
        borderRadius:10
    },
    detailsContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginVertical:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    detailTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    detailText: {
        fontSize: 16,
    },
});

export default CountryDetailsScreen;


//<Image resizeMode={'stretch'} style={styles.countryImage} src={country.flags.png}/>