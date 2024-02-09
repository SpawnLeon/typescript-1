const run = async () => {
    const USER_URL = 'https://dummyjson.com/use111rs';
    try {
        const usersRes = await fetch(USER_URL);
        if (usersRes.status !== 200) {
            throw new Error(usersRes.statusText);
        }
        const users = await usersRes.json();
        console.log(users);
    }
    catch (e) {
        console.log(e);
    }
};
run().then();
export {};
