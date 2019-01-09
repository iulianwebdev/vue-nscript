<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!" />
        <!-- <FlexboxLayout> -->
        <StackLayout>
            <Label class="message" :text="msg" flexGrow="3" />
            <Button :text="btnText" ref="btn" @tap="onButtonTap" class="btn" />
        </StackLayout>
        <!-- </FlexboxLayout>  -->
    </Page>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello World!',
            btnText: 'Button'
        }
    },
    mounted() {
        console.log('test');
        this.$store.dispatch('init');
    },
    methods: {
        onButtonTap() {
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