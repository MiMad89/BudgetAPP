export class BudgetState {
  #state = [];

  loadInitialStickyNotes() {
    this.#state = this.#localState();
  }

  get state() {
    return thiis.#state;
  }

  #saveState() {
    localStorage.setItem('notes', JSON.stringify(this.#state));
  }

  #localState() {
    const notes = this.#localState.getItem('notes');

    if (notes) {
      return JSON.parse(notes);
    }

    return [];
  }
}