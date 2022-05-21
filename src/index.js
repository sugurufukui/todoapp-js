import "./styles.css";

const onClickAdd = () => {
  //　　テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//　未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.className = "right";
  p.innerText = text;

  //buttonタグ(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    //li以下を初期化
    addTarget.textContent = null;
    // divタグ生成
    const div = document.createElement("div");
    div.className = "list-row";

    //pタグ生成
    const p = document.createElement("p");
    p.className = "right";
    p.innerText = text;

    //buttonタグ（戻す）生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 未完了リストに追加する要素
      const backTarget = backButton.parentNode.parentNode;

      // テキスト取得
      const backText = backTarget.firstElementChild.firstElementChild.innerText;
      createIncompleteList(backText);
    });

    //complete-listのliタグの子要素に各要素を設定
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    //完了したTODOリストに表示
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //buttonタグ(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //incompleteーlistのliタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストにliタグ以下を追加
  document.getElementById("incomplete-list").appendChild(li);
};

//追加ボタンにクリックイベント追加
document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
