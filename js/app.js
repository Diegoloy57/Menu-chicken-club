
const WHATSAPP_NUMBER = '573146197436';

/* ── CATÁLOGOS DE OPCIONES ── */
const SALSAS_POLLO = [
  {id:'bbqa', name:'BBQ Ahumado de la Casa'},
  {id:'miel', name:'Miel Mostaza'},
  {id:'lena', name:'Crema Leña con Cebollín'},
  {id:'ron',  name:'BBQ de Ron de Caldas'},
  {id:'buf',  name:'Búfalo Picante'},
  {id:'bbqs', name:'BBQ Picante Suave'},
];

const SALSAS_PAPAS = [
  {id:'agua', name:'Cremoso de Aguacate'},
  {id:'ajo',  name:'Cremoso de Ajo'},
  {id:'rosa', name:'Rosada de la Casa'},
];

const SALSA_SIN = {id:'sin', name:'Salsa aparte'};
const SALSA_PEPINILLO = {id:'pepinillo', name:'Salsa de pepinillo de la casa'};
const SALSAS_ALITAS = [...SALSAS_POLLO, SALSA_SIN];
const SALSAS_TENDERS = [SALSA_PEPINILLO, ...SALSAS_POLLO, SALSA_SIN];

const BEBIDAS_COMBO = [
  {id:'coca_original', name:'Coca-Cola Original 250 ml', emoji:'🥤'},
  {id:'coca_zero', name:'Coca-Cola Zero 250 ml', emoji:'⚫'},
];

const SODA_SABORES = [
  {id:'maracuya', name:'Maracuyá'},
  {id:'lichi', name:'Lichi'},
  {id:'cereza', name:'Cereza'},
];

const HATSU_SABORES = [
  {id:'hatsu_negro', name:'Negro'},
  {id:'hatsu_verde', name:'Verde'},
  {id:'hatsu_amarillo', name:'Amarillo'},
  {id:'hatsu_blanco', name:'Blanco'},
];

/* ── CONFIGURACIONES REUTILIZABLES ── */
const createSlot = (label, options, defaultOptionId=null) => ({
  label,
  sauces:options,
  count:1,
  ...(defaultOptionId ? {defaultSauceId:defaultOptionId} : {}),
});

const CONFIG_PRESETS = {
  medioPollo:()=>[
    createSlot('Salsa para las papas',[...SALSAS_PAPAS,SALSA_SIN]),
  ],
  polloEntero:()=>[
    createSlot('Salsa para las papas',SALSAS_PAPAS),
  ],
  tenders:()=>[
    createSlot('Salsa para los tenders',SALSAS_TENDERS,'pepinillo'),
    createSlot('Salsa para las papas',SALSAS_PAPAS),
  ],
  alitas6:()=>[
    createSlot('Salsa para las alitas',SALSAS_ALITAS),
    createSlot('Salsa para las papas',SALSAS_PAPAS),
  ],
  alitas12:()=>[
    createSlot('Salsa 1 para las alitas',SALSAS_ALITAS),
    createSlot('Salsa 2 para las alitas',SALSAS_ALITAS),
    createSlot('Salsa para las papas',SALSAS_PAPAS),
  ],
  comboInauguracion:()=>[
    createSlot('Salsa 1 para las alitas',SALSAS_ALITAS),
    createSlot('Salsa 2 para las alitas',SALSAS_ALITAS),
    createSlot('Salsa para las papas',SALSAS_PAPAS),
  ],
  comboParaDos:()=>[
    createSlot('Salsa para las alitas',SALSAS_ALITAS),
    createSlot('Salsa para los tenders',SALSAS_TENDERS,'pepinillo'),
    createSlot('Salsa para las papas',SALSAS_PAPAS),
    createSlot('Bebida 1',BEBIDAS_COMBO),
    createSlot('Bebida 2',BEBIDAS_COMBO),
  ],
  crispyClub:()=>[
    createSlot('Salsa 1 para los Crispys',SALSAS_ALITAS),
    createSlot('Salsa 2 para los Crispys',SALSAS_ALITAS),
  ],
  sodaSaborizada:()=>[
    createSlot('Selecciona el sabor',SODA_SABORES),
  ],
  hatsu:()=>[
    createSlot('Selecciona el sabor',HATSU_SABORES),
  ],
};

