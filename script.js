{

    const tasks = []

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
    <li class="list__items">
    <button class="list__button--done js-done">${task.done ? "✓" : ""}</button>
    <span class="${task.done ? "list__text--done" : ""}"> ${task.content} </span>
    <button class="list__button--remove js-remove">🗑</button>
    </li>
    `;
        }
        document.querySelector(".js-task").innerHTML = htmlString;

    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

const onForSubmit =  (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
   
    if(newTaskContent === "") {
        return;
    }

    addNewTask(newTaskContent);
}

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onForSubmit);
    };

    init();
}

