const http = new XMLHttpRequest();

const btnMenu = document.querySelector("button#menu-button");

function toggleMenu() {
  const nav = document.querySelector("nav#nav");
  nav.classList.toggle("active");
}

function sendEmail() {
  const nome = document.querySelector('[data-form-input="nome"]').value;
  const companhia = document.querySelector(
    '[data-form-input="companhia"]'
  ).value;
  const email = document.querySelector('[data-form-input="email"]').value;
  const telefone = document.querySelector('[data-form-input="telefone"]').value;
  const mensagem = document.querySelector('[data-form-input="mensagem"]').value;

  const sub = `Suporte | ${nome} - ${companhia}`;
  const body = `
	Nome: ${nome}\n
	Companhia: ${companhia}\n
	Email: ${email}\n
	Telefone: ${telefone}\n
	Mensagem: ${mensagem}\n
	`;

  

  (async () => {
    try{
      const headers = {
        "Content-Type":"application/json"
      }
    
      const init = {
        method: 'POST',
        headers:headers,
        body: JSON.stringify({
          nome:nome,
          email:email,
          companhia:companhia,
          telefone:telefone,
          mensagem:"Sistema Sat Fiscal | "+mensagem
        })
      }
      await fetch("https://www.api.emissorsatfiscal.net.br/send", init)
      alert("Email enviado!")
    } catch(err){
      console.log("erro")
    }
    
  })()
   
}

btnMenu.addEventListener("click", toggleMenu);
