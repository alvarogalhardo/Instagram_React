export default function Stories() {
  function Story(props) {
    return (
      <div class="story">
        <div class="imagem">
          <img src={props.img} />
        </div>
        <div class="usuario">{props.user}</div>
      </div>
    );
  }

  function newStory(s) {
    return <Story user={s.user} img={s.img} />;
  }

  const infos = [
    { user: "9gag", img: "assets/img/9gag.svg" },
    { user: "meowed", img: "assets/img/meowed.svg" },
    { user: "barked", img: "assets/img/barked.svg" },
    {
      user: "nathanwpylestrangeplanet",
      img: "assets/img/nathanwpylestrangeplanet.svg",
    },
    { user: "wawawicomics", img: "assets/img/wawawicomics.svg" },
    { user: "respondeai", img: "assets/img/respondeai.svg" },
    { user: "filomoderna", img: "assets/img/filomoderna.svg" },
    { user: "memeriagourmet", img: "assets/img/memeriagourmet.svg" },
  ];

  return (
    <div class="stories">
      {infos.map((s) => newStory(s))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
