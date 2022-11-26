import { Input } from './Input';

export const PasswordInput = ({
	onPasswordChange,
	password,
}) => (
	<Input
		onChange={onPasswordChange}
		placeholder="Mots de passe"
		type="password"
		value={password}
	/>
)