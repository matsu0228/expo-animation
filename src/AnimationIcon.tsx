import React, { Component } from "react";
import { StyleSheet, Animated, Easing, Text } from "react-native";
import { windowWidth, windowHeight } from "./Layout";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const FADE_DURATION = 500;

console.log("layout", windowWidth, windowHeight, getStatusBarHeight());
type State = {
  animeY: Animated.AnimatedValue;
  animeX: Animated.AnimatedValue;
  animeOpacity: Animated.AnimatedValue;
};

type Props = {
  delay?: number;
  icon?: string;
};

export class AnimationIcon extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      animeY: new Animated.Value(0),
      animeX: new Animated.Value(0),
      animeOpacity: new Animated.Value(1),
    };
  }
  _getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  };

  componentDidMount() {
    this._startAnimationVertical();
  }

  componentWillUnmount() {
    this.state.animeX.stopAnimation();
    this.state.animeY.stopAnimation();
  }

  //縦に流れるアニメーション
  _startAnimationVertical = () => {
    const fadePositionY = -500;
    const { delay = 0 } = this.props;

    // どの位置まで上に移動するか,デフォルトは画面外
    const toValueY = fadePositionY;
    // 途中でfadeする場合は速度調整
    const duration = 3000 - fadePositionY * 3;

    this.state.animeY.setValue(windowHeight - 200);
    Animated.timing(this.state.animeY, {
      toValue: toValueY,
      duration,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.linear),
      delay: delay,
    }).start();

    const toValueX = this._getRandom(windowWidth / 2 - 300, windowWidth / 2);
    this.state.animeX.setValue(windowWidth - 200);
    Animated.timing(this.state.animeX, {
      toValue: toValueX,
      duration,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.linear),
      delay,
    }).start();

    Animated.timing(this.state.animeOpacity, {
      toValue: 0,
      duration: FADE_DURATION,
      useNativeDriver: true,
      delay: delay + (duration - FADE_DURATION),
    }).start();
  };

  render() {
    const icon = this.props.icon || "😊";
    //console.log("view :", icon, this.props.delay);
    return (
      <>
        <Animated.View
          style={[
            styles.icon,
            { opacity: this.state.animeOpacity },
            {
              transform: [
                { translateY: this.state.animeY },
                { translateX: this.state.animeX },
              ],
            },
          ]}
        >
          <Text style={{ fontSize: 42 }}>{icon}</Text>
        </Animated.View>
        {/*<Text>{icon}</Text>
         */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    bottom: getStatusBarHeight(),
  },
});
