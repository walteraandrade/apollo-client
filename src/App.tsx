import { MantineProvider } from '@mantine/core';
import './App.css';

import '@mantine/core/styles.css';
import { AppRoot } from './routes/root';

function App() {
	return (
		<MantineProvider>
			<AppRoot />
		</MantineProvider>
	);
}

export default App;
