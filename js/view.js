class TaskView {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.pendingTasks = document.getElementById('pendingTasks');
        this.completedTasks = document.getElementById('completedTasks');
    }

    render(tasks) {
        this.pendingTasks.innerHTML = '';
        this.completedTasks.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.description;

            // Checkbox para marcar a tarefa como concluída
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.status === 'completed';
            checkbox.addEventListener('change', () => this.handleCompleteTask(index, checkbox.checked));

            // Botão de remover tarefa
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.addEventListener('click', () => this.handleRemoveTask(index));

            taskItem.prepend(checkbox);
            taskItem.appendChild(removeBtn);

            // Verificação do status das tarefas
            if (task.status === 'pending') {
                this.pendingTasks.appendChild(taskItem);
            } else {
                this.completedTasks.appendChild(taskItem);
            }
        });
    }

    bindAddTask(handler) {
        this.addTaskBtn.addEventListener('click', () => {
            handler(this.taskInput.value);
            this.taskInput.value = '';
        });
    }

    bindCompleteTask(handler) {
        this.handleCompleteTask = handler;
    }

    bindRemoveTask(handler) {
        this.handleRemoveTask = handler;
    }
}
