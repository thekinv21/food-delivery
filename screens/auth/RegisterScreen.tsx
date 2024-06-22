import { Image, Pressable, SafeAreaView, View } from 'react-native'

import CustomButton from '@/components/ui/CustomButton'
import { CustomField } from '@/components/ui/CustomField'
import { CustomText } from '@/components/ui/CustomText'

import { useCustomNavigation } from '@/hooks/useCustomNavigation'

export function RegisterScreen() {
	const { navigation } = useCustomNavigation()

	return (
		<SafeAreaView className='relative h-screen w-full custom-flex-center'>
			<View className='h-full w-full space-y-4 px-10 pt-10 custom-flex-col'>
				<Image source={require('@/assets/Logo.png')} className='' />

				<View className='w-full'>
					<CustomField label='Name' placeholder='Enter name...' />
				</View>

				<View className='w-full'>
					<CustomField label='Surname' placeholder='Enter surname...' />
				</View>

				<View className='w-full'>
					<CustomField label='E-mail' placeholder='Enter e-mail...' />
				</View>

				<View className='w-full'>
					<CustomField label='Username' placeholder='Enter username...' />
				</View>

				<View className='relative w-full'>
					<CustomField
						label='Password'
						placeholder='Enter password...'
						isSecure
					/>
				</View>

				<View className='w-full'>
					<CustomButton
						content='Register'
						className='my-3'
						onPress={() => console.log('Register Pressed')}
					/>
				</View>

				<View className='w-full flex-row py-2 custom-flex-center'>
					<View className='w-1/3 border border-gray-200' />

					<View className='mx-6'>
						<CustomText
							content='Or'
							className='text-base font-light text-gray-500'
						/>
					</View>
					<View className='w-1/3 border border-gray-200' />
				</View>

				<CustomText
					content={`If you have an account?`}
					className='text-sm font-light text-gray-500'
				/>
				<Pressable
					onPress={() => {
						navigation.navigate('login' as unknown as never)
					}}
				>
					<CustomText
						content='Sign In'
						className='text-base font-light text-primary/80'
					/>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}
