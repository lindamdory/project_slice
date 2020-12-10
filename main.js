function pageLoad() {
// to do app: 10 üres mező áll rendelkezése alapértelmezetten, de hozzá tudunk adni újat (alatta 1 plusz gomb),
// és minden mezőben elején van checkbox, textinput mező és végén egy törlés gomb

// 0. Először kommentben leírjuk a lépéseket

// 1. Létrehozok egy változót, amibe belerakom a rootot

let theRoot = document.getElementById("root");

// 2. Eltároljuk a minimum hosszat egy változóba (szám: 10, ügyfél változtathatja az elvárást)

let minLength = 10;

// 3. Többsoros szövegként egy változóba egy sor HTML struktúráját: 1-1 divbe kell 1 checkbox input, text input és törlés gomb

let oneLine = `
  <div class="oneLine">
    <input type="checkbox">
    <input type="text">
    <button class="delete">🗑</button>
  </div>
`; 

// 4. for ciklussal létrehozni az előző sort 10x, insertAdjacentHTML beforeenddel hozzáadjuk a HTML-hez a 10 sort

for (let index = 0; index < minLength; index++) {

  theRoot.insertAdjacentHTML("beforeend", oneLine);

}

// 5. insertAdjacentHTML "afterend" (rooton kívülre) plusz gomb a hozzáadáshoz

  theRoot.insertAdjacentHTML("afterend", `
  <div><button type="button">+ New Task</button></div>
  `);

// 6. click eseményt adunk a plusz gombhoz, addevent click, a sort tartalmazó változót hozzáadjuk a root elemhez

// 7. classnév alapján kijelölm az összes törlés gombot queryselALllal és eltárolom egy változóba

// 8. A 7.-ben összegyűjtött sok HTML elemre for ciklussal egy click eseményt hozzáadunk

// 9. Honnan tudjuk, hogy melyik eseményre kattintottunk? Mert annak az outerHTML-jét kell majd kitörölni. Ez mentornak kérdés.

// 10. Commit, comment: project scope-ját és a feladatlépéseket leírtuk. Push.

}

window.addEventListener("load", pageLoad);