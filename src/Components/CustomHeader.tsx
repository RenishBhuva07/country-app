import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IProps {
    title?: string,
    leftImage?: number | 0,
    rightImage?: any
    handleRightImageClick?: () => any,
    handleLeftImageClick?: () => any,
}
export const CustomHeader = (props: IProps) => {
    const { leftImage, title, rightImage, handleRightImageClick, handleLeftImageClick } = props
    return (
        <View style={styles.headerView}>
            {leftImage ?
                <TouchableOpacity onPress={() => handleLeftImageClick ? handleLeftImageClick() : null}>
                    <Image style={styles.imageView} source={leftImage} />
                </TouchableOpacity>
                :
                <View style={styles.imageView} />
            }

            {title ?
                <Text style={styles.title}>{title}</Text>
                : <View style={styles.title} />
            }
            {rightImage ?
                <TouchableOpacity onPress={() => handleRightImageClick ? handleRightImageClick() : null}>
                    <Image style={styles.imageView} source={rightImage} />
                </TouchableOpacity>
                : <View style={styles.imageView} />
            }
        </View>
    )
}

const styles = StyleSheet.create(({
    headerView: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007bff',
    },
    imageView: {
        height: 40,
        width: 40,
        tintColor: "#fff"
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold'
    }
}))