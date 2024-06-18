import { FC } from 'react'
import { Text, View } from 'react-native'

const HomeScreen: FC = () => {
	return (
		<View className='flex-1 bg-green-500 w-screen h-screen items-center justify-center'>
			<Text className='text-4xl text-white'>HomeScreen</Text>
		</View>
	)
}

export default HomeScreen
