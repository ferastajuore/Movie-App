import React, { useState } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../theme';
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';
import Loading from '../components/Loading';

import { data, movie3 } from '../api/db';

const ios = Platform.OS == 'ios';

const Home = () => {
	const [trending, setTrending] = useState(data);
	const [upcoming, setUpcoming] = useState(movie3);
	const [topRated, setTopRated] = useState(movie3);
	const [isLoading, setIsLoading] = useState(false);
	const navigation = useNavigation();

	return (
		<View className="flex-1 bg-neutral-900">
			<SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
				<StatusBar styles="light" />
				<View className="flex-row justify-between items-center mx-4 my-4">
					<FontAwesome6 name="bars-staggered" color="#FFF" size={25} />
					<Text className="text-white text-3xl font-bold">
						<Text style={styles.text}>M</Text>ovies
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Search')}>
						<Feather name="search" color="#FFF" size={25} />
					</TouchableOpacity>
				</View>
			</SafeAreaView>

			{isLoading ? (
				<Loading />
			) : (
				<ScrollView showsVerticalScrollIndicator={false}>
					<TrendingMovies items={trending} />
					<MoviesList title="Upcoming" data={upcoming} />
					<MoviesList title="Top Rated" data={topRated} />
				</ScrollView>
			)}
		</View>
	);
};

export default Home;
