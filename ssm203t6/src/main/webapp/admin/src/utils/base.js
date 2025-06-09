const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm203t6/",
            name: "ssm203t6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm203t6/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "办公自动化管理系统"
        } 
    }
}
export default base
