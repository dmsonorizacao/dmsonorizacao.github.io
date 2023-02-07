function enviarEmail() {
    const nome = el("#name").value;
    const email = el("#email").value;
    const assunto = el("#subject").value;
    const mensagem = el("#message").value;

    
}

function clear() {
    
}

function el(selector) {
    return document.querySelector(selector);
}

function els(selector) {
    return document.querySelectorAll(selector);
}