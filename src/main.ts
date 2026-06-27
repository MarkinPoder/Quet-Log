import type { Quest } from './types.ts'

const quests: Quest [] = [
    { id: 1, title: "Terminar a lição de matematica", difficulty: "média", completed: false },
    { id: 2, title: "Arrumar o quarto", difficulty: "fácil", completed: true },
    { id: 3, title: "Aprender Git", difficulty: "difícil", completed: false },
];

function gerarLista(list: Quest[]) {
    const ul = document.getElementById('quest-list');

    list.forEach((quest) => {
        const li = document.createElement('li');
        li.className = 'bg-slate-800 p-4 rounded-lg flex justify-between'
        
        li.innerHTML = `
            <span> ${quest.title} </span>
            <span> ${quest.difficulty} </span>
            <span> ${quest.completed} </span>
        `
        ul.appendChild(li); 
    })
}

gerarLista(quests);