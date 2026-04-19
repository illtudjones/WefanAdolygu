# Egwyddorion Rhaglennu

## Newidynnau a chysonion

- Mae **newidyn** yn lleoliad storio â enw y gall ei werth newid tra bo'r rhaglen yn rhedeg.
- Mae **cysonyn** yn werth â enw sydd wedi'i osod unwaith ac na ellir ei newid yn ystod gweithrediad.
- Arfer da yw rhoi enwau ystyrlon i newidynnau a chysonion.

## Mathau o ddata

| Math o ddata | Disgrifiad | Enghraifft |
|--------------|------------|------------|
| **Cyfanrif** | Rhif cyfan (positif neu negatif) | `42`, `-7` |
| **Real / Pwynt arnawf** | Rhif â phuwynt degol | `3.14`, `-0.5` |
| **Boole** | Gwir neu Gau yn unig | `Gwir` |
| **Nod** | Nod sengl | `'A'`, `'3'` |
| **Llinyn** | Dilyniant o nodau | `"Helo"` |

Rhaid dewis y math data cywir ar gyfer pob darn o ddata — mae defnyddio'r math anghywir yn gwastraffu cof neu'n achosi gwallau.

## Gweithredyddion

**Gweithredyddion rhifyddol:** `+` `-` `*` `/` `MOD` (gweddill) `DIV` (rhaniad cyfanrif)

**Gweithredyddion cymharu:** `=` `≠` `<` `>` `≤` `≥`

**Gweithredyddion rhesymegol:** `AND` `OR` `NOT`

**Gweithredydd llinyn:** `&` neu `+` ar gyfer cydgadwyno — uno llinynnau at ei gilydd.

## Dilyniant

- Caiff cyfarwyddiadau eu gweithredu **un ar ôl y llall** yn y drefn y'u hysgrifennwyd.
- Dyma lif rhagosodedig unrhyw raglen.

## Detholiad

- Mae detholiad yn caniatáu i raglen ddewis rhwng gwahanol lwybrau yn seiliedig ar amod.

**Datganiad IF:**
```
IF sgôr >= 50 THEN
    PRINT "Llwyddo"
ELSE
    PRINT "Methu"
END IF
```

**Datganiad CASE / SELECT** — defnyddir pan fo un newidyn yn cael ei brofi yn erbyn llawer o werthoedd posibl:
```
CASE gradd OF
    'A': PRINT "Ardderchog"
    'B': PRINT "Da"
    OTHERWISE: PRINT "Gweld yr athro"
END CASE
```

## Ailadroddiad (dolenni)

Mae ailadroddiad yn ailadrodd bloc o god. Mae tri math:

**Wedi'i reoli gan gyfrif (dolen FOR)** — yn ailadrodd nifer penodol o weithiau:
```
FOR i = 1 TO 10
    PRINT i
NEXT i
```

**Wedi'i reoli gan amod (dolen WHILE)** — yn ailadrodd tra bo amod yn wir, wedi'i wirio **cyn** pob ailadroddiad:
```
WHILE ateb <> "ie"
    INPUT ateb
END WHILE
```

**Ôl-amod (REPEAT…UNTIL)** — yn ailadrodd nes bo amod yn wir, wedi'i wirio **ar ôl** pob ailadroddiad (yn rhedeg o leiaf unwaith):
```
REPEAT
    INPUT ateb
UNTIL ateb = "ie"
```

## Is-raglenni

Is-raglen yw bloc ailadroddadwy o god â enw y gellir ei alw o rywle arall yn y rhaglen.

- Mae **gweithdrefnau** yn cyflawni gweithred ond nid ydynt yn dychwelyd gwerth.
- Mae **ffwythiannau** yn cyflawni gweithred ac yn **dychwelyd** gwerth.

```
FUNCTION sgwâr(n)
    RETURN n * n
END FUNCTION
```

**Manteision is-raglenni:**
- Osgoi ailadrodd yr un cod (ailddefnyddio cod)
- Gwneud rhaglenni'n fyrrach ac yn haws i'w darllen
- Haws profi a dadfygio adrannau unigol
- Gellir eu hailddefnyddio ar draws rhaglenni lluosog

## Paramedrau ac ansoddeiriau

- Mae **paramedr** yn enw'r newidyn a ddefnyddir yn niffiniad yr is-raglen.
- Mae **ansoddair** yn werth gwirioneddol a drosglwyddir wrth alw'r is-raglen.
- Mae **newidynnau lleol** yn bodoli dim ond o fewn yr is-raglen ac yn cael eu dinistrio pan ddaw i ben.
- Mae **newidynnau byd-eang** yn hygyrch drwy gydol y rhaglen gyfan.

Mae defnyddio newidynnau lleol yn well gan ei fod yn osgoi sgil-effeithiau anfwriadol ar weddill y rhaglen.
