---
id: "data-representation"
title: "Mathau Data, Cynrychiolaeth a Chywasgu"
description: "Systemau rhifiadol, codio cymeriad, graffeg, sain, ac unedau data"
category: "core"
difficulty: "intermediate"
estimatedMinutes: 55
specSection: "1.2.1"
prerequisites: []
tags: ["deuaidd", "hecsadegol", "ascii", "unicode", "cywasgu"]
lastUpdated: "2026-04-19"
---

## Mathau Data

| Math Data | Disgrifiad | Enghraifft |
|-----------|-----------|-----------|
| Cyfanrif | Rhif cyfan, positif neu negatif | 42, -7, 0 |
| Real | Rhif degol | 3.14, -0.5 |
| Nod (Cymeriad) | Nod sengl | 'A', '5', '?' |
| Llinyn | Dilyniant o nodau | "Helo Byd" |
| Boole | Gwerth gwir/anghywir | GWIR, ANGHYWIR |

---

## Systemau Rhifiadol

### System Ddeuaidd (Bas 2)
Dim ond dau symbol: **0** a **1**. Mae pob safle yn cynrychioli pŵer o 2.

| Pŵer | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|------|----|----|----|----|----|----|----|----|
| Gwerth | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Enghraifft:** `01101010` = 64 + 32 + 8 + 2 = **106** (degol)

### Trosi Degol i Ddeuaidd
Rhannwch yn barhaus â 2 a chofnodwch y gweddill:

```
106 ÷ 2 = 53 gweddill 0
53  ÷ 2 = 26 gweddill 1
26  ÷ 2 = 13 gweddill 0
13  ÷ 2 = 6  gweddill 1
6   ÷ 2 = 3  gweddill 0
3   ÷ 2 = 1  gweddill 1
1   ÷ 2 = 0  gweddill 1
Darllen o'r gwaelod: 1101010 = 01101010
```

---

## System Hecsadegol (Bas 16)

Mae hecsadegol yn defnyddio 16 symbol: **0-9** ac **A-F** (lle mae A=10, B=11, C=12, D=13, E=14, F=15).

| Degol | Deuaidd | Hecsadegol |
|-------|---------|------------|
| 0 | 0000 | 0 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 15 | 1111 | F |
| 16 | 0001 0000 | 10 |
| 255 | 1111 1111 | FF |

### Pam Defnyddio Hecsadegol?
- Mae'n **llai trwsgl** na deuaidd (2 ddigid hex = 8 did deuaidd)
- Defnyddir ar gyfer **cyfeiriadau cof**, **lliwiau HTML**, a **godau gwall**
- Enghraifft: `#FF8800` = oren (R=255, G=136, B=0)

### Trosi Deuaidd i Hecsadegol
Rhannwch yn grwpiau o 4 did o'r dde:

```
11010110  →  1101  0110
              D     6
Felly: 11010110₂ = D6₁₆
```

---

## Adio Deuaidd

Rheolau adio:
- `0 + 0 = 0`
- `0 + 1 = 1`
- `1 + 1 = 0` (cario 1)
- `1 + 1 + 1 = 1` (cario 1)

**Enghraifft:**
```
  00110101  (53)
+ 00011010  (26)
----------
  01001111  (79)
```

### Gorlif (Overflow)
Mae **gorlif** yn digwydd pan fo canlyniad adio'n rhy fawr i'w gynrychioli yn nifer y didau sydd ar gael. Enghraifft: adio dau rif 8-did sy'n cynhyrchu 9 did.

---

## Sifftiau Rhifyddol

Mae **sifft rhifyddol** yn symud pob did i'r chwith neu'r dde:

| Gweithrediad | Effaith |
|-------------|--------|
| Sifft chwith × 1 | Lluosi â 2 |
| Sifft dde × 1 | Rhannu â 2 |

```
00001010 (10)
Sifft chwith → 00010100 (20) — lluosi â 2
Sifft dde  → 00000101 (5)  — rhannu â 2
```

---

## Codio Cymeriad

### ASCII
- Mae **ASCII** (Cod Safonol Americanaidd ar gyfer Cyfnewid Gwybodaeth) yn cynrychioli 128 nod
- Mae pob nod yn cael ei storio mewn **7 did** (neu 1 beit gyda 0 yn flaenlaf)
- Rhif ASCII 'A' = 65, 'a' = 97, '0' = 48

