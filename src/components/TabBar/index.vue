<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/film" active-class="yjactive">
                <i class="iconfont icondianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema" active-class="yjactive">
                <i class="iconfont iconcinema"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/center" active-class="yjactive">
                <i class="iconfont iconwode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {

}
</script>
<style scoped>
    #footer{width: 100%;height: 50px;background-color: white;border-top: 2px solid #ebe8e3;position: fixed;left: 0;bottom: 0;}
    #footer ul{display: flex;text-align: center;height: 50px;align-items: center;}
    #footer ul li{height: 40px;flex: 1;}
    #footer ul .yjactive{color: #f03d37;}
    #footer ul li i{font-size: 20px;}
    #footer ul li p{font-size: 12px;line-height: 18px;}
</style>
