<template>
	<div class="page-wrapper">
        <app-slide></app-slide>
		<app-header></app-header>
		<router-view></router-view>
		<app-modal/>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppSlide from "./components/Slide";
	import AppHeader from "./components/Header";
	import AppFooter from "./components/Footer";
	import AppModal from "./components/modals/AppModal";

	export default {
		name: "App",
		components: {
            AppSlide,
			AppHeader,
			AppFooter,
			AppModal
		}
	}
</script>
