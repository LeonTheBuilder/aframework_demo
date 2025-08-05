class SomeService {
    async someMethod(args) {
    }

    async startWorkerForSomeMethod() {

        // 这将在后台启动一个进程并以 someMethod 为程序入口。
        // 如果 someMethod 是 while true 之类执行的，那么这个进程就不会退出。
        await this.someMethod({});
    }
}

module.exports = SomeService;