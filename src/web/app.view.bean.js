class UserViewController {
    index = async (ctx) => {
        await ctx.render('index');
    };
    mappings = [
        ['', 'GET', this.index],
        ['/', 'GET', this.index],
        ['/some', 'GET', async (ctx) => {
            await ctx.render('some');
        }],
        ['/login', 'GET', async (ctx) => {
            await ctx.render('login');
        }],
    ];
}

module.exports = UserViewController;
