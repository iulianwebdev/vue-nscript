<template>
    <Page>
        <ActionBar class="action-bar p-r-5" :title="title" flat="true">
            <ActionItem @tap="addItem" ios.position="right" android.position="actionBar">
                <Button class="fa action-bar-btn btn btn-active btn-outline">{{'fa-plus' | fonticon }}</Button>
            </ActionItem>
        </ActionBar>  
        <StackLayout class="container">
            <ListView class="list-group" for="item in categories" @itemTap="editCategory">
              <v-template>
                <!-- Shows the list item label in the default color and style. -->
                <FlexboxLayout flexDirection="row" class="list-group-item">
                    <!-- <Image [src]="country.imageSrc" class="thumb img-circle"></Image> -->
                    <Label :text="item.text" class="list-group-item-heading"
                        verticalAlignment="center" style="width: 100%"></Label>
                </FlexboxLayout>
                <!-- <Label :text="item.text" /> -->
              </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>
<script>
import Modal from './SaveModal'
export default {
    data() {
        return {
            btnText: 'Button',
            displayPopup: false,
            categories:[
                {text:'Text 1'},
                {text:'Text 2'}
            ]
        }
    },
    computed: {
        title(){
            // if(this.displayPopup) return 'New Category';
            return 'All Categories';
        }
    },
    mounted() {
        global.$tc = this;
        console.log('test');
        this.$store.dispatch('init');
    },
    methods: {
        addItem() {
            console.log('Adding category');

            // this.btnText = 'Clicked';
            this.openModal();
            // this.categories.push({text:'new Item'})


        },
        editCategory(){
            console.log('add');
        },
        openModal(){
            this.$showModal(Modal, {props:{title:'TEST TEXT', fields:[]}})
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
.container {
    background: lightyellow;
}
.list-group {
    background: lightgreen;
    height: 100%;
}
.btn {
    margin-top: 10
}
</style>