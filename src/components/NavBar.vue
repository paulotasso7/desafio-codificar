<template>
<div id="page">
    <div id="nav">
        <div class="logo">
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" style="height: 5em; width: 6rem; "/>
        </div>
        <div class="text">
            <div class="message">
                <p>O melhor para você ouvir, sempre</p>
            </div>    
            <div class="date">
                <p>qui, 8 Abril</p>
            </div>
        </div>
    </div>   
</div>

    
</template>


<script>
    export default {
        name: 'NavBar',
        data() {
            return{

            }
        }
        
    }
</script>

<style scoped >

    #nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 104px;
        width: 100%;
              flex-direction: row;
        background: #FFFFFF;
    }
    .message {
        font-size: 14px;
        line-height: 17px;
        margin-left: 32px;
        margin-bottom: 0px;
    }

    .date {
        font-size: 14px;
        line-height: 17px;
        margin-right: 64px;
    }

    .text {
        display: flex;
        justify-content: space-between;
        align-items: center ;
        width: 100%;
        height: 24px;
    }

    .logo {
        height: 24px;
        width: 259px;
        border-right: 1px solid grey;
        display: flex; 
        justify-content: center; 
        align-items: center;
        
    }
</style>