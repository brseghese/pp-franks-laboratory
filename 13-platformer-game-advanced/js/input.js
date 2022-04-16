export class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "w" ||
          e.key === "s" ||
          e.key === "a" ||
          e.key === "d" ||
          e.key === "f") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      }
      console.log(e.key, this.keys);
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "w" ||
        e.key === "s" ||
        e.key === "a" ||
        e.key === "d" ||
        e.key === "f"
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
      console.log(e.key, this.keys);
    });
  }
}
