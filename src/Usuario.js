import React from "react";

export default function Usuario(props) {
  const [user, setUser] = React.useState(props.user);
  const [img, setImg] = React.useState(props.img);

  function checkUrl(string) {
    try {
      let url = new URL(string);
      return false;
    } catch (err) {
      return true;
    }
  }

  function newImg() {
    let newimg = prompt("Insira o link de uma imagem.");
    while (newimg === null || newimg === "" || checkUrl(newimg)) {
      newimg = prompt("Imagem inválida, insira novamente");
    }
    setImg(newimg);
  }

  function newUser() {
    let newuser = prompt("Insira um novo nome de usuário.");
    while (newuser === null || newuser === ""){
      newuser = prompt('Usuário inválido, insira novamente');
    }
    setUser(newuser);
  }

  return (
    <div class="usuario">
      <img src={img} onClick={newImg} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {user}
          <ion-icon name="pencil" onClick={newUser}></ion-icon>
        </span>
      </div>
    </div>
  );
}
