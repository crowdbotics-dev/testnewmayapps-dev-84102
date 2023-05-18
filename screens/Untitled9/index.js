import { get_games_read } from "../../store/alineGamePlugin/get_GamebyIds.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_games_read());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled9;