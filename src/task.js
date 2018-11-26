class Task {
  constructor(desc) {
    this.desc = desc;
  }
  
  render() {
    return `
      <li>
        ${this.desc}
        <button data-description="${this.desc}">x</button>
      </li>
      `                                              
  }
}
