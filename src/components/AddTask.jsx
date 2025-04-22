import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="container-addTask">
            <Input type ="text" placeholder="Digite o título da tarefa" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <Input type="text" placeholder="Digite a descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)}/>
            <button onClick={() => {
                // verificar se o título e a descrição estão preenchidos
                if (!title.trim() || !description.trim()) {
                    return alert('Preencha o título e descrição da tarefa.');
                }

                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }} className="btnAdd">Adicionar</button>
        </div>
    )
}

export default AddTask;