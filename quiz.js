const quiz = [
    {
        qust: "ゲーム史上、最も売れたゲーム機は次のうちどれ？",
        ans: [
            "ファミコン",
            "PS2",
            "ニンテンドースイッチ",
            "ニンテンドーDS"
        ],
        correct : "ニンテンドーDS"
    },{
        qust: "糸井重里が企画に携わった、任天堂の看板ゲームと言えば？",
        ans: [
            "MOTHER2",
            "スーパーマリオブラザーズ３",
            "スーパードンキーコング",
            "星のカービィ"
        ],
        correct : "MOTHER2"
    },{
        qust: "＃＃＃",
        ans: [
            "a",
            "b",
            "c",
            "c"
        ],
        correct : "b"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//console.log(document.getElementsByTagName('div'));

//console.log(document.getElementById("js-ques"));

/*
$button[0].textContent = ans[0];
$button[1].textContent = ans[1];
$button[2].textContent = ans[2];
$button[3].textContent = ans[3];
*/

//クイズの問題文、選択肢を定義
const $button = document.getElementsByTagName("button");
let buttonLength = $button.length;

const setQuiz = () => {
    document.getElementById("js-ques").textContent = quiz[quizIndex].qust;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].ans[buttonIndex];
        buttonIndex++;
    };
}

setQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解");
        score++;
    } else {
        window.alert("不正解");
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setQuiz();
    }else {
        window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です！");
    }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
