class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        this.tasks.push({ description, status: 'pending' });
    }

    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].status = 'completed';
        }
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return this.tasks;
    }
}

