export default function Posts() {
  function Post(props) {
    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.userImg} />
            {props.user}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.post} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.liked} />
            <div class="texto">
              Curtido por <strong>{props.likedUser}</strong> e {""}
              <strong>{props.likes}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const posts = [
    {
      user: "meowed",
      userImg: "assets/img/meowed.svg",
      post: "assets/img/gato-telefone.svg",
      liked: "assets/img/respondeai.svg",
      likedUser: "respondeai",
      likes: "outras 101.523 pessoas",
    },
    {
      user: "barked",
      userImg: "assets/img/barked.svg",
      post: "assets/img/dog.svg",
      liked: "assets/img/adorable_animals.svg",
      likedUser: "adorable_animals",
      likes: "outras 99.159 pessoas",
    },
  ];

  function newPost(p) {
    return (
      <Post
        user={p.user}
        userImg={p.userImg}
        post={p.post}
        liked={p.liked}
        likedUser={p.likedUser}
        likes={p.likes}
      />
    );
  }

  return <div class="posts">{posts.map((p) => newPost(p))}</div>;
}
