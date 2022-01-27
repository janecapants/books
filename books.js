class Book extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title    = this.getAttribute('title');
        const subtitle = this.getAttribute('subtitle');
        const author   = this.getAttribute('author');
        const publisher = this.getAttribute('publisher');
        const description = this.getAttribute('description');
        this.innerHTML = `
        <div class="card w-50" >
        <div class="row">
          <div class="col-md-12">
            <img src="codee.jpg"  class="card-img" alt="Responsive image">
          </div>
              <h5 class="card-header">${title}</h5>
              <div class="card text-white bg-success mb-3">
                <h5>${subtitle}</h5>
                    <p class="card-text">
                    <table class="table">
                        <tr>
                            <td class=" text-white ">Title:</td>
                            <td>${title}</td>
                        </tr>
                        <tr>
                            <td class=" text-white ">Subtitle:</td>
                            <td>${subtitle}</td>
                        </tr>
                        <tr>
                            <td class=" text-white ">Author:</td>
                            <td>${author}</td>
                        </tr>
                        <tr>
                            <td class=" text-white ">Publisher:</td>
                            <td>${publisher}</td>
                        </tr>
                        <tr>
                            <td class="text-white">Description:</td>
                            <td>${description}</td>
                        </tr>
                    </table>
                    </p>
              </div>
            </div>
        `;  
    }
}


// Define the new element
customElements.define('mit-book', Book);
