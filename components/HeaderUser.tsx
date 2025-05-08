import {Text, View, StyleSheet, Image} from 'react-native';

const HeaderUser = () => {
    const avatar = require('@/assets/images/avatar.jpg')
  return (
    <View style={styles.container}>
        <View style={styles.avatarShadow}>
            <Image style={styles.avatar} source={avatar} />
        </View>
        <View>
            <Text style={styles.nameText}>Pabel</Text>
            <Text style={styles.descriptionText}>Let's start designing</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    avatarShadow: {
        width: 90, // 60 image + padding (e.g. 3 on each side)
        height: 90,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 12,
        borderWidth:8,
        borderColor:'rgba(0,191,255,0.04)',
        borderRadius: 29, // to match square style
    },
    nameText:{
        fontSize:20,
        color:'gray'
    },
    descriptionText:{
        fontSize:20,
        color:'black'
    },
    avatar:{
        width:60,
        height: 60,
        borderRadius: 10
    },
})

export default HeaderUser;
