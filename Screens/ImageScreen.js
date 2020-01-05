import {Text, Image, View} from "react-native";
import React from "react";

const ImageScreen = ({navigation}) => {
    return(
        <View>
            <Text style={{textAlign: 'center', fontSize: 18 }}> Image {JSON.stringify(navigation.getParam('id', 'NO-ID'))} </Text>
            <Image
                resizeMode="cover"
                style={{height: 400, width: '100%', marginVertical: 2}}
                source={JSON.stringify(navigation.getParam('url', 'NO-URL'))}
            />
        </View>
    );
};

export default ImageScreen;
