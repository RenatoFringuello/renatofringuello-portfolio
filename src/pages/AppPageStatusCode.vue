<!-- this component is component is a router-view to show the page 
     based on the status code to set as name in router.js

     es.
     for a 404 page in router view add this in routes:
     {
        path: '/thePathFor404', 
        name: '404', //this is important
        component: AppPageStatusCode //this component
     }, 
-->

<template>
    <div class="container-lg message d-flex">
        <div class="m-auto">
            <div class="error-code">{{ $route.name }}</div>
            <div class="fs-2 fw-bold">{{ getStatusData($route.name).name }}</div>
            <div class="fs-4 my-text-secondary">{{ getStatusData($route.name).description }}.</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AppPageStatusCode',
    data() {
        return {
            statusCodes:[
                {
                    code:'400',
                    name:'Bad Request',
                    description:'The request can\'t be satisfied because of synthax errors'
                },
                {
                    code:'401',
                    name:'Unouthorized',
                    description:'Authentication is possible but it\'s failed'
                },
                {
                    code:'403',
                    name:'Forbidden',
                    description:'The request is legit but the server refuse to provide it'
                },
                {
                    code:'404',
                    name:'Not found',
                    description:'The page requested didn\'t exist yet'
                },
                {
                    code:'429',
                    name:'Too Many request',
                    description:'The client has done too many request in a small amount of time.'
                },
            ]
        }
    },
    computed:{
        /**
         * return the status code with description and name
         * @param {String} code - the status code to find
         */
        getStatusData(){
            return (code) => {
                return this.statusCodes.filter((statusCode)=>{return (statusCode.code == code)})[0];
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.message{
    text-align: center;
    height: 100dvh;
    .error-code{
        color:$comp-color;
        line-height: 1;
        font-size: clamp(9rem, 25vw, 16rem);
        text-shadow: clamp(7px, 1vw, 10px) clamp(7px, 1vw, 10px) 0 $main-color;
    }
}
</style>