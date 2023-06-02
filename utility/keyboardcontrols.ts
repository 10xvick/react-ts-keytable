const tb = [0, 8];
export function KeyboardControl(e, l, r) {
  if (e.keyCode != 13) return;
  
  const [t, b] = tb;

  function focus(element) {
    if(!element) return;
    element.focus();
    element.select && element.select();
  }

  let arr = e.target.parentElement.parentElement.children;

  if (
    e.target.parentElement.parentElement.children[r] == e.target.parentElement
  ) {
    let rows = e.target.parentElement.parentElement.parentElement.children;

    for (let i = t; i < b; i++) {
      if (e.target.parentElement.parentElement == rows[i]) {
        focus(rows[i + 1]?.children[l]?.firstChild);
        return;
      }
    }
  }

  for (let i = l; i < r; i++) {
    if (e.target.parentElement == arr[i]) {
      focus(arr[i + 1]?.firstChild);
      return;
    }
  }
}
