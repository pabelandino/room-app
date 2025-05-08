import {ScrollView, StyleSheet, View, Image, Animated} from 'react-native';
import {useEffect, useRef} from 'react';
import {Colors} from '@/constants/Colors';

const logos = [
    require('@/assets/images/kohler-logo.png'),
    require('@/assets/images/james-logo.png'),
    require('@/assets/images/toto-logo.png'),
    require('@/assets/images/hudson-logo.png'),
];

const ITEM_WIDTH = 92;
const TOTAL_WIDTH = logos.length * ITEM_WIDTH;


const BottomLogos = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animate = () => {
            scrollX.setValue(0);
            Animated.timing(scrollX, {
                toValue: TOTAL_WIDTH,
                duration: 8000,
                useNativeDriver: true,
            }).start(animate); // loop
        };

        animate();
    }, [scrollX]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    flexDirection: 'row',
                    transform: [
                        {
                            translateX: scrollX.interpolate({
                                inputRange: [0, TOTAL_WIDTH],
                                outputRange: [0, -TOTAL_WIDTH],
                            }),
                        },
                    ],
                }}
            >
                {logos.map((logo, index) => (
                    <Image key={index} tintColor={Colors.imageTintColor} source={logo} style={styles.image} />
                ))}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 12,
        resizeMode: 'contain',
        marginHorizontal:20
    },
});

export default BottomLogos;
