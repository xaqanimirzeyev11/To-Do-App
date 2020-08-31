const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li'); 

let listLenght = list.lenght;

const generateTempalate = (todo) => {
  
  const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="far fa-trash-alt delete"></i>
                </li>`
  todoList.innerHTML += html;
};

function addTodos(e) {
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTempalate(todo);
    submitForm.reset();
  }
  saveTodoList(todo);
}


submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);

function deleteTodos(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
  // saveTodoList();
}


todoList.addEventListener('click', deleteTodos);
var str=localStorage.getItem("todoList");
var todoArray=JSON.parse(str);
  if(!todoArray){
    todoArray=[];
  }

// -------localStorage
function saveTodoList(todo){
  todoArray.push(todo);
  var str=JSON.stringify(todoArray);
  localStorage.setItem("todoList", str);
}

function getTodoList(){
  var str=localStorage.getItem("todoList");
  var todoList=JSON.parse(str);
  if(!todoList){
    todoList=[];
  }
  todoList.forEach(todo => {
    generateTempalate(todo);
  });
}
getTodoList();

































//_________________________________________________ localStorage


  // fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-27&sortBy=publishedAt&apiKey=74c3bda5e80940128f54741ba6816686')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  //   document.getElementById("news").innerHTML += "Salam"
  // });





/* <div class="card bg-dark text-white">
                        <img src="./photo/1.jpg" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <p><button type="button" class="close" > &times; REDME</button></p>
                            <h5 class="card-title">VICTORIOUS SPILT BACK TOP</h5>
                            <p class="card-text">QUANTITY: 1</p>
                            <p class="card-text">SIZE: S</p>
                            <p class="card-text">USD $70.00</p>
                        </div>
                    </div>
     */