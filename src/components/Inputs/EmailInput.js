import { Input } from './Input';

export const EmailInput = ({
	email,
	onEmailChange
}) => (
	<Input
		onChange={onEmailChange}
		placeholder="Adresse email"
		type="email"
		value={email}
	/>
)