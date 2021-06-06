<template>
    <div class="messageBox">
        <p>{{content}}</p>
        <div>
            <div @click="handleCancel">{{cancel}}</div>
            <div @click="handleOk">{{ok}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MessageBox'
}
</script>
<style scoped>
    .messageBox{width: 260px;height: 148px;border: 1px #ccc solid;background: white;box-shadow: 3px 3px 3px 3px #ccc;
        position: absolute;left: 50%;top: 50%;margin: -74px 0 0 -130px;}
    .messageBox p{text-align: center;line-height: 40px;padding: 10px;}
    .messageBox > div{ display: flex; position: absolute; bottom: 0; width:100%; border-top:1px #ccc solid;height: 48px;}
    .messageBox > div div{ flex:1; text-align: center; line-height: 48px; border-right:1px #ccc solid;}
    .messageBox > div div:last-child{ border:none;color: orange;}
</style>
