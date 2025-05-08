import {Text, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Spaces from '@/components/Spaces';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderUser from '@/components/HeaderUser';
import BottomMenu from '@/components/BottomMenu';
import BottomLogos from '@/components/BottomLogos';
import {LinearGradient} from 'expo-linear-gradient';

const index = () => {

    const background = require('@/assets/images/main-bg.png')

  return (
      <SafeAreaView style={styles.container} >
          <ImageBackground source={background} style={styles.background}>
                  <View style={styles.container}>
                      <TouchableOpacity style={styles.menuContainer}>
                          <Text style={styles.menu}>...</Text>
                      </TouchableOpacity>
                      <View style={styles.userHeader}>
                         <HeaderUser />
                      </View>
                      <Spaces/>
                      <View style={styles.footer}>
                          <BottomMenu />
                      </View>

                      {/* Gradient overlay */}
                      <LinearGradient
                          colors={['rgba(237,237,237,0.49)', 'transparent']} // Cream to transparent
                          start={{ x: 0.5, y: 1 }} // bottom
                          end={{ x: 0.5, y: 0 }}   // top
                          style={styles.gradient}
                      />

                      {/* Logos behind the gradient */}
                      <View style={styles.bottomLogosWrapper}>
                          <BottomLogos />
                      </View>

                  </View>
          </ImageBackground>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container : {
        flex:1,
        flexDirection:'column',
        marginTop:8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    menuContainer:{
        alignSelf:'flex-end',
        marginRight:12
    },
    menu:{
        fontSize:30
    },
    userHeader:{
        alignSelf:'flex-start',
        marginBottom:10,
        marginLeft:10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    footer: {
        zIndex:3,
        marginBottom: 42,
        position:'relative'
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 150,
        zIndex: 1,
    },

    bottomLogosWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 0,
    },
});
export default index;
