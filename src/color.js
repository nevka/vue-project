export default {
  bind(el, bindings, vnode){
    const arg = bindings.arg;
    const fontMod = bindings.modifiers['font'];
    const delayNod = bindings.modifiers['delay'];
    let delay = 0;

    if(fontMod) {
      el.style.fontSize = '30px';
    }

    if(delayNod) {
        delay = 2000;
    }

    setTimeout(() => {
        el.style[arg] = bindings.value;
    }, delay);
  }
}