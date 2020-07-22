---
layout: info
title:  "FAQ"
categories: jekyll update
tag: info
permalink: /fi/faq/
---

## Saako testeissä käyttää valmista kirjastoa "X"?

Kyllä.

## Saako käyttöliittymässä käyttää valmista kirjastoa "Y"?

Kyllä.

Kannattaa varmistaa että erottelu käyttöliittymän ja varsinaisen projektin välillä on selkeä ja jättää käyttöliittymä pois testikaattavuudesta.

## Saako tiedostojen lukemiseen / kirjoittamiseen käyttää valmista kirjastoa "Z"?

Kyllä.

Kannattaa "piilottaa" kirjaston käyttö omaan "I/O" luokkaan joka on ainoa jossa on kirjaston "Z" importti.

## Saako javan rajapintoja käyttää?

Kyllä. Tosin monissa tapauksissa tämä ei ole erityisen käytännöllistä.

Esimerkiksi javan `List` sisältää paljon ominaisuuksia, mitä ei itse toteutetulla listalla tarvita. Lisäksi `List` on geneerinen tietorakenne, mikä javassa tarkoittaa että `List` rajapintaan perustuva oma toteutus ei voi ikinä olla yhtä nopea kuin kokonaisluvuille kovakoodattu rakenne. (Ellei kokonaislukujen käsittelyä ole erikseen koodattu toteutukseen.)

## Pitääkö tietorakenteiden olla geneerisiä?

Ei.

## Saako javan funktionaalisia ominaisuuksia (stream) käyttää?

Ehkä. 

Näiden käyttäminen tiralabran tyyppisessä projektissa on monesti epäkäytännöllistä näiden rakenteiden hitaudesta johtuen.

Nämä toki ovat sallittuja ainakin testeissä ja käyttöliittymäkoodissa.

## Saako `String` luokan funktioita / metodeita käyttää?

`lenght()` on oikeastaan pakko sallia.

Muita sallittuja on ainakin `charAt()`, `toCharArray()`, `getBytes()`, `equals()`.

Yleisesti korkeamman tason funktioita ei sallita, sillä ne piilottavat epätriviaalia toiminnallisuutta. Toki kannattaa kysyä jos on jotain epäselvää.

Toki käyttöliittymäkoodissa myös `String` luokan kaikkea toiminnallisuutta saa (ja kannattaa) käyttää.

## Onko `System.arraycopy` sallittu?

Ks. alla.

## Saako `Arrays` luokan funktioita / metodeita käyttää?

Lähtökohtaisesti ei. Tosin esimerkiksi taulukon kopiointi käyttämättä `System.arraycopy` funktiota voi olla niin paljon hitaampaa että taulukon kopiointi muodostuu algoritmissa pullonkaulaksi mikä ei ole tarkoituksenmukaista. Tällöin kannattaa dokumentoida suorituskykyero ja käyttää valmista `arraycopy` funktiota projektissa.

Sama voi päteä myös joillekin `Arrays` funktioille / metodeille?

Järjestäminen standardikirjaston funktioilla ei ole sallittua, paitsi testi- ja käyttöliittymäkoodissa.

## Saako käyttää javan `Random` luokkaa?

Ei oikeastaan. 

Yksittäisiä satunnaislukuja on helppo generoida vaikka `System.nanoTime() % n` -komennolla. Ja vähän kehittyneempää tarvetta varten ei ole hirvittävän hankalaa totueuttaa esim. "[Mersenne twister](https://en.wikipedia.org/wiki/Mersenne_Twister)".

Yleisesti javan random luokan jättämisesestä lopputoteutukseen ei todennäköisesti ihan hirvittävästi rankaista etenkin jos tämä on hyvin perusteltu dokumentaatiossa.

## Saako käyttää javan valmiita `Math` funktioita?

Tavallaan ei. Mutta vähän riippuen tapauksesta se voi olla käytännössä välttämätöntä.

* `n = min(a, b);` on sama kuin `n = a < b ? a : b;`. Eli ei juurikaan syytä käyttää valmista.
* `n = max(a, b);` on sama kuin `n = a > b ? a : b;`. Eli ei juurikaan syytä käyttää valmista.
* `n = abs(n);` on sama kuin `n = n > 0 ? n : -n;`. Eli ei juurikaan syytä käyttää valmista.
* `Math.Pi` on oleellisesti vain vakio, joten siihen on turha erikseen käyttää importtia ellei se muutenkin ole käytössä.
* **Logaritmeja** on käytännössä mahdoton toteuttaa itse yhtä tehokkaasti kuin javan standardikirjastossa. Optimi olisi että testaat omalla ratkaisulla ja raportoit kuinka paljon hitaampi se on kuin valmis ratkaisu, ja lopullisessa versiossa käytät valmista versiota jos nopeusero on merkittävä. (Kirjoita tästä dokumentaatioon.)
* **Neliöjuurilla** on sama tilanne kuin logaritmeilla.
* **Sin**, **Cos**, **Tan**. Trigonometrisissä funktioissa täysin sama kun logaritmeissa ja neliöjuuressa.


