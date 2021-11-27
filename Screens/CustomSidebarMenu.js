import React, { useState, useEffect } from 'react';

import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Colors from '../constants/Colors';

const CustomSidebarMenu = ({ ...props }) => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 60 }}>
            <View style={styles.topView}>
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>
                        Food Explorer
                    </Text>
                </View>
                <View style={styles.bottomView}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    </Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    topView: {
        height: '20%',
        borderBottomWidth: 2,
        marginHorizontal: 20,
        paddingBottom: 15
    },
    headingView: {
        alignItems: 'center',
        height: '70%',
        justifyContent: 'center',
    },
    headingText: {
        fontSize: 36,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: 'bold'
    },
    bottomView: {
        height: '30%',
        justifyContent: 'flex-end',
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },

    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;
