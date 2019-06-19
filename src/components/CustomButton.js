import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class CustomButton extends Component {
    render(){
        const { text, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
                <Text style={styles.textStyle}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center'
    },

    buttonStyle: {
        padding: 10,
        backgroundColor: '#202646',
        borderRadius: 5,
        marginTop: 16,
    }
});

export default CustomButton;