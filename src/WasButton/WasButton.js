import React from 'react'
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';    


const WasButton = props => {
    const { title } = props
    return (
        <View>
            <Text>{"Titulo" + title}</Text>
        </View>
    )
}

WasButton.defaultProps = {
    title: "titulo teste",
};

WasButton.propTypes = {
title: PropTypes.string,
};

WasButton.defa

export default WasButton
