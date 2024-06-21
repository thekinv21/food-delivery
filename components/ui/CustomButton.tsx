import { styled } from 'nativewind'
import { TouchableOpacity } from 'react-native'

import { CustomText } from './CustomText'

interface ICustomButtonProps {
	content: string
	onPress: () => void
	className?: string
}

function CustomButton({ onPress, content, ...props }: ICustomButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			className={`w-auto rounded-md bg-primary px-4 py-2.5 text-light ${props.className} `}
			{...props}
		>
			<CustomText
				content={content}
				className='text-center font-semibold uppercase text-light'
			/>
		</TouchableOpacity>
	)
}

export default styled(CustomButton)
