export default{
    data(){
        return{
            nState: null,
        };
    },
    methods:{
        openNotification(options) {
            this.$notification.open(options);
            this.nState = JSON.stringify(options, null, 2);
          },
    }
};
