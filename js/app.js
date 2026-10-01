const filmes=[];
const app=document.querySelector("#app");
const botoesMenu=document.querySelectorAll("nav button");

function marcarMenuAtivo(rota){
  botoesMenu.forEach(botao=>botao.classList.toggle("ativo",botao.dataset.rota===rota));
}

function irPara(rota){
  marcarMenuAtivo(rota);
  if(rota==="inicio")mostrarInicio();
  if(rota==="cadastro")mostrarCadastro();
  if(rota==="lista")mostrarLista();
  if(rota==="sobre")mostrarSobre();
}

const detalhesFilmes={
"Michael":{ano:"2026",genero:"Biografia",imagem:"https://image.tmdb.org/t/p/w500/zm0KAbOjlt9eR5y7vDiL2dEOwMl.jpg",sinopse:"Cinebiografia sobre a vida e a carreira de Michael Jackson, acompanhando sua trajetória artística e alguns dos momentos que marcaram sua história na música.",elenco:"Jaafar Jackson, Nia Long, Colman Domingo"},
"Homem-Aranha: Sem Volta para Casa":{ano:"2021",genero:"Ação • Aventura",imagem:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",sinopse:"Peter Parker precisa lidar com as consequências de sua identidade revelada enquanto enfrenta novos desafios e vilões de diferentes realidades.",elenco:"Tom Holland, Zendaya, Benedict Cumberbatch"},
"Vingadores: Ultimato":{ano:"2019",genero:"Ação • Aventura",imagem:"https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",sinopse:"Os heróis mais poderosos da Terra enfrentam uma ameaça que coloca em risco o destino do universo.",elenco:"Robert Downey Jr., Chris Evans, Chris Hemsworth"},
"The Flash":{ano:"2023",genero:"Ação • Ficção",imagem:"https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",sinopse:"Barry Allen usa seus poderes para voltar no tempo, mas sua tentativa de alterar o passado provoca consequências inesperadas.",elenco:"Ezra Miller, Michael Keaton, Sasha Calle"},
"The Batman":{ano:"2022",genero:"Ação • Crime",imagem:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",sinopse:"Batman investiga uma série de crimes em Gotham e encontra pistas que revelam uma conspiração envolvendo figuras importantes da cidade.",elenco:"Robert Pattinson, Zoë Kravitz, Paul Dano"},
"Titanic":{ano:"1997",genero:"Romance • Drama",imagem:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",sinopse:"Durante a viagem inaugural do Titanic, Jack e Rose se conhecem e vivem uma história de amor em meio à tragédia do navio.",elenco:"Leonardo DiCaprio, Kate Winslet, Billy Zane"},
"Invocação do Mal":{ano:"2013",genero:"Terror",imagem:"https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",sinopse:"Investigadores paranormais ajudam uma família que relata acontecimentos assustadores em sua nova casa.",elenco:"Vera Farmiga, Patrick Wilson, Lili Taylor"},
"Oppenheimer":{ano:"2023",genero:"Drama • História",imagem:"https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",sinopse:"A trajetória do físico J. Robert Oppenheimer e o desenvolvimento do projeto que levou à criação da primeira bomba atômica.",elenco:"Cillian Murphy, Emily Blunt, Robert Downey Jr."},
"Michael Jackson This Is It":{ano:"2009",genero:"Documentário • Música",imagem:"https://image.tmdb.org/t/p/w500/8GvQzHFSqr9KhyVxLEpB5dXPOWG.jpg",sinopse:"Documentário que reúne ensaios e bastidores da preparação de Michael Jackson para os shows This Is It.",elenco:"Michael Jackson, Kenny Ortega, músicos e dançarinos da produção"},
"A Paixão de Cristo":{ano:"2004",genero:"Drama",imagem:"https://image.tmdb.org/t/p/w500/v9f9MMrq2nGQrN7cHnQRmEq9lSE.jpg",sinopse:"Drama que retrata os acontecimentos que antecedem e acompanham a crucificação de Jesus Cristo.",elenco:"Jim Caviezel, Maia Morgenstern, Monica Bellucci"}
};

function mostrarDetalhes(titulo){
  const f=detalhesFilmes[titulo];
  if(!f)return;
  const detalhe=document.createElement("div");
  detalhe.className="detalhe";
  detalhe.innerHTML=`<div class="detalhe-caixa"><div class="detalhe-topo" style="background-image:url('${f.imagem}')"><button class="fechar" aria-label="Fechar">×</button><button class="play" id="playFilme" aria-label="Reproduzir">▶</button></div><div class="detalhe-info"><h1>${titulo}</h1><div class="meta">${f.ano} • ${f.genero}</div><h3>Sinopse</h3><p class="sinopse">${f.sinopse}</p><h3>Elenco</h3><p class="elenco">${f.elenco}</p><div class="aviso-play" id="avisoPlay">▶ Modo de demonstração: o botão de play está aqui para simular a experiência de um streaming. O projeto não contém os filmes completos.</div></div></div>`;
  document.body.appendChild(detalhe);
  detalhe.querySelector(".fechar").onclick=()=>detalhe.remove();
  detalhe.addEventListener("click",e=>{if(e.target===detalhe)detalhe.remove()});
  detalhe.querySelector("#playFilme").onclick=()=>{detalhe.querySelector("#avisoPlay").style.display="block"};
}

function mostrarInicio(){
  app.innerHTML=`
<section class="banner">
<div class="banner-conteudo">
<h1>O Batman</h1>
<p>Bem-vindo ao CineFlix. Encontre seus filmes favoritos em um só lugar.</p>
<div class="acoes">
<button class="botao vermelho" id="btnCadastrar">+ Cadastrar filme</button>
<button class="botao" id="btnVerFilmes">Ver meus filmes</button>
</div>
</div>
</section>
<h2>🔥 Em destaque</h2>
<div class="filmes">
<div class="card" data-filme="Michael"><img class="poster" src="https://image.tmdb.org/t/p/w500/zm0KAbOjlt9eR5y7vDiL2dEOwMl.jpg" alt="Michael"><div class="card-conteudo"><h3>Michael</h3><p>Biografia • 2026</p></div></div>
<div class="card" data-filme="Homem-Aranha: Sem Volta para Casa"><img class="poster" src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="Homem-Aranha"><div class="card-conteudo"><h3>Homem-Aranha: Sem Volta para Casa</h3><p>Ação • 2021</p></div></div>
<div class="card" data-filme="Vingadores: Ultimato"><img class="poster" src="https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" alt="Vingadores"><div class="card-conteudo"><h3>Vingadores: Ultimato</h3><p>Ação • 2019</p></div></div>
<div class="card" data-filme="The Flash"><img class="poster" src="https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg" alt="The Flash"><div class="card-conteudo"><h3>The Flash</h3><p>Ação • 2023</p></div></div>
<div class="card" data-filme="The Batman"><img class="poster" src="https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" alt="The Batman"><div class="card-conteudo"><h3>The Batman</h3><p>Ação • 2022</p></div></div>
<div class="card" data-filme="Titanic"><img class="poster" src="https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" alt="Titanic"><div class="card-conteudo"><h3>Titanic</h3><p>Romance • 1997</p></div></div>
<div class="card" data-filme="Invocação do Mal"><img class="poster" src="https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg" alt="Invocação do Mal"><div class="card-conteudo"><h3>Invocação do Mal</h3><p>Terror • 2013</p></div></div>
<div class="card" data-filme="Oppenheimer"><img class="poster" src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="Oppenheimer"><div class="card-conteudo"><h3>Oppenheimer</h3><p>Drama • 2023</p></div></div>
<div class="card" data-filme="Michael Jackson This Is It"><img class="poster" src="https://image.tmdb.org/t/p/w500/8GvQzHFSqr9KhyVxLEpB5dXPOWG.jpg" alt="Michael Jackson This Is It"><div class="card-conteudo"><h3>Michael Jackson: This Is It</h3><p>Documentário • 2009</p></div></div>
<div class="card" data-filme="A Paixão de Cristo"><img class="poster" src="https://image.tmdb.org/t/p/w500/v9f9MMrq2nGQrN7cHnQRmEq9lSE.jpg" alt="A Paixão de Cristo"><div class="card-conteudo"><h3>A Paixão de Cristo</h3><p>Drama • 2004</p></div></div>
</div>
<div class="contador">Filmes cadastrados: <strong>${filmes.length}</strong></div>`;
  document.querySelector("#btnCadastrar").addEventListener("click",()=>irPara("cadastro"));
  document.querySelector("#btnVerFilmes").addEventListener("click",()=>irPara("lista"));
  document.querySelectorAll(".card[data-filme]").forEach(card=>card.addEventListener("click",()=>mostrarDetalhes(card.dataset.filme)));
}

function mostrarCadastro(){
  app.innerHTML=`
<h1>Cadastrar Filme 🎬</h1><p>Adicione um novo filme à sua coleção.</p>
<form id="formFilme">
<div class="campo"><label for="titulo">Título</label><input id="titulo" type="text" placeholder="Ex: Homem-Aranha" required></div>
<div class="campo"><label for="genero">Gênero</label><input id="genero" type="text" placeholder="Ex: Ação" required></div>
<div class="campo"><label for="ano">Ano</label><input id="ano" type="number" placeholder="Ex: 2026" required></div>
<button class="botao vermelho" type="submit">Cadastrar filme</button><div id="mensagem"></div>
</form>`;
  document.querySelector("#formFilme").addEventListener("submit",function(evento){
    evento.preventDefault();
    filmes.push({titulo:document.querySelector("#titulo").value.trim(),genero:document.querySelector("#genero").value.trim(),ano:document.querySelector("#ano").value.trim()});
    document.querySelector("#mensagem").innerHTML='<div class="mensagem">Filme cadastrado com sucesso! 🎬</div>';
    evento.target.reset();
  });
}

function mostrarLista(){
  app.innerHTML='<h1>Meus Filmes 🍿</h1><p>Filmes cadastrados nesta sessão.</p><div id="conteudoLista"></div>';
  renderizarTabela();
}

function renderizarTabela(){
  const conteudo=document.querySelector("#conteudoLista");
  if(filmes.length===0){conteudo.innerHTML='<div class="vazio">Nenhum filme cadastrado ainda.<br><br>Vá em <strong>Cadastrar</strong> para adicionar um filme.</div>';return;}
  let linhas="";
  filmes.forEach((filme,indice)=>linhas+=`<tr><td>${filme.titulo}</td><td>${filme.genero}</td><td>${filme.ano}</td><td><button class="excluir" data-indice="${indice}">Excluir</button></td></tr>`);
  conteudo.innerHTML=`<div class="tabela-container"><table><thead><tr><th>Título</th><th>Gênero</th><th>Ano</th><th>Ação</th></tr></thead><tbody>${linhas}</tbody></table></div>`;
  document.querySelectorAll(".excluir").forEach(botao=>botao.addEventListener("click",function(){filmes.splice(Number(this.dataset.indice),1);renderizarTabela();}));
}

function mostrarSobre(){
  app.innerHTML='<h1>Sobre o CineFlix 🎬</h1><p>O CineFlix é uma SPA simples desenvolvida com HTML, CSS e JavaScript.</p><p>O projeto permite cadastrar, visualizar e excluir filmes.</p><p>A navegação acontece sem recarregar a página.</p>';
}

botoesMenu.forEach(botao=>botao.addEventListener("click",()=>irPara(botao.dataset.rota)));
mostrarInicio();
