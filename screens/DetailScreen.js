import { View, Text, TouchableOpacity, Image, ImageBackground, Platform, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { COLORS, FONTS, SIZES, icons, images } from '../constants'

const DetailScreen = ({ route, navigation }) => {

    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        let { course } = route.params;
        setSelectedCourse(course);
    }, [])

    function renderHeader() {
        return (
            <ImageBackground
                style={{
                    width: '100%',
                    height: Platform.OS === 'ios' ? SIZES.height * 0.48 : SIZES.height * 0.6,
                    backgroundColor: COLORS.white
                }}
                source={selectedCourse?.imageBg}
                resizeMode="contain"
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginHorizontal: SIZES.radius,
                        marginTop: Platform.OS === 'ios' ? 20 : 40,
                    }}
                >
                    {/* Button */}
                    <TouchableOpacity
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={icons.back} style={{ width: 30, height: 30, tintColor: COLORS.black }} resizeMode="contain" />
                    </TouchableOpacity>

                    {/* Course title */}
                    <Text style={{ color: COLORS.black, ...FONTS.h1 }}>{selectedCourse?.title}</Text>

                    {/* Menu button */}
                    <TouchableOpacity
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => console.log("Menu button pressed")}
                    >
                        <Image source={icons.menu} resizeMode="contain" style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

    function renderMentors() {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: -50,
                    borderTopLeftRadius: SIZES.padding3,
                    borderTopRightRadius: SIZES.padding3,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                {/* Header */}
                <ImageBackground
                    source={images.select_bg}
                    style={{
                        alignItems: 'center',
                        width: 150,
                        marginTop: SIZES.padding3,
                        marginHorizontal: SIZES.radius,
                    }}
                >
                    <Text style={{ color: COLORS.textColor, ...FONTS.h4 }}>Select mentor</Text>
                </ImageBackground>

                {/* Divider */}
                <View
                    style={{
                        height: 1,
                        backgroundColor: COLORS.lightGray3,
                        marginHorizontal: SIZES.font,
                        marginTop: SIZES.radius2,
                        marginBottom: SIZES.padding2,
                    }}
                />

                {/* Mentors */}

                <View
                    style={{ marginHorizontal: SIZES.radius }}
                >
                    {
                        selectedCourse?.mentors.map((mentor, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingVertical: 7,
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 20,
                                            backgroundColor: index === 1 ? '#FFD051' : COLORS.primary,
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                        }}
                                    >
                                        <Image source={mentor.image} resizeMode="contain" style={{ width: 65, height: 65, borderRadius: 10 }} />
                                    </View>

                                    {/* Side Divider */}
                                    <View
                                        style={{
                                            marginLeft: SIZES.radius,
                                            borderLeftWidth: 1,
                                            borderLeftColor: COLORS.lightGray3,
                                            height: 34,
                                        }}
                                    />

                                    {/* Mentor Info */}
                                    <View
                                        style={{
                                            flex: 1,
                                            marginLeft: SIZES.radius,
                                        }}
                                    >
                                        <Text style={{ color: COLORS.black, ...FONTS.body2 }}>{mentor.name}</Text>
                                        <Text style={{ color: COLORS.black, ...FONTS.body3, marginTop: SIZES.padding }}>{mentor.followers} followers</Text>
                                    </View>

                                    {/* Right Arrow */}
                                    <TouchableOpacity
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        onPress={() => console.log('Right Arrow pressed')}
                                    >
                                        <Image source={icons.arrow_right} resizeMode="contain" style={{ width: 15, height: 15, tintColor: COLORS.black }} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderHeader()}
            {renderMentors()}
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
})

export default DetailScreen