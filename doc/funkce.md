# Funkce

## Opakované volání části kódu

V programu mám několik příkazů, které bych rád použil znovu. Mohu je jednoduše zkopírovat a vložit na jiné místo, ale když bude docházet ke změně, musím si hlídat, abych provedl změny na všech místech.
Toto řeší funkce, které umožňuje vzít několik příkazů, zapouzdřit je, pojmenovat a volat na různých místech.

```javascript
// bez funkce
console.log("Hello");
console.log("world");
console.log(cislo);

// volani na jinem miste
console.log("Hello");
console.log("world");
console.log(cislo);
```

```javascript
// s funkci
function helloWorld() {
    console.log("Hello");
    console.log("world");
    console.log(cislo);
}

// volani na jinem miste
helloWorld();
```

## Parametry funkce

Někdy je třeba pracovat uvnitř funkce s hodnotami, které se mění. Proto je možné do funkce vkládat parametry a uvnitř je pak používat jako proměnnou. Parametr může mít různý datový typ - od čísla, pravdivostní hodnotu, text, ale i komplexnější data jako pole, objekty a také další funkce.

```javascript
// definice funkce s ciselnym parmetrem
function helloWorld(cislo) {
    console.log("Hello world" + cislo);
}

// volani funkce uz s urcitym cislem
helloWorld(12);
```

Pokud mám více parametrů, odděluji je čárkou.

```javascript
// vice parametru
function helloWorld(parameter1, parameter2) {
    ...
}
```

## Návratová hodnota

Funkce umožňuje také vracet nějakou hodnotu. Může to být třeba pravdivostní hodnota `true` při úspěšném dokončení a `false` při neúspěšném. Může to být výsledek nějakého výpočtu, atd. Funkce ale může vracet jakýkoli datový typ.

```javascript
// definice funkce vracejici pravdivostni hodnotu
function helloWorld() {
    ...
    return true;
}

// definice funkce vracejici textovou hodnotu
function helloWorld() {
    ...
    return "text";
}
```

Pokud chci vrátit více hodnot najednou musím použít nějaký zapouzdřovací typ - pole, objekt.

```javascript
// navrat vice hodnot soucasne
function helloWorld() {
    ...
    return {
        vysledek1: 1,
        vysledek2: 2
    }
}
```

## Anonymní funkce

```javascript
mojeFunkce(function(item) { return item;});
```