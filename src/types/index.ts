/*
definicoes de tipos e interface typescrtipt
centralizando todas as tipagens
*/

//interface principal da tarefa
export interface Task{
    id: number;
    title: string;
    description: string;
    completed:boolean; //verdadeiro ou falso
    createdAt?: string; 
    updatedAt?: string;
}

//dados de formulario de criacao de tarefas
export interface TaskFormData{
    title: string;
    description: string;
}

//Props do componente de formulario
export interface TaskFormProps{
    form: TaskFormData;
    onSubmit: () => void | Promise<void>;
    onChange: (field: string, value: string) => void;
    submitting?: boolean;
    editingTaskId?: number | void;
    onCancelEdit?: () => void;
}

//Props de componente da lista de tarefas
export interface TaskListProps{
    tasks: Task[];
    loading: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}


export interface ListHeaderProps{
    tasksCount: number;
    completedCount: number;
}

export interface ListEmptyProps{
    title?: string;
    description?: string;
}

export interface ErrorMessageProps{
    error: string;
}

export interface UseTaskReturn{
    tasks: Task[];
    loading: boolean;
    error: string | null;
    submitting: boolean;
    createTask: (taskData: TaskFormData) => Promise<boolean>;
    updateTask: (id: number) => Promise<void>;
    toggleTask: (id: number) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
    fetchTasks: () => Promise<void>;
}

export interface Messages{
    LOADING: string;
    EMPTY_TITLE: string;
    EMPTY_DESCRIPTION: string;
    ERROR_LOAD: string;
    ERROR_CREATE: string;
    ERROR_UPDATE: string;
    ERROR_DELETE: string;
    ERROR_EMPTY_TITLE: string;
    ERROR_CONNECTION: string;
}