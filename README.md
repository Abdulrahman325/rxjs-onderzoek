# RxJS Onderzoek

Dit project hoort bij het RxJS-onderzoek voor de opleiding HBO-ICT.

## Wat is RxJS?
**RxJS (Reactive Extensions for JavaScript)** is een library voor het werken met **asynchrone data** en **events** op een reactieve manier.

In plaats van handmatig callbacks en states te beheren, werkt RxJS met **datastromen (streams)** die je kunt observeren en bewerken.

Voorbeelden van data die RxJS goed kan afhandelen:
- Gebruikersinput (zoeken, typen)
- HTTP requests (API-calls)
- Timers en intervals
- Events (clicks, scrollen)

## Belangrijke kernconcepten

### Observable
Een **Observable** is een datastroom die in de tijd waarden kan uitsturen.
Bijvoorbeeld: elke keer dat een gebruiker typt, wordt een nieuwe waarde verstuurd.

### Observer
Een **Observer** luistert naar een Observable en reageert op:
- `next` → nieuwe data
- `error` → fout
- `complete` → klaar

### Operators
**Operators** zijn functies die een Observable kunnen aanpassen.
Voorbeelden:
- `map` → data transformeren
- `filter` → alleen bepaalde waarden doorlaten
- `debounceTime` → wachten tot de gebruiker stopt met typen
- `switchMap` → nieuwe request starten en oude annuleren

## Waarom RxJS gebruiken?
- Betere controle over asynchrone logica
- Minder complexe code dan callbacks/promises
- Zeer geschikt voor frontend frameworks zoals Angular
- Ideaal voor zoekvelden, live updates en events

## Installeren
```bash
npm install
