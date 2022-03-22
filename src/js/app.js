import Popover from "./Popover"

const popover = new Popover();
popover.addName();
const button = document.querySelector('.popover-button');
const popoverWindow = document.querySelector('.window-popover');
popover.removeWindowPopover();
popover.addWindowPopover();

