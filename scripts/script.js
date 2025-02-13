// Conteúdo do currículo em diferentes idiomas
const curriculo = {
    pt: {
        titulo: "Currículo",
        conteudo: `
            <h2>Arthur P. Nunes</h2>
            <p>Desenvolvedor Full Stack</p>
            <p>Experiência em JavaScript, Python, React e Node.js.</p>
            <p>Formação: Ciência da Computação - Universidade XYZ.</p>
        `
    },
    en: {
        titulo: "Resume",
        conteudo: `
            <h2>Arthur P. Nunes</h2>
            <p>Full Stack Developer</p>
            <p>Experience with JavaScript, Python, React, and Node.js.</p>
            <p>Education: Computer Science - XYZ University.</p>
        `
    },
    es: {
        titulo: "Currículum",
        conteudo: `
            <h2>Arthur P. Nunes</h2>
            <p>Desarrollador Full Stack</p>
            <p>Experiencia con JavaScript, Python, React y Node.js.</p>
            <p>Educación: Ciencias de la Computación - Universidad XYZ.</p>
        `
    }
};

// Função para carregar o currículo no idioma selecionado
function carregarCurriculo(idioma) {
    localStorage.setItem('idioma', idioma); // Salva o idioma escolhido
    window.location.href = 'curriculo.html'; // Redireciona para a página do currículo
}

// Função para carregar o conteúdo do currículo na página
function carregarConteudo() {
    const idioma = localStorage.getItem('idioma') || 'pt'; // Pega o idioma salvo
    const { titulo, conteudo } = curriculo[idioma];
    document.getElementById('titulo').textContent = titulo;
    document.getElementById('conteudo').innerHTML = conteudo;
}

// Função para voltar à página de seleção de idioma
function voltar() {
    window.location.href = 'index.html';
}

// Carrega o conteúdo ao abrir a página do currículo
if (window.location.pathname.includes('curriculo.html')) {
    carregarConteudo();
}