## Mikä on helpoin aihe jolla kurssista pääsee läpi / saa vitosen?

Tämä on todella henkilökohtaista, eri henkilöille erilaiset projektit ovat erilailla haastavia.

Tyypillisesti reittialgoritmivertailut, pakkausalgoritmit ja luolastogeneraattorit ovat olleet yksinkertaisemmasta päästä.

* Reitinhaku [Movin ai labs](https://movingai.com/benchmarks/grids.html) 2d kartoilla, käyttäen BFS ja/tai Dijkstra sekä A* pääsee läpi. Lisäämällä JPS on hyvällä toteutuksella hyvät saumat vitoseen.
* Huffman tai jonkun LZ pakkauksen toteuttamalla hyvin pääsee läpi. Toteuttamalla molemmat (tai jotain muuta lisäksi) on hyvät saumat vitoseen.
* Luolastojen tai karttojen generointi parilla erilaisella algoritmilla riittää aika helposti läpipääsyn ja on suhteellisen yksinkertaisesti laajennettavissa vitosen arvoiseen suoritukseen.

Kannattaa keskustella ohjaajan kanssa.

## Voiko kieleksi valita C/C++/Rust/Fortran...?

Matalan tason kielissä testaaminen ja testikattavuuden seuraaminen voi olla hankalaa. Ei suositella ellei ole hyvin perehtynyt kyseiseen kieleen ja valmis selvittämään miten kattavuudet saa esim. Codecoviin.

Koodikatselmointien kanssa voi tulla ongelmia ja voi olla että niistä jää pisteet saamatta.

Puhu joka tapauksessa ohjaajan kanssa *ennen ekaa palautusta*!

## Voiko kieleksi valita Pythonin?

Tämä voi olla jopa suositeltavaa jos aihe on todella hankala. Esimerkiksi neuroverkkoja toteuttaessa on usein hyvä idea käyttää (numpyn) valmiita matriisilaskentakirjastoja jopa loppupalautuksessa. Pythonin valmiita lista/joukko/HashMap toteutusta ei yleensä kannata lähteä korvaamaan, joten projektissa täytyy olla riittävästi sisältöä jopa jos nämä ovat annettu.

Joka tapauksessa tätä ei suositella ellei python ole entuudestaan hyvin tuttu (myös testaamisen ja testikattavuuksien generoinnin osalta).

Koodikatselmoinnista voi kielivalinnan takia jäädä pisteitä saamatta.

Puhu joka tapauksessa ohjaajan kanssa *ennen ekaa palautusta*!

## Voiko kieleksi valita JavasCriptin?

Jäsä tuntuu jostain syystä soveltuvan yllättävän hyvin tiralabrakieleksi. Kuitenkin jäsän kirjoittamisen, testaamisen ja testikattavuuden seuraamisen olisi syytä olla entuudestaan tuttua.

Koodikatselmoinnista voi kielivalinnan takia jäädä pisteitä saamatta.

Puhu joka tapauksessa ohjaajan kanssa *ennen ekaa palautusta*!

## Voiko kieleksi valita Pascal/APL/ADA/Piet/PHP/...?

Ei suositella. Voit kysyä ohjaajalta *ennen ekaa palautusta*!

## Mitä pitää yksikkötestata?

Kaikki paitsi käyttöliittymä, suorituskykytestit ja mahdollisesti tiedostojen luku ja kirjoittaminen riippuen projektista.

## Mikä kattavuus pitää olla prosentteina että on riittävästi?

Mitään prosenttimääräisiä tavoitteita ei ole asetettu syystä. On hyvin mahdollista tuottaa 100% kattavuus huonosti testatulle koodille, ja vastaavasti voi olla että 50% kattavuus on täysin riittävä. Yleisesti, mitä korkeampi - sitä parempi.

Kannattaa kirjoittaa mahdollisimman pieniä yksikkötestejä mahdollisimman paljon. Ideana olisi että jos koodissa on virhe, tulisi vähintään yhden testit havaita se, ja virheen kohta koodissa tulisi olla mahdollisimman selkeä.

## Mihin suorituskykytestit pitää laittaa?

Suorituskykytestejä ei kannata tehdä yksikkötesteiksi. Jos yksikkötestien suorittamiseen menee useita minuutteja, ei testejä usein jakseta ajaa tarpeeksi usein. Vastaavasti jos suorituskykytestien ajamiseen menee alle minuutti, on aika todennäköistä että testit eivät ole riittäviä.

Kannattaa siis tehdä oma paketti suorituskykytesteille. Ks. esim. [esimerkkiprojekti](https://github.com/TiraLabra/Testing-and-rmq/tree/master/src/main/java/rmq/util).
