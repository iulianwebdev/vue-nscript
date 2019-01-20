<template>
    <Page>
        <ActionBar class="action-bar p-r-5" :title="title" flat="true">
            <ActionItem @tap="addItem" ios.position="right" android.position="actionBar">
                <Button class="fa fa-btn btn btn-active btn-outline">{{'fa-plus' | fonticon }}</Button>
            </ActionItem>
        </ActionBar>  
        <StackLayout class="container">
            <RadListView ref="listView" class="list-group" for="item in categories" @itemTap="editCategory">
              <v-template>
                <!-- Shows the list item label in the default color and style. -->
                <FlexboxLayout flexDirection="row" class="bd-red list-group-item">
                    <!-- <Image [src]="country.imageSrc" class="thumb img-circle"></Image> -->
                    <Label :text="item.name" flexGrow="2" class="list-group-item-heading"
                        verticalAlignment="center" ></Label>
                    <!-- <Button id="context-menu" class="fa" ref="context-menu" :text="'fa-ellipsis-v' | fonticon"></Button> -->
                    <Button class="bd-blue fa danger fa-btn btn btn-active btn-outline" @tap="deleteCategory(item.id)" :text="'fa-remove' | fonticon"></Button>
                </FlexboxLayout>
                <!-- <Label :text="item.text" /> -->
              </v-template>
            </RadListView>
        </StackLayout>
    </Page>
</template>
<script>
import Modal from './SaveModal'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            btnText: 'Button',
            displayPopup: false
        }
    },
    computed: {
        ...mapGetters({
          categories: 'categories/all'
        }),
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
        deleteCategory(id){
            console.dir(id);
            console.log('Btn tapped!');
            this.$store.dispatch('categories/delete', {id});
        },
        editCategory({item}){
            // TODO: call the saveModal (edit mode) 
            console.log('add', item.name);
        },
        openModal(){
            
            this.$showModal(Modal, {
                props:{
                    title:'Add new Category-', 
                    fields:[
                        'name',
                        'description'
                    ],
                    action:'categories/new'
                    }
                });
        }


    }

};
</script>
<style lang="scss" scoped>


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

    .list-group-item {
        padding: 0 ;

        .list-group-item-heading {
            padding-top:10;
            padding-left:10;
        }

        .btn {
            margin-top: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-bottom: 0 !important;
        }
    }
}

.btn {
    margin-top: 10
}
</style>