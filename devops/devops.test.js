const loadContext = require('../src/loadcontext');

it('update_table_schema', async () => {

    const a = await loadContext();

    try {
        await a.db.sync({alter: true});
    } catch (e) {
        console.log(e);
    }
    console.log('done');
}).timeout(3600000);


it('importX3UsersToTwitterUser', async () => {
    try {
        const a = await loadContext();
        const patchX3KolCrawler = a.beans.patchX3KolCrawler;
        await patchX3KolCrawler.importToTwitterUser();
    } catch (e) {
        console.log(e);
    }
    console.log('done');
}).timeout(3600000);

it('startCrawlX3Users', async () => {
    try {
        const a = await loadContext();
        const patchX3KolCrawler = a.beans.patchX3KolCrawler;
        await patchX3KolCrawler.startCrawl();
    } catch (e) {
        console.log(e);
    }
    console.log('done');
}).timeout(3600000);




