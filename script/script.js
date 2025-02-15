
document.addEventListener('DOMContentLoaded', function() {
    // Obter o idioma preferido do navegador
    var userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split('-')[0]; // Obter a parte principal do código de idioma

    // Definir os idiomas suportados e seus diretórios correspondentes
    var supportedLangs = {
        'es': 'sobremim/espanhol/',
        'en': 'sobremim/ingles/',
        'pt': 'sobremim/portugues/'
    };

    // Verificar se o idioma do usuário é suportado
    if (supportedLangs[userLang]) {
        // Redirecionar para o diretório correspondente
        window.location.href = supportedLangs[userLang] + './menu.html';
    } else {
        // Se o idioma não for suportado, redirecionar para o padrão (por exemplo, português)
        window.location.href = 'sobremim/portugues/index.html';
    }
});
