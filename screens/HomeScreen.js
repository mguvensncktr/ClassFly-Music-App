import { View, Text, TouchableOpacity, Image, TextInput, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, icons, images, FONTS, SIZES } from '../constants'

const courseData = [
    {
        id: 1,
        title: 'Guitar',
        subtitle: 'in class',
        members: 45,
        image: images.guitar,
        imageBg: images.guitar_bg,
        mentors: [
            {
                name: 'Scarlett',
                followers: 100,
                image: images.mentor1,
            },
            {
                name: 'Jhony',
                followers: 120,
                image: images.mentor2,
            },
            {
                name: 'Linda',
                followers: 220,
                image: images.mentor3,
            }
        ]
    },
    {
        id: 2,
        title: 'Saxophone',
        subtitle: 'in class',
        members: 14,
        image: images.saxophone,
        imageBg: images.saxophone_bg,
        mentors: [
            {
                name: 'Murat',
                followers: 100,
                image: images.mentor1,
            },
            {
                name: 'Guven',
                followers: 120,
                image: images.mentor2,
            },
            {
                name: 'Sancaktar',
                followers: 220,
                image: images.mentor3,
            }
        ]
    },
    {
        id: 3,
        title: 'Drum',
        subtitle: 'in class',
        members: 19,
        image: images.drum,
        imageBg: images.drum_bg,
        mentors: [
            {
                name: 'Lindsey',
                followers: 100,
                image: images.mentor1,
            },
            {
                name: 'John',
                followers: 120,
                image: images.mentor2,
            },
            {
                name: 'Doe',
                followers: 220,
                image: images.mentor3,
            }
        ]
    },
    {
        id: 4,
        title: 'Piano',
        subtitle: 'in class',
        members: 27,
        image: images.piano,
        imageBg: images.piano_bg,
        mentors: [
            {
                name: 'Sarah',
                followers: 100,
                image: images.mentor1,
            },
            {
                name: 'Sonny',
                followers: 120,
                image: images.mentor2,
            },
            {
                name: 'Will',
                followers: 220,
                image: images.mentor3,
            }
        ]
    },
    {
        id: 5,
        title: 'Violin',
        subtitle: 'in class',
        members: 12,
        image: images.violin,
        imageBg: images.violin_bg,
        mentors: [
            {
                name: 'Elizabeth',
                followers: 100,
                image: images.mentor1,
            },
            {
                name: 'Penny',
                followers: 120,
                image: images.mentor2,
            },
            {
                name: 'Liz',
                followers: 220,
                image: images.mentor3,
            }
        ]
    }
]

const HomeScreen = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{ marginTop: SIZES.padding3, marginHorizontal: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1, color: COLORS.black, ...FONTS.h2, fontSize: 25 }}>Choose course</Text>
                <TouchableOpacity
                    style={{
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => console.log("Menu pressed")}
                >
                    <Image source={icons.menu} resizeMode="contain" style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>
        )
    }

    function renderSearchBar() {
        return (
            <View style={{ margin: SIZES.radius, borderWidth: 1, justifyContent: 'center', height: 40, borderRadius: SIZES.padding3, borderColor: COLORS.lightGray3 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: SIZES.radius,
                    }}
                >
                    <TextInput
                        placeholder='Search course'
                        style={{
                            ...FONTS.body3,
                            flex: 1,
                        }}
                    />
                    <Image source={icons.search} resizeMode="contain" style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.lightGray3
                    }} />
                </View>
            </View>
        )
    }

    function renderCourseList() {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        marginHorizontal: SIZES.radius,
                        marginTop: SIZES.radius,
                        borderWidth: 1,
                        borderColor: COLORS.lightGray3,
                        borderRadius: SIZES.radius,
                        width: 300,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        backgroundColor: index === 2 ? COLORS.primary : null,
                    }}
                    onPress={() => navigation.navigate('Detail', { course: item })}
                >
                    <View
                        style={{ flexDirection: 'row', padding: SIZES.padding }}>
                        <Image source={item.image} resizeMode="contain" style={{ width: 70, height: 70 }} />
                        <View
                            style={{
                                justifyContent: 'center',
                                marginHorizontal: SIZES.padding3
                            }}
                        >
                            <Text style={{ color: index === 2 ? COLORS.white : COLORS.textColor, ...FONTS.h3 }}>{item.title}</Text>
                            <Text style={{ color: index === 2 ? COLORS.lightGray : COLORS.lightGray2, ...FONTS.body5 }}>{item.subtitle}</Text>
                            <Text style={{ color: index === 2 ? COLORS.white : COLORS.textColor, ...FONTS.body3 }}>{item.members} Member</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <FlatList
                data={courseData}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: SIZES.radius }}
            />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeader()}
            {renderSearchBar()}
            {renderCourseList()}
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default HomeScreen