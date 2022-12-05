class Doc {
    constructor(name){
        this.name=name;
    }
}

class UI {
    addDocument(doc) {
       const docList = document.getElementById('documents-list');
       const element = document.createElement('div');
       element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Document</strong>: ${doc.name}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
       `;

       docList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteDocument(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Documento eliminado Satisfactoriamente', 'info');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container = document.querySelector('.container');
        const app= document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector(`.alert`).remove();
        },1000)

    }
}


//events DOM

document.getElementById('product-form')
    .addEventListener('submit', function(e) {
        const name = document.getElementById('file').value;

        const doc = new Doc(name);

        const ui = new UI();
        if(name === ''){
            return ui.showMessage('Selecciona un documento', 'danger');
        }
        ui.addDocument(doc);
        ui.resetForm();
        ui.showMessage('Documento Agregado satisfactoriamente', 'success');
        e.preventDefault();

});


document.getElementById('documents-list').addEventListener('click', function(e){
    const ui=new UI();
    ui.deleteDocument(e.target)
});