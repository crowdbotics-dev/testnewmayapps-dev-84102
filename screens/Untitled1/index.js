import { useSelector } from "react-redux";
import { rest_auth_password_reset_create } from "../../store/testnewmayappsdevAPI/passwords.slice.js";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const {
    entities: test
  } = useSelector(state => state.test);
  const dispatch = useDispatch();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.JRKgVtZl}>Lorem ipsum…</Text>
        <Pressable onPress={onSubmit}>
          <Text style={styles.ScTQiPjb}>Lorem ipsum…</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;

  const onSubmit = () => {
    dispatch(rest_auth_password_reset_create({
      test
    }));
  };
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  JRKgVtZl: {
    width: 100,
    height: 0,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 10,
    top: -20
  },
  ScTQiPjb: {
    width: 152,
    height: 0,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 106,
    top: -20,
    opacity: 0.54,
    color: "#e60808"
  }
});
export default Untitled1;