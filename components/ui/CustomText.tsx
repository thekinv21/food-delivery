import { Text } from 'react-native'

interface ICustomText {
	content: string
	className?: string
}

export function CustomText({ content, ...props }: ICustomText) {
	return (
		<Text
			className={`text-center font-semibold uppercase text-light ${props.className} `}
			{...props}
		>
			{content}
		</Text>
	)
}