/* ── RUTAS DE IMÁGENES ── */
/* Las fotos de los nuevos productos se agregarán después. */

const IMG_TENDERS = 'imagenes/tenders/Tenders.jpeg';
const IMG_ALITAS6 = 'imagenes/alitas/Alitas6.jpeg';
const IMG_ALITAS12 = 'imagenes/alitas/Alitas12.jpeg';
const IMG_MEXICANAS = 'imagenes/papas/PapasMexicanas.jpeg';

const IMG_MEDIO_POLLO = 'imagenes/pollo/Medio pollo.jpeg';

const IMG_COCA_ORIGINAL = 'imagenes/bebidas/Coca-Cola.png';
const IMG_COCA_ZERO = 'imagenes/bebidas/Coca-Cola cero.jpeg';
const IMG_QUATRO = 'imagenes/bebidas/Quattro.png';

const IMG_COMBO_DOS = 'imagenes/combos/Comboparados.jpeg';
const IMG_PASTELITOS = 'imagenes/entradas/entrada-mini-pastelitos.jpeg';
const IMG_POLLO_ENTERO = 'imagenes/pollo/Pollo entero.jpeg';

const IMG_HATSU = 'imagenes/bebidas/Hatsu400ML.jpg';
const IMG_PREMIO = 'imagenes/bebidas/Premio400ML.png';
const IMG_AGUA_CRISTAL = 'imagenes/bebidas/Agua 600ML.jpg';

const IMG_ALITAS24 = 'imagenes/alitas/Alitasx24.PNG';

const IMG_PAPAS_ANTIOQUENAS = 'imagenes/papas/Papas Antioqueñas.jpeg';
const IMG_PAPAS_SUPREMAS = 'imagenes/papas/Papas Supremas (1).jpeg';
const IMG_PORCION_PAPAS = 'imagenes/papas/porcion-papas.png';
const IMG_PORCION_SALSA = 'imagenes/papas/porcion-salsa.png';

const IMG_ENSALADA_CESAR = 'imagenes/ensaladas/Ensalada Cesar.jpeg';

