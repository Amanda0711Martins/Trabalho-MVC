class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask.bind(this));
        this.view.bindCompleteTask(this.handleCompleteTask.bind(this));
        this.view.bindRemoveTask(this.handleRemoveTask.bind(this));

        this.view.render(this.model.getTasks());
    }

    handleAddTask(description) {
        if (description) {
            this.model.addTask(description);
            this.view.render(this.model.getTasks());
        }
    }

    handleCompleteTask(index) {
        this.model.completeTask(index);
        this.view.render(this.model.getTasks());
    }

    handleRemoveTask(index) {
        this.model.removeTask(index);
        this.view.render(this.model.getTasks());
    }
}

