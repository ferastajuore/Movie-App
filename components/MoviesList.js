import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../theme';

const { width, height } = Dimensions.get('window');

const MoviesList = ({ title, data }) => {
	const navigation = useNavigation();
	return (
		<View className="mb-8 space-y-4">
			<View className="mx-4 flex-row justify-between items-center">
				<Text className="text-white text-xl">{title}</Text>
				<TouchableOpacity>
					<Text style={styles.text} className="text-lg">
						See All
					</Text>
				</TouchableOpacity>
			</View>

			<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
				{data.map((item, i) => (
					<TouchableOpacity key={i} onPress={() => navigation.navigate('Movie', item)}>
						<View className="space-y-1 mr-4">
							<Image
								source={require('../assets/images/avengersend.jpg')}
								className="rounded-2xl"
								style={{ width: width * 0.33, height: height * 0.22 }}
							/>
							<Text className="text-neutral-300">{item.length > 14 ? item.slice(0, 14) + '...' : item}</Text>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

export default MoviesList;
