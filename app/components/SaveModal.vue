<template>
    <Frame>
        <Page>
            <ActionBar class="action-bar p-r-5" :title="saveTitle" flat="true">
                <ActionItem @tap="closeModal" ios.position="right" android.position="actionBar">
                    <Button class="fa action-bar-btn btn btn-active btn-outline">{{'fa-close' | fonticon }}</Button>
                </ActionItem>
            </ActionBar>
            <GridLayout rows="*, 60" columns="*">  
                <StackLayout class="form" row="0">
                    <StackLayout class="input-field p-t-10">
                        <TextField class="input" hint="Insert text"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <TextField class="input" hint="Insert text"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                </StackLayout>
                <Button text="Log In" class="btn btn-primary" row="1"></Button>
            </GridLayout>
        </Page>
    </Frame>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props:{
            title: String,
            fields: {
                type:Array,
                required: true
            }
        },
        computed: {
            saveTitle(){
                return this.title || 'Save';
            }
        },
        methods:{
            closeModal(){
                console.log('Close', this.text);
                this.$modal.close();
                
            }
        }
    }
</script>