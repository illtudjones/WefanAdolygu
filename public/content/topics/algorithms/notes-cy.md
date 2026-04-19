## Beth yw Algorithm?

Mae **algorithm** yn set o gyfarwyddiadau cam-wrth-gam er mwyn datrys problem. Rhaid iddo:
- Fod yn glir ac yn ddi-amwys
- Gynnwys camau gorffenol
- Gynhyrchu canlyniad cywir

### Cynrychiolaeth Algorithmau

Gellir mynegi algorithmau mewn dwy brif ffordd:

**Siart llif** — diagram gweledol yn defnyddio symbolau safonol:
- Petryal — prosesu
- Diemwnt — penderfyniad (ie/na)
- Owlong/parallelogram — mewnbwn/allbwn
- Hirgrwn — dechrau/diwedd

**Cod ffug (pseudocode)** — cod tebyg i Saesneg / Gymraeg sy'n cynrychioli'r algorithm heb fod yn iaith benodol

---

## Cod Ffug CBAC

Mae CBAC yn defnyddio confensiynau penodol ar gyfer cod ffug yn yr arholiad:

```
RHAGLEN EnghraifftAlgorithm
  # Datganiad newidynnau
  cyfanswm ← 0
  
  # Dolen
  AR GYFER i ← 1 I 10
    cyfanswm ← cyfanswm + i
  NESAF i
  
  ALLBWN cyfanswm
DIWEDD RHAGLEN
```

### Strwythurau Allweddol

| Strwythur | Cod Ffug CBAC |
|-----------|---------------|
| Aseinio | `newidyn ← gwerth` |
| Mewnbwn | `MEWNBWN newidyn` |
| Allbwn | `ALLBWN mynegiant` |
| Os | `OS amod YNA ... ARALL ... DIWEDD OS` |
| Tra | `TRA amod GWNEUD ... DIWEDD TRA` |
| Ar gyfer | `AR GYFER i ← 1 I 10 ... NESAF i` |
| Tanysgrifio | `arae[0]`, `arae[rhes][colofn]` |

---

## Cynllunio Algorithmau

### Isrhalenni (Subroutines)
- Mae **isrhalenni** yn ddarnau o god y gellir eu hailddefnyddio
- Maent yn gwella **darllenadwyedd** a **chadwadwyedd**
- Mathau: **gweithdrefnau** (dim gwerth dychwelyd) a **ffwythiannau** (yn dychwelyd gwerth)

### Newidynnau Lleol a Byd-eang
- Mae **newidyn lleol** yn bodoli dim ond y tu mewn i isrhaglen
- Mae **newidyn byd-eang** yn hygyrch drwy'r rhaglen gyfan
- Dylid defnyddio newidynnau lleol lle bo modd i osgoi gwrthdrawiadau

### Defnyddio Cyfrifwyr a Gwerthoedd Twyll
- Mae **cyfrifwr** yn cyfrif pa sawl tro mae rhywbeth yn digwydd
- Mae **gwerth twyll** yn nodi diwedd mewnbwn (e.e. `-1` i orffen dolen)

---

## Chwiliad Llinol (Linear Search)

Mae'r **chwiliad llinol** yn edrych drwy bob eitem yn y drefn nes dod o hyd i'r un sy'n cael ei chwilio.

```
RHAGLEN ChwiliadLlinol(rhestr, targed)
  AR GYFER i ← 0 I HYD(rhestr) - 1
    OS rhestr[i] = targed YNA
      ALLBWN i
      GORFFEN
    DIWEDD OS
  NESAF i
  ALLBWN -1  # Heb ei ddarganfod
DIWEDD RHAGLEN
```

### Nodweddion
- **Cymhlethdod:** O(n) — yn gwaethygu'n llinol gyda maint y rhestr
- **Yn gweithio ar:** restrau heb eu trefnu a restrau wedi'u trefnu
- **Gorau ar gyfer:** restrau bach neu ddata heb ei drefnu

---

## Chwiliad Deuaidd (Binary Search)

Mae'r **chwiliad deuaidd** yn rhannu'r rhestr yn ddwy yn barhaus. Rhaid i'r rhestr fod **wedi'i threfnu** ymlaen llaw.

```
RHAGLEN ChwiliadDeuaidd(rhestr, targed)
  isaf ← 0
  uchaf ← HYD(rhestr) - 1
  
  TRA isaf <= uchaf GWNEUD
    canol ← (isaf + uchaf) DIV 2
    OS rhestr[canol] = targed YNA
      ALLBWN canol
      GORFFEN
    ARALL OS rhestr[canol] < targed YNA
      isaf ← canol + 1
    ARALL
      uchaf ← canol - 1
    DIWEDD OS
  DIWEDD TRA
  
  ALLBWN -1  # Heb ei ddarganfod
DIWEDD RHAGLEN
```

