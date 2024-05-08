import { View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';

const { width, height } = Dimensions.get('window');

const Search = () => {
	const [results, setResults] = useState([1, 2, 3, 4, 5]);
	const [isLoading, setIsLoading] = useState(false);
	const navigation = useNavigation();

	let movieName = 'avengeras avengeras avengeras avengeras';
	return (
		<SafeAreaView className="bg-neutral-800 flex-1">
			<View className="mx-4 my-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
				<TextInput
					placeholder="Search Movie"
					placeholderTextColor={'lightgray'}
					className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
				/>
				<TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full p-3 m-1 bg-neutral-500">
					<AntDesign name="close" color="#FFF" size={15} />
				</TouchableOpacity>
			</View>

			{isLoading ? (
				<Loading />
			) : results.length > 0 ? (
				<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} className="space-y-3">
					<Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
					<View className="flex-row justify-between flex-wrap">
						{results.map((item, i) => (
							<TouchableWithoutFeedback key={i} onPress={() => navigation.push('Movie', item)}>
								<View className="space-y-2 mb-4">
									<Image
										className="rounded-3xl"
										source={require('../assets/images/avengersend.jpg')}
										style={{ width: width * 0.44, height: height * 0.3 }}
									/>
									<Text className="text-neutral-300 ml-1">
										{movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName}
									</Text>
								</View>
							</TouchableWithoutFeedback>
						))}
					</View>
				</ScrollView>
			) : (
				<View className="flex-row justify-center mt-10">
					<Image source={require('../assets/images/movie.jpg')} className="h-72 w-72 rounded-3xl" />
				</View>
			)}
		</SafeAreaView>
	);
};

export default Search;