/* ── CATÁLOGO DE PRODUCTOS ── */
const MENU = [
  // ENTRADAS
  {
    id:'e1',cat:'Entradas',name:'Mini Pastelitos de Pollo',
    desc:'5 mini pastelitos de pollo acompañados con salsa de ajo y limón.',
    price:10000,emoji:'🥟',img:IMG_PASTELITOS,type:'simple'
  },
  {
  id:'e2',
  cat:'Entradas',
  name:'Deditos de Queso',
  desc:'4 deditos de queso grandes, rellenos y doraditos por fuera, con un delicioso queso en su interior. Acompañados de nuestra salsa artesanal de uchuva, que les da un toque dulce y especial a cada bocado.',
  price:19900,
  emoji:'🧀',
  img:'imagenes/entradas/Entrada_deditos_queso.png',
  type:'simple'
},


  // POLLO
  {
    id:'p1',cat:'Pollo',name:'Medio Pollo',
    desc:'Medio pollo acompañado de una porción de papas rústicas y 1 salsa para las papas.',
    price:35500,emoji:'🍗',img:IMG_MEDIO_POLLO,type:'config',
    slots:CONFIG_PRESETS.medioPollo()
  },
  {
    id:'p2',cat:'Pollo',name:'Pollo Entero',
    desc:'Pollo entero recién apanado, dorado y crujiente, acompañado de dos porciones de papas rústicas y miel para disfrutar y compartir.',
    price:63000,emoji:'🍗',img:IMG_POLLO_ENTERO,type:'config',
    configPrompt:'Personaliza tu pedido',
    slots:CONFIG_PRESETS.polloEntero()
  },

  // TENDERS
  {
    id:'t1',cat:'Tenders',name:'4 Tenders',
    desc:'Tenders crujientes acompañados de salsa de pepinillo de la casa. Elige 1 salsa para los tenders, papas a la francesa y 1 salsa para las papas.',
    price:27000,emoji:'🍤',img:IMG_TENDERS,type:'config',
    slots:CONFIG_PRESETS.tenders()
  },
  {
    id:'t2',cat:'Tenders',name:'4 Tenders Receta Club',
    desc:'Nuestros mismos tenders crujientes, ahora con el toque picante de la Receta Club de la casa. Acompañados de salsa de pepinillo, papas a la francesa y 1 salsa para las papas.',
    price:27000,emoji:'🌶️',img:IMG_TENDERS,type:'config',
    slots:CONFIG_PRESETS.tenders()
  },

  // ALITAS
  {
    id:'a1',cat:'Alitas',name:'6 Alitas',
    desc:'Alitas jugosas acompañadas de 1 salsa a elección, papas a la francesa y 1 salsa para las papas.',
    price:29500,emoji:'🍗',img:IMG_ALITAS6,type:'config',
    slots:CONFIG_PRESETS.alitas6()
  },
  {
    id:'a2',cat:'Alitas',name:'12 Alitas',
    desc:'Alitas jugosas acompañadas de 2 salsas a elección, papas a la francesa y 1 salsa para las papas.',
    price:54000,emoji:'🍗',img:IMG_ALITAS12,type:'config',
    slots:CONFIG_PRESETS.alitas12()
  },
  {
    id:'a3',cat:'Alitas',name:'24 Alitas',
    desc:'Alitas jugosas acompañadas de 2 salsas a elección, papas a la francesa y 1 salsa para las papas.',
    price:90500,emoji:'🍗',img:IMG_ALITAS24,type:'config',
    slots:CONFIG_PRESETS.alitas12()
  },

  // NUEVA CATEGORÍA: CRISPYS
  {
    id:'cr1',
    cat:'Crispys',
    name:'Crispy Club',
    desc:'10 pop corns grandes, doraditos y crujientes, acompañados de papas a la francesa y dos salsas de la casa a tu elección. ¡Perfectos para disfrutar cada bocado!',
    price:29000,
    emoji:'🍗',
    img:'',
    soon:true,
    type:'config',
    configPrompt:'Elige tus dos salsas',
    slots:CONFIG_PRESETS.crispyClub()
  },

  // PAPAS
  {
    id:'m1',cat:'Papas',name:'Papas Mexicanas',
    desc:'Papas a la francesa con sour cream, guacamole, trocitos de pollo, salsa cheddar y pico de gallo.',
    price:29000,emoji:'🌮',img:IMG_MEXICANAS,type:'simple'
  },
  {
    id:'pa1',cat:'Papas',name:'Papas Antioqueñas',
    desc:'Papas a la francesa cargadas con 160 gramos de chicharrón bañado en nuestra BBQ ahumada de la casa, trocitos de plátano maduro, salsa de queso cheddar y guacamole, rematadas con cilantro fresco.',
    price:29000,emoji:'🍟',img:IMG_PAPAS_ANTIOQUENAS,type:'simple'
  },
  {
    id:'ps1',cat:'Papas',name:'Papas Supremas',
    desc:'Papas a la francesa cargadas con salchicha de pollo ahumada, trozos de pollo apanado, maicitos, suero costeño y queso mozzarella fundido, rematadas con cebollín fresco.',
    price:26000,emoji:'🍟',img:IMG_PAPAS_SUPREMAS,type:'simple'
  },

  // ENSALADAS
  {
    id:'ens1',cat:'Ensaladas',name:'Ensalada César',
    desc:'Mix de lechugas, palmitos, crotones, trocitos de pollo, tomates secos y tomate fresco, queso parmesano y aderezo César original.',
    price:31000,emoji:'🥗',img:IMG_ENSALADA_CESAR,type:'simple'
  },

  // PORCIONES
  {
    id:'por1',cat:'Porciones',name:'Porción Tender',
    desc:'Una unidad de tender crujiente, ideal para añadir a tu pedido.',
    price:5500,emoji:'🍤',img:IMG_TENDERS,type:'simple'
  },
  {
    id:'por2',cat:'Porciones',name:'Porción Alita',
    desc:'Una unidad de alita, perfecta para completar tu pedido.',
    price:5000,emoji:'🍗',img:IMG_ALITAS6,type:'simple'
  },
  {
    id:'por3',cat:'Porciones',name:'Porción Papas',
    desc:'Porción de papas rústicas o a la francesa para acompañar.',
    price:6000,emoji:'🍟',img:IMG_PORCION_PAPAS,type:'simple'
  },
  {
    id:'por4',cat:'Porciones',name:'Porción Salsa',
    desc:'Salsa extra artesanal a tu elección para acompañar.',
    price:4000,emoji:'🫙',img:IMG_PORCION_SALSA,type:'simple'
  },

  // COMBOS
  {
    id:'c2',cat:'Combo',name:'Combo para Dos',
    desc:'4 tenders + 6 alitas + porción de papas agrandada + 2 Coca-Colas de 250 ml. Elige 1 salsa para las alitas, la salsa de los tenders, 1 salsa para las papas y tus bebidas.',
    price:58900,emoji:'🍗',img:IMG_COMBO_DOS,type:'config',
    configPrompt:'Personaliza tu combo',
    slots:CONFIG_PRESETS.comboParaDos()
  },

  // NUEVAS BEBIDAS
  {
    id:'b8',
    cat:'Bebidas',
    name:'Cerveza Michelada',
    desc:'Corona bien fría, michelada con Tajín y limón, servida con hielo y un toque de soda. Una combinación cítrica, refrescante y llena de sabor.',
    price:11500,
    emoji:'🍺',
    img:'imagenes/bebidas/michelada-corona.png',
    soon:false,
    type:'simple'
  },
  {
    id:'b9',
    cat:'Bebidas',
    name:'Soda Saborizada',
    desc:'Una explosión de frescura en cada sorbo. Soda michelada con hielo, trocitos de fruta y deliciosas perlas explosivas. Elige tu sabor favorito: maracuyá, lichi o cereza.',
    price:9900,
    emoji:'🥤',
    img:'imagenes/bebidas/Soda_Saborizada.png',
    soon:false,
    type:'config',
    configPrompt:'Elige el sabor de tu soda',
    slots:CONFIG_PRESETS.sodaSaborizada()
  },

  // BEBIDAS EXISTENTES
  {
    id:'b1',cat:'Bebidas',name:'Coca-Cola Original',
    desc:'Coca-Cola Original 400 ml bien fría.',
    price:5900,emoji:'🥤',img:IMG_COCA_ORIGINAL,type:'simple'
  },
  {
    id:'b2',cat:'Bebidas',name:'Coca-Cola Zero',
    desc:'Coca-Cola Zero 400 ml bien fría.',
    price:5900,emoji:'🥤',img:IMG_COCA_ZERO,type:'simple'
  },
  {
    id:'b3',cat:'Bebidas',name:'Quatro',
    desc:'Quatro 400 ml bien fría.',
    price:5900,emoji:'🥤',img:IMG_QUATRO,type:'simple'
  },
  {
    id:'b6',cat:'Bebidas',name:'Premio',
    desc:'Premio 400 ml bien fría.',
    price:5900,emoji:'🥤',img:IMG_PREMIO,type:'simple'
  },
  {
    id:'b7',cat:'Bebidas',name:'Agua Cristal',
    desc:'Agua Cristal 600 ml bien fría.',
    price:4500,emoji:'💧',img:IMG_AGUA_CRISTAL,type:'simple'
  },
  {
    id:'b5',cat:'Bebidas',name:'Hatsu Tea',
    desc:'Té Hatsu frío de 400 ml. Selecciona tu sabor favorito entre negro, verde, amarillo o blanco.',
    price:6500,emoji:'',img:IMG_HATSU,type:'config',
    configPrompt:'Selecciona tu sabor',
    slots:CONFIG_PRESETS.hatsu()
  },
];

