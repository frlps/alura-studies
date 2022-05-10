import React from "react";

//Neste caso temos o principio da responsabilidade única
//E de não se repetir! Não reescrevemos código, reutilizamos

class Botao extends React.Component{
    render(){
        const color1 = "red";
        const color2 = "blue";
        const backgroundColor = "green";

        const isActive = true;

        // Entre chaves é um objeto
        const styles = {
            backgroundColor: isActive ? "green" : "red"
        }
        return (
            //<button style={{
                //backgroundColor: "blue"
                //backgroundColor: color1
                //backgroundColor
            //}}>
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Botao;