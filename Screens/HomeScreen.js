import {FlatList, Image, ScrollView, View, TouchableHighlight} from "react-native";
import React from "react";

const HomeScreen = ({navigation}) => {

    const data = [
        {
            id:0,
            url: require('../assets/photos/waste.jpg')
        },
        {
            id:1,
            url: require('../assets/photos/restaurant.jpg')
        },
        {
            id:2,
            url: require('../assets/photos/team.jpg')
        }
    ];
    return(
        <ScrollView>
            <View>
                <FlatList
                    data={data}
                    renderItem={({item}) =>
                        <TouchableHighlight onPress={() => navigation.navigate('Image', {id: item.id + 1, url: item.url})}>
                            <Image
                                resizeMode="cover"
                                style={{height: 400, width: '100%', marginVertical: 2}}
                                source={item.url}

                            />
                        </TouchableHighlight>
                    }
                    keyExtractor={({id}) => id}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
