import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Image } from 'expo-image';
import {useState} from 'react';
import {FocusType} from '@/constants/FocusType';
import {FocusMenu} from '@/constants/FocusMenu';


const BottomMenu = () => {
    const homeIcon = require('@/assets/images/home-icon.svg')
    const iaIcon = require('@/assets/images/ia-icon.svg')
    const [focusMenu, setFocusMenu] = useState<FocusType>(FocusMenu.HOME_MENU)

    const handleAIMenu = () => {
        setFocusMenu(FocusMenu.AI_MENU)
    }

    const handleHomeMenu = () => {
        setFocusMenu(FocusMenu.HOME_MENU)
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity  onPress={handleHomeMenu} style={[styles.buttonsContainer, focusMenu === FocusMenu.HOME_MENU && {backgroundColor:'#31312B'}]}>
            <Image style={styles.homeIcon} tintColor={focusMenu === FocusMenu.HOME_MENU ? 'white' : '#737372'} source={homeIcon}  />
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleAIMenu} style={[styles.buttonsContainer, focusMenu === FocusMenu.AI_MENU && {backgroundColor:'#31312B'}]}>
            <Image style={styles.homeIcon} tintColor={focusMenu === FocusMenu.AI_MENU ? 'white' : '#737372'} source={iaIcon}  />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor:'black',
        flexDirection:'row',
        padding:6,
        paddingHorizontal:8,
        borderRadius: 30,

        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,

        // Shadow for Android
        elevation: 4,
    },
    homeIcon: {
        width:25,
        height: 25
    },
    buttonsContainer: {
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        padding:8,
        borderRadius:28
    }
})
export default BottomMenu;