### Nodweddion
- **Cymhlethdod:** O(log n) — llawer cyflymach na chwiliad llinol
- **Gofyniad:** Rhaid i'r rhestr fod wedi'i threfnu
- **Enghraifft:** Chwilio am 47 mewn `[10, 23, 31, 47, 58, 69, 74]`

**Cam 1:** canol = 47 (indecs 3) — darganfyddwyd!

---

## Trefniad Bwrlwm (Bubble Sort)

Mae **trefniad bwrlwm** yn cymharu parau cyfagos ac yn cyfnewid os ydynt yn y drefn anghywir.

```
RHAGLEN TrefniadBwrlwm(rhestr)
  n ← HYD(rhestr)
  AR GYFER i ← 0 I n - 2
    AR GYFER j ← 0 I n - 2 - i
      OS rhestr[j] > rhestr[j+1] YNA
        cyfnewid ← rhestr[j]
        rhestr[j] ← rhestr[j+1]
        rhestr[j+1] ← cyfnewid
      DIWEDD OS
    NESAF j
  NESAF i
DIWEDD RHAGLEN
```

**Enghraifft:** Trefnu `[64, 34, 25, 12]`

| Pas | Rhestr |
|-----|--------|
| Cychwyn | 64, 34, 25, 12 |
| Ar ôl Pas 1 | 34, 25, 12, **64** |
| Ar ôl Pas 2 | 25, 12, **34**, 64 |
| Ar ôl Pas 3 | 12, **25**, 34, 64 |

---

## Trefniad Detholiadol (Selection Sort)

Mae **trefniad detholiadol** yn dod o hyd i'r eitem leiaf ac yn ei rhoi yn ei lle cywir.

```
RHAGLEN TrefniadDetholiadol(rhestr)
  n ← HYD(rhestr)
  AR GYFER i ← 0 I n - 2
    lleiaf ← i
    AR GYFER j ← i + 1 I n - 1
      OS rhestr[j] < rhestr[lleiaf] YNA
        lleiaf ← j
      DIWEDD OS
    NESAF j
    # Cyfnewid rhestr[i] a rhestr[lleiaf]
    dros_dro ← rhestr[i]
    rhestr[i] ← rhestr[lleiaf]
    rhestr[lleiaf] ← dros_dro
  NESAF i
DIWEDD RHAGLEN
```

---

## Trefniad Mewnosod (Insertion Sort)

Mae **trefniad mewnosod** yn mewnosod pob eitem yn ei safle cywir yn y rhan sydd eisoes wedi'i threfnu.

**Enghraifft:** Trefnu `[5, 2, 4, 6, 1]`

| Cam | Rhan Wedi Trefnu | Eitem Nesaf |
|-----|-----------------|-------------|
| 1 | `[5]` | 2 → mewnosod cyn 5 |
| 2 | `[2, 5]` | 4 → mewnosod rhwng 2 a 5 |
| 3 | `[2, 4, 5]` | 6 → ychwanegu ar y diwedd |
| 4 | `[2, 4, 5, 6]` | 1 → mewnosod ar y dechrau |
| Diwedd | `[1, 2, 4, 5, 6]` | |

---

## Cymhariaeth Algorithmau Trefnu

| Algorithm | Cymhlethdod Gorau | Cymhlethdod Gwaethaf | Nodyn |
|-----------|------------------|---------------------|-------|
| Bwrlwm | O(n) | O(n²) | Symlaf i'w ddeall |
| Detholiadol | O(n²) | O(n²) | Llai o gyfnewidiadau |
| Mewnosod | O(n) | O(n²) | Da ar gyfer data bron wedi'i drefnu |

---

## Dilysu a Gwireddu Data

### Dilysu (Validation)
Mae **dilysu** yn gwirio a yw data'n bodloni rheolau penodol:

| Math o Ddilysu | Disgrifiad | Enghraifft |
|----------------|-----------|-----------|
| Gwiriad amrediad | A yw'r gwerth rhwng dau rif? | Oedran rhwng 0 a 120 |
| Gwiriad presenoldeb | A yw'r maes wedi'i lenwi? | Maes enw rhaid iddo fod yn anwag |
| Gwiriad hyd | A yw'r llinyn yn hyd cywir? | Cod post 5-8 nod |
| Gwiriad math | A yw'n y math data cywir? | Rhaid i rif fod yn rifiadol |
| Gwiriad fformat | A yw'r patrwm yn cydweddu? | E-bost rhaid iddo gynnwys @ |

### Gwireddu (Verification)
Mae **gwireddu** yn sicrhau bod y data wedi'i fewnbynnu'n gywir:
- **Mewnbwn dwbl** — gofyn i'r defnyddiwr fewnbynnu'r data ddwywaith a chymharu
- **Gwirio prawf (proof-reading)** — defnyddiwr yn gwirio yn weledol

> **Cofiwch:** Gall data fod yn ddilys ond yn anghywir (e.e. dyddiad geni cywir o ran fformat ond wedi'i fewnbynnu'n anghywir). Dim ond cyfeiliornadau mewnbynnu y gall gwireddu eu dal.

