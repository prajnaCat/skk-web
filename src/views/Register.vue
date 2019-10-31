<template>
<div style="margin:0; padding:0;">
    <top-bar></top-bar>
    <div class="container page-register">
        <div class="row">
            <div class="col-md-6 col-md-offset-2 register-form">
                <register></register>
            </div>
        </div>
    </div>
    <div id="footer">
        <foot-bar></foot-bar>
    </div>
</div>
</template>


<script>
import Register from "./../components/Register.vue";
export default {
    components: {
        Register
    },
    data() {
        return {
            query: {
            },

            form: {
                
            },
            rules: {
                
            },
        }      
    },
    created() {
    },

    mounted(){
    },
    
    methods: {

        checkForm: function (formName) {
            var result  = false;
            this.$refs[formName].validate((valid) => {
                    if (valid) {
                        result = true;
                    } else {
                        result = false;
                        return false;
                    }
            });
            return result;
        },

        formsubmit: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.onSubmit();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        onSubmit: async function () {
            const result = await this.$axios.post('', this.form.bankList);
            if (result.success) {
               
            }
        },
    },
}
</script>
<style scoped>
</style>