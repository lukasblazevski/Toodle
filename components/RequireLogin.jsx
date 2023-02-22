import { useContext } from 'react';
import DataContext from 'lib/DataContext';
import LoginPage from './LoginPage';

export default function RequireLogin({ children }) {
	const { user } = useContext(DataContext);

	if (!user) {
		return <LoginPage />;
	}

	return children;
}
