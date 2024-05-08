import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../theme';
import MoviesList from '../components/MoviesList';
import Loading from '../components/Loading';
import { data } from '../api/db';

const { width, height } = Dimensions.get('window');

const Person = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [personMovies, setPersonMovies] = useState(data);
	const [isLoading, setIsLoading] = useState(false);
	const navigation = useNavigation();
	return (
		<ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
			<SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center p-4">
				<TouchableOpacity style={styles.background} className="rounded-xl p-2 px-4" onPress={() => navigation.goBack()}>
					<FontAwesome6 name="caret-left" color="#FFF" size={25} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
					<FontAwesome name="heart" color={isFavorite ? 'red' : '#FFF'} size={30} />
				</TouchableOpacity>
			</SafeAreaView>

			{isLoading ? (
				<Loading />
			) : (
				<View className="my-10">
					<View
						className="flex-row justify-center"
						style={{
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 7,
							},
							shadowOpacity: 0.41,
							shadowRadius: 9.11,

							elevation: 14,
						}}
					>
						<View className="overflow-hidden rounded-full h-72 w-72 border-2 border-neutral-500">
							<Image source={require('../assets/images/Untitled.jpg')} style={{ height: height * 0.43, width: width * 0.74 }} />
						</View>
					</View>

					<View className="mt-6">
						<Text className="text-3xl text-white font-bold text-center">Keanu Reeves</Text>
						<Text className="text-base text-neutral-500 text-center">London, united Kingdom</Text>
					</View>
					<View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
						<View className="border-r-2 border-r-neutral-400 px-2 items-center">
							<Text className="text-white font-semibold">Gender</Text>
							<Text className="text-white font-semibold">Male</Text>
						</View>

						<View className="border-r-2 border-r-neutral-400 px-2 items-center">
							<Text className="text-white font-semibold">Birthday</Text>
							<Text className="text-white font-semibold">1900-09-02</Text>
						</View>

						<View className="border-r-2 border-r-neutral-400 px-2 items-center">
							<Text className="text-white font-semibold">Known for</Text>
							<Text className="text-white font-semibold">Acting</Text>
						</View>

						<View className=" px-2 items-center">
							<Text className="text-white font-semibold">Popularity</Text>
							<Text className="text-white font-semibold">64.23</Text>
						</View>
					</View>
					<View className="my-6 mx-4 space-y-2">
						<Text className="text-white text-lg">Biography</Text>
						<Text className="text-neutral-400 tracking-wide">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus praesentium delectus? Similique reprehenderit
							expedita voluptatum! Fugit, nostrum! Optio harum eius vero, ratione minus qui alias voluptatibus saepe impedit
							perferendis!
						</Text>
					</View>

					<MoviesList title="Movies" hideSeeAll={true} data={personMovies} />
				</View>
			)}
		</ScrollView>
	);
};

export default Person;
