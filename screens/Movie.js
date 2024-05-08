import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native';
import { FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles, theme } from '../theme';
import Cast from '../components/Cast';
import MoviesList from '../components/MoviesList';
import Loading from '../components/Loading';
import { movie2, movie3 } from '../api/db';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-4';

const Movie = ({ route }) => {
	const { movieId } = route.params;
	const [isFavorite, setIsFavorite] = useState(false);
	const [cast, setCast] = useState([1, 2, 3, 4]);
	const [similarMovies, setSimilarMovies] = useState(movie2);
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const navigation = useNavigation();

	useEffect(() => {
		const getMovie = movie3.find((item) => item.id === movieId);

		setMovie(getMovie);
	}, []);

	return (
		<ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
			<View className="w-full">
				<SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center p-4">
					<TouchableOpacity style={styles.background} className="rounded-xl p-2 px-4" onPress={() => navigation.goBack()}>
						<FontAwesome6 name="caret-left" color="#FFF" size={25} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
						<FontAwesome name="heart" color={isFavorite ? theme.background : '#FFF'} size={30} />
					</TouchableOpacity>
				</SafeAreaView>

				{isLoading && movie.length <= 0 ? (
					<Loading />
				) : (
					<View>
						<Image source={movie.image} style={{ width: width, height: height * 0.55 }} />
						<LinearGradient
							colors={['transparent', 'rgba(23,23,32,0.8)', 'rgba(23,23,32,1)']}
							style={{ width, height: height * 0.4 }}
							start={{ x: 0.5, y: 0 }}
							end={{ x: 0.5, y: 1 }}
							className="absolute bottom-0"
						/>
					</View>
				)}
			</View>
			<View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
				<Text className="text-white text-center text-3xl font-bold tracking-wider">{movie.title}</Text>

				<Text className="text-neutral-400 font-semibold text-base text-center">Released . {movie.year} . 170 min</Text>

				<View className="flex-row justify-center mx-4 space-x-2">
					<Text className="text-neutral-400 font-semibold text-base text-center">Action .</Text>
					<Text className="text-neutral-400 font-semibold text-base text-center">Thrill .</Text>
					<Text className="text-neutral-400 font-semibold text-base text-center">Comedy </Text>
				</View>

				<Text className="text-neutral-400 mx-4 tracking-wide">{movie.description}</Text>
			</View>

			<Cast navigation={navigation} cast={cast} />
			<MoviesList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
		</ScrollView>
	);
};

export default Movie;
