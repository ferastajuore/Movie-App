import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default TrendingMovies = ({ item }) => {
	const navigation = useNavigation();
	const handleClick = () => {
		navigation.navigate('Movie', item);
	};

	return (
		<View className="mb-8">
			<Text className="text-white text-xl mx-4 mb-5">Trending</Text>
			<Carousel
				data={item}
				renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
				firstItem={1}
				inactiveSlideOpacity={0.6}
				sliderWidth={width}
				itemWidth={width * 0.62}
				slideStyle={{ display: 'flex', alignItems: 'center' }}
			/>
		</View>
	);
};

const MovieCard = ({ item, handleClick }) => {
	return (
		<TouchableOpacity onPress={() => handleClick(item)}>
			<Image
				source={require('../assets/images/avengersend.jpg')}
				className="rounded-2xl"
				style={{
					width: width * 0.6,
					height: height * 0.4,
				}}
			/>
		</TouchableOpacity>
	);
};
