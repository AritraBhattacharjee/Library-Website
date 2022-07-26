
// use class and object concept to do the project
console.log("Hello");
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display
{
    add(book)
    {
            let tablebody = document.getElementById('tableBody')
            let template = `
                            <tr>
                                <td>${book.name}</td>
                                <td>${book.author}</td>
                                <td>${book.type}</td>
                             </tr>
            `;
            tablebody.innerHTML += template;
        
        }
        clear(){
            let libraryform = document.getElementById('libraryform');
            libraryform.reset()
        }
        
        validate(book){
            if(book.name.length<2 || book.author.length<2)
            {
                return false;
            }
            else{
                return true;
            }
        }
        
        show(msg)
        {
            let message = document.getElementById('msg')
        
            if(msg == "danger") 
            {
                let temp = `
                <div class="alert alert-${msg} alert-dismissible fade show" role="alert">
                    <strong>Alert!! </strong> Enter valid Book name and Author name
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                `
                message.innerHTML = temp
            }
            else if(msg == "success")
            {
                let temp = `
                    <div class="alert alert-${msg} alert-dismissible fade show" role="alert">
                        <strong>Success !! </strong> You have entered the book successsfully
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `
                message.innerHTML = temp
        
            }
            setTimeout(function(){
                message.innerHTML = ' '
            },4000)
    }
}
// add submit event listener to libraryform
let addbtn = document.getElementById('libraryform');
// let addbtn = document.getElementById('addbook');
addbtn.addEventListener('submit',libraryformsubmit);

function libraryformsubmit(e)
{
    console.log("You have submitted the form"); 
    let name =  document.getElementById('bookname').value;
    let author =  document.getElementById('author').value;
    let type ;
    let Fiction = document.getElementById('Fiction')
    let NonFiction = document.getElementById('Programming')
    let Programming = document.getElementById('Non_Fiction')
    if (Fiction.checked)
    {
        type = Fiction.value
    }
    else if (NonFiction.checked)
    {
        type = NonFiction.value
    }
    else if (Programming.checked)
    {
        type = Programming.value
    }

    let book = new Book(name,author,type)
    console.log(book)

    let display = new Display();
    if(display.validate(book))
    {
        display.add(book);
        display.clear(); 
        // show success message
        display.show('success');
    }
    else
    {
        //show error message
        display.show("danger")
    }
    e.preventDefault();
   
}

