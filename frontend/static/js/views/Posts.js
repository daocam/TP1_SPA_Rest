import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml()
    {
        async function getData(url) 
        {
            const response = await fetch(url);
            return response.json();
        }

        const data = await getData('/static/data/tweet.json');

        let listPosts = `<div class="container">`;

        for (let i in data.statuses) {
            listPosts += `
                <a href="/post-view/${data.statuses[i]['id']}" class="card text-bg-light mb-3" data-link>
                    <h5 class="card-header">Tweet #${i}</h5>
                    <div class="card-body">
                        <p class="card-text">${data.statuses[i]["text"]}</p>
                    </div>
                </a>
            `;    
        }

        listPosts += `</div>`;
        
        return `
            <h1>Liste des tweets les plus récent</h1>
        ` + listPosts;
    }
    
}