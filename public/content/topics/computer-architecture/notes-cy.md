## Y System Gyfrifiadurol

Mae system gyfrifiadurol yn cynnwys **caledwedd** a **meddalwedd** sy'n gweithio gyda'i gilydd. Mae caledwedd yn cyfeirio at y cydrannau ffisegol, tra bod meddalwedd yn cyfeirio at raglenni a data.

### Cydrannau Allweddol

| Cydran | Disgrifiad |
|--------|------------|
| Uned Brosesu Ganolog (UBG) | "Ymennydd" y cyfrifiadur — yn cyflawni cyfarwyddiadau |
| Cof Mynediad ar Hap (RAM) | Storio dros dro, cyflymu; yn colli data pan ddiffoddwch |
| Cof Darllen yn Unig (ROM) | Storio parhaol sy'n dal gwybodaeth gychwyn y system |
| Storfa Eilaidd | Storfa barhaol (HDD, SSD, optegol, cwmwl) |
| Bwrdd Mam | Y brif bwrdd cylchredol sy'n cysylltu pob cydran |
| Cyflenwad Pŵer (PSU) | Yn trosi trydan AC i DC ar gyfer y system |
| Cerdyn Graffeg (GPU) | Yn prosesu graffeg a delweddau; gyda VRAM ei hun |

---

## Pensaernïaeth Von Neumann

Mae **pensaernïaeth Von Neumann** yn sail i gyfrifiaduron modern. Mae'n seiliedig ar y syniad bod cyfarwyddiadau a data ill dau yn cael eu storio yn yr un cof.

### Egwyddorion Allweddol
- Mae rhaglenni a data yn cael eu storio yn yr **un cof** (RAM)
- Mae cyfarwyddiadau'n cael eu nôl a'u gweithredu fesul un
- Mae'r UBG yn cynnwys yr ALU, CU, a chofrestri

### Cydrannau'r UBG

| Cydran | Enw Cymraeg | Swyddogaeth |
|--------|-------------|-------------|
| CU | Uned Rheoli | Yn trefnu ac yn cyfarwyddo gweithrediad y cyfrifiadur |
| ALU | Uned Rifyddeg-Resymeg | Yn cyflawni cyfrifiadau ac operasiynau rhesymeg |
| PC | Rhifydd Rhaglen | Yn dal cyfeiriad y cyfarwyddyd nesaf |
| CIR | Cofrestr Cyfarwyddyd Presennol | Yn dal y cyfarwyddyd cyfredol sy'n cael ei weithredu |
| ACC | Croniadur | Yn storio canlyniad dros dro cyfrifiad yr ALU |
| MAR | Cofrestr Cyfeiriad Cof | Yn dal cyfeiriad y data neu'r cyfarwyddyd i'w nôl |
| MDR | Cofrestr Data Cof | Yn dal y data sy'n cael ei ddarllen o'r cof neu ei ysgrifennu iddo |

---

## Cylchred Nôl-Datgod-Gweithredu

Mae'r UBG yn ailadrodd y cylchred hon yn barhaus:

### 1. Nôl (Fetch)
- Mae cynnwys y **Rhifydd Rhaglen (PC)** yn cael ei gopïo i'r **Cofrestr Cyfeiriad Cof (MAR)**
- Mae'r cyfarwyddyd yn cael ei nôl o gof yn y cyfeiriad hwnnw i'r **Cofrestr Data Cof (MDR)**
- Mae'r cyfarwyddyd yn cael ei gopïo o'r MDR i'r **Cofrestr Cyfarwyddyd Presennol (CIR)**
- Mae'r **PC** yn cynyddu 1 i bwyntio at y cyfarwyddyd nesaf

### 2. Datgod (Decode)
- Mae'r **Uned Rheoli (CU)** yn dehongli'r cyfarwyddyd yn y CIR
- Mae'n nodi pa weithrediad i'w gyflawni a pha ddata i'w ddefnyddio

### 3. Gweithredu (Execute)
- Mae'r cyfarwyddyd yn cael ei gyflawni (e.e. cyfrifo, llwytho, storio)
- Mae'r **ALU** yn cyflawni unrhyw gyfrifiadau
- Gall canlyniadau gael eu storio yn y **Croniadur (ACC)** neu'n ôl yn y cof

---

## Perfformiad yr UBG

Mae sawl ffactor yn effeithio ar ba mor gyflym y mae'r UBG yn gweithio:

### Buanedd Cloc
- Wedi'i fesur mewn **GHz** (gigahertz)
- Mae cloc uwch yn golygu mwy o gylchredi y eiliad
- Mae **1 GHz = 1,000,000,000 cylchred yr eiliad**
- Cyfyngir buanedd uchaf gan wres sy'n cael ei gynhyrchu

