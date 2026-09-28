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
"Michael":{ano:"2025",genero:"Biografia",imagem:"https://image.tmdb.org/t/p/w500/zm0KAbOjlt9eR5y7vDiL2dEOwMl.jpg",sinopse:"Cinebiografia sobre a vida e a carreira de Michael Jackson, acompanhando sua trajetória artística e alguns dos momentos que marcaram sua história na música.",elenco:"Jaafar Jackson, Nia Long, Colman Domingo"},
"Homem-Aranha: Sem Volta para Casa":{ano:"2021",genero:"Ação • Aventura",imagem:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",sinopse:"Peter Parker precisa lidar com as consequências de sua identidade revelada enquanto enfrenta novos desafios e vilões de diferentes realidades.",elenco:"Tom Holland, Zendaya, Benedict Cumberbatch"},
"Vingadores: Ultimato":{ano:"2019",genero:"Ação • Aventura",imagem:"https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",sinopse:"Os heróis mais poderosos da Terra enfrentam uma ameaça que coloca em risco o destino do universo.",elenco:"Robert Downey Jr., Chris Evans, Chris Hemsworth"},
"The Flash":{ano:"2023",genero:"Ação • Ficção",imagem:"https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",sinopse:"Barry Allen usa seus poderes para voltar no tempo, mas sua tentativa de alterar o passado provoca consequências inesperadas.",elenco:"Ezra Miller, Michael Keaton, Sasha Calle"},
"The Batman":{ano:"2022",genero:"Ação • Crime",imagem:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",sinopse:"Batman investiga uma série de crimes em Gotham e encontra pistas que revelam uma conspiração envolvendo figuras importantes da cidade.",elenco:"Robert Pattinson, Zoë Kravitz, Paul Dano"},
"Titanic":{ano:"1997",genero:"Romance • Drama",imagem:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",sinopse:"Durante a viagem inaugural do Titanic, Jack e Rose se conhecem e vivem uma história de amor em meio à tragédia do navio.",elenco:"Leonardo DiCaprio, Kate Winslet, Billy Zane"},
"Invocação do Mal":{ano:"2013",genero:"Terror",imagem:"https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",sinopse:"Investigadores paranormais ajudam uma família que relata acontecimentos assustadores em sua nova casa.",elenco:"Vera Farmiga, Patrick Wilson, Lili Taylor"},
"Oppenheimer":{ano:"2023",genero:"Drama • História",imagem:"https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",sinopse:"A trajetória do físico J. Robert Oppenheimer e o desenvolvimento do projeto que levou à criação da primeira bomba atômica.",elenco:"Cillian Murphy, Emily Blunt, Robert Downey Jr."
