<template>
<section class="content-header">
    <h1>
        Dashboard
        <small>Control panel</small>
    </h1>
    <ol class="breadcrumb">
        <li>
        	<router-link :to="{ name: 'home'}">
        		<i class="fa fa-dashboard"></i>
        		Home
        	</router-link>
       	</li>

        <li v-for="(item, index) in list">
        	<span class="active" v-if="isLast(index)">{{ showName(item) }}</span>
            <router-link :to="item" v-else>{{ showName(item) }}</router-link>
        </li>

    </ol>
</section>
</template>

<script>
export default {
    name: "AppBreadcrumd",
    props: {
    	list: {
    		type: Array,
    		required: true,
    		default: () => []
    	}
    },	
    methods: {
    	isLast (index) {
            return index === this.list.length - 1
        },

        showName (item) {
            if (item.meta && item.meta.label) {
                item = item.meta && item.meta.label
            }
            if (item.name) {
                item = item.name
            }
            return item
        }
    }
};
</script>