const CATEGORIES = [
  'Entradas',
  'Pollo',
  'Tenders',
  'Alitas',
  'Crispys',
  'Papas',
  'Ensaladas',
  'Porciones',
  'Combo',
  'Bebidas'
];

let cart = {};
let cartUidSeq = 0;
let selectedPay = '';
let isCartOpen = false;
let cfg = {product:null,slots:[]};

const urlParams = new URLSearchParams(window.location.search);
const IS_MESA = (urlParams.get('mode') || '').toLowerCase() === 'mesa';

if(IS_MESA){
  document.body.classList.add('mode-mesa');
  document.getElementById('bannerMesa').style.display = 'block';
}

const fmt = n => '$' + n.toLocaleString('es-CO');

/* ── RENDERIZAR MENÚ ── */
function renderMenu(){
  const catsEl = document.getElementById('catsContainer');
  const mainEl = document.getElementById('mainContent');

  const allBtn = document.createElement('button');
  allBtn.className = 'cat-btn active';
  allBtn.textContent = 'Todos';
  allBtn.onclick = () => catScroll(null,allBtn);
  catsEl.appendChild(allBtn);

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.textContent = cat;
    btn.onclick = () => catScroll(cat,btn);
    catsEl.appendChild(btn);

    const sec = document.createElement('section');
    sec.id = 'cat-' + cat.replace(/\s+/g,'-');

    const lbl = document.createElement('h2');
    lbl.className = 'section-label';
    lbl.textContent = cat;
    sec.appendChild(lbl);

    MENU.filter(p => p.cat === cat).forEach(p => {
      sec.appendChild(makeCard(p));
    });

    mainEl.appendChild(sec);
  });
}

