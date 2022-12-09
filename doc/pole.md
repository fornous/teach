# Pole

## Základní definice pole

```javascript
// staticka definice pole
var pole = [1,2,3,4];

// dynamicka definice pole
var pole = new Array();
```

## Přidávání a odebírání prvků

```javascript
// pridani prvku na konec pole
pole.push(12);

// odebrani prvku z konce pole
var posledniPrvek = pole.pop();

// odebrani jednoho prvku z libovolneho mista pomoc indexu i
pole.splice(i, 1);

// pridani jednoho prvku na libovolne misto pomoci indeu i
array.splice(i, 0, 5);
```

## Procházení pole

```javascript
// delka pole
var delka = pole.length;

// zobrazeni prvku pole na miste i
var prvek = pole[i];

// klasickou cestou
for (var i = 0; i < pole.length; i++) {
    console.log(pole[i]);
}
```

## Funkce pro práci s poli

**Filtrování pole**

Filtrováním z původního pole získám nové pole, do kterého vožím jen prvky původního polem které splňují podmínku definovanou ve funkci. Pokud funkce vrátí `true`, prvek je vložen, pokud vrátím `false`, prvek je ignorován.

```javascript
// filter array
var pole = [1,2,3,4,5,6];
var novePole = pole.filter(function(item) { return item % 2 == 0; });
```

### Vyhledávání hodnoty v poli

Slouží k vyhledání prvního prvku pole, který bude vyhovovat definované funkci - tedy funkce vrátí true. Vrací přímo hodnotu prvku.

```javascript
// find value of the first occurence
var pole = [1,2,3,4,5,6];
var firstOdd = pole.find(function(item) { return item % 2 == 0; });
```

### Vyhledávání indexu prvku v poli

Pokud potřebuju index vyhledávaného prvku, použiju funkci `findIndex`. Funkce tedy vrátí jen index danného prvku.

```javascript
// find index of the first occurence
var pole = [1,2,3,4,5,6];
var index = pole.findIndex(function(item) { return item == 2; });
```

### Mapování pole

Mapování znamená, že z původního pole vytvořím nové pole s tím, že pomocí definované funkce změním hodnotu položky. Výsledné pole tedy bude mít stejný počet prvků jako původní, ale jeho hodnoty budou jiné. Mapování se tomu říká, protože každé položce původního prvku se vytvoří odpovídající položka v novém poli.

```javascript
// map every element of the array
var pole = [1,2,3,4,5,6];
var novePole = pole.map(function(item) { return item + 1; });
```

### Obrácení pořadí prvků

Pokud potřebuju obrátit pořadí prvků pole, použiju funkci `reverse`.

```javascript
// reverse array
var pole = [1,2,3,4,5,6];
var novePole = pole.reverse();

// nebo jen
pole.reverse();
```

> Pozor: Mění původní pole a vrací jen novou referenci na toto pole.

### Seřazení prvků v poli

Prvky lze seřadit v poli pomocí funkce `sort`. Jako parametr se vkládá funkce se dvěma parametry. Tato funkce vrátí:

  - záporné číslo, pokud je a < b
  - 0, pokud je a = b
  - kladné číslo, pokud je a > b

```javascript
// sort the array
var pole = [4,8,3,1,7,4];
var novePole = pole.sort(function(a, b) { return a - b; });

// nebo jen
pole.sort();
```

> Pozor: Mění původní pole a vrací jen novou referenci na toto pole.

### Procházení prvků pole

Procházet lze pole klasicky pomocí for cyklu, nebo pomocí této funkce `forEach`. Jako parametr použiju funkci, kterou chci spustit u každého prvku pole.

```javascript
// loop through array
var pole = [1,2,3,4,5,6];
pole.forEach(function(item) { console.log(item); });
```

