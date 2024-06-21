import { Image, Pressable, SafeAreaView, View } from 'react-native'

import CustomButton from '@/components/ui/CustomButton'
import { CustomField } from '@/components/ui/CustomField'
import { CustomText } from '@/components/ui/CustomText'

export function LoginScreen() {
	return (
		<SafeAreaView className='relative h-screen w-full custom-flex-center'>
			<View className='h-full w-full space-y-4 px-10 custom-flex-col'>
				<Image source={require('@/assets/Logo.png')} className='mb-10' />
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

				<View className='w-full custom-flex-end'>
					<Pressable onPress={() => console.log('Forgot Password Pressed')}>
						<CustomText
							content='Forgot Password'
							className='text-xs font-light capitalize text-gray-500'
						/>
					</Pressable>
				</View>

				<View className='w-full'>
					<CustomButton
						content='Login'
						className='py-3'
						onPress={() => console.log('Login Pressed')}
					/>
				</View>

				<View className='w-full flex-row py-6 custom-flex-center'>
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
					content={`Don't have an account?`}
					className='text-sm font-light text-gray-500'
				/>
				<Pressable onPress={() => console.log('Sign Up Pressed')}>
					<CustomText
						content='Register'
						className='text-base font-light text-primary/80'
					/>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}
