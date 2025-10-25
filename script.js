function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
    }

    //*scroll leve*/
    function scrollActive(sectionId){
    const section = document.getElementById(sectionId);

    if(!section) return;

    const headerHeight = 70;
    const sectionPosition = section.offsetTop - headerHeight;
    window.scrollTo({top: sectionPosition, behavior: 'smooth'});

    const menu = document.getElementById('navMenu');
    menu.classList.remove('active');
    }

    /*cadastro*/

    function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('amigooForm');

    const formData = {
        nome:form.nome.value,
        email:form.email.value,
        telefone:form.telefone.value,
        idade:form.idade.value,
        disponibilidade:form.disponibilidade.value,
        areainteresse: form.areainteresse.value,
        experiencia:form.experiencia.value,
        motivacao:form.motivacao.value,
        dataCadastro: new Date().toLocaleDateString() 
    }

    let amigao = JSON.parse(localStorage.getItem('amigooForm')) || [];
    amigao.push(formData);
    localStorage.setItem('amigooForm', JSON.stringify(amigao));

    const sucessMessage = document.getElementById('successMessage');
    sucessMessage.classList.add('show');
    sucessMessage.scrollIntoView({behavior: 'smooth', block: 'center'});

    setTimeout(() => form.reset(), 2000);
    setTimeout(() => sucessMessage.classList.remove('show'), 3000);

    exibirAmigao();
}

function exibirAmigao() {

    const voluntarios = JSON.parse(localStorage.getItem('amigooForm')) || [];
    const tabelaContainer = document.getElementById('tabelaamigooForm');   

    if(!tabelaContainer) return
    if(voluntarios.length === 0){
        tabelaContainer.innerHTML = '<p>Nenhum Amigo cadastrado.</p>';
    }
}