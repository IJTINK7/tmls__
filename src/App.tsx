import styles from "./App.module.css"
import {
	SearchAndRefreshCardContainer
} from "./components/SearchAndRefreshCardContainer/SearchAndRefreshCardContainer.tsx";
import {CardsAndStatisticsContainer} from "./components/CardsAndStatisticsContainer/CardsAndStatisticsContainer.tsx";

function App() {

	return (
		<div className={styles.app}>
			<SearchAndRefreshCardContainer/>
			<CardsAndStatisticsContainer/>
		</div>
	)
}

export default App
