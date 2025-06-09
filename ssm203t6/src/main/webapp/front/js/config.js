
var projectName = '办公自动化管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '公司公告',
	url: './pages/gongsigonggao/list.html'
}, 

{
	name: '公司新闻',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssm203t6/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"员工","menuJump":"列表","tableName":"yuangong"}],"menu":"员工管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"部门","menuJump":"列表","tableName":"bumen"}],"menu":"部门管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"员工档案","menuJump":"列表","tableName":"yuangongdangan"}],"menu":"员工档案管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"员工考勤","menuJump":"列表","tableName":"yuangongkaoqin"}],"menu":"员工考勤管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"员工请假","menuJump":"列表","tableName":"yuangongqingjia"}],"menu":"员工请假管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"员工销假","menuJump":"列表","tableName":"yuangongxiaojia"}],"menu":"员工销假管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"工作内容","menuJump":"列表","tableName":"gongzuoneirong"}],"menu":"工作内容管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"工作报表","menuJump":"列表","tableName":"gongzuobaobiao"}],"menu":"工作报表管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"公司公告","menuJump":"列表","tableName":"gongsigonggao"}],"menu":"公司公告管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"公司新闻","tableName":"news"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"公司公告列表","menuJump":"列表","tableName":"gongsigonggao"}],"menu":"公司公告模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"员工档案","menuJump":"列表","tableName":"yuangongdangan"}],"menu":"员工档案管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"员工考勤","menuJump":"列表","tableName":"yuangongkaoqin"}],"menu":"员工考勤管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"员工请假","menuJump":"列表","tableName":"yuangongqingjia"}],"menu":"员工请假管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"员工销假","menuJump":"列表","tableName":"yuangongxiaojia"}],"menu":"员工销假管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"公司公告列表","menuJump":"列表","tableName":"gongsigonggao"}],"menu":"公司公告模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"员工","tableName":"yuangong"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"工作内容","menuJump":"列表","tableName":"gongzuoneirong"}],"menu":"工作内容管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"工作报表","menuJump":"列表","tableName":"gongzuobaobiao"}],"menu":"工作报表管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"公司公告列表","menuJump":"列表","tableName":"gongsigonggao"}],"menu":"公司公告模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"部门","tableName":"bumen"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
