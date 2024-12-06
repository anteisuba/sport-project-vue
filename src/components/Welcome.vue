<template>
    <div class="welcome-container">
        <h3>欢迎使用管理平台</h3>
        <div class="welcome-box"> 
            <img src="../assets/shiroko.png" alt="Welcome Image" class="full-page-image">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .welcome-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: #f9fafb;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h3 {
        color: #333;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    .welcome-box {
        width: 90%;
        height: 90%;
        background-color: #fff;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .welcome-box:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .full-page-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 5px;
    }
</style>
