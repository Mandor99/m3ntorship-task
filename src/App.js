import './App.css';
import { GlobalStyle } from './styles/globalStyle';
import Home from './pages/Home';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Home />
		</div>
	);
}

export default App;
