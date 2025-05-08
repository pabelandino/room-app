import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Colors} from '@/constants/Colors';

const Spaces = () => {
    const images = [
        {
            uri: require('@/assets/images/space1.png'),
            title: 'Harvest'
        },
        {
            uri: require('@/assets/images/space2.png'),
            title: 'Stoneworks'
        },
        {
            uri: require('@/assets/images/space3.png'),
            title: 'Alabaster'
        },
       ]

    return (
    <View style={styles.container}>
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        >

            {
                images.map((img, index)=> (
                    <View key={index} style={styles.imageWrapper}>
                        <Image source={img.uri} resizeMode="cover" style={styles.image} />
                        <View style={styles.menuContainer}>
                            <Text style={styles.title}>{img.title}</Text>
                            <Text style={styles.description}>Bold design meets timeless beauty</Text>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.applyButton}>
                                    <Text style={styles.applyText}>Apply to my room</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsText}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageWrapper:{
        width: 350,
        height: 500,
        marginRight: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    menuContainer:{
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    buttonContainer:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    applyButton:{
        padding:6,
        paddingHorizontal:12,
        backgroundColor:Colors.bgWhite,
        borderRadius: 14
    },
    applyText:{
        color: Colors.descriptionTextColor
    },
    detailsButton:{
        padding:6,
        paddingHorizontal:12,
        borderWidth:1,
        borderColor:Colors.bgWhite,
        borderRadius: 14
    },
    detailsText: {
        color:Colors.bgWhite
    },
    title:{
        fontSize:26,
        color:Colors.bgWhite,
    },
    description:{
        fontSize:18,
        color:Colors.bgWhite
    },
    image:{
        width: '100%',
        height: '100%',
    }
})
export default Spaces;
