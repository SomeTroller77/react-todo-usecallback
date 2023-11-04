export default function Todos({todos, addTodos}){
    return(
            <div>
                <span for="textbox-bx">Enter your todo</span>
                <br></br>
                <input type="textbox" id="textbox-bx" />
                <button type="button" onClick={() => addTodos(document.getElementById("textbox-bx").value)}>submit</button>
                <ul>
                    {todos.map((todo)=>{ 
                        return <li>{todo}</li>})}
                </ul>
            </div>
        )   
}