/* ── DETALLE AMPLIADO ── */
let detailProduct = null;

function openProductDetail(productId){
  const p = MENU.find(x => x.id === productId);
  if(!p) return;

  detailProduct = p;

  const overlay = document.getElementById('detailOverlay');
  const img = document.getElementById('detailImage');
  const placeholder = document.getElementById('detailImagePlaceholder');

  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailDescription').textContent = p.desc;
  document.getElementById('detailPrice').textContent = fmt(p.price);

  if(p.img){
    img.src = p.img;
    img.alt = p.name;
    img.style.display = 'block';
    placeholder.style.display = 'none';

    img.onerror = () => {
      img.style.display = 'none';
      placeholder.textContent = p.emoji || '🍽️';
      placeholder.style.display = 'flex';
    };
  }else{
    img.removeAttribute('src');
    img.style.display = 'none';
    placeholder.textContent = p.emoji || '🍽️';
    placeholder.style.display = 'flex';
  }

  const action = document.getElementById('detailAction');
  action.textContent = p.type === 'config'
    ? 'Personalizar pedido'
    : 'Agregar al pedido';

  action.style.display = IS_MESA ? 'none' : 'block';

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';

  document.querySelector('.detail-close').focus();
}

function closeProductDetail(){
  const overlay = document.getElementById('detailOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  detailProduct = null;
}

function handleDetailAction(){
  if(!detailProduct || IS_MESA) return;

  const p = detailProduct;
  closeProductDetail();

  if(p.type === 'config'){
    openConfigModal(null,p.id);
  }else{
    addSimple(p.id);
  }
}

document.getElementById('detailOverlay').addEventListener('click',e => {
  if(e.target === e.currentTarget) closeProductDetail();
});

document.addEventListener('keydown',e => {
  if(e.key === 'Escape' &&
    document.getElementById('detailOverlay').classList.contains('open')){
    closeProductDetail();
  }
});

function makeCard(p){
  const card = document.createElement('div');
  card.className = 'product-card';
  card.onclick = () => openProductDetail(p.id);
  card.tabIndex = 0;
  card.setAttribute('role','button');
  card.setAttribute('aria-label',`Ver detalles de ${p.name}`);

  card.onkeydown = e => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      openProductDetail(p.id);
    }
  };

  const imgWrap = document.createElement('div');
  imgWrap.className = 'product-img';

  if(p.img){
    const img = document.createElement('img');
    img.src = p.img;
    img.alt = p.name;
    img.loading = 'lazy';

    img.onerror = () => {
      img.remove();
      const ph = document.createElement('div');
      ph.className = 'product-img-placeholder';
      ph.textContent = p.emoji;
      imgWrap.appendChild(ph);
    };

    imgWrap.appendChild(img);
  }else{
    const ph = document.createElement('div');
    ph.className = 'product-img-placeholder';

    ph.innerHTML = `${p.emoji || '🍽️'}<br><span style="font-size:9px;color:var(--beige-mid);font-family:Jost,sans-serif">Foto próximamente</span>`;
    ph.style.flexDirection = 'column';
    ph.style.gap = '2px';
    ph.style.display = 'flex';
    ph.style.alignItems = 'center';
    ph.style.justifyContent = 'center';

    imgWrap.appendChild(ph);
  }

  const info = document.createElement('div');
  info.className = 'product-info';

  const soonBadge = p.soon
    ? '<div class="badge-soon">📸 Foto próximamente</div>'
    : '';

  const addBtn = !IS_MESA
    ? (p.type === 'config'
      ? `<button class="btn-add" onclick="openConfigModal(event,'${p.id}')" aria-label="Personalizar ${p.name}">+</button>`
      : `<button class="btn-add" onclick="event.stopPropagation();addSimple('${p.id}')" aria-label="Añadir ${p.name}">+</button>`)
    : '';

  info.innerHTML = `
    ${soonBadge}
    <p class="product-name">${p.name}</p>
    <p class="product-desc">${p.desc}</p>
    <div class="product-footer">
      <span class="product-price">${fmt(p.price)}</span>
      ${addBtn}
    </div>`;

  card.appendChild(imgWrap);
  card.appendChild(info);

  return card;
}

