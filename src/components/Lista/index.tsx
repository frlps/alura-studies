import React from "react";

//Function é stateless component???
function Lista(){
    const tarefas = [{
        tarefa:'React',
        tempo: '02:00:00',
        xp: '3000'
    },{
        tarefa: 'Javascript',
        tempo: '01:00:00',
        xp: '2500'
    },{
       tarefa: 'Typescript',
       tempo: '03:00:00',
       xp: '2500'
    }
    ]
    return(
        <aside>
            <h2>Estudos do dia!</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>Tempo: {item.tempo} </span>
                        <span>Pontos: {item.xp}</span>
                    </li>
                    )
                )}
            </ul>
        </aside>
    )
}

export default Lista;