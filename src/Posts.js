import React from "react";

export default function Posts() {
  function Post(props) {
    const [likes, setLikes] = React.useState(props.likes);
    let liked = false;
    

    function wasLiked() {
      if (liked) {
        unlike();
      } else {
        like();
      }
    }

    function like() {
      liked = true;
      setLikes(props.likes + 1);
      setNm("heart");
      console.log(liked);
    }

    function unlike() {
      liked = false;
      setLikes(props.likes);
      setNm("heart-outline");
      liked = false;
      console.log(liked);
    }

    const [nmLike, setNm] = React.useState("heart-outline");
    const [nmSave, setNmSave] = React.useState("bookmark-outline");
    let saved = false;

    function wasSaved() {
      if (saved) {
        unsave();
      } else {
        save();
      }
    }

    function save() {
      setNmSave("bookmark");
      saved = true;
    }
    function unsave() {
      setNmSave("bookmark-outline");
      saved = false;
    }
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
              <ion-icon name={nmLike} onClick={wasLiked}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={nmSave} onClick={wasSaved}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.liked} />
            <div class="texto">
              Curtido por <strong>{props.likedUser}</strong> e {""}
              <strong> outras {likes} pessoas</strong>
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
      likes: 101523,
    },
    {
      user: "barked",
      userImg: "assets/img/barked.svg",
      post: "assets/img/dog.svg",
      liked: "assets/img/adorable_animals.svg",
      likedUser: "adorable_animals",
      likes: 99159,
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
