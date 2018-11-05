<template>
    <div class="modal fade" id="appModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="hide">Close</button>
                    <button type="button" class="btn btn-primary" @click="confirm">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Modal from '*/library/modal.js'
    
    export default {
        data() {
            return {
                visible: false,
                title: '',
                message: '',
                classModal: 'modal-info',
                classBtn: 'btn-info',
                onConfirm: {},
                onCancel: {},
                isNoti: false,
            }
        },
    
        created() {
            $('#appModal').modal('show');
        },
    
        methods: {
            hide() {
                if (typeof this.onCancel === 'function') {
                    this.onCancel();
                }
                $('#appModal').modal('hide');
            },
    
            confirm() {
                if (typeof this.onConfirm === 'function') {
                    this.onConfirm();
                } else {
                    $('#appModal').modal('hide');
                }
            },
    
            show(params) {
                console.log(params);
                $('#appModal').modal('show');
                // this.title = params.title;
                // this.message = params.message;
                // this.classModal = 'modal-' + params.type;
                // this.classBtn = 'btn-' + params.type;
                // this.isNoti = params.isNoti;
                this.onConfirm = params.onConfirm;
                // this.onCancel = params.onCancel;
            }
        },
        beforeMount() {
            Modal.EventBus.$on('show', (params) => {
                this.show(params)
            })
            Modal.EventBus.$on('hide', () => {
                this.hide()
            })
        }
    }
</script>

<style scoped>
    
</style>
