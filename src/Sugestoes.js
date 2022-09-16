export default function Sugestoes() {
  function Sugestao(props) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={props.img} />
          <div class="texto">
            <div class="nome">{props.user}</div>
            <div class="razao">{props.status}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    );
  }

  function newSugestion(s) {
    return <Sugestao img={s.img} user={s.user} status={s.status} />;
  }

  const sugestions = [
    {
      img: "assets/img/bad.vibes.memes.svg",
      user: "bad.vibes.memes",
      status: "Segue você",
    },
    {
      img: "assets/img/chibirdart.svg",
      user: "chibirdart",
      status: "Segue você",
    },
    {
      img: "assets/img/razoesparaacreditar.svg",
      user: "razoesparaacreditar",
      status: "Novo no Instagram",
    },
    {
      img: "assets/img/adorable_animals.svg",
      user: "adorable_animals",
      status: "Segue você",
    },
    {
      img: "assets/img/smallcutecats.svg",
      user: "smallcutecats",
      status: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestions.map((s) => newSugestion(s))}
    </div>
  );
}