function catScroll(cat,btn){
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.remove('active');
  });

  btn.classList.add('active');

  if(!cat){
    window.scrollTo({top:0,behavior:'smooth'});
    return;
  }

  const el = document.getElementById('cat-' + cat.replace(/\s+/g,'-'));
  if(!el) return;

  const headerH = document.querySelector('.header')?.offsetHeight || 0;

  window.scrollTo({
    top:el.getBoundingClientRect().top + window.scrollY - headerH - 16,
    behavior:'smooth'
  });
}

/* ── CONFIGURADOR DE PRODUCTOS ── */
function openConfigModal(e,productId){
  if(e) e.stopPropagation();
  if(IS_MESA) return;

  const p = MENU.find(x => x.id === productId);
  if(!p) return;

  cfg.product = p;

  cfg.slots = p.slots.map(slotDef => {
    const chosen = slotDef.defaultSauceId
      ? slotDef.sauces.find(s => s.id === slotDef.defaultSauceId) || null
      : null;

    return {chosen};
  });

  document.getElementById('configIcon').textContent = p.emoji;
  document.getElementById('configTitle').textContent = p.name;
  document.getElementById('configSubtitle').textContent =
    `${fmt(p.price)} · ${p.configPrompt || 'Elige tus salsas'}`;

  renderConfigSlots();

  document.getElementById('configSummary').classList.remove('visible');
  checkCfgReady();

  document.getElementById('configOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeConfigModal(){
  document.getElementById('configOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('configOverlay').addEventListener('click',e => {
  if(e.target === document.getElementById('configOverlay')){
    closeConfigModal();
  }
});

function renderConfigSlots(){
  const body = document.getElementById('configBody');
  body.innerHTML = '';

  cfg.product.slots.forEach((slotDef,idx) => {
    const chosen = cfg.slots[idx]?.chosen || null;

    const slotEl = document.createElement('div');
    slotEl.className = 'sauce-slot' + (chosen ? ' filled' : '');
    slotEl.id = `cfg-slot-${idx}`;

    const header = document.createElement('div');
    header.className = 'sauce-slot-header';
    header.onclick = () => toggleCfgSlot(idx);

    const chosenText = chosen
      ? `${chosen.emoji ? chosen.emoji + ' ' : ''}${chosen.name}`
      : 'Sin elegir';

    const chosenClass = chosen
      ? 'sauce-slot-chosen ok'
      : 'sauce-slot-chosen';

    header.innerHTML = `
      <div class="sauce-slot-title">
        <span class="sauce-slot-num">${idx+1}</span>
        ${slotDef.label}
      </div>
      <div style="display:flex;align-items:center;gap:4px">
        <span class="${chosenClass}" id="cfg-chosen-${idx}">${chosenText}</span>
        <span class="sauce-chevron">▼</span>
      </div>`;

    slotEl.appendChild(header);

    const list = document.createElement('div');
    list.className = 'sauce-list';

    const grid = document.createElement('div');
    grid.className = 'sauce-options-grid';

    slotDef.sauces.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'sauce-opt' +
        (chosen && chosen.id === s.id ? ' selected' : '');

      btn.type = 'button';
      btn.textContent = `${s.emoji ? s.emoji + ' ' : ''}${s.name}`;
      btn.onclick = () => selectCfgSauce(idx,s,btn);
      grid.appendChild(btn);
    });

    list.appendChild(grid);
    slotEl.appendChild(list);
    body.appendChild(slotEl);
  });

  toggleCfgSlot(0);
}

