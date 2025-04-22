import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    return <div className="container">

        <div className="g-container">
          <div className="h-container">
            <button onClick={() => navigate(-1)}>
                <ChevronLeftIcon />
            </button>
            <Title>Detalhes da Tarefa</Title>
          </div>
          <div className="container-task">
                <h2 className="title" style={{color: 'white', fontSize: 24}}>{title}</h2>
                <p style={{color: 'white', textAlign: 'center'}}>{description}</p>
          </div>
        </div>
    </div>
}

export default TaskPage;