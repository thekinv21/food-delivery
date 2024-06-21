import { FC } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

import CustomButton from '@/components/ui/CustomButton'

import { useCustomNavigation } from '@/hooks/useCustomNavigation'

const WelcomeScreen: FC = () => {
	const { navigation } = useCustomNavigation()
	return (
		<SafeAreaView className='relative h-screen w-full custom-flex-center'>
			<View className='gap-10 custom-flex-col'>
				<Image source={require('@/assets/Logo.png')} />
				<Text className='text-center text-xl font-bold uppercase text-slate-700'>
					All your favorites
				</Text>

				<Text className='text-center text-base text-slate-500'>
					Get all your loved foods in one once place,
					{'\n'}
					you just place the order we do the rest
				</Text>
			</View>

			<View className='absolute bottom-28 w-80 cursor-pointer'>
				<CustomButton
					onPress={() => {
						navigation.navigate('login' as unknown as never)
					}}
					content='Get Started'
				/>
			</View>
		</SafeAreaView>
	)
}

export default WelcomeScreen