function toggleCfgSlot(idx){
  document.querySelectorAll('.sauce-slot').forEach((el,i) => {
    if(i === idx){
      el.classList.toggle('open');
    }else{
      el.classList.remove('open');
    }
  });

  setTimeout(() => {
    document.getElementById(`cfg-slot-${idx}`)?.scrollIntoView({
      behavior:'smooth',
      block:'nearest'
    });
  },120);
}

function selectCfgSauce(idx,sauce,clickedBtn){
  const slotEl = document.getElementById(`cfg-slot-${idx}`);

  slotEl.querySelectorAll('.sauce-opt').forEach(b => {
    b.classList.remove('selected');
  });

  clickedBtn.classList.add('selected');
  cfg.slots[idx].chosen = sauce;

  const ch = document.getElementById(`cfg-chosen-${idx}`);
  ch.textContent = `${sauce.emoji ? sauce.emoji + ' ' : ''}${sauce.name}`;
  ch.classList.add('ok');

  slotEl.classList.add('filled');

  const next = idx + 1;
  if(next < cfg.slots.length){
    setTimeout(() => toggleCfgSlot(next),280);
  }

  checkCfgReady();
}

function checkCfgReady(){
  const ok = cfg.slots.every(s => s.chosen !== null);

  document.getElementById('btnAddConfig').disabled = !ok;

  if(ok){
    updateCfgSummary();
  }else{
    document.getElementById('configSummary').classList.remove('visible');
  }
}

function updateCfgSummary(){
  const sumEl = document.getElementById('configSummaryContent');

  sumEl.innerHTML = cfg.product.slots.map((slotDef,i) => {
    const c = cfg.slots[i].chosen;

    return `
      <div class="summary-line">
        <span>${c.emoji || ''}</span>
        <span>
          <strong style="color:var(--beige)">${slotDef.label}:</strong>
          ${c.name}
        </span>
      </div>`;
  }).join('');

  document.getElementById('configTotalPrice').textContent =
    fmt(cfg.product.price);

  document.getElementById('configSummary').classList.add('visible');
}

function confirmConfig(){
  if(!cfg.product || cfg.slots.some(s => !s.chosen)) return;

  const uid = 'cfg_' + (++cartUidSeq);

  const detail = cfg.product.slots.map((slotDef,i) =>
    `${slotDef.label}: ${cfg.slots[i].chosen.name}`
  ).join(' | ');

  cart[uid] = {
    uid,
    type:'config',
    name:cfg.product.name,
    detail,
    price:cfg.product.price,
    qty:1,
    emoji:cfg.product.emoji
  };

  updateFAB();
  closeConfigModal();
  showToast(`${cfg.product.emoji} ${cfg.product.name} agregado`);
}

/* ── CARRITO ── */
function addSimple(id){
  if(IS_MESA) return;

  const p = MENU.find(x => x.id === id);
  if(!p) return;

  if(cart[id]){
    cart[id].qty++;
  }else{
    cart[id] = {uid:id,type:'simple',...p,qty:1};
  }

  updateFAB();
  showToast(`${p.emoji} ${p.name} agregado`);
}

function removeOne(uid){
  if(!cart[uid]) return;

  if(--cart[uid].qty <= 0){
    delete cart[uid];
  }

  updateFAB();
  renderCartModal();
}

function addOne(uid){
  if(!cart[uid]) return;

  cart[uid].qty++;
  updateFAB();
  renderCartModal();
}

function clearCart(){
  cart = {};
  cartUidSeq = 0;

  updateFAB();
  closeModal();
  showToast('Carrito vaciado');
}

const cartTotal = () =>
  Object.values(cart).reduce((a,i) => a + i.price * i.qty,0);

const cartCount = () =>
  Object.values(cart).reduce((a,i) => a + i.qty,0);

function updateFAB(){
  document.getElementById('fabCount').textContent = cartCount();

  const fab = document.getElementById('fabCart');

  if(cartCount() > 0 && !IS_MESA){
    fab.classList.add('visible');
  }else{
    fab.classList.remove('visible');
  }
}

