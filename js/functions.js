const questions = [
    {
        question: "Mikä Azure-palvelu tarjoaa palveluttoman (serverless) koodin suoritusympäristön?",
        
    },
    {
        question: "Mikä on edullisin Azure Blob -tallennusluokka pitkäaikaiselle arkistodatalle?",
        
    },
    {
        question: "Millä palvelulla luodaan suora ja suojattu yksityisyhteys yrityksen toimitiloista Azureen ilman julkista internetiä?",
        
    },
    {
        question: "Mikä Azuren työkalu jakaa verkkoliikennettä (Layer 7) ja sisältää palomuurin web-sovelluksille?",
        
    },
    {
        question: "Mitä nimitystä käytetään Azuren alueen sisäisistä, fyysisesti erillisistä konesaleista, jotka takaavat korkean käytettävyyden?",
        
    }
];

const quiz = document.getElementById("quiz");
const button = document.getElementById("showAnswers");

questions.forEach((item, index) => {
    const questionElement = document.createElement("div");

    questionElement.innerHTML = `
    <h2>${index + 1}. ${item.question}</h2>
        <p class="answer" style="display: none;">
            Vastaus: ${item.answer}
        </p>
    `;

    quiz.appendChild(questionElement);
});
