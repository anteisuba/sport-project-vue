<template>
    <!-- 引入container布局 -->
    <el-container class="home-container">
        <!-- 头部 -->
        <el-header>
            <div> 
                <img src="../assets/yanami.png" alt>
                <span>管理平台</span>
            </div>
            <el-button type="info" @click="logout">安全退出</el-button> 

        </el-header>
        <!-- 主体部分 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse?'64px':'200px'">
                <div class="toggle-button" @click="toggleCollapse">
                    |||
                </div>
                <!-- unique-opened侧边栏是否同时打开 collapse="false"隐藏当前侧边属性 :router="true"点击后跳转对应路由 :default-active="activePath"双向绑定指定画面定向-->
                <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409eff" unique-opened :collapse="isCollapse" :collapse-transition="false" :router="true" :default-active="activePath">
                    <!-- 一级菜单 循环menuList,通过item.id绑定 -->
                    <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id"> 
                        <template slot="title">
                            <i :class="iconsObject[item.id]"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <!-- 二级菜单 @click="saveNavState(it.path)被选中是改变默认路径 -->
                        <el-menu-item :index="it.path" v-for="it in item.sList" :key="it.id" @click="saveNavState(it.path)">
                            <template slot="title">
                                <i :class="iconsObject[it.id]"></i>
                                <span>{{it.title}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 主题内容 -->
            <el-main>
                <router-view>
                    
                </router-view>
               
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import router from '@/router';

    export default {
        data() {
            return {
                //菜单列表
                menuList:[],
                isCollapse:false, //伸缩属性
                iconsObject:{
                    '100':'icnofont icon-a-Group789',
                    '200':'iconfont icon-caidanshezhi',
                    '101':'iconfont icon-churukubaobiao',
                    '102':'iconfont icon-caidanshezhi',
                    '103':'iconfont icon-gongzuotai',
                    '104':'iconfont icon-a-Group808',
                    '201':'iconfont icon-a-Group790',
                    '202':'iconfont icon-a-Group789',
                    '203':'iconfont icon-a-Group808',
                    '204':'iconfont icon-gongzuotai',
                },
                activePath:'/welcome', //默认路径
            }
        },
        //onload事件
        created() {
            //查询menuList
            this.getMenuList();
            this.activePath = window.sessionStorage.getItem('activePath'); //取出session里的path,动态修改activePath

        },
        methods: {
            //安全退出方法
            logout() {
                window.sessionStorage.clear(); //清除session
                this.$router.push("/login"); //回到首页
            },
            //获取导航菜单方法 async-await解析处理
            async getMenuList() {
                const{data:res} = await this.$http.get("menus");
                console.log(res);
                if(res.flag != 200) return this.$message.error("获取列表失败!!!"); //访问失败的错误信息
                this.menuList = res.menus; //访问成功的数据回填
            },
            //控制伸缩
            toggleCollapse() {
                this.isCollapse = !this.isCollapse;
            },
            //保存路径
            saveNavState(activePath) {
                window.sessionStorage.setItem('activePtah',activePath); //存放在session中
                this.activePath = activePath;
            }

        }
    }
 
</script>

<style lang="less" scoped>
//布局器样式
    .home-container { //充满布局
        height: 100%;
    }
//头部样式
    .el-header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between; //左右贴边
        padding-left: 0%; //左边界
        align-items: center; //全部剧中
        color:#fff;
        font-size: 20px;
        >div{
            display: flex;
            align-items: center;
            span{
                color: aqua;
                margin-left: 15px;
            }
        }
        
    }
//侧边栏样式
    .el-aside {
        background-color: #333744;

    }
    .el-menu{
        border-right: none;
    }
//主题样式
    .el-main{
        background-color: #eaedf1;
    }
    img{
        width: 76px;
        height: 60px;
        border-radius: 50%;
    }
//按钮样式
    //伸缩按钮
    .toggle-button{
        background-color: #4A5064;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em; //字体间的空隙
        cursor: pointer; //经过的时候变成小手指 
    }


</style>