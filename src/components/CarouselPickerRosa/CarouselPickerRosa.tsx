import { useTheme } from 'styled-components';
import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, Animated, StyleSheet } from 'react-native'

import { Container, Number, Tipo, NumberView, Spacing, IconIndicar, FooterView } from './styles';
const { width, height } = Dimensions.get('window');

const timers = [...Array(25).keys()].map((i) => (i === 0 ? 1 : i * 5));
const ITEM_SIZE = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

const CarouselPickerRosa = () => {
    const theme = useTheme();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [duration, setDuration] = useState(timers[0]);

    return (
        <Container>
            <Spacing />
            <Animated.FlatList
                data={timers}
                bounces={false}
                horizontal={true}
                decelerationRate='fast'
                // snapToInterval={ITEM_SIZE}
                style={{ flexGrow: 0 }}
                contentContainerStyle={{
                    paddingHorizontal: ITEM_SPACING,
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                // onMomentumScrollEnd={ev => {
                //     const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
                //     setDuration(timers[index])
                // }}
                keyExtractor={item => item.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE,
                        (index + 1) * ITEM_SIZE,
                    ]
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [.4, 1, .4]
                    })
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [.7, 1, .7]
                    })
                    return (
                        <NumberView>
                            <Animated.Text
                                style={[styles.text, {
                                    // opacity,
                                    // transform: [{
                                    //     scale,
                                    // }]
                                }]}
                            >
                                {item}
                            </Animated.Text>
                        </NumberView>
                    )
                }}
            />
            <Spacing />
            <FooterView>
                <IconIndicar name='chevron-up-outline'/>
                <Tipo>Kg</Tipo>
            </FooterView>
        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FF4593',
        fontWeight: '900',
        fontFamily: 'Menlo',
        fontSize: ITEM_SIZE * 0.8,
    }
})

export default CarouselPickerRosa
