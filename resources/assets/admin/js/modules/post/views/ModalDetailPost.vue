<template>
    <div class="modal fade" id="modal-detail-post">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Default Modal</h4>
                </div>
                <div class="modal-body">
                    <p>asdasd</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" @click="close">Close</button>
                    <button type="button" class="btn btn-primary" @click="editPost">Save changes</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script>
    export default {
        name: "ModalDetailPost",
        data() {
            return {
            }
        },
        computed: {
        },
    
        beforeCreate() {
            this.$nextTick(() => {
                $('#modal-detail-post').modal('show');
            });
        },

        watch: {
            '$route.params.id': function (id) {
                $('#modal-detail-post').modal('show');
            }
        },

    
        methods: {
            close() {
                $('#modal-detail-post').modal('hide');
                this.$router.push({
                    name: 'post.list',
                })
            },

            editPost() {
                // return this.$router.push({
                //     name: 'post.list',
                // })
            },
            
            getDetailPost() {

            }
        }
    };
</script>
