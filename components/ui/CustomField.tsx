import { TextInput, View } from 'react-native'

import { CustomText } from './CustomText'

interface ICustomField {
	type?: 'text' | 'password'
	placeholder?: string
	className?: string
	label?: string
	isSecure?: boolean
}

export function CustomField({ ...props }: ICustomField) {
	return (
		<View className='flex w-full flex-col items-start justify-start space-y-2.5'>
			{props.label && (
				<CustomText
					content={props.label}
					className='text-sm font-light capitalize text-dark'
				/>
			)}
			<TextInput
				secureTextEntry={props.isSecure ? true : false}
				className={`w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-500 ease-in-out focus:border-primary ${props.className}`}
				placeholder={props.placeholder ? props.placeholder : 'Enter value'}
			/>
		</View>
	)
}
