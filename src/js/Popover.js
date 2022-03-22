export default class Popover {
  constructor () {
    this.popoverButton = document.querySelector('.popover-button');
    this.windowPopover = document.querySelector('.window-popover');
  }

  addName() {
    this.name = this.popoverButton.getAttribute('data-name');
    this.popoverButton.innerHTML = this.name;
  }

  createWindowPopover() {
    this.windowPopover = document.createElement('div');
    this.windowPopover.classList.add('window-popover');
    this.headerPopover = document.createElement('p');
    this.headerPopover.classList.add('window-popover__header');
    this.headerPopover.innerHTML = this.popoverButton.getAttribute('data-name');
    this.contentPopover = document.createElement('p');
    this.contentPopover.classList.add('window-popover__content');
    this.contentPopover.innerHTML = this.popoverButton.getAttribute('data-contant');
    this.windowPopover.appendChild(this.headerPopover);
    this.windowPopover.appendChild(this.contentPopover);
    this.windowPopover.style.top = `${this.popoverButton.offsetHeight/ 4}px`
    return this.windowPopover;
  }

  addWindowPopover() {
    this.popoverButton.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.popoverButton.contains(this.windowPopover) === false) {
        this.popoverButton.appendChild(this.createWindowPopover());
      }
    });  
  }

  removeWindowPopover() {
    document.addEventListener('click', () => {
      if (this.popoverButton.contains(this.windowPopover) === true) {
        this.popoverButton.removeChild(this.windowPopover);
      }
    });
  }
}
