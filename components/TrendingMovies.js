import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default TrendingMovies = ({ items }) => {
	const navigation = useNavigation();

	const handleClick = (id) => {
		navigation.navigate('Movie', { movieId: id });
	};

	return (
		<View className="mb-8">
			<Text className="text-white text-xl mx-4 mb-5">Trending</Text>
			<Carousel
				data={items}
				renderItem={({ item }) => <MovieCard items={item} handleClick={handleClick} />}
				firstItem={1}
				inactiveSlideOpacity={0.6}
				sliderWidth={width}
				itemWidth={width * 0.62}
				slideStyle={{ display: 'flex', alignItems: 'center' }}
			/>
		</View>
	);
};

const MovieCard = ({ items, handleClick }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => handleClick(items.id)}>
				<Image
					source={items.image}
					className="rounded-2xl"
					style={{
						width: width * 0.6,
						height: height * 0.4,
					}}
				/>
			</TouchableOpacity>
		</View>
	);
};
