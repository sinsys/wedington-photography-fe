<div id="app-wrapper">
	<nav>
		<a href="/">Main</a>
		<a href="/about">About</a>
		<a href="/portfolio">Portfolio</a>
		<a href="/contact">Contact</a>
	</nav>
	<main>
		<slot />
	</main>
	<footer>
		<a href="/">Main</a>
		<a href="/about">About</a>
		<a href="/portfolio">Portfolio</a>
		<a href="/contact">Contact</a>
	</footer>
</div>

<style global lang="scss">
	@import '../styles/base';

	#app-wrapper {
		@include fontKronaOne;
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100vh;
		max-height: 100vh;
		max-width: 100vw;
		margin: 0;
		padding: 0;
		overflow-y: hidden;
	}
	nav,
	main,
	footer {
		width: 100%;
		margin: 0;
		padding: 1rem;
		box-sizing: border-box;
	}
	nav,
	footer {
		box-shadow: 1rem 1rem 1rem #000;
	}
	a {
		text-decoration: none;
	}
	nav {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		background: rgba(0, 0, 0, 0.1);

		a {
			margin: 0 0.5rem;
		}
	}
	main {
		width: 100%;
		background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
		flex-grow: 1;
		overflow: auto;
	}
	footer {
		width: 100%;
		background: rgba(0, 0, 0, 0.1);
		padding: 1rem;
		display: flex;
		justify-content: space-evenly;
	}
</style>
