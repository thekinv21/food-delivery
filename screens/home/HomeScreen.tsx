import { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen: FC = () => {
	return (
		<View className='relative h-screen w-full custom-flex-center'>
			<View className='custom-flex-col gap-10'>
				<Image source={require('@/assets/Logo.png')} />
				<Text className='text-slate-700 text-center text-xl font-bold uppercase'>
					All your favorites
				</Text>

				<Text className='text-slate-500 text-center text-base'>
					Get all your loved foods in one once place,
					{'\n'}
					you just place the order we do the rest
				</Text>
			</View>

			<View className='absolute bottom-28 w-80 cursor-pointer'>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={() => {}}
					className='w-auto rounded-md bg-primary px-2 py-4'
				>
					<Text className='text-center font-semibold uppercase text-light'>
						Get Start
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default HomeScreen
