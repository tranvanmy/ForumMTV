<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Search Post</h3>
    
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <!-- <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button> -->
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body" style="">
                    <div class="box-body">
                        <div class="row">
                            <div class="col-xs-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-xs-4">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-xs-5">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <!-- /.table-responsive -->
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix" style="">
                    <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-right" @click="openModal">Search Post</a>
                </div>
                <!-- /.box-footer -->
            </div>
        </div>
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Hover Data Table</h3>
                    <button class="btn btn-sm btn-success btn-flat pull-right" @click="openModal">Add Post</button>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Slug</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(post, index) in listPosts">
                                <td>{{ index + 1 }}</td>
                                <td>{{ post.title }}</td>
                                <td>{{ post.slug }}</td>
                                <td>{{ post.description }}</td>
                                <td>
                                    <tr>
                                        <th>
                                            <button class="btn btn-sm btn-success btn-flat pull-right" @click="openModal">Edit Post</button>
                                        </th>
                                        <th>
                                            <button class="btn btn-sm btn-warning btn-flat pull-right" @click="showDetail(post.id)">Detail Post</button>
    
                                        </th>
                                        <th>
                                            <button class="btn btn-sm btn-danger btn-flat pull-right" @click="showDetail(post)">Delete Post</button>
                                        </th>
                                    </tr>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Slug</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
            <!-- /.box -->
        </div>
        <!-- <modal-detail-post></modal-detail-post> -->
        <!-- /.col -->
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
        name: "PostList",
        data() {
            return {}
        },
        computed: {
            ...mapState({
                listPosts: state => state.storeAdminPost.listPost
            })
        },

        created() {
            this.$store.dispatch('actionListPost', {
                vue: this,
                params: {}
            })
        },

        methods: {    
            showDetail(id) {
                return this.$router.push({
                    name: 'admin.post.detail',
                    params: {
                        id: id
                    }
                })
            },
    
            openModal() {
                // this.$toasted.success("You are add post success", {
                //     theme: "bubble",
                //     position: "top-right",
                //     duration: 2000
                // });
                const params = {
                    title: "Test!",
                    text: "test test test",
                    onConfirm: () => {
                        return this.alertFunc();
                    }
                };
    
                this.$modal.show(params)
            },
    
            alertFunc: function() {
                console.log(1);
            }
        }
    
    };
</script>
