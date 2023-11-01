import { StyleSheet } from "react-native"
import colors from "styles/colors"

export const buttonStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.black,
    borderRadius: 4,
    justifyContent: "center",
    padding: 15,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
})
