<template>
    <Page>
        <ActionBar title="Categories" />
            <GridLayout rows="*">
                <ListView for="item in data" @itemTap="onItemTap">
                  <v-template>
                    <!-- Shows the list item label in the default color and style. -->
                    <Label :text="item.text" />
                  </v-template>
                </ListView>
            </GridLayout>
    </Page>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello World!',
            btnText: 'Button',
            data:[
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
        onButtonTap() {
            this.msg = 'Sweet Jesus!';
            // console.log('test',this.$store);

            this.btnText = 'Clicked';

        }
    }

}
</script>
<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

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