### Unicode
- Mae **Unicode** yn cynrychioli dros 140,000 o nodau o ieithoedd ledled y byd
- Mae **UTF-8** yn defnyddio 1-4 beit y nod
- Mae **UTF-16** yn defnyddio 2 neu 4 beit y nod
- Mae Unicode yn cynnwys ASCII (mae'r 128 nod cyntaf yn hafal)

**Manteision Unicode dros ASCII:**
- Cefnogi llawer mwy o nodau (gan gynnwys nod Cymraeg, Mandarin, arabeg, ac ati)
- Safonol ar draws holl systemau'r byd

---

## Storio Graffeg

### Graffeg Rasdr (Bitmap)
Mae delweddau rasdr yn cael eu storio fel grid o **bicseli**.

**Termau Allweddol:**
- **Cydraniad** — nifer y picseli lled × uchder (e.e. 1920×1080)
- **Dyfnder lliw (colour depth)** — nifer y didau y picsel (e.e. 24-did = 16.7 miliwn o liwiau)
- **Dyfnder did** — yr un peth â dyfnder lliw

**Cyfrifo Maint Ffeil:**
```
Maint (didau) = Cydraniad × Dyfnder Lliw
             = (lled × uchder) × didau y picsel

Enghraifft: 800 × 600 × 24 did = 11,520,000 did = 1,440,000 beit ≈ 1.37 MB
```

---

## Storio Sain

Mae sain yn cael ei droi'n ddigidol drwy **samplu**.

**Termau Allweddol:**
- **Cyfradd samplu** — nifer y samplau y eiliad (Hz); mwy = well ansawdd
- **Dyfnder samplu (bit depth)** — nifer y didau y sampl; mwy = more mireinder
- CD: 44,100 Hz, 16-did

**Cyfrifo Maint Ffeil:**
```
Maint (didau) = Cyfradd Samplu × Dyfnder Samplu × Hyd (eiliadau) × Sianeli

Enghraifft (1 funud, stereo CD):
= 44,100 × 16 × 60 × 2 = 84,672,000 did ≈ 10 MB
```

---

## Unedau Data

| Uned | Symbol | Maint |
|------|--------|-------|
| Did | b | 0 neu 1 |
| Nibl | — | 4 did |
| Beit | B | 8 did |
| Cilbeit | KB | 1,024 beit |
| Megabeit | MB | 1,024 KB |
| Gigabeit | GB | 1,024 MB |
| Terabeit | TB | 1,024 GB |
| Petabeit | PB | 1,024 TB |

> **Nodyn:** Weithiau defnyddir 1 KB = 1,000 beit mewn marchnata (e.e. ar ddisgiau caled), ond yn y cwrs hwn defnyddir 1 KB = 1,024 beit.

---

## Cywasgu Data

### Cywasgu Colledus (Lossy Compression)
- Mae data yn cael ei **golli'n barhaol** — ni ellir adfer y ffeil wreiddiol
- Mae ansawdd yn lleihau ond mae'r lleihad maint yn fwy sylweddol
- **Enghreifftiau:** JPEG (delweddau), MP3 (sain), MP4 (fideo)

### Cywasgu Di-golled (Lossless Compression)
- Gellir **adfer y ffeil wreiddiol yn union**
- Mae lleihad maint yn llai na chywasgu colledus
- **Enghreifftiau:** PNG (delweddau), FLAC (sain), ZIP (ffeiliau)

### Cyfrifo Cymhareb Cywasgu
```
Cymhareb Cywasgu = Maint Gwreiddiol / Maint Wedi Cywasgu

Enghraifft: 10 MB → 2 MB
Cymhareb = 10 / 2 = 5:1
```

### Pryd i Ddefnyddio Pa Fath?
| Sefyllfa | Math Gorau |
|----------|-----------|
| Lluniau ffotograffig ar y we | Colledus (JPEG) |
| Graffeg gyda llinellau miniog | Di-golled (PNG) |
| Archifio ffeiliau pwysig | Di-golled (ZIP) |
| Ffrydio cerddoriaeth | Colledus (MP3) |
| Mastering sain stiwdio | Di-golled (FLAC) |

