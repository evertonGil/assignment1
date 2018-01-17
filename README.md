# assignment1

Na nossa logica ordena a lista de alunos por vertical e sorteia o primeiro da lista para o grupo 1, depois pro grupo 2, depois pro grupo 3 e depois pro grupo  4 grupo.
A cada sessão desse sorteio, sorteamos 4 alunos, e dai sucessivamente até acabar.

Verticais: "frontEnd", "backEnd", "mobile", "infra".
Nós agrupamos as colunas de skill em verticais e tambem criamos multiplicadores para que seja possivel atribuir valores diferentes para cada skill.

As verticais são ajustáveis no código javascript através de objetos javascript:

var frontEnd = {
        html: 1,
        css: 1,
        ...
}

var backEnd = {
        php: 1,	
        ruby: 1,	
        ...
}

var mobile = {
        android: 1,
        ionic: 1,
        ...
}

var infra = {
        servidores_linux: 1,
        servidores_windows: 1,
       ...
} 

e um array chamado verticais.

var verticais = ["frontEnd", "backEnd", "mobile", "infra"];
