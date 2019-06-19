import * as React from "react";
import {StyleSheet, TextInput} from "react-native";

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

class CustomTextInput extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            isFocused: false
        }
    }

    handleFocus = event => {
        this.setState({ isFocused: true });
        // Remember to propagate the 'onFocus' event to the parent as well
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    handleBlur = event => {
        this.setState({ isFocused: false });
        // Remember to propagate the 'onBlur' event to the parent as well
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    render(){
        const { isFocused } = this.state;
        // We want to change the color of the input underline
        // when it is focused. To do so this component
        // must be aware of being focused, so we'll use the
        // TextInput 'onFocus' and 'onBlur' callbacks to set
        // a variable in the state that keeps track of when the
        // TextInput is focused.
        // We should also make sure to remove the 'onFocus' and
        // 'onBlur' props from the '...otherProps', otherwise
        // they would override our own handlers.
        const { onFocus, onBlur, ...otherProps } = this.props;
        return (
            <TextInput
                placeholder={this.props.placeholder}
                selectionColor={BLUE}
                underlineColorAndroid={
                    isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChangeText={this.props.onChangeText}
                secureTextEntry={this.props.secureTextEntry}
                style={styles.textInput}
                {...otherProps}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 60,
        paddingLeft: 6
    }
});

export default CustomTextInput;