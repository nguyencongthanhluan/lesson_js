/**
 * Dự án: Website thi trắc nghiệm
 * Chức năng:
 *     1.Lấy ds câu hỏi từ backend
 *     2.Hiển thị ds câu hỏi ra màn hình
 *     3.Chấm bài , tính điểm
 */

let questionList = [];

//function 1: lấy ds câu hỏi từ backend

const fetchQuestions = () => {
  axios({
    url: "../DeThiTracNghiem.json",
    method: "GET",
  })
    .then((res) => {
      // console.log(res.data);
      mapData(res.data);
      //render câu hỏi
      renderQuestions();
    })
    .catch((err) => {
      console.log(err);
    });
};

//function 2: hiển thị ds câu hỏi ra màn hình

const renderQuestions = () => {
  let htmlContent = "";

  for (let i in questionList) {
    htmlContent += questionList[i].render(+i + 1);
  }

  document.getElementById("questionsContainer").innerHTML = htmlContent;
};

//function 3: Map chuyển đổi từ ds câu hỏi của backend => ds đối tượng câu hỏi của mình
/**
 *
 * @param {Array} data - mảng câu hỏi từ backend
 * @return {Array} questionList - mảng câu hỏi của mình
 */
const mapData = (data = []) => {
  questionList = data.map((item) => {
    const { questionType, _id, content, answers } = item;
    if (questionType === 1) {
      return new MultipleChoice(questionType, _id, content, answers);
    }
    return new FillInBlank(questionType, _id, content, answers);
  });

  // for (let item of data) {
  //   let newQuestion;

  //   const { questionType, _id, content, answers } = item;

  //   if (questionType === 1) {
  //     newQuestion = new MultipleChoice(questionType, _id, content, answers);
  //   } else {
  //     newQuestion = new FillInBlank(questionType, _id, content, answers);
  //   }

  //   questionList.push(newQuestion);
  // }
  console.log(questionList);
};

//function 4: Nộp bài tính điểm
const submit = () => {
  let result = 0;

  for (let question of questionList) {
    if (question.checkExact()) result++;
  }
  console.log("Kết quả: ", result + "/" + questionList.length);
};

document.getElementById("btnSubmit").addEventListener("click", submit);

fetchQuestions();
