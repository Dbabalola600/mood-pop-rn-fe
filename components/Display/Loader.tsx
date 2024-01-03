import { Instagram } from "react-content-loader/native";
import { View ,StyleSheet} from "react-native";
import apptw from "../../utils/lib/tailwind";


const Loader = () => {


    return (
        <View style={styles.container}>
          <Instagram
            backgroundColor="#CBCBCB"
            foregroundColor="#0413BB"
            style={apptw`mx-10`}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
      },
    });
    
export default Loader;