class Github {
    constructor(){
        this.cliend_id = 'd22bf8b15b495127e459';
        this.client_secret = '24bb36fcbefd6d248be64e4ff01e608ffcde6814';
    }

    async getUser (user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliend_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}