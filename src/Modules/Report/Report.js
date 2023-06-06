import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MainHeader from '../../Navigation/MainHeader';
import MainHeaderBackButton from '../../Navigation/MainHeaderBackButton';

class Report extends Component {

    render() {

        const navigation = this.props;

        const onhandleClick = () => {
            this.props.navigation.navigate('home');
        };

        return (
            <>
                <MainHeader />

                <MainHeaderBackButton
                    onhandleBackClick={onhandleClick}
                    headerText={'Report Bug'}
                    navigation={navigation.props}
                />

                <View
                    style={{
                        flex: 1,
                        paddingVertical: 40,
                        paddingHorizontal: 16,
                        position: 'relative',
                        backgroundColor: '#ffffff',
                    }}
                >
                    <Text>Report Bug</Text>
                </View>
            </>
        );
    }
}

export default Report;