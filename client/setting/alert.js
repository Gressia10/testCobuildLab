
import { Alert } from "react-native";

export const alert = () =>{
    Alert.alert(
      "Error",
      "Invalid data or time limit pass wait 2m",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK",  }
      ]
    );
}
    