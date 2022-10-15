import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <!-- Header-->
            <header class="bg-primary mt-5 py-5 text-white">
                <div class="container px-4 text-center">
                    <h1 class="fw-bolder">Welcome to Twitter API REST</h1>
                    <p class="lead">Work with API REST</p>
                    <a class="btn btn-lg btn-light" href="/posts" data-link>Start</a>
                </div>
            </header>
        `;
    }
}
