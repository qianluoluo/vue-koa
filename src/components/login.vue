<template>
    <div class="login-wrap">
        <div class="login-title">
            Sign In
        </div>
        <div class="form-box">
            <div class="form-item setBottomLine">
                <input type="number" v-model="phone" max="99999999999" placeholder="请输入手机号">
            </div>
            <div class="form-item setBottomLine">
                <input :type="isLook?'text':'password'" v-model="password" placeholder="请输入密码">
                <span :class="isLook?'eye-look active':'eye-look'" @click="handleLookPsd()"></span>
            </div>
        </div>
        <button class="login-btn" :disabled="!isVoid" @click="handleLogin()">登录</button>  
        <div class="jump-page">
            <span>忘记密码</span>
            <span class="clapboard setRightLine"></span>
            <span class="quick-register">快速注册</span>
        </div> 
        <div class="intro">
            何以解忧唯有暴富，扫码加我微信
        </div> 
        <div class="er-code">
            <img src="../../static/img/er-code.jpg" alt="我微信二维码">
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                phone:'',
                password:'',
                isLook:false
            }
        },
        computed:{
            isVoid:function(){
                return this.phone && this.password ? true: false;
            }
        },
        methods:{
            handleLookPsd:function(){
                this.isLook = !this.isLook;
            },
            handleLogin:function(){
                this.$http({
                    method: 'post',
                    url: this.baseUrl + 'login',
                    responseType: 'json'
                }).then(function(data){

                }).catch(function(error){

                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../static/css/common.scss';
    .login-wrap{
        width:100%;
        height:100%;

        .login-title{
            width: 204px;
            font-size: 34px;
            height:48px;
            color:#02cc89;
            margin: 65px auto 21px;
        }
        .form-item{
            height: 58px;
            width: 320px;
            font-size: 16px;
            margin: 0 auto;
            position: relative;

            input{
                width:100%;
                height:100%;
                font-size: 16px;
            }
            .eye-look{
                position: absolute;
                width:20px;
                height: 20px;
                right:0;
                top:24px;
                background: url('../../static/img/eye.png') no-repeat;
                background-size: 100% 100%;
            }
            .eye-look.active{
                background: url('../../static/img/eye-active.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        .login-btn:disabled{
            background-color: #ccc;
        }
        .login-btn{      
            width:320px;
            height: 44px;
            border-radius: 4px;
            background-color: $main-color;
            color:#fff;
            margin-top:29px;
            font-size:16px;
        }
        .login-btn.active{
            background-color: #02cc89;
        }
        .jump-page{
            height: 21px;
            width:160px;
            margin:24px auto 0;
            font-size: 15px;

            .clapboard{
                margin:0 17px 0 17px;
            }
            .quick-register{
                color: $main-color;
            }
        }
        .intro{
            width:240px;
            height: 22px;
            font-size: 16px;
            color:$main-color;
            margin:32px auto 0;
        }
        .er-code{
            width:120px;
            height: 120px;
            border-radius: 8px;
            padding:20px;
            margin: 34px auto 0;
            border: 1px solid $main-color;
            box-sizing: border-box;

            img{
                width:100%;
                height:100%;
            }
        }
    }   
</style>

