# Meddalwedd System

## Beth yw meddalwedd system?

Mae meddalwedd system yn rheoli'r caledwedd ac yn darparu llwyfan i feddalwedd cymhwysiad redeg arno. Y ddau brif fath yw'r **system weithredu** a **meddalwedd gwasanaethu**.

## Swyddogaethau'r system weithredu

Mae'r system weithredu (OS) yn cyflawni chwe phrif swyddogaeth:

### 1. Rheoli'r prosesydd (CPU)
- Mae'r OS yn amserlennu pa broses sy'n defnyddio'r CPU a pha mor hir.
- Mae **aml-dasg** yn caniatáu i nifer o brosesau ymddangos yn rhedeg ar yr un pryd drwy newid rhyngddynt yn gyflym.
- Mae **toriadau** yn signalau i'r CPU fod angen sylw ar rywbeth (e.e. allweddbwysiad neu I/O wedi'i gwblhau). Mae'r OS yn trin toriadau fel y gall y CPU ymateb i ddigwyddiadau yn effeithlon.

### 2. Rheoli cof
- Mae'r OS yn dyrannu ardaloedd o RAM i bob rhaglen sy'n rhedeg.
- Pan fo RAM yn llawn, gall yr OS ddefnyddio **cof rhithwir** — adran o storfa eilaidd (disg caled) a ddefnyddir fel pe bai'n RAM.
- Mae **tudalennu** yn rhannu'r cof yn flociau maint penodol (tudalennau) fel y gellir dyrannu cof yn effeithlon.

### 3. Rheoli storfa gynorthwyol (storfa eilaidd)
- Mae'r OS yn defnyddio **system ffeiliau** i drefnu data ar ddisgiau yn ffeiliau a ffolderi.
- Mae'n trin darllen, ysgrifennu, creu, dileu a chwilio am ffeiliau.
- Mae'r system ffeiliau yn cynnal strwythur cyfeiriadur ac yn olrhain ble mae pob ffeil wedi'i storio.

### 4. Rheoli perifferolion
- Mae'r OS yn cyfathrebu â dyfeisiau (argraffwyr, bysellfyrddau, monitrau) drwy **yrwyr dyfais** — rhaglenni bychain sy'n cyfieithu ceisiadau'r OS i gyfarwyddiadau penodol i'r ddyfais.
- Heb yrwyr dyfais, ni fyddai caledwedd yn gweithio.

### 5. Darparu diogelwch
- Mae'r OS yn rheoli cyfrifon defnyddwyr, cyfrineiriau a lefelau mynediad i atal defnydd heb awdurdod.
- Gall gofnodi gweithgarwch at ddibenion archwilio.

### 6. Darparu rhyngwyneb
- Mae'r OS yn darparu ffordd i ddefnyddwyr a rhaglenni ryngweithio â'r caledwedd.

## Rhyngwynebau defnyddiwr

| Rhyngwyneb | Disgrifiad | Enghraifft |
|------------|------------|------------|
| **GUI** (Rhyngwyneb Defnyddiwr Graffigol) | Yn defnyddio ffenestri, eiconau, dewislenni a phwyntydd (WIMP). Hawdd ei ddefnyddio heb hyfforddiant. | Windows, macOS |
| **CLI** (Rhyngwyneb Llinell Gorchymyn) | Mae'r defnyddiwr yn teipio gorchmynion testun. Pwerus a chyflym, ond mae angen gwybodaeth o orchmynion. | Terfynell Linux, cmd.exe |
| **Wedi'i yrru gan ddewislen** | Mae'r defnyddiwr yn dewis o opsiynau. Cyffredin mewn systemau mewnblanedig a pheiriannau ATM. | Archebu hunanwasanaeth archfarchnad |

## Meddalwedd gwasanaethu

Mae meddalwedd gwasanaethu yn cyflawni tasgau cynnal a chadw:

| Cyfleustod | Pwrpas |
|------------|--------|
| **Gwrth-maleiswedd / gwrthfeirws** | Canfod a dileu meddalwedd maleisus |
| **Meddalwedd wrth gefn** | Copïo data i leoliad diogel i amddiffyn rhag colled |
| **Dad-ddarnio disg** | Ail-drefnu ffeiliau darnio i gyflymu mynediad i'r disg |
| **Fformatio disg** | Paratoi dyfais storfa drwy greu system ffeiliau |
| **Offeryn cywasgu** | Lleihau meintiau ffeiliau ar gyfer storio neu drosglwyddo |
| **Offeryn amgryptio** | Cymysgu data fel mai dim ond defnyddwyr awdurdodedig all ei ddarllen |
| **Wal dân** | Monitro a rheoli traffig rhwydwaith sy'n dod i mewn ac yn mynd allan |
