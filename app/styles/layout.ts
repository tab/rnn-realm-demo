import { StyleSheet } from "react-native"
import colors from "styles/colors"

export const layoutStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    color: colors.black,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: colors.black,
    marginBottom: 15,
    borderRadius: 4,
  },
  title: {
    color: colors.black,
    fontSize: 12,
    fontWeight: "700",
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "400",
  },
  listItem: {
    borderRadius: 4,
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginTop: 15,
  },
})
