import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const StylesButtons = (props) => {
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    const {type,content,onPress}=props;
    const bgc = type === 'primary' ? 'black' : 'white';
    const txt = type == 'primary' ? 'white' : 'black';
    


    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: bgc }]}
                onPress={() => onPress()}>
                <Text style={[styles.text, { color: txt }]}>{content}</Text>
        </Pressable>

        </View >
    );
};

export default StylesButtons;
