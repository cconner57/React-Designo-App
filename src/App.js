import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import WebDesignScreen from './screens/WebDesignScreen';
import AppDesignScreen from './screens/AppDesignScreen';
import GraphicDesignScreen from './screens/GraphicDesignScreen';
import AboutScreen from './screens/AboutScreen';
import LocationsScreen from './screens/LocationsScreen';
import ContactScreen from './screens/ContactScreen';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path='/about' component={AboutScreen} />
				<Route path='/locations' component={LocationsScreen} />
				<Route path='/contact' component={ContactScreen} />
				<Route path='/webdesign' component={WebDesignScreen} />
				<Route path='/appdesign' component={AppDesignScreen} />
				<Route path='/graphicdesign' component={GraphicDesignScreen} />
				<Route path='/' exact component={HomeScreen} />
			</Switch>
			<Footer />
			<GlobalStyle />
		</Router>
	);
};

export default App;
