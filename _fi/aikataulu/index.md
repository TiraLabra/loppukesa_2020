---
layout: info
title:  "Aikataulu"
categories: jekyll update
tag: info
permalink: /fi/aikataulu/
---

## <span style="color:red;">HUOM</span>

Vaikka et olisi tehnyt mitään jollakin tietyllä viikolla, kannattaa viikkoraportti kuitenkin kirjoittaa niin että repositoriossa on muutoksia viikon ajalta. Voit jopa saada pisteitä. Muuten pisteitä tulee automaattisesti 0 vaikka projektista olisi muuten mahdollista saada viikkopisteitä.

Kolmen peräkkäisen viikkon ajan muuttumaton repositorio tulkitan kurssin keskeyttämiseksi!

# Viikko 1:

* Palautus 1: **<script>document.write(fiString(timing["dl1"].date));</script>**
    * Aihe, käytettävä ohjelmointikieli ja työn laajuus päätetty.
        * Juttele tarvittaessa ohjaajan kanssa. Jos toteutat jonkin valmiista aiheista Javalla ja kaikki on selvää, voit siirtyä suoraan määrittelydokumentin kirjoittamiseen. Jos haluat toteuttaa työn täysin omasta aiheesta tai erikoisemmalla kielellä, kannattaa asiasta jutella ennen palautuksen tekemistä.
    * Tustustu kurssimateriaaliin. Lue ainakin [dokumentaatio-ohjeet](../dokumentaatio/) tarkkaan.
    * Dokumentaatio: Määrittelydokumentti valmis.
    * Viikkoraportti numero 1: Kirjoitettu ensimmäinen viikkoraportti (ks. [Palautukset](../palautukset/))
	* Katso, että repositoriosi etusivulle on linkattu suoraan viikkoraportit (nopeuttaa tarkastusta huomattavasti). Jos tarvitset apua markdownissa, niin katso GitHubin ohje: [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/). Saat myös apua jos katsot esimerkiksi miten tämä tiedosto on tehty!
    * Projekti: Projekti luotu. Ohjeita tarvittaessa [täältä](../maven-gradle/). Alustettu versionhallinta (Github). Kaikki palautettava lisätään versionhallintaan, sähköpostilla ei palauteta mitään!
    * Salli issuet vertaisarviointia varten, katso [Issueiden luonnin salliminen repoon](../issuet/)
    * Rekisteröidytty kurssille labtoolissa: [https://study.cs.helsinki.fi/labtool/](https://study.cs.helsinki.fi/labtool/)
    * Labtoolin [pikaohje](../labtool/)
    * Jos uskot tarvitsevasi lisämateriaalia ja esimerkkejä testaamisesta ja projektin pystyttämisestä, kannattaa tutustua [testing and rmq](https://github.com/TiraLabra/Testing-and-rmq) projektiin jo tässä vaiheessa.

# Viikko 2:

* Palautus 2: **<script>document.write(fiString(timing["dl2"].date));</script>**
    * [Dokumentaatio](../dokumentaatio/): Kirjoitettu koodi on selkeää ja kommentoitua (esim. Javalla tehdyssä työssä Javadoc-kommentit).
    * Viikkoraportti numero 2: ks. [Palautukset](../palautukset/)
    * Ohjelma: Aloitettu ydinalueen toteutus käyttäen tarvittaessa esim. Javan valmiita tietorakenteita (ArrayList, HashMap yms.). Nämä korvataan myöhemmin omilla tietorakenteilla, mutta useissa tapauksissa ohjelman toteutus on helpompi aloittaa jostain muusta kuin tietorakenteista.
    * Testaus: Koodin *kattava* yksikkötestaus. (esim. Javalla tehdyssä työssä JUnit)
		* Varmista, että kun teet luokkia niin olet myös testannut ne mahdollisimman nopeasti/aikaisin (mieluiten testit samassa palautuksessa, kuin luokat on koodattu). Siten tiedät, että koodi, jonka juuri kirjoitit toimii kuten haluat. Tarvittaessa tutustu [yksikkötestaukseen tukimateriaalissa](https://github.com/TiraLabra/Testing-and-rmq).
    * Olisi erittäin suositeltavaa että jo tässä vaiheessa projektin testikattavuus olisi seurattavissa.
        * Javalla vaihtoehtoina esimerkiksi PIT, jacoco tai codecov. Jotain ohjeita löytyy [täältä](../maven-gradle).
        * Muilla kielillä pitäisi viikoittain laittaa kattavuusraportti jonnekin näkyville. (Esim. codecov tai github pages).
    * Myös checkstyle tai muu vastaava olisi hyvä olla konffattuna jo tässä vaiheessa. Kannattaa jutella ohjaajan kanssa jos laadun seuraamisessa on jotain epäselvää. 

# Viikko 3:

* Palautus 3: **<script>document.write(fiString(timing["dl3"].date));</script>**
    * [Dokumentaatio](../dokumentaatio/): Kirjoitettu koodi selkeää ja kommentoitua.
    * Viikkoraportti numero 3
    * Ohjelma: Ohjelman ydinalue edennyt, aloitettu mahdollisesti jo omien tietorakenteiden toteutus.
    * Testaus: Koodin *kattava* yksikkötestaus.
    * Viimeistään tässä vaiheessa testikattavuuden olisi oltava käytettävissä viikkotarkastuksissa.
    * Viimeistään tässä vaiheessa checkstylen tai vastaavan koodin laadun seurannan tulisi olla käytössä.

# Viikko 4:

* Ensimmäiset vertaisarvioinnit jaetaan viikon palautuksen jälkeen. Katso [labtoolista](https://study.cs.helsinki.fi/labtool/) linkki katselmoitavaan repoon. **Vertaisarvionnin deadline on sama kuin viikon 5 deadline.**
* Ohjeet vertaisarviointiin [täällä](../vertaisarvioinnit/)
* Salli issuet vertaisarviointia varten, katso [Issueiden luonnin salliminen repoon](../issuet/)

* Palautus 4: **<script>document.write(fiString(timing["dl4"].date));</script>**
    * [Dokumentaatio](../dokumentaatio/): Koodi kommentoitua. Aloitettu kirjoittamaan toteutus- ja testausdokumentaatiota.
    * Viikkoraportti numero 4
    * Ohjelma: Ohjelman ydintoiminta valmis. Omia tietorakenteita aloitettu.
    * Testaus: Koodin *kattava* yksikkötestaus. Aloitettu suorituskyky- tai muu aiheeseen sopiva testaus (kirjoita näistä testausdokumenttiin).

# Viikko 5:

* Toiset vertaisarvioinnit jaetaan viikon palautuksen jälkeen. Katso [labtoolista](https://study.cs.helsinki.fi/labtool/) linkki katselmoitavaan repoon. **Vertaisarvionnin deadline on sama kuin DL 6.**

* Palautus 5: **<script>document.write(fiString(timing["dl5"].date));</script>**
   * Ensimmäinen vertaisarviointi tehtynä (Löydät linkin katselmoitavaan repoon [labtoolista](https://study.cs.helsinki.fi/labtool/))
   * [Dokumentaatio](../dokumentaatio/): Koodi kommentoitua. Aloitettu kirjoittamaan toteutus- ja testausdokumentaatiota.
   * Viikkoraportti numero 5
   * Ohjelma: Ohjelman ydintoiminta valmis. Omia tietorakenteita aloitettu.
   * Testaus: Koodin *kattava* yksikkötestaus. Aloitettu suorituskyky- tai muu aiheeseen sopiva testaus.

# Viikko 6:

* Palautus 6: **<script>document.write(fiString(timing["dl6"].date));</script>**
   * **Toinen vertaisarviointi tehtynä** (löydät linkin katselmoitavaan repoon [labtoolista](https://study.cs.helsinki.fi/labtool/))
   * [Dokumentaatio](../dokumentaatio/): Kirjoitettu koodi kommentoitua. Toteutus- ja testausdokumentaatiota kirjoitettu.
   * Viikkoraportti numero 6
   * Ohjelma: Tietorakenteet ja algoritmit toteutettu itse.
   * Testaus: Koodin *kattava* yksikkötestaus. Suorituskykytestausta tehty.

# Demotilaisuus:

<ul>
  <li id="demo" />
  <li>Mahdollisuus esittää koulun koneelta, mutta aiemmin sen kanssa on ollut ongelmia joten suositeltavaa ottaa oma läppäri.</li>
  <li>Lyhyt noin 5 minuuttinen esitys ja mahdollisiin kysymyksiin vastailu (riippuen aikataulusta).</li>
</ul>

<script>
  var elem = document.getElementById("demo");
  if (timing["demo2"]) {
    elem.innerHTML = "Paikat ja ajat:";
    var ulelem = document.createElement("ul");
    Object.keys(timing).filter(name => name.startsWith("demo")).map(name => fiEvent(timing[name])).forEach(ev => {
      var lielem = document.createElement("li");
      lielem.innerHTML = ev;
      ulelem.appendChild(lielem);
    })
    elem.appendChild(ulelem);
  } else if (timing["demo"]) {
    elem.innerHTML = "Paikka ja aika: " + fiEvent(timing["demo"]) + ".";
  } else {
    elem.innerHTML = "Aika ja paikka vahvistuvat myöhemmin.";
  }
</script>

# LOPULLINEN PALAUTUS

**<script>document.write(fiString(timing["end"].date));</script>**

* **Dokumentaatio:**
    * 100% selkeää ja kommentoitu koodi
    * Valmiit dokumentit:
        * Määrittelydokumentti (ei tarvitse päivittää alkuperäisestä)
        * Toteutusdokumentti
        * Testausdokumentti
        * Viikkoraportit
        * Käyttöohje

* **Ohjelma:**
    * Mielellään suoritettava ohjelma [github releasena](https://help.github.com/en/articles/creating-releases) (esim. jar-tiedosto)
    * Kaikki tietorakenteet ja algoritmit toteutettu itse
    * Työ valmis ja hiottu

* **Testaus:**
    * Koodin *kattava* yksikkötestaus
    * Dokumentoitu ohjelman testaus testausdokumenttiin
    * Graafinen esitys esim. aikavaativuuksien toteutumisesta empiirisen testauksen perusteella
