import "./style.css";

import { fromEvent, of } from "rxjs";
import { map, debounceTime, distinctUntilChanged, switchMap, delay, tap } from "rxjs/operators";

const input = document.getElementById("search");
const statusEl = document.getElementById("status");
const badgeEl = document.getElementById("badge");
const listEl = document.getElementById("list");

const data = [
    "RxJS Observables",
    "RxJS Operators",
    "debounceTime",
    "switchMap",
    "Angular + RxJS",
    "Streams in JavaScript",
    "Frontend performance",
];

function setBadge(state) {
    badgeEl.className = `badge ${state}`;
    badgeEl.textContent =
        state === "loading" ? "Loading" :
            state === "ok" ? "OK" :
                state === "empty" ? "Empty" :
                    "Idle";
}

function fakeApi(query) {
    const results = data
        .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);

    return of(results).pipe(delay(0));
}

function render(items) {
    listEl.innerHTML = items.map((x) => `<li>${x}</li>`).join("");
}

setBadge("idle");
render([]);

fromEvent(input, "keyup")
    .pipe(
        map((e) => e.target.value.trim()),
        debounceTime(2000),
        distinctUntilChanged(),
        tap((q) => {
            if (q.length === 0) {
                statusEl.textContent = "Typ iets…";
                setBadge("idle");
                render([]);
            } else {
                statusEl.textContent = "Zoeken…";
                setBadge("loading");
            }
        }),
        switchMap((q) => (q.length === 0 ? of([]) : fakeApi(q)))
    )
    .subscribe((items) => {
        if (items.length === 0) {
            statusEl.textContent = "Geen resultaten.";
            setBadge("leeg");
            render([]);
        } else {
            statusEl.textContent = `Resultaten: ${items.length}`;
            setBadge("ok");
            render(items);
        }
    })