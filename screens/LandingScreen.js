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
                            width: '100%',
                            height: 35,
                            marginTop: SIZES.padding,
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding,
                        }}
                        source={images.background}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ ...FONTS.h1, marginRight: SIZES.radius }}>Music</Text>
                            <Text style={{ ...FONTS.body1 }}>teacher</Text>
                        </View>
                    </ImageBackground>
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
                onPress={() => navigation.navigate('Home')}
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