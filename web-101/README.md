
# Web Programmering 101
**Af Simon From Jakobsen**

- [Web Programmering 101](#web-programmering-101)
  - [Kapitel 0 - Intro](#kapitel-0---intro)
    - [0.1 VSCODE](#01-vscode)
    - [0.2 Åben en mappe](#02-åben-en-mappe)
    - [0.3 Brug Google](#03-brug-google)
  - [Kapitel 1 Web-fundamentaler og HTML](#kapitel-1-web-fundamentaler-og-html)
    - [1.1 Lav et dokument](#11-lav-et-dokument)
    - [1.2 Tags i HTML](#12-tags-i-html)
      - [Attributes](#attributes)
      - [Korte tags](#korte-tags)
      - [Mange forskellige](#mange-forskellige)
    - [1.3 Et HTML dokument](#13-et-html-dokument)
      - [Prøv selv](#prøv-selv)
    - [1.4 Boks modellen](#14-boks-modellen)
    - [1.5 Head konfiguration](#15-head-konfiguration)
      - [Meta](#meta)
      - [Link](#link)
      - [CSS Style](#css-style)
      - [Script JavaScript](#script-javascript)
  - [Kapitel 2 Style CSS](#kapitel-2-style-css)

## Kapitel 0 - Intro

Dette er en guide, lavet af Simon From Jakobse, til at lære nye programører op på rekord tid. Målet er at når dette dokument er læst igennem, har læseren alt hvad de skal bruge, for at kunne deltage aktiv i en udviklingsprocess.

Denne her guide er delt op tre hovedkapitler: Fundament/HTML, Udseende/CSS og Programmering/JavaScript. Den er delt op, så man kan hoppe rundt til det man skal bruge, og hoppe over det man kan i forvejen.

### 0.1 VSCODE

Til at skrive HTML, CSS og JavaScript anbefaler jeg at du Visual Studio Code, forkortet VSCode, til at redigere dine filer. VSCode kan
* Navigere filer
* Rediger tekst
* Lave kode forslag
* Sige om koden er rigtig
* Og give teksten nogle fine farver

VSCode er en applikation man kan downloade fra nettet.
Windows:
1. Søg `vscode` på Google
2. Tryk øverste link
3. Tryk `Download for Windows`
4. (Browserspecifikt) Vælg gem fil
5. Tryk på filen så den åbner
6. Følg instruktionerne i Wizard'en
7. Du er færdig når du har et åbent VSCode vindue

### 0.2 Åben en mappe

1. Lav en ny mappe på skrivebordet, kald den `MyCode`
2. Åben VSCode og tryk `Open folder` eller `File->Open folder`
3. Naviger til skrivebordet og marker `MyCode`
4. Tryk på `Open`/`Åben`

### 0.3 Brug Google

Ingen kan huske alt programmering uden ad. En god programmør er ikke god til programmering, hoogle er god til programmering og en god programmør er god til at google.

Man kan få bedre søgeresultater:
1. Hvis man søger på engelsk
   * Alt programmering foregår på engelsk
2. Hvis man laver søgningen simpel
    * Ikke søg `a list of tags i html`
    * Søg `html tags` eller `html tags list`
    * Forkort så meget så muligt, uden at miste information
3. Kend et par af siderne på forhånd
    * [w3schools](https://www.w3schools.com/) er godt til HTML og CSS
    * [MDN](https://developer.mozilla.org/en-US/) er godt til JavaScript
    * [StackOverFlow](https://stackoverflow.com/) er lavet specifikt til programmeringsspørgsmål og -svar
    * Der findes mange andre som måske er bedre.

## Kapitel 1 Web-fundamentaler og HTML

Alt du kan se på en hjemmeside, lige bag skærmen, er HTML. Det står for Hyper Text Markup Language, og betyder Hurtigt Tekstopsætningsprog. Det beskriver også hvad det kan, gør og bliver brugt til. HTML fortæller din webbrowser, hvilke elementer der skal være på skærmen, og hvordan de skal være på skærmen.


### 1.1 Lav et dokument

HTML skrives som et normalt tekstdokument. Det er også den måde din browser køre den på. 

1. Åben en mappe, se **0.2**
2. Lav ny fil
3. Kald ny fil `ìndex.html`
4. Skriv `Hej med dig!` i filen og gem
5. Højreklik på pladsen under filen
6. Klik på `Copy Path`
7. Åben en browser, fx `Chrome` `Firefox` `Opera`
8. Højreklik på URL-barren og tryk `Sæt ind`/`Paste`

Hvis du har gjort det rigtigt viser broweren nu `Hej med dig!`

### 1.2 Tags i HTML

Kode i HTML er skrevet i XML format, det betyder en det er bygget op af 'tags'. Et 'tag' er bygget op sådanne:
```html
<mytag></mytag>
```
Man har altså er start-tag og et slut-tag. HTML er lidt large med whitespace, så dette virker også:
```html
<mytag>  </mytag>
```
```html
<mytag  >

</mytag>
```
Start-tags skal ALTID have tagnavnet lige efter `<` og slut-tags må IKKE indeholde mellemrum mellem `</`, tagnavet og `>`, så dette her virker IKKE:
```html
< mytag>
</mytag>
```
```html
<mytag></ mytag>
```

Normale tags er bygget op sådan, så du har:
1. Et start-tag
2. Noget indhold/tekst
3. Et slut-tag

```html
<tagname>this is the content of the element</tagname>
```
```html
<p>
    Et 'p' element, er til brødtekst
</p>
```

#### Attributes

Tags kan også konfigureres med såkaldte 'attributes'. Fx kan man give et `id` og et `class` til et element. Man kan også, specifikt for hvert tag, give special konfigurationer.

Attributes skrives i start-tagget lige efter tag-navnet:
```html
<p id="myTekstTag">This is tekst</p>
```

#### Korte tags

Hvis man ikke skal have noget indhold i et tag, kan man skrive det sådanne:
```html
<img />

<meta type="txt" />
```
Hvor man lukker start-taggen til sidst.

Nogle tags kan ikke bruge indhold, så hved dem skriver man bare et start-tag:
```html
<img src="https://bit.ly/3tkCI9R">

<br>
```

#### Mange forskellige

Der findes et hav af tags i html. Bare søg `html tags` på Google, og klik på et af de øverste links. Der kan du læse om nogle af de forskellige tags. Her er de vigtigste tags du skal vide:
* `<h1>`
* `<button>`
* `<a>`
* `<div>`
* `<span>`
* `<p>`
* `<br>`
* `<b>`
* `<i>`

### 1.3 Et HTML dokument

Et HTML dokument, efter WWW standarden, som er den vi kører efter, består af 4 primære elementer. Et deklerations-tag, et HTML-tag, et head-tag og et body-tag:

```html
<!DOCTYPE html>
<html>
    <head>

        <!-- Konfiguration -->

    </head>
    <body>

        <!-- Indhold -->

    </body>
</html>
```
Deklerationen `<!DOCTYPE html>` fortæller browseren, at dokumentet er den nyeste version af HTML, HTML5. Nogle  browsere fungere ikke ordentligt uden.

HTML-elementet `<html></html>` indeholder alt, som har med hjemmesiden at gøre.

Head-elementet `<head></head>` indeholder forskellige konfigurationstags, som vi vil komme ind på lidt senere.

Body-element `<body></body>` indeholder alt indhold, som hjemmesiden viser.

Ps. Alt indenfor `<!--` og `-->` kaldes kommentarer. Browseren ignorerer dem. Du kan slette dem, hvis du har lyst.

#### Prøv selv

Brug og kombiner nogle af de tags du læste om, og prøv forskellige ting af.

### 1.4 Boks modellen

Næsten alle elementer i HTML er princippet bare en boks med tekst i. Nogle tags har nogle forskellige features, fx `<img>` viser billeder, `<span>` laver ikke en ny linje og `<div>` laver en ny linje. Prøv at sæt dette kode ind.

```html
<!DOCTYPE html>
<html>
    <head>

        <style>
            div, span, p {
                border: 1px solid black;
                padding: 20px;
            }
        </style>

    </head>
    <body>
        
        <div>
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div>
                <span>4</span>
                <span>5</span>
                <span>6</span>
            </div>
            <div>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>
        </div>
        
    </body>
</html>
```

### 1.5 Head konfiguration

I Head-element findes alt konfiguration. Konfiguration kan fx være titlen på hjemmesiden, som man kan sætte ved:
```html
<head>
    <title>MyTitle</title>
</head>
```

#### Meta

Meget af det man sætter i head-element er `<meta>` tags. De fortæller diverse informationer til browseren og til søgemaskinerne. Her er det mest almindelige metatags:
```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
De fortæller browseren at:
1. Standarden for bogstaverne er UTF-8
2. Siden er kompatibel med Internet Explorer
3. Bredden på siden skal være lig bredden på skærmen

Disse 3 meta tags SKAL være på ens hjemmeside.

Andre metatags indeholder en lille beskrivelse af indholdet på siden, og hvem der har lavet eller ejer siden.

#### Link

Link bruger man primært til at specificere hjemmesidens icon, kaldet favicon. Man bruger den også til at hente en ekstern CSS fil. Også bruger man den til at hente andre fonttyper fra internettet.

```html
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="favicon.ico" type="image/png">
```

#### CSS Style

Style og CSS i form af både `<style>` elementer og `<link>` elementer, skal gerne være i `<head>` elementet,
og holdes ADSKILDT fra `<body>` elementet. Der kommer fra gamle dage, og er noget man kalder en 'Best Practice'.

#### Script JavaScript

JavaScript importeres i HTML med `<script>` elementet. Det gør man ALTID i bunden, for at JavaScripten bliver kørt efter man har loadet alt HTML'en.

## Kapitel 2 Style CSS

