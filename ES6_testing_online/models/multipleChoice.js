class MultipleChoice extends Question {
  constructor(type, id, content, answers) {
    super(type, id, content, answers);
  }

  /**
   * Render HTML của câu hỏi
   * @return {String} - html của câu hỏi
   */
  render(index) {
    // render HTML của 4 answers
    let answersHTMLContent = "";

    for (let item of this.answers) {
      answersHTMLContent += `
            <div>
                <input value="${item._id}" class="answer-${this._id}" type="radio" name="answer-${this._id}"  />
                <label>${item.content}</label>
            </div>
        `;
    }
    return `
        <div>
            <p class="lead">Câu ${index}: ${this.content} </p>
            ${answersHTMLContent}
        </div>  
    `;
  }

  checkExact() {
    //1.Biết được người dùng chọn đáp án nào => _id của đáp án
    // 1.1 dom tới 4 input, kiểm tra input nào đang đc checked => lấy đc input
    // 1.2 lấy ra value đc lưu trên input => _id của đáp án
    const inputLists = document.getElementsByClassName(`answer-${this._id}`);
    // inputLists = [input, input ,input, input]

    let ansId;

    for (let input of inputLists) {
      if (input.checked) {
        ansId = input.value;
      }
    }

    //kiểm tra người dùng có check hay ko
    if(!ansId) return false;

    //2. kiểm tra thuộc tính exact của answer

    for(let answer of this.answers){
        if(answer._id === ansId){
            return answer.exact
        }
    }

    return false;
  }
}

// const newQuestion = new MultipleChoice(1, 10, "Hôm nay là thứ mấy?", [
//   { content: "Thứ 2" },
//   { content: "Thứ 4" },
//   { content: "Thứ 6" },
//   { content: "Thứ 7" },
// ]);
// console.log(newQuestion);
// console.log(newQuestion.render())

//   * @param {Number} index
//   * @param {Array} arr
