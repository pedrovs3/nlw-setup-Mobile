import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  useFonts
} from '@expo-google-fonts/montserrat'

import {Loading} from "./src/components/Loading";

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
		Montserrat_800ExtraBold
	});

	if (!fontsLoaded) {
		return (
				<Loading/>
		);
	}

	return (
			<View style={styles.container}>
				<Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
				<StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent/>
			</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#09090A',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: 'Montserrat_600SemiBold',
		color: 'red',
	}
});
