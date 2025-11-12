// 質問データと配点定義
const questions = [
    {
        qId: 1,
        text: "最近1ヶ月で頭痛を感じる頻度はどれくらいですか？",
        options: [
            { text: "週に1回以上", score: 3 },
            { text: "月に数回", score: 2 },
            { text: "たまに", score: 1 },
            { text: "ほとんどない", score: 0 }
        ],
        weights: { neck: 3, shoulder: 1, axilla: 0 } 
    },
    {
        qId: 2,
        text: "考えすぎて夜なかなか寝付けないことがありますか？",
        options: [
            { text: "よくある", score: 3 },
            { text: "時々ある", score: 2 },
            { text: "めったにない", score: 1 },
            { text: "ない", score: 0 }
        ],
        weights: { neck: 3, shoulder: 0, axilla: 0 }
    },
    {
        qId: 3,
        text: "首や肩が重い、またはこっていると感じますか？",
        options: [
            { text: "常に感じる", score: 3 },
            { text: "夕方以降に感じる", score: 2 },
            { text: "疲れた時だけ", score: 1 },
            { text: "ほとんど感じない", score: 0 }
        ],
        weights: { neck: 2, shoulder: 2, axilla: 0 }
    },
    {
        qId: 4,
        text: "肩甲骨の間や背中が張っていると感じますか？",
        options: [
            { text: "常に感じる", score: 3 },
            { text: "パソコン作業後に感じる", score: 2 },
            { text: "時々感じる", score: 1 },
            { text: "感じない", score: 0 }
        ],
        weights: { neck: 0, shoulder: 3, axilla: 0 }
    },
    {
        qId: 5,
        text: "深呼吸がしにくい、または呼吸が浅いと感じますか？",
        options: [
            { text: "よく感じる", score: 3 },
            { text: "緊張時に感じる", score: 2 },
            { text: "たまに感じる", score: 1 },
            { text: "感じない", score: 0 }
        ],
        weights: { neck: 0, shoulder: 2, axilla: 1 }
    },
    {
        qId: 6,
        text: "二の腕のむくみやだるさを感じることがありますか？",
        options: [
            { text: "よくある", score: 3 },
            { text: "朝晩で差がある", score: 2 },
            { text: "たまにある", score: 1 },
            { text: "ない", score: 0 }
        ],
        weights: { neck: 0, shoulder: 0, axilla: 3 }
    },
    {
        qId: 7,
        text: "感情（イライラ、悲しみなど）を抑え込むことが多いですか？",
        options: [
            { text: "いつも我慢する", score: 3 },
            { text: "状況によって我慢する", score: 2 },
            { text: "あまり我慢しない", score: 1 },
            { text: "ほとんどない", score: 0 }
        ],
        weights: { neck: 0, shoulder: 0, axilla: 3 }
    }
];

// 結果コンテンツ
const resultsContent = {
    'neck': {
        type: "首 (頸部リンパ)",
        animal: "🦉 フクロウ型",
        trait: "思考タイプ",
        animalDescription: "フクロウは夜行性で知恵深く、深く物事を考える洞察力を持っています。しかし、その「考えすぎ」のエネルギーが頭部や首に停滞し、「ゴミ」となって現れています。",
        bodySigns: "頭痛、首の重さ、肩こり",
        mentalSigns: "考えすぎ（思考のゴミ）が溜まっているサインです。頭の中でグルグル考える時間が多いのでは?",
        steps: [
            { title: "1. 【出口の解放】鎖骨のくぼみを優しくプッシュ", text: "指の腹で鎖骨のくぼみを5秒押す×3回", image: "images/placeholder-neck-step1.png" },
            { title: "2. 【本流を流す】耳下から鎖骨へさすり流す", text: "耳の後ろから鎖骨へ、優しくさすり下ろす (左右5回)", image: "images/placeholder-neck-step2.png" },
            { title: "3. 【筋肉を緩める】首を倒して深呼吸", text: "頭をゆっくり横に倒し、深呼吸3回 (左右)", image: "images/placeholder-neck-step3.png" }
        ],
        message: "思考も身体もリセットし、知恵を創造的なエネルギーに変えましょう！"
    },
    'shoulder': {
        type: "肩 (肩甲骨・腋窩リンパ)",
        animal: "🐢 亀型",
        trait: "緊張/防御タイプ",
        animalDescription: "亀は慎重で責任感が強く、甲羅に閉じこもって自分を守ります。しかし、その「重荷」と「緊張」のエネルギーが肩や背中に停滞し、「ゴミ」となって現れています。",
        bodySigns: "肩こり、背中の張り、腕の重さ、冷え",
        mentalSigns: "重圧、責任感（思考のゴミ）が溜まっているかもしれません。すべてを自分で抱え込もうとしていませんか？",
        steps: [
            { title: "1. 【最終出口の準備】鎖骨のくぼみを優しくプッシュ", text: "指の腹で鎖骨のくぼみを5秒押す×3回", image: "images/placeholder-shoulder-step1.png" },
            { title: "2. 【本流の解放】肩甲骨をダイナミックに回す", text: "両手を肩に添え、肘で前から後ろに大きく円を描く (10回)", image: "images/placeholder-shoulder-step2.png" },
            { title: "3. 【集めたゴミの排出】脇の下をほぐして流す", text: "脇の下を掴み、軽く圧をかけながら腕を前後5回ずつ回す", image: "images/placeholder-shoulder-step3.png" }
        ],
        message: "重荷を下ろして、心も身体も軽くなりましょう！"
    },
    'axilla': {
        type: "脇 (腋窩リンパ)",
        animal: "🐙 タコ型",
        trait: "感情抑圧タイプ",
        animalDescription: "タコは柔軟で感受性が高く、墨を吐いて感情を隠します。しかし、その「我慢」と「感情の抑圧」のエネルギーが脇や胸に停滞し、「ゴミ」となって現れています。",
        bodySigns: "二の腕のむくみ、胸の張り、疲れが取れない",
        mentalSigns: "感情抑圧（心のゴミ）が溜まっているかもしれません。言いたいことや感じたことを、我慢して溜め込んでいませんか？",
        steps: [
            { title: "1. 【出口の準備】鎖骨のくぼみを優しくプッシュ", text: "指の腹で鎖骨のくぼみを5秒押す×3回", image: "images/placeholder-axilla-step1.png" },
            { title: "2. 【本流の解放】脇の下を掴み、ひじで円を描く", text: "脇の下を掴み、ひじで前後5回ずつ円を描く", image: "images/placeholder-axilla-step2.png" },
            { title: "3. 【集めたゴミの排出】二の腕から脇の下へさすり流す", text: "手首から脇の下へ、優しくさすり上げる (5回)", image: "images/placeholder-axilla-step3.png" }
        ],
        message: "感情を解放し、軽やかな身体と心を取り戻しましょう！"
    }
};