function renderCartModal(){
  const listEl = document.getElementById('cartList');
  const totalEl = document.getElementById('cartTotal');
  const items = Object.values(cart);

  listEl.innerHTML = '';

  if(!items.length){
    listEl.innerHTML = `
      <div class="empty-cart">
        <span class="empty-cart-icon">🛒</span>
        Tu carrito está vacío.<br>
        ¡Pide algo delicioso!
      </div>`;

    document.getElementById('formSection').style.display = 'none';
    document.getElementById('btnWhatsapp').style.display = 'none';
  }else{
    items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-item';

      row.innerHTML = `
        <div class="cart-item-info">
          <span class="cart-item-name">${item.emoji} ${item.name}</span>
          ${item.detail
            ? `<span class="cart-item-detail">${item.detail}</span>`
            : ''}
        </div>
        <div class="cart-item-right">
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="removeOne('${item.uid}')">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="addOne('${item.uid}')">+</button>
          </div>
          <span class="cart-item-subtotal">
            ${fmt(item.price * item.qty)}
          </span>
        </div>`;

      listEl.appendChild(row);
    });

    document.getElementById('formSection').style.display = 'block';
    document.getElementById('btnWhatsapp').style.display = 'flex';
  }

  totalEl.textContent = fmt(cartTotal());
}

document.getElementById('fabCart').addEventListener('click',openModal);

document.getElementById('modalOverlay').addEventListener('click',e => {
  if(e.target === document.getElementById('modalOverlay')){
    closeModal();
  }
});

function openModal(){
  renderCartModal();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  isCartOpen = true;
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  isCartOpen = false;
}

/* ── PAGO ── */
function selectPay(m){
  selectedPay = m;

  document.getElementById('payEfectivo').classList.toggle(
    'selected',m === 'Efectivo'
  );

  document.getElementById('payTransferencia').classList.toggle(
    'selected',m === 'Transferencia'
  );

  document.getElementById('payEfectivo').style.outline = '';
  document.getElementById('payTransferencia').style.outline = '';
}

/* ── WHATSAPP ── */
function sendWhatsApp(){
  const nombre = document.getElementById('inputNombre').value.trim();
  const direccion = document.getElementById('inputDireccion').value.trim();

  const iN = document.getElementById('inputNombre');
  const iD = document.getElementById('inputDireccion');

  let ok = true;

  iN.classList.remove('error');
  iD.classList.remove('error');

  if(!nombre){
    iN.classList.add('error');
    ok = false;
  }

  if(!direccion){
    iD.classList.add('error');
    ok = false;
  }

  if(!selectedPay){
    document.getElementById('payEfectivo').style.outline =
      '2px solid #E03120';
    document.getElementById('payTransferencia').style.outline =
      '2px solid #E03120';
    ok = false;
  }

  if(!cartCount()) ok = false;

  if(!ok){
    showToast('Completa todos los campos ✏️');
    return;
  }

  const detalle = Object.values(cart).map(i => {
    let l = `- ${i.qty}x ${i.name} (${fmt(i.price)})`;
    if(i.detail) l += `\n   ${i.detail}`;
    return l;
  }).join('\n');

  const msg =
    `🍗 *THE CHICKEN CLUB* 🍗\n\n` +
    `👤 Cliente: ${nombre}\n` +
    `📍 Dirección: ${direccion}\n` +
    `💳 Pago: ${selectedPay}\n` +
    `🛒 Detalle:\n${detalle}\n\n` +
    `💰 Total: ${fmt(cartTotal())}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    '_blank'
  );
}

/* ── NOTIFICACIONES ── */
let tt;

function showToast(msg){
  const t = document.getElementById('toast');

  t.textContent = msg;
  t.classList.add('show');

  clearTimeout(tt);

  tt = setTimeout(() => {
    t.classList.remove('show');
  },2400);
}

/* ── TECLA ESCAPE ── */
document.addEventListener('keydown',e => {
  if(e.key === 'Escape'){
    if(isCartOpen){
      closeModal();
    }else{
      closeConfigModal();
    }
  }
});

/* ── INICIAR MENÚ ── */
renderMenu();
