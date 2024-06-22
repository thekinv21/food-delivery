import { Stack } from 'expo-router'

export default function AppRoutes() {
	return (
		<Stack
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name='index' />
			<Stack.Screen name='login' />
			<Stack.Screen name='register' />
		</Stack>
	)
}
