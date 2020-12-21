class FillInBlank extends Question {
  constructor(type, id, content, answers) {
    super(type, id, content, answers);
  }

  /**
   * Render HTML của câu hỏi
   * @return {String} - html của câu hỏi
   */
  render(index) {
    return `
          <div>
              <p class="lead">Câu ${index} : ${this.content} </p>
              <input id="answer-${this._id}" type="text" class="form-control w-50" />
          </div>  
      `;
  }

  checkExact() {
    //1.dom input, lấy ra value
    let value = document.getElementById(`answer-${this._id}`).value;
    value = value.toLowerCase();
    //2. Kiểm tra value (hoa thường gì cũng đc) === answer.content => true, false
    if (value === this.answers[0].content.toLowerCase()) {
      return true;
    }
    return false;
  }
}

//   * @params {Number} index
//   * @params {Array} arr
