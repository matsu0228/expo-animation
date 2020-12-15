import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { windowWidth, windowHeight } from "./Layout";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { random } from "lodash";

const FADE_DURATION = 2.5 * 1000;

//console.log("layout", windowWidth, windowHeight, getStatusBarHeight());
type Props = {
  delay?: number;
  icon: string;
};

export const AnimationIcon: React.FC<Props> = ({ delay = 0, icon = "😊" }) => {
  // どの位置まで上に移動するか,デフォルトは画面外
  const fadePositionY = windowHeight - 600;
  const centerHorizontal = windowWidth - 300;
  // アニメーションの最終値
  const valueY = useSharedValue(fadePositionY);
  const valueX = useSharedValue(centerHorizontal);
  const opacity = useSharedValue(1);

  useEffect(() => {
    // アニメーションの初期値
    opacity.value = 0;
    valueX.value = centerHorizontal + random(-windowWidth / 2, windowWidth / 2);
    valueY.value = -windowHeight - 350;
  }, []);

  //縦に流れるアニメーション
  //console.log(`${icon} toValueX: ${valueX.value}, toValueY: ${valueY.value}`);
  const transformStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(valueY.value, {
            duration: FADE_DURATION * 1.5,
            easing: Easing.inOut(Easing.linear),
          }),
        },
        {
          translateX: withTiming(valueX.value, {
            duration: FADE_DURATION * 1.5,
            easing: Easing.inOut(Easing.linear),
          }),
        },
      ],
    };
  });

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: FADE_DURATION,
        easing: Easing.in(Easing.cubic),
      }),
    };
  });

  return (
    <>
      <Animated.View style={[styles.icon, transformStyle, opacityStyle]}>
        <Text style={{ fontSize: 42 }}>{icon}</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    bottom: getStatusBarHeight(),
  },
});
