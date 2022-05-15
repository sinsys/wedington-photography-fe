<!-- 
	[__layout].svelte - Core scaffolding of application
	- Listens for path
	- Contains navbar
	- Acts as an overlay for internal content
-->

<script context="module" lang="ts">
	/**
	 * Init function to set pathname on page load
	 * @param url - Svelte URL Property
	 */
  export function load({ url }: { url: { pathname: string }}) {
    const pathName = url.pathname
    return {
      props: {
        pathName
      }
    };
  }
</script>

<script type="ts">
	/**
	 * Page layout and rendering
	 * @param url - Svelte URL Property
	 */
	import type { NavLink } from './_interfaces'
	import { page } from '$app/stores'
	export let pathName: string

	// Rendered links
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
	].map(link => ({
		...link,
		active: pathName === link.path
	}))

	// Getter function to set active path
	const setPath = (currentPath: string) => {
		pathName = currentPath
		links = links.map(link => {
			return {
				...link,
				active: currentPath === link.path
			}
		})
	}

	// Page listener for pathname change to rerender
	$: setPath($page.url.pathname)
	const handleNavClick = async () => setPath($page.url.pathname)
</script>

<div id="app-wrapper">
	<nav>
		{#each links as link}
			<a
				class="{link.active ? 'active' : ''}"
				title={link.title}
				href={link.path}
				on:click="{() => handleNavClick()}"
			>
				{link.title}
			</a>
		{/each}
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
		background: $colorDark;
		box-shadow: 1rem 1rem 1rem #000;
	}
	a {
		text-decoration: none;
		color: $colorHighlight;
	}
	nav {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		background: $colorDark;

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
		background-image: linear-gradient(315deg, $colorBlack 0%, $colorDark 74%);
		flex-grow: 1;
		overflow: auto;
	}
	footer {
		width: 100%;
		background-color: #2d3436;
		background-image: linear-gradient(315deg, $colorBlack 0%, $colorDark 74%);
		padding: 1rem;
		display: flex;
		justify-content: space-evenly;
		
		* {
			color: $colorPrimary;
		}
	}
</style>
