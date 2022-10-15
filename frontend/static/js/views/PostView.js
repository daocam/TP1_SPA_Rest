import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("PostView");
    }

    async getHtml() {
        const nu = Number(this.params.id);

        async function getData(url) {

            const response = await fetch(url);
            return response.json();
        }

        const data = await getData('/static/data/tweet.json');

        const article = data.statuses.find(item => item.id === nu);

        return `

            <h1>Tweet</h1>

            <div class="card text-bg-light mb-3" style="max-width: 18rem;">
                <div class="card-body">
                    <span class="card-title">Create at:</span> <p class="card-text">${article.created_at}</p>
                    <span class="card-title">Text:</span> <p class="card-text">${article.text}</p>
                    <span class="card-title">Id:</span> <p class="card-text">${article.id_str}</p>
                </div>
            </div>         
        `;
    }
}