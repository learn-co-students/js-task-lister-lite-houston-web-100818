class Task {
  constructor(description, priority) {
    this.description = description;
    this.priority = priority;
  }

  render() {
    return `
      <li>
        ${this.description} (priority level: ${this.priority}) <button data-description="${this.description}">X</button>
      </li>
    `;
  }
}
