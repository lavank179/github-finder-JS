class Github {
    constructor(){
        this.cliend_id = 'd22bf8b15b495127e459';
        this.client_secret = '24bb36fcbefd6d248be64e4ff01e608ffcde6814';
        this.repos_count = 20;
        this.repos_sort = 'created: asc';
    }

    async getUser (user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliend_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.cliend_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}