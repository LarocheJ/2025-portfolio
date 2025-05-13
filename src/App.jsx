function App() {

	return (
		<div className="wrapper">
			<h1>&lt;UnderConstruction /&gt;</h1>
			<h2>Coming Soon</h2>
			<div className="container">
				<div className="loading-bar__container">
					<div className="loading-bar">
						<span className="loading-bar__inner"></span>
					</div>
						<div className="loading-bar__values">
						<span className="loading-bar-values__item">0%</span>
						<span className="loading-bar-values__item">50%</span>
						<span className="loading-bar-values__item">100%</span>
					</div>
				</div>
				
				<p className="text-blurb">I'm currently revamping my portfolio. If, for whatever reason, you want to check out my very old portfolio, you can do so <a href="https://old.jimmylaroche.com" target="_blank">here</a>.</p>
			</div>
		</div>
	)
}

export default App
