<template>
	<div id="root">
		<app-header></app-header>
		<router-view></router-view>
		<app-modal/>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppHeader from "./components/Header";
	import AppFooter from "./components/Footer";
	import AppModal from "./components/modals/AppModal";

	export default {
		name: "App",

		components: {
			AppHeader,
			AppFooter,
			AppModal
		}
	}
</script>