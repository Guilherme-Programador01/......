import './index.scss';
import { useState } from 'react';

export default function Rob() {
    const [descricao1, setDescricao1] = useState("GUILHERME");
    const [descricao2, setDescricao2] = useState("?");

    const [texto1, setTexto1] = useState("");
    const [texto2, setTexto2] = useState("");

    const [TrocarCor, setTrocarCor] = useState("");

    const [sim, setsim] = useState("não");

    const [num1, setnum1] = useState("");
    const [num2, setnum2] = useState("");
    const [resultadoSoma, setResultadoSoma] = useState("");

    const [num4, setnum4] = useState("");
    const [num5, setnum5] = useState("");
    const [resultadoMultiplicacao, setResultadoMultiplicacao] = useState("");

    const [num6, setnum6] = useState("");
    const [num7, setnum7] = useState("");
    const [resultadoSubtracao, setResultadoSubtracao] = useState("");

    const [num8, setnum8] = useState("");
    const [num9, setnum9] = useState("");
    const [resultadoDivisao, setResultadoDivisao] = useState("");

    function Mudar() {
        setDescricao1(texto1);
    }

    function Troca() {
        setDescricao2(texto2);
    }

    function mudarCor(e) {
        setTrocarCor(e.target.value);
    }

    function SimouNão(e) {
        setsim(e.target.checked);
    }

    function somar() {
        let soma = Number(num1) + Number(num2)
        setResultadoSoma(soma)
    }
    function multiplicacao() {
        let multi = Number(num4) * Number(num5)
        setResultadoMultiplicacao(multi)
    }
    function subtracao() {
        let resultado = Number(num6) - Number(num7);
        setResultadoSubtracao(resultado);
    }
    function divisao() {
        let resultado = Number(num8) / Number(num9);
        setResultadoDivisao(resultado);
    }
    return (
        <div style={{ background: `linear-gradient(to right, ${TrocarCor}, white)` }}>


            <section>
                <h1>{descricao1}</h1>

                <input type="text" value={texto1} onChange={(e) => setTexto1(e.target.value)} />

                <button onClick={Mudar}> Clicar </button>
            </section>


            <section>
                <h1>{descricao2}</h1>

                <input type="text" value={texto2} onChange={(e) => setTexto2(e.target.value)}
                />

                <button onClick={Troca}> Clicar</button>
            </section>


            <section>
                <h1>
                    A cor desejada é: {TrocarCor}
                </h1>

                <input
                    type="color" value={TrocarCor} onChange={mudarCor}
                />
            </section>

            <section>
                <h1> Você gosta do Robão? {sim}</h1>

                <input type="checkbox" onChange={e => setsim(e.target.checked ? "sim" : "nao")} />

            </section>



            <section className="calculadora-soma">

                <h2>Calculadora de Soma</h2>

                <div className="input">

                    <input
                        type="text"
                        value={num1}
                        onChange={(e) => setnum1(e.target.value)}
                    />

                    <div>+</div>

                    <input
                        type="text"
                        value={num2}
                        onChange={(e) => setnum2(e.target.value)}
                    />

                    <div>=</div>

                    <div>{resultadoSoma}</div>

                    <button onClick={somar}>
                        Somar
                    </button>

                </div>

            </section>

            <section className="calculadora-multiplicacao">

                <h2>Calculadora de Multiplicação</h2>

                <div className="input">

                    <input
                        type="text"
                        value={num4}
                        onChange={(e) => setnum4(e.target.value)}
                    />

                    <div>×</div>
                    <input
                        type="text"
                        value={num5}
                        onChange={(e) => setnum5(e.target.value)}
                    />

                    <div>=</div>

                    <div>{resultadoMultiplicacao}</div>

                    <button onClick={multiplicacao}>
                        Multiplicar
                    </button>

                </div>

            </section>
        <section className="calculadora-subtracao">

                <h2>Calculadora de Subtração</h2>

                <div className="input">

                    <input
                        type="text"
                        value={num6}
                        onChange={(e) => setnum6(e.target.value)}
                    />

                    <div>-</div>

                    <input
                        type="text"
                        value={num7}
                        onChange={(e) => setnum7(e.target.value)}
                    />

                    <div>=</div>

                    <div>{resultadoSubtracao}</div>

                    <button onClick={subtracao}>
                        Subtrair
                    </button>

                </div>

            </section>

        <section className="calculadora-divisao">

                <h2>Calculadora de Divisão</h2>

                <div className="input">

                    <input
                        type="text"
                        value={num8}
                        onChange={(e) => setnum8(e.target.value)}
                    />

                    <div>/</div>

                    <input
                        type="text"
                        value={num9}
                        onChange={(e) => setnum9(e.target.value)}
                    />

                    <div>=</div>

                    <div>{resultadoDivisao}</div>

                    <button onClick={divisao}>
                        dividir
                    </button>

                </div>

            </section>
        </div>
    );
}