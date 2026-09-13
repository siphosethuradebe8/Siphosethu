const categoryImages = {
  'Prams & Travel Systems': [
    'https://www.nubabs.co.za/cdn/shop/files/Black360101_533x.jpg?v=1785235527',
    'https://www.chelino.co.za/cdn/shop/files/Nuna_TRVLlx_BMW_Mica_Angle_CD_GL_web.png?v=1773043551&width=1096',
    'https://karapuzov.com.ua/image/cache/catalog/photos/42638/kolyaska-2-v-1-cybex-priam-2023-rosegold-sepia-black-3-jpeg-2-1000x1000.jpeg',
    'https://www.first-buggy.ru/upload/imagelib/1597794115joie-versatrax-2.jpg',
    'https://www.tayonlinestore.com/cdn/shop/products/product-image-665961828.jpg?v=1648756312&width=640',
    'https://images.ctfassets.net/50gzycvace50/2bc69c06874dbed0ecb0f425694b4e715edb2c20be30c83d11423070114b35d4/86ad18b75375c613ade8dd5e37bc8483/2bc69c06874dbed0ecb0f425694b4e715edb2c20be30c83d11423070114b35d4.png?bg=rgb%3Afafafa&fl=progressive&fm=jpg&h=1240&w=1240',
    'https://images.ctfassets.net/50gzycvace50/1351a5ea7fa772f59272061ac8e54253a88158bf71700923aac77ffdd7a16932/da3bfda651a0bec8466231d1060c1fc2/1351a5ea7fa772f59272061ac8e54253a88158bf71700923aac77ffdd7a16932.png?bg=rgb%3Afafafa&fl=progressive&fm=jpg&h=1240&w=1240',
    'https://images.ctfassets.net/50gzycvace50/a5fe7bf9c573c38fca0fd77ac78ee49c493bd581f6a2b521803586c73e8a7b8b/b853b4580c7ccf1c636a06f9dbc57c38/a5fe7bf9c573c38fca0fd77ac78ee49c493bd581f6a2b521803586c73e8a7b8b.png?bg=rgb%3Afafafa&fl=progressive&fm=jpg&h=1240&w=1240',
    'https://kidlife.com.ua/image/cache/catalog/gallery-cybex/2023/mima-xari-max/mima_xari_max_wh_ch_5-680x680.jpg',
    'https://doona.shop/cdn/shop/files/Doona_i_Desert_Green_Listing_1600x1600_5_1600x.png?v=1774357640'
  ],
  'Car Seats': [
    'https://loremflickr.com/900/700/baby,carseat?lock=101',
    'https://loremflickr.com/900/700/infant,carseat?lock=102',
    'https://loremflickr.com/900/700/baby,carrier,carseat?lock=103',
    'https://loremflickr.com/900/700/child,carseat?lock=104',
    'https://loremflickr.com/900/700/toddler,carseat?lock=105',
    'https://loremflickr.com/900/700/rearfacing,carseat?lock=106',
    'https://loremflickr.com/900/700/infant,seat?lock=107',
    'https://loremflickr.com/900/700/isofix,carseat?lock=108',
    'https://loremflickr.com/900/700/luxury,carseat?lock=109',
    'https://loremflickr.com/900/700/booster,seat,child?lock=110'
  ],
  'Nursery': [
    'https://loremflickr.com/900/700/baby,cot,nursery?lock=201',
    'https://loremflickr.com/900/700/baby,bedside,crib?lock=202',
    'https://loremflickr.com/900/700/wooden,cot,nursery?lock=203',
    'https://loremflickr.com/900/700/bassinet,baby?lock=204',
    'https://loremflickr.com/900/700/baby,bouncer?lock=205',
    'https://loremflickr.com/900/700/changing,table,nursery?lock=206',
    'https://loremflickr.com/900/700/nursery,wardrobe?lock=207',
    'https://loremflickr.com/900/700/moses,basket,baby?lock=208',
    'https://loremflickr.com/900/700/baby,swing?lock=209',
    'https://loremflickr.com/900/700/nursery,rocking,chair?lock=210'
  ],
  'Baby Tech': [
    'https://loremflickr.com/900/700/baby,monitor,camera?lock=301',
    'https://loremflickr.com/900/700/baby,wearable,monitor?lock=302',
    'https://loremflickr.com/900/700/bottle,sterilizer,baby?lock=303',
    'https://loremflickr.com/900/700/formula,maker,baby?lock=304',
    'https://loremflickr.com/900/700/nightlight,baby,nursery?lock=305',
    'https://loremflickr.com/900/700/room,thermometer,baby?lock=306',
    'https://loremflickr.com/900/700/digital,thermometer,baby?lock=307',
    'https://loremflickr.com/900/700/video,baby,monitor?lock=308',
    'https://loremflickr.com/900/700/smart,baby,camera?lock=309',
    'https://loremflickr.com/900/700/humidifier,nursery?lock=310'
  ],
  'Feeding': [
    'https://loremflickr.com/900/700/wooden,highchair,baby?lock=401',
    'https://loremflickr.com/900/700/reclining,highchair,baby?lock=402',
    'https://loremflickr.com/900/700/rotating,highchair,baby?lock=403',
    'https://loremflickr.com/900/700/padded,highchair,baby?lock=404',
    'https://loremflickr.com/900/700/modern,highchair,baby?lock=405',
    'https://loremflickr.com/900/700/minimal,highchair,baby?lock=406',
    'https://loremflickr.com/900/700/table,booster,baby?lock=407',
    'https://loremflickr.com/900/700/designer,highchair,baby?lock=408',
    'https://loremflickr.com/900/700/premium,highchair,baby?lock=409',
    'https://loremflickr.com/900/700/folding,highchair,baby?lock=410'
  ],
  'On The Go': [
    'https://loremflickr.com/900/700/baby,carrier,parent?lock=501',
    'https://loremflickr.com/900/700/mesh,baby,carrier?lock=502',
    'https://loremflickr.com/900/700/hiking,child,carrier?lock=503',
    'https://loremflickr.com/900/700/baby,wrap,carrier?lock=504',
    'https://loremflickr.com/900/700/front,baby,carrier?lock=505',
    'https://loremflickr.com/900/700/diaper,backpack,baby?lock=506',
    'https://loremflickr.com/900/700/stroller,organizer?lock=507',
    'https://loremflickr.com/900/700/baby,changing,mat?lock=508',
    'https://loremflickr.com/900/700/bottle,travel,bag?lock=509',
    'https://loremflickr.com/900/700/parent,baby,backpack?lock=510'
  ]
}

