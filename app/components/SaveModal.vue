<template>
    <Frame>
        <Page>
            <ActionBar class="action-bar p-r-5" :title="saveTitle" flat="true">
                <ActionItem @tap="closeModal" ios.position="right" android.position="actionBar">
                    <Button class="fa fa-btn btn btn-active btn-outline">{{'fa-close' | fonticon }}</Button>
                </ActionItem>
            </ActionBar>
            <GridLayout rows="*, 60" columns="*">  
                <StackLayout class="form" row="0">
                    
                    <StackLayout class="input-field p-t-10" v-for="field in fields">
                        <TextField class="input" :hint="'New '+field" v-model="saveData[field]"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                </StackLayout>
                <Button @tap="save" text="Save" class="btn btn-primary" row="1"></Button>
            </GridLayout>
        </Page>
    </Frame>
</template>
<script>
    export default {
        data(){
            return {
                saveData:{}
            }
        },
        create(){
            this.fields.forEach( val => {
                this.saveData[val] = ''; 
                console.log(val);
            })
        },
        props:{
            title: String,
            action: String,
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
                this.$modal.close();
            },
            save(){
                // console.log(this.action, this.saveData);
                this.$store.dispatch(this.action, {data: this.saveData}, {root:true}).then( response => {
                    this.$modal.close()
                }, err=>{
                    console.log('err', err);
                    // TODO: red Show error
                });
            }
        }
    }
</script>