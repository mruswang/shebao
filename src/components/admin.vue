<template>
	<div class="admin">
		<div class="atop">
			<div class="aleft">
				<div class="logo">
					<img src="../assets/logo.png" alt="">
					<span>管理后台</span>
				</div>
				<div class="alink">
          <router-link :to="{path:'/inquire'}">查询办理</router-link>
          <router-link :to="{path:'/accounts'}">提醒对账</router-link>
          <router-link :to="{path:'/financial'}">财务结算</router-link>
          <router-link :to="{path:'/set'}">系统设置</router-link>
          <router-link :to="{path:'/working'}">工作云盘</router-link>
				</div>
			</div>
			<div class="aright">
					<el-badge :value="1" class="rone">
						<img src="../assets/icon_news.png" alt="">
					</el-badge>
					<div class="rtwo">
						<img src="../assets/icon_user.png" alt="">
            <span>admin</span>
					</div>
					<div>
						<img src="../assets/icon_close.png" alt="">
					</div>
				</div>
		</div>
    <router-view></router-view>
	</div>
</template>

<style lang="less" >
.admin{
  /*width: 100%;*/
  /*height: 100%;*/
  .atop{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #419DEA;
    color: #fff;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    .aleft{
      display: flex;
      align-items: center;
      .logo{
        display: flex;
        align-items: center;
        padding: 10px;
        img{
          width: 42px;
          height: 42px;
          margin-right: 10px;
        }
      }
      .alink{
        a{
          padding:22px 10px;
          color: #fff;
          text-decoration: none;
          &.active{
            background-color: #1977C6;
          }
        }
      }
    }
    .aright{
      display: flex;
      align-items: center;
      padding: 10px;
      div{
        margin-left: 40px;
        position: relative;
        &.rone{
          margin-left: 0;
          img{
            width: 16px;
          }
          .el-badge__content{
            border: none;
          }
        }
        &:after{
          content: '';
          display: block;
          width: 1px;
          height: 100%;
          position: absolute;
          top: 0;
          left: -20px;
          background-color: #fff;
        }
        &:first-child:after{
          width: 0;
        }
        &.rtwo{
          display: flex;
          align-items: center;
          span{
            margin-left: 10px;
            font-size: 12px;
          }
        }
        img{
          width: 18px;
        }
      }
    }
  }
}

</style>
