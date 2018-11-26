class Task {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `
      <li>
        ${this.description}<button data-desc="${this.description}">X</button>
      </li>
    `;
  }
}
