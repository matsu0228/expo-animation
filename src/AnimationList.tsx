import React, { useState } from "react";
import { sample } from "lodash";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AnimationIcon } from "./AnimationIcon";

type State = {
  icons: string[];
};
type Props = {
  style?: any;
};
const ICON_LIST = ["😄", "🤣", "😊", "😇", "😍", "😎"];

export const AnimationList: React.FC<Props> = ({ style = null }) => {
  const [icons, setIcons] = useState<string[]>([]);
  const getDelay = (): number => {
    return Math.floor(Math.random() * 10);
  };
  const getIcon = (): string => {
    return sample(ICON_LIST)!;
  };

  const animations = (
    <View style={styles.iconWrapper}>
      {icons.map((icon, i) => (
        <AnimationIcon icon={icon} key={`animation_${i}`} />
      ))}
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setIcons([...icons, getIcon()]);
        }}
      >
        <Text style={styles.btnText}>ここを押す</Text>
      </TouchableOpacity>
      {/*
      <TouchableOpacity
        style={[styles.btn, { marginTop: 16 }]}
        onPress={() => {
          setIcons([]);
        }}
      >
        <Text style={styles.btnText}>Clear</Text>
      </TouchableOpacity>
      */}
      <Text style={styles.text}>アニメーション数 : {icons.length}</Text>
      {animations}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "20%",
    width: "70%",
    justifyContent: "center",
    alignContent: "center",
    // backgroundColor: "black",
  },
  iconWrapper: {
    height: "80%",
    width: "80%",
  },
  btn: {
    position: "relative",
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 40,
    backgroundColor: "#333333",
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    margin: 14,
    textAlign: "center",
    fontSize: 16,
  },
});
