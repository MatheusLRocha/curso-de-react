import { CheckIcon, ChevronRightIcon, Trash2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul>
            {tasks.map(task => 
                <li key={task.id}>
                    <button onClick={() => onTaskClick(task.id)} className={`tarefa ${task.isCompleted && 'lined'}`}>
                        {task.isCompleted && <CheckIcon />}
                        {task.title}
                    </button>
                    <button onClick={() => onSeeDetailsClick(task)} className="icon">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteTaskClick(task.id)} className="icon">
                        <Trash2Icon />
                    </button>
                </li>
            )}
        </ul>
    )
}

export default Tasks;