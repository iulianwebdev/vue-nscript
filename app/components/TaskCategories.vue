<template>
    <Page>
        <ActionBar class="action-bar p-r-5" title="Categories" flat="true">
                <ActionItem @tap="addItem" ios.position="right" android.position="actionBar" class="">
                    <Button class="fa action-bar-btn btn btn-active btn-outline">{{'fa-plus' | fonticon }}</Button>
                </ActionItem>
            </ActionBar>  
        <StackLayout>
            <ListView for="item in categories" @itemTap="editCategory">
              <v-template>
                <!-- Shows the list item label in the default color and style. -->
                <Label :text="item.text" />
              </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello World!',
            btnText: 'Button',
            categories:[
                {text:'Text 1'},
                {text:'Text 2'}
            ]
        }
    },
    mounted() {
        console.log('test');
        this.$store.dispatch('init');
    },
    methods: {
        addItem() {
            console.log('Adding category');

            // this.btnText = 'Clicked';
            this.categories.push({text:'new Item'})

        },
        editCategory(){
            console.log('Edit');
        }
    }

}
</script>
<style scoped>


.message {
    vertical-align: center;
    text-align: center;
    padding: 20 0;
    font-size: 20;
    color: #333333;
    border-bottom-width: 2;
    border-bottom-color: red;
}

.btn {
    margin-top: 10
}
</style>