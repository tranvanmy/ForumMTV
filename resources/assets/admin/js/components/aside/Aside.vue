<template>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>Tran van my</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
            <!-- search form -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                                </button>
                              </span>
                </div>
            </form>
            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">MAIN NAVIGATION</li>
                <li class="active">
                    <a href="#" @click="onClickLink($event, 'Home')">
                        <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" @click="onClickLink($event, 'post.list')">
                        <i class="fa fa-files-o"></i>
                        <span>Manage Post</span>
                        <span class="pull-right-container">
                                    <span class="label label-primary pull-right">4</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" @click="onClickLink($event, 'user.list')">
                        <i class="fa fa-user"></i> <span>Manager User</span>
                        <span class="pull-right-container">
                                <span class="label label-warning pull-right">100</span>
                        </span>
                    </a>
                </li>
                <li class="header">LABELS</li>
                <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    export default {
        name: "AppAside",
        data() {
            return {}
        },

        methods: {
            onClickLink(event, url) {
                event.preventDefault()
                return this.$router.push({
                    name: url
                })
            },
        }
    };
</script>
