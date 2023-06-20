import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO, text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  // console.log(action)
  switch(action.type){
      case ADD_TODO:
        const newToDoObj = {text: action.text, id: Date.now()};
        return [newToDoObj,...state];
      case DELETE_TODO:
        const cleaned = state.filter(toDo => toDo.id !== action.id);
        return cleaned;
      default:
        return state;

  }
};
// state는 mutation하면 안됨
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchDeleteToDo = e =>  {
  // console.log(e.target.parentNode.id);
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id))
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id
    li.innerText = toDo.text;
    li.appendChild(btn)
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos)

const toDos = [];



// store.getCurrent() =




// const createToDo = toDo => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);

  // addToDo(toDo);
  // 위 두개는 같이 디스패치하는 효과가있음
};

form.addEventListener("submit", onSubmit);