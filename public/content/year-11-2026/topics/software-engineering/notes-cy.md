# Peirianneg Meddalwedd

## Cylchred Datblygu Meddalwedd (SDLC)

Mae'r SDLC yn broses strwythuredig ar gyfer cynllunio, creu, profi a chyflenwi meddalwedd. Mae ganddo chwe phrif gam:

| Cam | Disgrifiad |
|-----|------------|
| **1. Dadansoddi** | Deall y broblem; nodi gofynion defnyddiwr; cynhyrchu manylebau gofynion |
| **2. Dylunio** | Cynllunio'r ateb — strwythurau data, algorithmau, rhyngwyneb, strategaeth brofi |
| **3. Datblygu** | Ysgrifennu'r cod yn ôl y dyluniad |
| **4. Profi** | Gwirio bod y meddalwedd yn gweithio'n gywir ac yn bodloni gofynion |
| **5. Gweithredu** | Defnyddio'r meddalwedd ar gyfer defnyddwyr; hyfforddi staff os oes angen |
| **6. Cynnal a chadw** | Trwsio gwallau, diweddaru ar gyfer gofynion ac amgylcheddau gweithredu newydd |

## Modelau SDLC

### Model rhaeadr
- **Llinol** yn llwyr — rhaid cwblhau pob cam cyn dechrau'r nesaf.
- Manteision: cerrig milltir clir, hawdd ei reoli, dogfennaeth dda.
- Anfanteision: anodd mynd yn ôl i gywiro camau cynharach; nid yw'r cleient yn gweld y cynnyrch tan y diwedd.

### Model iterus / hyblyg (agile)
- Datblygir meddalwedd mewn **cylchoedd ailadroddus** (iteriadau neu sbrintiau), pob un yn cynhyrchu fersiwn weithredol.
- Mae'r cleient yn adolygu cynnydd ar ddiwedd pob iteriad ac mae adborth yn llywio'r nesaf.
- Manteision: hyblyg i ofynion sy'n newid; ymglymiad cleient drwyddi draw; meddalwedd weithredol gynnar.
- Anfanteision: anoddach rhagfynegi cost a llinell amser derfynol; mae angen cyfranogiad gweithredol y cleient.

### Model troellog
- Cyfuno datblygiad iterus â dadansoddiad risg ym mhob cylch.
- Mae pob troell yn mynd drwy gynllunio, dadansoddiad risg, datblygiad a gwerthuso.
- Manteision: addas ar gyfer prosiectau mawr, risg uchel; rheolir risg drwyddi draw.
- Anfanteision: cymhleth, drud, mae angen arbenigedd mewn asesu risg.

## Strategaethau profi

### Mathau o brofi

| Math | Disgrifiad |
|------|------------|
| **Profi uned** | Profi pob modiwl neu ffwythiant unigol ar wahân |
| **Profi integreiddio** | Profi bod modiwlau yn gweithio'n gywir gyda'i gilydd |
| **Profi system** | Profi'r system gyflawn yn erbyn y gofynion |
| **Profi derbyn** | Mae'r cleient yn gwirio bod y system yn bodloni eu gofynion |
| **Profi atchweliad** | Ailedeg profion ar ôl newid i wirio nad oes dim wedi torri |

### Profi blwch du vs profi blwch gwyn

- **Profi blwch du** — nid yw'r profwr yn gwybod y cod mewnol; yn profi mewnbynnau ac allbynnau disgwyliedig yn unig.
- **Profi blwch gwyn** — mae'r profwr yn gwybod strwythur y cod; yn profi bod pob llwybr drwy'r cod yn cael ei ymarfer.

### Data profi

Mae profi da yn defnyddio tair categori o ddata profi:

| Categori | Ystyr | Enghraifft (oedran 0–120) |
|----------|-------|---------------------------|
| **Normal / dilys** | Gwerthoedd a ddylai gael eu derbyn | `25` |
| **Ffin / eithafol** | Gwerthoedd ar ymyl yr amrediad dilys | `0`, `120` |
| **Camgymeriad / annilys** | Gwerthoedd a ddylai gael eu gwrthod | `-1`, `200`, `"abc"` |

## Offer IDE

Mae Amgylchedd Datblygu Integredig (IDE) yn darparu offer mewn un rhaglen i gynorthwyo'r broses ddatblygu gyfan:

- **Golygydd cod** — amlygu cystrawen, cwblhau auto
- **Cyfieithydd** — casglwr neu ddehonglydd wedi'i fewnblannu
- **Dadfygiwr** — camu drwy god fesul llinell; gosod pwyntiau toriad; archwilio gwerthoedd newidynnau
- **Diagnosteg gwallau** — amlygu gwallau cystrawen wrth deipio
- **Integreiddio rheolaeth fersiwn** — olrhain newidiadau a chydweithio (e.e. Git)
- **Amgylchedd rhedeg** — gweithredu'r rhaglen heb adael yr IDE

## Dogfennaeth

Cynhyrchir dogfennaeth dda drwy gydol yr SDLC:

- **Manyleb gofynion** — beth mae'n rhaid i'r system ei wneud
- **Dogfennaeth ddylunio** — strwythurau data, algorithmau, cynlluniau sgrin
- **Dogfennaeth dechnegol** — sut mae'r cod yn gweithio; ar gyfer datblygwyr y dyfodol
- **Dogfennaeth defnyddiwr** — sut i ddefnyddio'r system orffenedig
