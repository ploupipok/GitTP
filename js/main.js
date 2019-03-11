let t1 = new Task('Acheter du pain', new Date(2019, 2, 31));
let taskCompo = new CompoTask({
    element: document.getElementById('task'),
    task: t1
});

taskCompo.render();