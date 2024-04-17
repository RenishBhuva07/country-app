import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator, Image, Alert,
} from 'react-native';
import { CustomHeader } from "../../Components/CustomHeader";
import Images from "../../assets/styles/Images";
import { setIsLogin } from "../../Utils/Utils";
import { resetNavigation } from "../../Navigation/Navigator";
import { useDispatch, useSelector } from "react-redux";
import { setCountryListInfo } from "../../Redux/actions/Actions";

const Dashboard = (props) => {
    const dispatch = useDispatch();
    const countryList: any = useSelector((state: any) => state.countryList);
    const [countries, setCountries] = useState([]);
    const [filterCountries, setFilterCountries] = useState(countries);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [noDataMessage, setNoDataMessage] = useState('Fetch Data')
    const [perPage, setPerPage] = useState(10)

    useEffect(() => {
        if (countryList && countryList.length > 0) {
            setCountries(countryList)
            setFilterCountries(countryList.slice(0, perPage))
        }
    }, [countryList]);


    const fetchCountries = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://restcountries.com/v3.1/all?limit=${perPage}&page=${page}`);
            const data = await response.json();
            // setCountries(data);
            dispatch(setCountryListInfo(data));
        } catch (error) {
            console.error('Error fetching countries:', error);
            setNoDataMessage('No Data Found, Try Again')
        } finally {
            setLoading(false);
        }
    };

    const handleNextPage = () => {
        if (perPage < countries.length) {
            setPage((prevPage) => prevPage + 1);
            setFilterCountries(countries.slice(perPage, perPage + 10))
            setPerPage(perPage + 10)
        } else {
            Alert.alert("Max Countries Reached")
        }

    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
            setPerPage(perPage - 10)
            setFilterCountries(countries.slice(perPage - 20, perPage - 10))



        }
    };

    const handleNavigation = (item: any) => {
        props.navigation.navigate('CountryDetails', { country: item })
    }


    const renderCountryItem = ({ item }) => {
        let countryCurrencies = item.currencies && item.currencies[Object.keys(item.currencies)[0]].symbol;
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleNavigation(item)}
            >
                <View style={styles.nameFlagView}>
                    <Image style={styles.flagImage} source={{ uri: item.flags.png }} />
                    <Text style={styles.countryName}>{item.name.common} ({countryCurrencies})</Text>
                </View>


            </TouchableOpacity>
        )
    };

    const fetchData = () => {
        fetchCountries().then(r => r)
    }

    const logout = () => {
        setIsLogin(false)
        resetNavigation('Splash')
    }

    return (
        <>
            <CustomHeader title={'Dashboard'} leftImage={Images.fetch} rightImage={Images.logout} handleLeftImageClick={() => fetchData()} handleRightImageClick={() => logout()} />

            <View style={styles.container}>
                {loading ? (
                    <ActivityIndicator size="large" color="#007bff" />
                ) : filterCountries.length > 0 ? (
                    <>
                        <FlatList
                            data={filterCountries}
                            renderItem={renderCountryItem}
                            keyExtractor={(item) => item.cca3}
                            contentContainerStyle={styles.list}
                        />
                        <View style={styles.paginationContainer}>
                            <TouchableOpacity style={styles.paginationButton} onPress={handlePrevPage}>
                                <Image style={styles.bottomImage} source={Images.back} />
                            </TouchableOpacity>
                            <Text style={styles.pageText}>{page}</Text>
                            <TouchableOpacity style={styles.paginationButton} onPress={handleNextPage}>
                                <Image style={styles.bottomImage} source={Images.next} />
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={styles.noDataView}>
                        <Text style={styles.noDataMessage}>{noDataMessage}</Text>

                    </View>
                )
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        backgroundColor: '#f0f0f0',
    },
    noDataView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    bottomImage: {

        height: 40,
        width: 40,
        tintColor: "#fff"
    },

    noDataMessage: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000"
    },
    list: {
        flexGrow: 1,
    },
    itemContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameFlagView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    countryName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    flagImage: {
        height: 35, width: 35, borderRadius: 20
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#007bff'
    },
    paginationButton: {
        paddingHorizontal: 20,
        // paddingVertical: 5,
        backgroundColor: '#007bff',
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10
    },
    paginationButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    pageText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff"
    },
});

export default Dashboard;