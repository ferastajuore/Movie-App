import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles, theme } from '../theme';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-4';

const Movie = () => {
	const { params: item } = useRoute();
	const [isFavorite, setIsFavorite] = useState(false);
	const navigation = useNavigation();

	useEffect(() => {}, []);

	return (
		<ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
			<View className="w-full">
				<SafeAreaView className="w-full flex-row justify-between items-center p-4">
					<TouchableOpacity style={styles.background} className="rounded-xl p-2 px-4" onPress={() => navigation.goBack()}>
						<FontAwesome6 name="caret-left" color="#FFF" size={25} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
						<FontAwesome name="heart" color={isFavorite ? theme.background : '#FFF'} size={30} />
					</TouchableOpacity>
				</SafeAreaView>
			</View>
		</ScrollView>
	);
};

export default Movie;
