// Mostrar página
function showPage(pageId) {
    // Esconder todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostrar a página selecionada
    document.getElementById(pageId).classList.add('active');
}

// Login
function fazerLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    alert(`Bem-vindo ${email}! 🎉`);
    showPage('home');
}

// Registro
function fazerRegistro(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    
    alert(`Conta criada com sucesso, ${nome}! 🎊`);
    showPage('login');
}

// Mostrar a home ao carregar
showPage('home');
