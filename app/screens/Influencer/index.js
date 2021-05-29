import React, { useState } from 'react'
import {
    View,
    ScrollView,
    Animated,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    RefreshControl,
  Image
  } from "react-native";
  import {  Text, Icon, Card, SafeAreaView, CardList, Header, Button } from "@components";
export default function App() {

    const [images, setimages] = useState([
        require('../../assets/images/profile-1.jpg'),
        require('../../assets/images/profile-2.jpg'),
        require('../../assets/images/profile-4.jpg'),
        require('../../assets/images/profile-5.jpg'),
        require('../../assets/images/profile-3.jpg'),
        require('../../assets/images/profile-6.jpg'),
        require('../../assets/images/profile-7.jpg'),
        require('../../assets/images/profile-8.jpg'),
        require('../../assets/images/trip-1.jpg'),
        require('../../assets/images/profile-1.jpg'),
        require('../../assets/images/profile-2.jpg'),
        require('../../assets/images/profile-4.jpg'),
        require('../../assets/images/profile-5.jpg'),
        require('../../assets/images/profile-3.jpg'),
        require('../../assets/images/profile-6.jpg'),
        require('../../assets/images/profile-7.jpg'),
        require('../../assets/images/profile-8.jpg'),
        require('../../assets/images/trip-1.jpg')
    ]);

    return (
        <View>
            <Header
                title={<Text >Influencer
                   
                </Text>}
                // renderLeft={() => {
                //     return (
                //         <Entypo
                //             name="menu"
                //             size={20}
                //             color={colors.primary}
                //             enableRTL={true}
                //         />
                //     );
                // }}
                // onPressLeft={() => {
                //     navigation.openDrawer();
                // }}
                // renderRight={() => {
                //     return (
                //         <Entypo
                //             name="bell"
                //             size={20}
                //             color={colors.primary}
                //             enableRTL={true}
                //         />
                //     )
                // }}
                onPressRight={() => { navigation.navigate("Notification") }}
            />
            <FlatList
                data={images}
                key={"2"}
                numColumns={3}
                renderItem={({ item }) => (
                    <Image
                        source={item}
                        style={{
                            width: 130,
                            height: 180,
                            borderWidth: 2,
                            borderColor: "#c35547",
                            resizeMode: "contain",
                            margin: 0,
                        }}
                        keyExtractor={(item) => item.id}
                    />
                )}
            />
        </View>

    );
}