### Nifer y Craidd
- Mae cyfrifiaduron modern yn cynnwys UBGau **aml-graidd**
- Gall pob craidd brosesu tasgau yn annibynnol
- Mae **dau graidd** yn gallu gwneud dwy dasg ar yr un pryd (prosesu cyfochrog)
- Nid yw pob rhaglen yn manteisio'n llawn ar aml-graidd

### Storfa Gudd (Cache)
- Mae **storfa gudd** yn gof cyflym iawn rhwng yr UBG a RAM
- Mae storfa gudd **L1** yn gyflymaf ond yn lleiaf (kilobytes)
- Mae storfa gudd **L2** yn fwy ond ychydig yn arafach
- Mae storfa gudd **L3** yn fwy fyth ac yn rhannu rhwng craidd

> Wrth gynyddu'r buanedd cloc neu nifer y craidd, mae'r cyfrifiadur yn gallu prosesu mwy o ddata yn yr un amser.

---

## Storfa Gynradd

Mae **storfa gynradd** yn cael ei defnyddio'n uniongyrchol gan yr UBG ac mae'n gyflymach na storfa eilaidd.

### RAM — Cof Mynediad ar Hap
- Mae data yn cael ei golli pan ddiffoddwch (anweddol)
- Yn storio rhaglenni a data sydd ar ddefnydd ar hyn o bryd
- Mwy o RAM = gall mwy o raglenni redeg ar yr un pryd
- **DRAM** (RAM Deinamig) — angen ei adnewyddu'n rheolaidd
- **SRAM** (RAM Statig) — cyflymach, drutach, a ddefnyddir ar gyfer storfa gudd

### ROM — Cof Darllen yn Unig
- Yn parhau pan ddiffoddwch (anweddol)
- Yn dal y **BIOS/firmware** — cod cychwyn y cyfrifiadur
- Nid yw'n bosibl (fel arfer) ei ysgrifennu dros

### Cof Fflach
- Math o ROM y gellir ei ail-ysgrifennu (e.e. gyriant USB, cardiau SD)
- Defnyddir mewn dyfeisiau symudol fel prif storfa

### Storfa Rithwir
- Yn defnyddio rhan o'r **ddisg galed** fel estyniad i RAM
- Yn arafach na RAM go iawn
- Yn caniatáu i raglenni fwy redeg pan fo RAM yn llawn

---

## Storfa Eilaidd

Mae **storfa eilaidd** yn barhaol ac yn cadw data hyd yn oed pan ddiffoddwch.

### Mathau o Storfa Eilaidd

| Math | Enghraifft | Manteision | Anfanteision |
|------|-----------|------------|--------------|
| Magnetig | HDD | Rhataf am y GB | Araf, synhwyrus i ysgydwad |
| Solet (SSD) | SSD | Cyflym iawn, yn gwrthsefyll sioc | Drutach |
| Optegol | DVD, Blu-ray | Rhataf ar gyfer dosbarthu | Cyfyngiad maint, hawdd ei grafu |
| Cwmwl | Google Drive | Mynediad o unrhyw le, wrth gefn awtomatig | Angen rhyngrwyd, costau tanysgrifio |
| Cof Fflach | Gyriant USB | Cludadwy, cadarn | Cyfyngiad maint |

### Meini Prawf Cymhariaeth

Wrth ddewis storfa eilaidd, ystyriwch:
- **Pojemność (Capasiti)** — faint o ddata y gall ei ddal (GB neu TB)
- **Buanedd** — pa mor gyflym y gellir darllen/ysgrifennu data
- **Dibynadwyedd** — pa mor debygol yw hi o beidio â methu
- **Gwydnwch** — pa mor dda y mae'n gwrthsefyll difrod corfforol
- **Cost** — pris am gigabeit

---

## Cydrannau Eraill y System

### Pyrth a Cysylltiadau
- **USB** — cyffredinol; ar gyfer allweddellau, llygod, ffonau, ac ati
- **HDMI** — allbwn fideo a sain
- **Ethernet** — cysylltiad rhwydwaith â gwifrau
- **3.5mm audio** — allbwn sain
- **SD card slot** — darllen cardiau cof

### Cardiau Ehangu
- Mae cardiau ehangu'n cysylltu â **slotiau PCIe** ar y bwrdd mam
- Enghreifftiau: cardiau sain, cardiau rhwydwaith, cardiau graffeg
- Yn ychwanegu swyddogaethedd newydd i'r cyfrifiadur

