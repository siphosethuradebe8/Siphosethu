const palette = [
  ['#ece2d5','#46382f'],['#d9e2d5','#2f3d31'],['#d7dce3','#2e3339'],['#ead7cf','#54382e'],['#d9cec3','#443a33'],
  ['#cfd8df','#28343c'],['#eadfc5','#4a402b'],['#d8c7b7','#4c382b'],['#ded9ea','#363147'],['#c9d9d2','#294138']
]

const svgArt = (kind, variant = 0) => {
  const [bg, ink] = palette[variant % palette.length]
  const v = variant % 10
  const wheel = (x,y,r=28) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${ink}" stroke-width="12"/>`
  const common = `stroke="${ink}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"`
  let shape = ''

  if (kind === 'Prams & Travel Systems') {
    const designs = [
      `<path ${common} d="M205 255h250c65 0 105 28 120 80H190c0-38 4-59 15-80Z M430 255l90-105h55 M260 335l-35 100 M520 335l38 100"/>${wheel(235,455,36)}${wheel(545,455,36)}`,
      `<path ${common} d="M190 230h285c55 0 95 35 105 92H180c0-42 4-69 10-92Z M455 230l70-105h50 M250 322l-42 115 M520 322l42 115"/>${wheel(220,458,44)}${wheel(560,458,44)}<path ${common} d="M245 190c45-52 110-74 192-65"/>`,
      `<path ${common} d="M260 250h190c44 0 70 22 78 64H250c0-29 2-46 10-64Z M430 250l78-88h42 M300 314l-28 112 M485 314l32 112"/>${wheel(280,448,26)}${wheel(510,448,26)}`,
      `<path ${common} d="M170 245h205c50 0 78 27 90 73H160c0-33 2-52 10-73Z M415 245h130c45 0 70 25 80 73H455 M325 318l-35 112 M555 318l35 112"/>${wheel(285,452,32)}${wheel(590,452,32)}<path ${common} d="M370 220l80-95h48"/>`,
      `<path ${common} d="M215 270h260c60 0 96 26 108 73H202c0-37 4-59 13-73Z M450 270l86-120h47 M270 343l-35 95 M525 343l36 95"/>${wheel(245,457,34)}${wheel(548,457,34)}<path ${common} d="M265 225c26-63 85-96 165-94"/>`,
      `<path ${common} d="M205 255h220c56 0 88 30 98 78H190c0-34 5-58 15-78Z M430 255l75-95h50 M245 333l-28 100 M475 333l32 100"/>${wheel(225,451,30)}${wheel(510,451,30)}<rect x="255" y="150" width="210" height="95" rx="45" fill="#fff" opacity=".4"/>`,
      `<path ${common} d="M190 250h290c54 0 91 31 104 83H176c0-40 5-64 14-83Z M455 250l80-103h50 M250 333l-42 104 M530 333l43 104"/>${wheel(220,458,40)}${wheel(560,458,40)}<path ${common} d="M225 205c45-50 100-72 170-65"/>`,
      `<path ${common} d="M275 245h170c41 0 66 20 75 59H264c0-27 3-43 11-59Z M420 245l68-78h38 M310 304l-26 118 M474 304l27 118"/>${wheel(292,445,24)}${wheel(496,445,24)}<path ${common} d="M310 215c18-36 48-55 95-62"/>`,
      `<path ${common} d="M190 238h305c63 0 101 36 114 92H178c0-41 4-68 12-92Z M468 238l83-118h48 M250 330l-48 103 M550 330l49 103"/>${wheel(212,455,48)}${wheel(587,455,48)}`,
      `<path ${common} d="M205 258h240c58 0 93 27 105 77H190c0-36 5-57 15-77Z M430 258l76-101h52 M258 335l-34 100 M495 335l38 100"/>${wheel(235,455,33)}${wheel(530,455,33)}<path ${common} d="M250 215c35-45 82-65 140-60"/>`
    ]
    shape = designs[v]
  } else if (kind === 'Car Seats') {
    const designs = [
      `<path ${common} d="M300 120c-50 70-70 160-55 270 6 45 42 75 88 75h145c47 0 81-35 83-82 4-115-22-205-79-278-27-34-82-42-124-19-23 12-42 23-58 34Z"/><path ${common} d="M320 210c45 35 105 35 150 0 M345 255v115 M445 255v115 M345 370h100"/>`,
      `<path ${common} d="M270 150c-28 68-40 148-28 238 5 40 34 67 75 67h170c48 0 82-36 82-84 0-98-25-181-75-246-26-34-75-45-116-26-45 21-82 38-108 51Z"/><path ${common} d="M302 190h195 M330 255l30 120 M460 255l-30 120"/>`,
      `<path ${common} d="M260 160c20-70 80-112 155-112s135 42 155 112 M285 175h260v205c0 47-38 85-85 85H370c-47 0-85-38-85-85Z"/><path ${common} d="M335 240h160 M350 290v100 M480 290v100"/>`,
      `<path ${common} d="M300 115c-42 60-60 143-52 245 4 55 35 91 82 91h155c47 0 77-33 80-87 6-104-17-192-69-267-25-36-79-50-122-28-31 16-55 30-74 46Z"/><path ${common} d="M295 190h205 M330 245l25 135 M465 245l-25 135"/>`,
      `<path ${common} d="M275 140c-38 55-55 136-47 240 4 52 35 82 84 82h180c44 0 72-32 72-77 0-104-26-190-76-255-24-32-68-42-106-27-41 17-77 29-107 37Z"/><path ${common} d="M310 220c50 28 112 28 162 0 M345 265v115 M440 265v115"/>`,
      `<path ${common} d="M280 180c-10-74 42-132 120-132s130 58 120 132 M255 180h290v210c0 40-32 72-72 72H327c-40 0-72-32-72-72Z"/><path ${common} d="M310 240h180 M340 285l25 105 M460 285l-25 105"/>`,
      `<path ${common} d="M295 110c-44 65-63 150-51 258 5 48 37 79 84 79h160c48 0 79-37 79-87 0-105-26-194-78-264-25-34-73-44-112-25-34 16-62 29-82 39Z"/><path ${common} d="M320 195h175 M348 250v122 M465 250v122"/>`,
      `<path ${common} d="M310 125c-33 58-48 136-41 231 4 61 40 98 93 98h110c52 0 86-36 89-94 5-95-18-177-67-246-25-35-76-49-118-28-26 13-48 25-66 39Z"/><path ${common} d="M325 210c45 30 100 30 145 0 M350 265v110 M450 265v110"/>`,
      `<path ${common} d="M288 122c-40 63-58 145-50 244 5 60 39 96 92 96h142c54 0 88-39 88-96 0-101-25-186-73-253-24-34-72-46-112-27-35 16-64 28-87 36Z"/><path ${common} d="M300 198h205 M342 250l24 128 M465 250l-24 128"/>`,
      `<path ${common} d="M260 205h280v205c0 28-22 50-50 50H310c-28 0-50-22-50-50Z M290 160c20-56 63-87 110-87s90 31 110 87"/><path ${common} d="M315 255h170 M345 300v105 M455 300v105"/>`
    ]
    shape = designs[v]
  } else if (kind === 'Nursery') {
    const designs = [
      `<rect x="190" y="175" width="420" height="245" rx="8" ${common}/><path ${common} d="M225 195v205M270 195v205M315 195v205M360 195v205M405 195v205M450 195v205M495 195v205M540 195v205M585 195v205M195 420v55M605 420v55"/>`,
      `<path ${common} d="M280 150h235 M320 150l-75 285 M475 150l80 285 M285 435h230"/><path ${common} d="M325 220c38 25 85 27 130 7 48-21 91 10 93 60 2 50-40 88-95 88h-105c-42 0-74-34-69-76 5-38 20-65 46-79Z"/>`,
      `<rect x="215" y="185" width="370" height="225" rx="12" ${common}/><path ${common} d="M250 205v180M295 205v180M340 205v180M385 205v180M430 205v180M475 205v180M520 205v180M565 205v180M220 410v60M580 410v60"/><rect x="250" y="130" width="300" height="55" rx="18" fill="#fff" opacity=".45"/>`,
      `<path ${common} d="M245 260c0-70 55-125 125-125h60c70 0 125 55 125 125v120H245Z M275 380c40 55 210 55 250 0"/><path ${common} d="M300 210h200"/>`,
      `<path ${common} d="M275 185c0-48 37-85 85-85h90c55 0 92 40 92 95v150H275Z M250 345h320v90H250z M300 435c35 38 88 58 150 58s115-20 150-58"/>`,
      `<rect x="230" y="165" width="340" height="285" rx="12" ${common}/><path ${common} d="M230 260h340M230 355h340 M365 165v285"/><circle cx="332" cy="212" r="5" fill="${ink}"/><circle cx="468" cy="212" r="5" fill="${ink}"/>`,
      `<rect x="235" y="125" width="330" height="340" rx="10" ${common}/><path ${common} d="M400 125v340M270 175h95M435 175h95M270 230h95M435 230h95"/>`,
      `<path ${common} d="M250 245c0-65 52-118 117-118h66c65 0 117 53 117 118v125H250Z M275 370c28 58 222 58 250 0"/><path ${common} d="M290 205h220"/>`,
      `<rect x="175" y="185" width="300" height="220" rx="8" ${common}/><rect x="500" y="215" width="120" height="190" rx="8" ${common}/><path ${common} d="M210 205v180M250 205v180M290 205v180M330 205v180M370 205v180M410 205v180M450 205v180 M505 280h110M505 340h110"/>`,
      `<path ${common} d="M240 190c0-52 40-92 92-92h90c60 0 100 42 100 102v155H240Z M210 355h350v85H210z M255 440c40 45 95 65 160 65s120-20 160-65"/><rect x="500" y="355" width="105" height="85" rx="12" ${common}/>`
    ]
    shape = designs[v]
  } else if (kind === 'Baby Tech') {
    const designs = [
      `<rect x="190" y="155" width="285" height="210" rx="22" ${common}/><circle cx="332" cy="255" r="52" ${common}/><path ${common} d="M332 365v72M275 437h114"/><rect x="520" y="175" width="80" height="185" rx="15" ${common}/><circle cx="560" cy="330" r="8" fill="${ink}"/>`,
      `<rect x="245" y="155" width="310" height="300" rx="35" ${common}/><path ${common} d="M280 210h240 M310 245v115M360 245v115M410 245v115M460 245v115"/><circle cx="400" cy="407" r="18" ${common}/>` ,
      `<rect x="290" y="150" width="220" height="300" rx="42" ${common}/><path ${common} d="M330 150v-52h140v52M315 265h170"/><circle cx="400" cy="350" r="32" ${common}/>` ,
      `<rect x="285" y="145" width="230" height="310" rx="70" ${common}/><path ${common} d="M345 245c35-35 75-35 110 0M330 285c45-48 95-48 140 0M360 330c25-24 55-24 80 0"/><circle cx="400" cy="390" r="12" fill="${ink}"/>`,
      `<circle cx="400" cy="285" r="125" ${common}/><circle cx="400" cy="285" r="55" ${common}/><path ${common} d="M400 105v55M400 410v55M220 285h55M525 285h55M275 160l40 40M485 370l40 40"/>`,
      `<path ${common} d="M305 160h190c45 0 70 35 65 80l-20 180c-3 25-23 43-48 43H308c-25 0-45-18-48-43l-20-180c-5-45 20-80 65-80Z"/><path ${common} d="M330 130h140M355 205h90M400 205v-55"/>`,
      `<path ${common} d="M310 170c0-52 38-90 90-90s90 38 90 90v205c0 45-35 80-80 80h-20c-45 0-80-35-80-80Z"/><circle cx="400" cy="325" r="34" ${common}/><path ${common} d="M350 220h100"/>`,
      `<rect x="280" y="185" width="240" height="225" rx="35" ${common}/><rect x="340" y="130" width="120" height="55" rx="16" ${common}/><path ${common} d="M325 250h150M350 310h100"/>`,
      `<path ${common} d="M325 145h150c35 0 65 30 65 65v210H260V210c0-35 30-65 65-65Z"/><circle cx="400" cy="250" r="70" ${common}/><circle cx="400" cy="250" r="24" fill="${ink}"/><path ${common} d="M335 420v45M465 420v45"/>`,
      `<rect x="235" y="175" width="330" height="250" rx="28" ${common}/><path ${common} d="M275 340l60-70 55 45 65-90 70 115 M275 215h90"/><circle cx="515" cy="220" r="14" fill="${ink}"/>`
    ]
    shape = designs[v]
  } else if (kind === 'Feeding') {
    const designs = [
      `<path ${common} d="M315 145h170v165H315z M290 310h220 M340 310l-60 155 M460 310l60 155 M270 465h70M490 465h70 M350 195h100"/>`,
      `<path ${common} d="M330 150h150v150H330z M295 300h220 M350 300l-45 165 M455 300l45 165 M310 465h55M475 465h55"/><path ${common} d="M315 240h180"/>`,
      `<path ${common} d="M320 145h165v160H320z M300 305h210 M340 305l-35 160 M470 305l35 160"/><path ${common} d="M300 220h210"/>`,
      `<path ${common} d="M335 155h140v135H335z M310 290h190 M350 290l-55 160 M460 290l55 160 M300 450h55M500 450h55"/>`,
      `<path ${common} d="M305 150h190v165H305z M280 315h240 M335 315l-48 150 M465 315l48 150 M300 225h200"/>`,
      `<rect x="275" y="245" width="250" height="105" rx="30" ${common}/><path ${common} d="M315 245v-70h170v70 M310 350l-35 75M490 350l35 75"/>`,
      `<path ${common} d="M310 145h180v175H310z M285 320h230 M335 320l-45 145 M465 320l45 145"/><path ${common} d="M325 195h150 M325 240h150"/>`,
      `<path ${common} d="M335 150h135v155H335z M300 305h205 M345 305l-55 160 M465 305l55 160 M318 215h170"/>`,
      `<path ${common} d="M300 155h200v155H300z M275 310h250 M330 310l-45 155 M470 310l45 155"/><path ${common} d="M275 240h250"/>`,
      `<path ${common} d="M320 135h160v170H320z M290 305h220 M340 305l-50 160 M460 305l50 160"/><path ${common} d="M335 185h130 M335 230h130"/>`
    ]
    shape = designs[v]
  } else {
    const designs = [
      `<path ${common} d="M320 150c0-45 35-80 80-80s80 35 80 80 M295 175c30 18 65 27 105 27s75-9 105-27l38 90-55 200H312l-55-200 38-90Z M305 205l-55-90M495 205l55-90 M345 250h110v115H345z"/>`,
      `<path ${common} d="M305 155c0-42 33-75 75-75h40c42 0 75 33 75 75 M280 180c30 16 70 24 120 24s90-8 120-24l25 85-60 190H315l-60-190 25-85Z"/>`,
      `<path ${common} d="M300 175c0-55 40-95 100-95s100 40 100 95l55 95-35 205H280l-35-205 55-95Z M330 240h140 M300 175l-60-65M500 175l60-65"/>`,
      `<path ${common} d="M280 165c30-55 70-80 120-80s90 25 120 80l35 105-60 185H305l-60-185 35-105Z M320 225h160"/>`,
      `<path ${common} d="M310 155c0-46 38-83 84-83h12c46 0 84 37 84 83 M285 185l35 270h160l35-270 M320 230h160"/>`,
      `<rect x="255" y="155" width="290" height="300" rx="35" ${common}/><path ${common} d="M295 210h210 M295 275h210 M400 155v300"/><path ${common} d="M305 155l-45-65M495 155l45-65"/>`,
      `<rect x="235" y="215" width="330" height="150" rx="28" ${common}/><path ${common} d="M280 215v-50M520 215v-50 M310 365v70M490 365v70"/><circle cx="330" cy="290" r="18" ${common}/><circle cx="470" cy="290" r="18" ${common}/>` ,
      `<rect x="245" y="220" width="310" height="175" rx="28" ${common}/><path ${common} d="M285 255h230 M285 315h230 M330 395l-35 55M470 395l35 55"/>`,
      `<path ${common} d="M275 180h250l35 250H240l35-250Z M315 180v-55h170v55 M290 250h220 M310 320h180"/>`,
      `<rect x="245" y="145" width="310" height="320" rx="38" ${common}/><path ${common} d="M290 205h220 M290 270h220 M290 335h220 M400 145v320"/><path ${common} d="M310 145l-35-65M490 145l35-65"/>`
    ]
    shape = designs[v]
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560"><defs><filter id="s"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity=".12"/></filter></defs><rect width="800" height="560" fill="${bg}"/><circle cx="660" cy="95" r="105" fill="#fff" opacity=".38"/><g filter="url(#s)">${shape}</g></svg>`
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const p = (id, name, category, price, tag, description) => ({ id, name, category, price, tag, image: svgArt(category, id - 1), description })

const groups = [
  ['Prams & Travel Systems',[
    ['Aero Luxe 3-in-1 Travel System',8999,'BESTSELLER','Premium pram, carry cot and infant car seat combination with an aluminium frame and one-hand fold.'],
    ['Signature 5-in-1 Travel System',18999,'PREMIUM','Reversible seat, carry cot, infant car seat, base and premium accessories.'],
    ['Metro Compact Pram',4999,'COMPACT','Lightweight compact pram made for airports, city trips and easy boot storage.'],
    ['Terrain Pro All-Road Pram',11999,'ALL-TERRAIN','Large wheels, smooth suspension and an extendable canopy for family adventures.'],
    ['Urban Fold Stroller',6499,'CITY','One-hand folding city stroller with a spacious basket and full recline.'],
    ['Nova Twin Pram',13999,'TWIN','Premium double pram with independent reclining seats and generous storage.'],
    ['Voyager 4-in-1 Travel Set',14999,'TRAVEL','Complete newborn-to-toddler travel set with adaptable seating configurations.'],
    ['Mini Air Cabin Stroller',5799,'CABIN','Ultra-compact travel stroller designed for quick trips and cabin-friendly portability.'],
    ['Summit Luxe Pram',15999,'LUXE','Luxury pram with premium fabrics, large canopy and smooth suspension.'],
    ['Everyday Flex Travel System',9999,'FAMILY','Versatile travel system designed for daily errands, naps and longer outings.']
  ]],
  ['Car Seats',[
    ['Orbit 360° ISOFIX Car Seat',6999,'i-SIZE','360-degree rotating ISOFIX seat with newborn insert and side-impact protection.'],
    ['Executive i-Size Car Seat',12499,'PREMIUM','Extended-use premium seat with advanced impact protection and luxury fabrics.'],
    ['SafeNest Infant Carrier',3999,'NEWBORN','Lightweight infant carrier with padded newborn support and secure installation.'],
    ['Guardian Pro 360 Seat',8499,'360°','Rotating seat with multiple recline positions and extended rear-facing use.'],
    ['Journey Grow Car Seat',5499,'GROW','Multi-stage seat designed to adapt from toddler years into childhood.'],
    ['CloudRide Infant Seat',4599,'LIGHT','Comfort-focused infant seat with ergonomic carry handle and canopy.'],
    ['Fortress i-Size Plus',9999,'SAFETY','Premium i-Size protection with reinforced side wings and adjustable headrest.'],
    ['CitySafe ISOFIX Seat',5999,'ISOFIX','Compact ISOFIX car seat ideal for everyday urban family travel.'],
    ['Elite 360 Signature',13999,'LUXE','Flagship rotating seat combining premium materials with advanced safety features.'],
    ['Junior Flex Booster',3299,'BOOSTER','High-back booster with adjustable side protection and comfortable padding.']
  ]],
  ['Nursery',[
    ['Serenity Convertible Cot',7999,'NURSERY','Modern convertible cot with adjustable mattress heights and timeless neutral finish.'],
    ['Cloud Electric Baby Swing',3499,'SMART','Quiet electric swing with soothing motion modes and plush newborn support.'],
    ['Oakline Cot Bed',9499,'PREMIUM','Warm wood-look cot that converts into a stylish toddler bed.'],
    ['DreamNest Bassinet',4299,'NEWBORN','Bedside bassinet with breathable sides and a comfortable newborn sleep space.'],
    ['Nurture Rocking Chair',6499,'COMFORT','Deeply cushioned nursery chair for feeding, soothing and bedtime routines.'],
    ['Willow Changing Station',5999,'STORAGE','Premium changing unit with generous drawers and a removable changing top.'],
    ['Little Haven Wardrobe',10999,'FURNITURE','Full-size nursery wardrobe with hanging space, shelves and soft-close doors.'],
    ['Moonlight Cradle',4999,'CRADLE','Compact rocking cradle with a soft neutral finish for early months.'],
    ['Serenity Cot & Drawer Set',12499,'SET','Coordinated cot and storage set for a polished nursery setup.'],
    ['Nest Ottoman & Rocker Set',8499,'LUXE','Comfortable feeding chair and matching footrest for long nursery sessions.']
  ]],
  ['Baby Tech',[
    ['ViewPro Smart Baby Monitor',2999,'HD VIDEO','HD video monitoring with night vision, two-way audio and temperature alerts.'],
    ['PureSteam Bottle Steriliser',1899,'HYGIENE','Fast steam sterilising with spacious capacity and one-touch controls.'],
    ['WarmFlow Smart Bottle Warmer',1399,'SMART HEAT','Precision bottle warming with temperature presets and keep-warm mode.'],
    ['Hush Mini White Noise Machine',1299,'SLEEP','Rechargeable sleep sound machine with night light, timer and calming sounds.'],
    ['NestSense Room Sensor',2499,'SENSOR','Tracks nursery temperature and humidity for a more comfortable sleep environment.'],
    ['Breathe Smart Humidifier',2199,'AIR CARE','Quiet nursery humidifier with adjustable mist and automatic shut-off.'],
    ['Glow Smart Night Light',999,'NIGHT','Touch-controlled nursery light with dimming, timer and soft bedtime glow.'],
    ['TempCheck Digital Thermometer',899,'HEALTH','Fast digital temperature readings with a simple illuminated display.'],
    ['SleepView Wi-Fi Camera',3499,'WI-FI','App-connected nursery camera with HD video, motion alerts and two-way audio.'],
    ['PureAir Nursery Monitor',2799,'AIR SENSOR','Smart air-quality monitor tracking temperature, humidity and nursery comfort.']
  ]],
  ['Feeding',[
    ['Maison Premium High Chair',3899,'DESIGN','Easy-clean premium high chair with adjustable footrest and removable tray.'],
    ['GrowWithMe High Chair',4499,'GROW','Convertible high chair that adapts as your baby grows into toddlerhood.'],
    ['Nordic Wood High Chair',5299,'PREMIUM','Scandinavian-inspired feeding chair with a warm wood finish and secure harness.'],
    ['FoldAway Feeding Chair',2999,'COMPACT','Space-saving folding high chair for smaller homes and easy storage.'],
    ['EasyClean Luxe Chair',3599,'EASY CLEAN','Wipe-clean premium seat with removable tray and adjustable recline.'],
    ['Mini Table Booster',1499,'BOOSTER','Portable booster seat for family meals at home or while travelling.'],
    ['Comfort Recline High Chair',4199,'RECLINE','Multi-position feeding chair with padded support for younger babies.'],
    ['Studio Minimal High Chair',4799,'DESIGN','Minimal premium chair designed to complement modern dining spaces.'],
    ['TwinTray Feeding Station',3299,'PRACTICAL','Functional high chair with removable double tray and adjustable height.'],
    ['Signature Dining Chair',5999,'LUXE','Luxury feeding chair with refined materials and long-term convertible use.']
  ]],
  ['On The Go',[
    ['Aura Ergonomic Baby Carrier',2499,'ERGONOMIC','Structured carrier with breathable panels, lumbar support and multiple positions.'],
    ['AirMesh Newborn Carrier',1999,'BREATHABLE','Lightweight mesh carrier designed for close, comfortable newborn carrying.'],
    ['Explorer Hiking Carrier',4499,'ADVENTURE','Supportive child carrier with storage and structured frame for family adventures.'],
    ['City Sling Carrier',1299,'LIGHT','Soft everyday sling for quick errands and close carrying.'],
    ['FlexFit 4-Way Carrier',2899,'4-WAY','Adjustable carrier supporting multiple front and back carry positions.'],
    ['Travel Changing Backpack',2199,'TRAVEL','Premium changing backpack with insulated pockets and organised baby storage.'],
    ['Pram Organiser Luxe',999,'ORGANISER','Structured pram organiser for bottles, phone, keys and daily essentials.'],
    ['Portable Changing Mat',799,'ESSENTIAL','Foldable padded changing mat designed for clean changes anywhere.'],
    ['Thermal Bottle Travel Bag',899,'INSULATED','Insulated travel bag that helps maintain bottle temperature while out.'],
    ['All-Day Parent Backpack',2799,'PREMIUM','Spacious premium baby backpack with changing storage and laptop compartment.']
  ]]
]

let nextId = 1
export const products = groups.flatMap(([category, items]) => items.map(([name, price, tag, description]) => p(nextId++, name, category, price, tag, description)))
export const categories = ['All', ...groups.map(([category]) => category)]
