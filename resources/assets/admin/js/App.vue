<template>
	<div class="wrapper" style="position: relative">
		<div class="splash-screen" v-show="mainLoading.show">
            <div class="splash-overlay" v-show="mainLoading.show"></div>
            <div class="splash-spinner"></div>
        </div>
		<app-header></app-header>
		<app-aside></app-aside>
		<div class="content-wrapper">
			<app-breadcrumd :list="list"></app-breadcrumd>
				<section class="content">
					<router-view></router-view>
				</section>
			<app-modal/>
		</div>
		<app-footer></app-footer>
		<app-control-siderbar></app-control-siderbar>
		<div class="control-sidebar-bg"></div>
	</div>
</template>

<script>
	import AppHeader from "*/components/header/Header";
	import AppAside from "*/components/aside/Aside";
	import AppBreadcrumd from "*/components/breadcrumb/Breadcrumb";
	import AppFooter from "*/components/footer/Footer";
	import AppControlSiderbar from "*/components/control_siderbar/ControlSiderbar";
	import AppModal from "*/components/modals/AppModal";

	export default {
		name: "App",
		components: {
			AppHeader,
			AppAside,
			AppBreadcrumd,
			AppControlSiderbar,
			AppFooter,
			AppModal,
		},

		computed: {
			state() {
                return this.$store.state;
            },

            mainLoading() {
            	return this.$store.state.storeLoading.mainLoading
        	},

	        name() {
	            return this.$route.name
	        },

	        list() {
	            return this.$route.matched
	        }
		}
	}
</script>