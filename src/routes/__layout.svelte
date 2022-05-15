<!-- 
	[__layout].svelte - Overlay scaffolding of application
-->
<script context="module" lang="ts">
	/**
	 * Init function to set props
	 * @param url - Svelte URL Object
	 */
	export function load({ url }: { url: { pathname: string } }) {
		const pathName = url.pathname
		return {
			props: {
				pathName
			}
		}
	}
</script>

<script type="ts">
	/**
	 * Page layout and rendering
	 */
	import type { NavLink } from './_interfaces'
	import { page } from '$app/stores'
	export let pathName: string

	// Link data
	let links: Array<NavLink> = [
		{
			title: 'Main',
			path: '/'
		},
		{
			title: 'About',
			path: '/about'
		},
		{
			title: 'Portfolio',
			path: '/portfolio'
		},
		{
			title: 'Contact',
			path: '/contact'
		}
	].map((link) => ({
		...link,
		active: pathName === link.path
	}))

	// Getter function to set active path
	const setPath = (currentPath: string) => {
		pathName = currentPath
		links = links.map((link) => {
			return {
				...link,
				active: link.path === pathName
			}
		})
	}

	// Rerender on pathname change and nav click
	$: setPath($page.url.pathname)
	const handleNavClick = async () => setPath($page.url.pathname)
</script>

<div id="app-wrapper">
	<!-- Static NavBar -->
	<nav>
		{#each links as link}
			<a
				class={link.active ? 'active' : ''}
				title={link.title}
				href={link.path}
				on:click={() => handleNavClick()}
			>
				{link.title}
			</a>
		{/each}
	</nav>

	<!-- Render Slot for main app functionality -->
	<main>
		<slot />
	</main>

	<!-- Static Footer -->
	<footer>
		<div>
			<p class="footer-text">
				&trade; Wedington Photography - Nico Web Development - {new Date().getFullYear()}
			</p>
		</div>
	</footer>
</div>

<style global lang="scss">
	@import '../styles';

	html {
		height: -webkit-fill-available;
	}

	#app-wrapper {
		@include fontKronaOne;
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100vh;
		min-height: 100vh;
		/* Mobile bugfix for 100% height */
		min-height: -webkit-fill-available;
		max-height: 100vh;
		max-width: 100vw;
		margin: 0;
		padding: 0;
		color: $colorWhite;
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
		color: $colorAshGray;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		background-image: linear-gradient(315deg, $colorHighlight 0%, $colorBlack 74%);

		a {
			margin: 0 0.5rem;
			color: $colorAshGray;
			transition: all 0.3s ease;

			&:hover,
			&.active {
				color: $colorWhite;
				transform: translateY(0.25rem);
			}
		}
	}

	main {
		width: 100%;
		background-color: #2d3436;
		background-image: linear-gradient(315deg, $colorHighlight 0%, $colorBlack 74%);
		flex-grow: 1;
		overflow: auto;
		margin: 0;

		a {
			display: inline-block;
			transition: all 0.3s ease;

			&:hover {
				color: $colorAlt;
				transform: scale(1.03);
			}
		}
	}

	footer {
		width: 100%;
		background-color: #2d3436;
		background-image: linear-gradient(315deg, $colorBlack 0%, $colorHighlight 74%);
		height: 2rem;
		padding: 0;
		align-items: center;
		justify-content: center;
		display: flex;
		justify-content: space-evenly;

		.footer-text {
			@include fontDmSans;
			font-size: 0.75rem;
		}

		a {
			margin: 0 0.5rem;
			color: $colorAshGray;
			transition: all 0.3s ease;

			&:hover,
			&.active {
				color: $colorWhite;
				transform: translateY(-0.25rem);
			}
		}
	}
</style>