// スコア管理
let currentQuestion = 0;
let selectedOption = null;

// index.html から呼び出す
function startDiagnosis() {
    localStorage.setItem('userScores', JSON.stringify({ neck: 0, shoulder: 0, axilla: 0 }));
    localStorage.setItem('currentQuestionIndex', 0);
    window.location.href = 'diagnosis.html';
}

// diagnosis.html でページロード時に呼び出す
function loadQuestion() {
    const qIndex = parseInt(localStorage.getItem('currentQuestionIndex') || 0);

    if (qIndex >= questions.length) {
        saveAndShowResult(); 
        return;
    }

    const currentQ = questions[qIndex];
    document.getElementById('current-q').textContent = qIndex + 1;
    document.getElementById('question-text').textContent = currentQ.text;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    currentQ.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option.text;
        div.onclick = () => selectOption(qIndex, index, div);
        optionsDiv.appendChild(div);
    });

    document.getElementById('btn-next').disabled = true;
}

function selectOption(qIndex, optionIndex, element) {
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }
    
    element.classList.add('selected');
    selectedOption = element;
    document.getElementById('btn-next').disabled = false;
    
    element.dataset.qIndex = qIndex;
    element.dataset.optionIndex = optionIndex;
}

function goToNextQuestion() {
    const selectedDiv = selectedOption;
    if (!selectedDiv) return;

    const qIndex = parseInt(selectedDiv.dataset.qIndex);
    const optionIndex = parseInt(selectedDiv.dataset.optionIndex);
    
    const currentScores = JSON.parse(localStorage.getItem('userScores'));
    const q = questions[qIndex];
    const score = q.options[optionIndex].score;
    
    currentScores.neck += score * q.weights.neck;
    currentScores.shoulder += score * q.weights.shoulder;
    currentScores.axilla += score * q.weights.axilla;
    localStorage.setItem('userScores', JSON.stringify(currentScores));

    localStorage.setItem('currentQuestionIndex', qIndex + 1);
    selectedOption = null;
    loadQuestion();
}

function saveAndShowResult() {
    const scores = JSON.parse(localStorage.getItem('userScores'));
    let maxScore = -1;
    let resultType = '';

    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultType = type;
        }
    }
    
    if (resultType === '') resultType = 'neck';
    
    localStorage.setItem('diagnosisResult', resultType);
    window.location.href = 'result.html';
}

// result.html でページロード時に呼び出す
function displayResult() {
    const resultType = localStorage.getItem('diagnosisResult');
    if (!resultType) {
        window.location.href = 'index.html'; 
        return;
    }
    
    const content = resultsContent[resultType];
    
    document.getElementById('result-type').textContent = content.type;
    document.getElementById('animal-type').textContent = `${content.animal} (${content.trait})`;
    document.getElementById('animal-description').innerHTML = content.animalDescription;
    document.getElementById('body-signs').innerHTML = content.bodySigns;
    document.getElementById('mental-signs').innerHTML = content.mentalSigns;
    
    const stepsContainer = document.getElementById('steps-container');
    stepsContainer.innerHTML = '';
    
    content.steps.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';
        stepDiv.innerHTML = `
            <h4>${step.title}</h4>
            <p>${step.text}</p>
            <img src="${step.image}" alt="${step.title}" onerror="this.style.display='none'">
        `;
        stepsContainer.appendChild(stepDiv);
    });

    document.getElementById('message-text').textContent = content.message;
}

function submitFeedback(category, value) {
    console.log(`[Feedback] Category: ${category}, Value: ${value}`);
}

function submitComment() {
    const comment = document.getElementById('comment').value;
    console.log(`[Feedback] Comment: ${comment}`);
    alert('フィードバックありがとうございます！');
}
