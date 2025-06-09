import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import yuangong from '@/views/modules/yuangong/list'
    import yuangongqingjia from '@/views/modules/yuangongqingjia/list'
    import gongzuobaobiao from '@/views/modules/gongzuobaobiao/list'
    import yuangongxiaojia from '@/views/modules/yuangongxiaojia/list'
    import gongzuoneirong from '@/views/modules/gongzuoneirong/list'
    import bumen from '@/views/modules/bumen/list'
    import yuangongdangan from '@/views/modules/yuangongdangan/list'
    import config from '@/views/modules/config/list'
    import gongsigonggao from '@/views/modules/gongsigonggao/list'
    import yuangongkaoqin from '@/views/modules/yuangongkaoqin/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公司新闻',
        component: news
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/yuangongqingjia',
        name: '员工请假',
        component: yuangongqingjia
      }
      ,{
	path: '/gongzuobaobiao',
        name: '工作报表',
        component: gongzuobaobiao
      }
      ,{
	path: '/yuangongxiaojia',
        name: '员工销假',
        component: yuangongxiaojia
      }
      ,{
	path: '/gongzuoneirong',
        name: '工作内容',
        component: gongzuoneirong
      }
      ,{
	path: '/bumen',
        name: '部门',
        component: bumen
      }
      ,{
	path: '/yuangongdangan',
        name: '员工档案',
        component: yuangongdangan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/gongsigonggao',
        name: '公司公告',
        component: gongsigonggao
      }
      ,{
	path: '/yuangongkaoqin',
        name: '员工考勤',
        component: yuangongkaoqin
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