const groups = [
  ['Prams & Travel Systems',[
    ['Nubabs 360 Degree Stroller & Pram',9500,'PREMIUM','Bold 360-degree rotating pram with a sculpted frame and full newborn carrycot.'],
    ['Nuna TRVL lx BMW Stroller',10999,'DESIGN','Compact premium stroller with BMW detailing and a lightweight travel-friendly frame.'],
    ['Cybex Priam Rosegold Stroller',24999,'LUXE','Luxury modular stroller with a rose-gold chassis, reversible seat and premium finish.'],
    ['Joie Versatrax Stroller',8499,'ALL-TERRAIN','Versatile all-season stroller with reversible seating, large wheels and generous storage.'],
    ['Belecoo 3-in-1 Travel System',5999,'TRAVEL','Complete pram, bassinet and infant car-seat package in a high-rider design.'],
    ['Silver Cross Reef 2 Stroller',25999,'PREMIUM','Refined multi-terrain stroller with premium fabrics and a smooth one-hand fold.'],
    ['Baby Jogger City Mini GT2 Double',13999,'TWIN','Side-by-side double stroller with all-wheel suspension and independent reclining seats.'],
    ['Thule Urban Glide 3',14999,'SPORT','Three-wheel all-terrain stroller built for active families and rougher surfaces.'],
    ['Mima Xari Max',22999,'ICONIC','Statement luxury stroller with a sculpted shell, reversible seat and striking white finish.'],
    ['Doona i Car Seat & Stroller',13999,'COMPACT','Infant car seat that transforms directly into a compact stroller in seconds.']
  ]],
  ['Car Seats',[
    ['Mica Pro Eco 360',6999,'360°','Rotating ISOFIX seat with side-impact protection and multiple recline positions.'],
    ['Cloud T i-Size',8999,'i-SIZE','Premium infant seat with deep side wings and ergonomic newborn support.'],
    ['PIPA Lite Infant Carrier',6499,'NEWBORN','Lightweight infant carrier with premium padding and secure newborn support.'],
    ['i-Spin 360',7499,'360°','Smooth rotating seat with extended rear-facing support.'],
    ['Dualfix M Plus',7999,'SAFETY','Extended-use rotating seat with strong side-impact protection.'],
    ['Stretch B',9999,'PREMIUM','Rear-facing focused seat designed for long-term comfort and protection.'],
    ['Kory Plus Air',4999,'LIGHT','Breathable infant carrier with an ergonomic shell and canopy.'],
    ['Turn2Me i-Size',5999,'ISOFIX','Accessible rotating seat for quick everyday loading.'],
    ['Sky 2.0',10999,'LUXE','Premium infant carrier with supportive recline and high-end fabrics.'],
    ['Viaggio Flex Booster',3999,'BOOSTER','Foldable high-back booster with adjustable side protection.']
  ]],
  ['Nursery',[
    ['Stokke Sleepi Bed',12999,'COT','Iconic oval cot designed to grow with baby.'],
    ['SnuzPod Bedside Crib',5999,'BEDSIDE','Compact bedside crib with breathable mesh sides.'],
    ['Tutti Bambini Cot Bed',8999,'COT BED','Modern wooden cot bed with a warm neutral finish.'],
    ['Chicco Next2Me',4499,'NEWBORN','Bedside sleeping crib with adjustable height and easy access.'],
    ['BabyBjorn Bouncer Bliss',4999,'BOUNCER','Minimal ergonomic bouncer with natural movement.'],
    ['Silver Cross Nursery Dresser',8999,'STORAGE','Premium dresser and changing station with clean lines.'],
    ['Mamas & Papas Wardrobe',10999,'FURNITURE','Full-size nursery wardrobe with practical storage.'],
    ['Shnuggle Dreami Moses Basket',3299,'BASSINET','Lightweight newborn bassinet with a modern shape.'],
    ['Maxi-Cosi Cassia Swing',4499,'SWING','Smart electric swing with soothing motion settings.'],
    ['Micuna Rocking Chair',7499,'ROCKER','Contemporary nursery rocker with supportive cushioning.']
  ]],
  ['Baby Tech',[
    ['Nanit Pro Smart Monitor',4999,'HD VIDEO','Smart nursery camera with app monitoring and sleep insights.'],
    ['Owlet Dream Sock',6999,'HEALTH','Wearable baby monitor for sleep and wellness tracking.'],
    ['Philips Avent Steriliser',1899,'HYGIENE','Fast steam sterilising with one-touch operation.'],
    ['Baby Brezza Formula Pro',6499,'SMART','Automatic formula preparation with precise dispensing.'],
    ['Hatch Rest',1999,'SLEEP','Night light and sound machine for bedtime routines.'],
    ['Tommee Tippee Groegg',899,'TEMP','Room thermometer with colour-based temperature indication.'],
    ['Braun ThermoScan 7',1499,'HEALTH','Fast digital ear thermometer with age guidance.'],
    ['VTech Smart Baby Monitor',2999,'WI-FI','Video monitor with night vision and two-way audio.'],
    ['Momcozy Smart Camera',2499,'CAMERA','Wi-Fi nursery camera with app alerts and two-way audio.'],
    ['Frida Baby Humidifier',1999,'AIR CARE','Quiet nursery humidifier with simple controls.']
  ]],
  ['Feeding',[
    ['Stokke Tripp Trapp',5999,'ICONIC','Adjustable wooden high chair designed to grow with your child.'],
    ['Peg Perego Siesta',4999,'RECLINE','Multi-position reclining high chair with wheels.'],
    ['Joie Mimzy Spin',3699,'360°','Rotating high chair for easier feeding access.'],
    ['Chicco Polly Magic Relax',3999,'COMFORT','Padded reclining high chair suitable from early months.'],
    ['Maxi-Cosi Minla',4499,'GROW','Multi-stage high chair with adjustable height and recline.'],
    ['BabyBjorn High Chair',4299,'MINIMAL','Compact Scandinavian-style feeding chair.'],
    ['Inglesina Fast Table Chair',1799,'PORTABLE','Clip-on table chair made for travel and small spaces.'],
    ['Mamas & Papas Juice',3299,'DESIGN','Contemporary high chair with an easy-clean seat.'],
    ['Nuna ZAAZ',5299,'PREMIUM','Sleek premium high chair with removable tray.'],
    ['Kinderkraft Yummy',2499,'VALUE','Practical folding high chair with adjustable tray.']
  ]],
  ['On The Go',[
    ['Ergobaby Omni Breeze',3499,'ERGONOMIC','Breathable structured carrier with multiple carry positions.'],
    ['BabyBjorn Harmony',3999,'PREMIUM','Soft structured carrier with supportive mesh construction.'],
    ['Thule Sapling',5499,'ADVENTURE','Framed child carrier designed for hiking and long outings.'],
    ['Tula Explore',3199,'4-WAY','Adjustable carrier for front and back carry positions.'],
    ['Infantino Flip 4-in-1',1499,'VALUE','Versatile everyday carrier with multiple configurations.'],
    ['Storksak Changing Backpack',2799,'BAG','Premium changing backpack with insulated storage.'],
    ['Skip Hop Pram Organiser',999,'ORGANISER','Easy-access stroller organiser for daily essentials.'],
    ['Mamas & Papas Changing Mat',799,'ESSENTIAL','Foldable padded mat for quick changes on the go.'],
    ['Tommee Tippee Insulated Bag',899,'INSULATED','Thermal bottle bag for travel and day trips.'],
    ['Babymel Robyn Backpack',2599,'BACKPACK','Convertible parent backpack with organised baby storage.']
  ]]
]

let nextId = 1
export const products = groups.flatMap(([category, items]) => items.map(([name, price, tag, description], index) => ({
  id: nextId++,
  name,
  category,
  price,
  tag,
  description,
  image: categoryImages[category][index]
})))

export const categories = ['All', ...groups.map(([category]) => category)]