import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

//constants
import { COLORS, SIZES, images, icons, FONTS } from '../constants'

const LandingScreen = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{ marginTop: SIZES.padding3, marginHorizontal: SIZES.radius }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={icons.logo} resizeMode="contain" style={{ width: 40, height: 40, marginRight: SIZES.base }} />
                    <Image source={images.ClassFly} resizeMode="contain" style={{ width: 80, height: 32 }} />
                </View>
                <View
                    style={{
                        marginTop: SIZES.radius2,
                    }}
                >
                    <Text style={{ color: COLORS.black, ...FONTS.body2, fontSize: 28 }}>Find the perfect</Text>
                    <ImageBackground
                        style={{
                            width: '90%',
                            height: 35,
                            marginTop: SIZES.padding,
                            justifyContent: 'center',
                        }}
                        resizeMode="contain"
                        source={images.background}
                    >
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={{ ...FONTS.h1, marginRight: SIZES.padding2 }}>Music</Text>
                            <Text style={{ ...FONTS.body1 }}>teacher</Text>
                        </View>
                    </ImageBackground>
                    <Image
                        source={images.music2}
                        resizeMode="contain"
                        style={{
                            width: 90,
                            height: 90,
                            position: 'absolute',
                            top: 150,
                            left: 20
                        }}
                    />
                    <Image
                        source={images.music1}
                        resizeMode="contain"
                        style={{
                            width: 90,
                            height: 90,
                            position: 'absolute',
                            top: 110,
                            right: 20
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            width: '85%',
                            height: 250,
                            borderRadius: 40,
                            backgroundColor: COLORS.primary,
                            top: 200,
                            right: -20,
                            transform: [{ rotate: '-15deg' }]
                        }}
                    />
                </View>
                <Text style={{ marginTop: SIZES.padding, ...FONTS.body3, color: COLORS.lightGray }}>Learn easily different type of music instruments</Text>
            </View>
        )
    }

    function renderBgImage() {
        return (
            <View style={{ flex: 1, marginTop: SIZES.padding3 }}>
                <Image
                    source={images.landing_bg}
                    style={{
                        width: '100%',
                        height: '100%',

                    }}
                    resizeMode="cover"
                />
            </View>
        )
    }

    function renderButton() {
        return (
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: SIZES.padding3,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: 200,
                    height: 50,
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: 30
                }}
                onPress={() => navigation.replace('Home')}
            >
                <Text style={{ ...FONTS.h4, color: COLORS.white }}>Join now</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeader()}
            {renderBgImage()}
            {renderButton()}
        </View>
    )
}

export default LandingScreen