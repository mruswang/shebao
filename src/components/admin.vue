<template>
	<div class="admin">
		<div class="top">
			<div class="left">
				<div class="logo">
					<img src="../assets/logo.png" alt="">
					<span>管理后台</span>
				</div>
				<div>
					<ul>
						<li class="active">查询办理</li>
						<li>提醒对账</li>
						<li>财务结算</li>
						<li>系统设置</li>
						<li>工作云盘</li>
					</ul>
				</div>
			</div>
			<div class="right">
					<el-badge :value="1" class="r1">
						<img src="../assets/icon_news.png" alt="">
					</el-badge>
					<div>
						<img src="../assets/icon_user.png" alt="">
						admin
					</div>
					<div>
						<img src="../assets/icon_close.png" alt="">
					</div>
				</div>
		</div>
	</div>
</template>

<style scoped lang="less" >
.top{
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #419DEA;
	color: #fff;
	.left{
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
		ul{
			display: flex;
			align-items: center;
			margin-top: 0;
			margin-bottom: 0;
			li{
				list-style: none;
				padding:20px 10px;
				&.active{
					background-color: #1977C6;
				}
			}
			
		}
	}
	.right{
		display: flex;
		align-items: center;
		padding: 10px;
		.el-badge__content{
			border: none;
		}
		div{
			margin-left: 40px;
			position: relative;
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
			img{
				width: 18px;
			}
		}
	}
}
</style>
