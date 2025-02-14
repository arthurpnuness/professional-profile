// Conteúdo do currículo em diferentes idiomas
const index = {
    pt: {
        titulo: "Currículo",
        conteudo: `
            
        `
    },
    en: {
        titulo: "Resume",
        conteudo: `
            <h1>Arthur P. Nunes</h1>
            <span>Colonel Aparicio Borges Street, 976</span>
            <p>
            &emsp;I'm Arthur, a developer passionate about technology and
            music. I've been in contact with programming since I was a teenager,
            surfing the web and trying to understand a little bit of how everything is done.
            </p>
            <p>Life ended up taking me down other paths, where I ended up
            serving the F.A.B, I started a technical course in Nursing, and soon after I tried to pursue a career in social media...</p>
            <p> In 2022, I decided it was time to change and start doing what I was really interested in. So, I started a Full-Stack Web Developer course at Growdev, where I am learning and updating my knowledge for the future of the web. </p>
            <h4><i>Find me on social media:</i></h4> `
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

function carregarCurriculo(idioma) {
    localStorage.setItem('idioma', idioma); // Salva o idioma escolhido
    window.location.href = 'sobremim'; // Redireciona para a página do currículo
}

// Carrega o conteúdo ao abrir a página do currículo
if (window.location.pathname.includes('curriculo.html')) {
    carregarConteudo();
}