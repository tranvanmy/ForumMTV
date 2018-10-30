<template>
	<div class="wrapper">
		<app-header></app-header>
		<app-aside></app-aside>
		<div class="content-wrapper">
			<app-breadcrumd></app-breadcrumd>
				<section class="content">
					<router-view></router-view>
					<app-modal/>
				</section>
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
		}
	}
</script>