import { createContext, useContext } from "react";

export const LangContext = createContext({ lang: "en", setLang: () => {} });
export const useLang = () => useContext(LangContext);

const T = {
  // ===== NAV =====
  navBridge: { en: "Bridge", es: "Puente" },
  navProvision: { en: "Provision", es: "Provisión" },
  navFleet: { en: "Fleet", es: "Flota" },
  navOrders: { en: "Orders", es: "Órdenes" },
  navSuppliers: { en: "Suppliers", es: "Proveedores" },

  // ===== PITCH NAV =====
  slideTitle: { en: "Title", es: "Título" },
  slideProblem: { en: "Problem", es: "Problema" },
  slideSolution: { en: "Solution", es: "Solución" },
  slideMarket: { en: "Market", es: "Mercado" },
  slideRevenue: { en: "Revenue", es: "Ingresos" },
  back: { en: "← Back", es: "← Atrás" },
  continue: { en: "Continue →", es: "Continuar →" },
  begin: { en: "Begin →", es: "Comenzar →" },
  launchDemo: { en: "Launch Demo →", es: "Ver Demo →" },
  orClick: { en: "or click to navigate", es: "o haz clic para navegar" },

  // ===== TITLE SLIDE =====
  titleTagline: { en: "The first mobile platform purpose-built for yacht provisioning", es: "La primera plataforma móvil diseñada para el aprovisionamiento de yates" },
  titleMarket: { en: "Market", es: "Mercado" },
  titleFLOpp: { en: "FL Opportunity", es: "Oportunidad FL" },
  titleSeed: { en: "Seed Ask", es: "Ronda Semilla" },
  titleMotto: { en: "Shopify + DoorDash — for the yachting industry", es: "Shopify + DoorDash — para la industria náutica" },

  // ===== PROBLEM SLIDE =====
  theProblem: { en: "The Problem", es: "El Problema" },
  problemH2a: { en: "Provisioning a yacht is ", es: "Aprovisionar un yate está " },
  problemH2b: { en: "broken", es: "roto" },
  problemSub: { en: "A completely manual, fragmented process repeated from scratch for every single charter", es: "Un proceso completamente manual y fragmentado que se repite desde cero en cada charter" },
  pain1Title: { en: "6–10 Vendor Calls Per Trip", es: "6–10 Llamadas a Proveedores Por Viaje" },
  pain1Desc: { en: "Captains manually contact separate suppliers for every category — seafood, produce, spirits, cleaning — each time.", es: "Los capitanes contactan manualmente a proveedores separados por cada categoría — mariscos, frutas, licores, limpieza — cada vez." },
  pain2Title: { en: "Uncoordinated Deliveries", es: "Entregas Descoordinadas" },
  pain2Desc: { en: "Multiple vendors delivering at different times. No cold-chain guarantees. Missed windows delay departures.", es: "Múltiples proveedores entregando en diferentes horarios. Sin garantía de cadena de frío. Ventanas perdidas retrasan salidas." },
  pain3Title: { en: "Manual Customs Manifests", es: "Manifiestos de Aduana Manuales" },
  pain3Desc: { en: "International departures require CBP-compliant paperwork — done by hand from scattered invoices every trip.", es: "Las salidas internacionales requieren documentación conforme a CBP — hecha a mano desde facturas dispersas en cada viaje." },
  pain4Title: { en: "No Consolidated Billing", es: "Sin Facturación Consolidada" },
  pain4Desc: { en: "Every vendor invoiced separately. No spend visibility. Fleet managers reconcile dozens of invoices per vessel.", es: "Cada proveedor factura por separado. Sin visibilidad de gastos. Los gerentes de flota concilian docenas de facturas por embarcación." },
  pain5Title: { en: "Zero Reusability", es: "Cero Reutilización" },
  pain5Desc: { en: "No saved templates. No guest profiles. The entire process starts from scratch for every charter, every week.", es: "Sin plantillas guardadas. Sin perfiles de invitados. Todo el proceso comienza desde cero en cada charter, cada semana." },
  pain6Title: { en: "WhatsApp & Spreadsheets", es: "WhatsApp y Hojas de Cálculo" },
  pain6Desc: { en: "The $60B yacht industry runs on group chats, phone calls, and personal relationships. There is no platform.", es: "La industria de yates de $60B funciona con chats grupales, llamadas y relaciones personales. No existe una plataforma." },

  // ===== SOLUTION SLIDE =====
  theSolution: { en: "The Solution", es: "La Solución" },
  solutionH2a: { en: "One platform for ", es: "Una plataforma para " },
  solutionH2b: { en: "everything", es: "todo" },
  solutionDesc: { en: "Yacht Provisions Pro connects captains, crew, and owners with vetted suppliers for bulk, temperature-controlled, dockside delivery — replacing the chaos with a single coordinated workflow.", es: "Yacht Provisions Pro conecta capitanes, tripulación y propietarios con proveedores verificados para entregas a granel, con temperatura controlada, en muelle — reemplazando el caos con un flujo de trabajo coordinado." },
  roiTitle: { en: "4+ hours saved per provision run", es: "4+ horas ahorradas por aprovisionamiento" },
  roiSub: { en: "From scattered calls to a single, coordinated dockside delivery", es: "De llamadas dispersas a una sola entrega coordinada en muelle" },
  feat1Title: { en: "Smart Provision Builder", es: "Constructor Inteligente" },
  feat1Desc: { en: "One unified catalog of vetted marine-grade suppliers. Build complete orders by category.", es: "Un catálogo unificado de proveedores marinos verificados. Arma pedidos completos por categoría." },
  feat2Title: { en: "Departure-Linked Scheduling", es: "Programación por Salida" },
  feat2Desc: { en: "Input your departure. The app calculates delivery windows and cold-chain timing.", es: "Ingresa tu salida. La app calcula ventanas de entrega y tiempos de cadena de frío." },
  feat3Title: { en: "Provision Templates", es: "Plantillas de Provisión" },
  feat3Desc: { en: "Save and reorder past setups with one tap. Your weekly Bahamas run? Two taps.", es: "Guarda y reordena configuraciones pasadas con un toque. ¿Tu viaje semanal a Bahamas? Dos toques." },
  feat4Title: { en: "Fleet Dashboard", es: "Panel de Flota" },
  feat4Desc: { en: "All vessels, orders, spend, and delivery status in one centralized control panel.", es: "Todas las embarcaciones, órdenes, gastos y estado de entregas en un panel centralizado." },
  feat5Title: { en: "Customs Manifest Generator", es: "Generador de Manifiestos" },
  feat5Desc: { en: "Auto-generate CBP-compliant manifests from order data. Hours of paperwork eliminated.", es: "Genera automáticamente manifiestos conformes a CBP desde datos de pedidos. Horas de papeleo eliminadas." },
  feat6Title: { en: "Guest Profile System", es: "Sistema de Perfiles" },
  feat6Desc: { en: "Dietary restrictions and allergies flagged in real time during ordering.", es: "Restricciones dietéticas y alergias señaladas en tiempo real durante el pedido." },

  // ===== MARKET SLIDE =====
  theMarket: { en: "The Market", es: "El Mercado" },
  marketH2a: { en: "A ", es: "Una industria de " },
  marketH2b: { en: "$60 billion", es: "$60 mil millones" },
  marketH2c: { en: " industry with zero technology", es: " sin tecnología" },
  tamLabel: { en: "TAM — Global", es: "TAM — Global" },
  tamDesc: { en: "Charter + private vessels + superyacht management + marine hospitality", es: "Charter + embarcaciones privadas + gestión de superyates + hospitalidad marina" },
  samLabel: { en: "SAM — South Florida", es: "SAM — Sur de Florida" },
  samDesc: { en: "100,000+ registered vessels · Ft. Lauderdale, Miami, Palm Beach, the Keys", es: "100,000+ embarcaciones registradas · Ft. Lauderdale, Miami, Palm Beach, los Cayos" },
  somLabel: { en: "SOM — Year 1–3", es: "SOM — Año 1–3" },
  somDesc: { en: "2–3% capture rate → $1.5–3M net revenue at 15–20% take rate", es: "2–3% tasa de captura → $1.5–3M ingresos netos al 15–20% de comisión" },
  mktStat1: { en: "Ft. Lauderdale: largest in-water boat show in the world", es: "Ft. Lauderdale: el show náutico más grande del mundo" },
  mktStat2: { en: "Registered recreational vessels in South Florida alone", es: "Embarcaciones recreativas registradas solo en el sur de Florida" },
  mktStat3: { en: "Purpose-built tech platforms for yacht provisioning", es: "Plataformas tecnológicas diseñadas para aprovisionamiento de yates" },
  mktStat4: { en: "Estimated time to break-even at $4–5M annual GMV", es: "Tiempo estimado para punto de equilibrio a $4–5M GMV anual" },

  // ===== REVENUE SLIDE =====
  revenueEngine: { en: "Revenue Engine", es: "Motor de Ingresos" },
  revenueH2a: { en: "Six revenue streams. ", es: "Seis fuentes de ingreso. " },
  revenueH2b: { en: "One platform.", es: "Una plataforma." },
  revenueSub: { en: "Multi-stream model with both transactional and recurring revenue", es: "Modelo multi-fuente con ingresos transaccionales y recurrentes" },
  rev1Name: { en: "Transaction Commission", es: "Comisión por Transacción" },
  rev1Ex: { en: "$1,440–$3,600 per order", es: "$1,440–$3,600 por orden" },
  rev1Desc: { en: "Core engine. Markup on all goods ordered through the platform.", es: "Motor principal. Margen sobre todos los productos ordenados por la plataforma." },
  rev2Name: { en: "Delivery Coordination Fee", es: "Tarifa de Coordinación" },
  rev2Ex: { en: "Per delivery", es: "Por entrega" },
  rev2Desc: { en: "Flat fee covering dockside agent and cold-chain handling.", es: "Tarifa fija que cubre agente en muelle y manejo de cadena de frío." },
  rev3Name: { en: "Fleet Account SaaS", es: "SaaS de Cuentas de Flota" },
  rev3Ex: { en: "80%+ margins", es: "80%+ márgenes" },
  rev3Desc: { en: "Recurring revenue from management companies. Dashboard, billing, priority.", es: "Ingresos recurrentes de empresas de gestión. Panel, facturación, prioridad." },
  rev4Name: { en: "Supplier Listing Fees", es: "Tarifas de Listado" },
  rev4Ex: { en: "Per vendor", es: "Por proveedor" },
  rev4Desc: { en: "Premium placement in catalog for access to high-spend captain demographic.", es: "Ubicación premium en catálogo para acceso a capitanes de alto gasto." },
  rev5Name: { en: "White-Glove Concierge", es: "Concierge Premium" },
  rev5Ex: { en: "Per provision event", es: "Por evento de provisión" },
  rev5Desc: { en: "Human agent handles everything for superyacht and UHNW clients.", es: "Un agente humano maneja todo para superyates y clientes UHNW." },
  rev6Name: { en: "Charter Broker Partnerships", es: "Alianzas con Brokers" },
  rev6Ex: { en: "Fulfillment layer", es: "Capa de cumplimiento" },
  rev6Desc: { en: "Brokers include provisioning in charter contracts. We fulfill.", es: "Los brokers incluyen aprovisionamiento en contratos de charter. Nosotros cumplimos." },
  revAvgOrder: { en: "Avg Order Value", es: "Valor Promedio de Orden" },
  revPerOrder: { en: "Revenue Per Order", es: "Ingreso Por Orden" },
  revCaptains: { en: "100 Captains Year 1", es: "100 Capitanes Año 1" },
  revSeedRound: { en: "Seed Round", es: "Ronda Semilla" },

  // ===== HEADER / SEARCH =====
  searchPlaceholder: { en: "Search vessels, orders...", es: "Buscar embarcaciones, órdenes..." },

  // ===== DASHBOARD =====
  bridgeOverview: { en: "Bridge Overview", es: "Vista del Puente" },
  dashSubtitle: { en: "Thursday, February 19, 2026 — Fort Lauderdale, FL", es: "Jueves, 19 de febrero de 2026 — Fort Lauderdale, FL" },
  activeOrders: { en: "Active Orders", es: "Órdenes Activas" },
  monthlyGMV: { en: "Monthly GMV", es: "GMV Mensual" },
  fleetAccounts: { en: "Fleet Accounts", es: "Cuentas de Flota" },
  suppliersOnline: { en: "Suppliers Online", es: "Proveedores en Línea" },
  plus3Today: { en: "+3 today", es: "+3 hoy" },
  plus18vsJan: { en: "+18% vs Jan", es: "+18% vs Ene" },
  plus2Month: { en: "+2 this month", es: "+2 este mes" },
  fillRate98: { en: "98% fill rate", es: "98% tasa de cumplimiento" },
  recentOrders: { en: "Recent Orders", es: "Órdenes Recientes" },
  viewAll: { en: "View All →", es: "Ver Todas →" },
  items: { en: "items", es: "artículos" },
  quickActions: { en: "Quick Actions", es: "Acciones Rápidas" },
  newProvisionOrder: { en: "New Provision Order", es: "Nueva Orden de Provisión" },
  reorderTemplate: { en: "Reorder Last Template", es: "Reordenar Última Plantilla" },
  genManifest: { en: "Generate Customs Manifest", es: "Generar Manifiesto de Aduanas" },
  upcomingDepartures: { en: "Upcoming Departures", es: "Próximas Salidas" },

  // ===== PROVISION BUILDER =====
  smartProvBuilder: { en: "Smart Provision Builder", es: "Constructor de Provisiones" },
  provBuilderSub: { en: "Build your provision order by category — vetted suppliers only", es: "Crea tu orden de provisión por categoría — solo proveedores verificados" },
  categories: { en: "Categories", es: "Categorías" },
  catProteins: { en: "Proteins", es: "Proteínas" },
  catSeafood: { en: "Seafood", es: "Mariscos" },
  catProduce: { en: "Produce", es: "Frutas y Verduras" },
  catDairy: { en: "Dairy & Eggs", es: "Lácteos y Huevos" },
  catBakery: { en: "Bakery", es: "Panadería" },
  catBeverages: { en: "Beverages", es: "Bebidas" },
  catSpirits: { en: "Spirits & Wine", es: "Licores y Vinos" },
  catDry: { en: "Dry Goods", es: "Productos Secos" },
  catCleaning: { en: "Cleaning", es: "Limpieza" },
  catSpecialty: { en: "Specialty", es: "Especialidades" },
  vessel: { en: "Vessel", es: "Embarcación" },
  departure: { en: "Departure", es: "Salida" },
  tomorrowTime: { en: "Tomorrow — 6:00 AM", es: "Mañana — 6:00 AM" },
  deliveryConfirmed: { en: "● Delivery window confirmed: Today 2:00–4:00 PM", es: "● Ventana de entrega confirmada: Hoy 2:00–4:00 PM" },
  guestAlert: { en: "Guest Profile Alert:", es: "Alerta de Perfil de Invitado:" },
  guestAlertDetail: { en: "Guest #2 (Sarah Mitchell) — Shellfish allergy, Gluten-free.", es: "Invitado #2 (Sarah Mitchell) — Alergia a mariscos, Sin gluten." },
  addBtn: { en: "Add", es: "Agregar" },
  viewCart: { en: "View Provision Cart", es: "Ver Carrito de Provisiones" },
  provisionCart: { en: "Provision Cart", es: "Carrito de Provisiones" },
  subtotal: { en: "Subtotal", es: "Subtotal" },
  coordFee: { en: "Coordination Fee", es: "Tarifa de Coordinación" },
  total: { en: "Total", es: "Total" },
  scheduleDelivery: { en: "Schedule Dockside Delivery →", es: "Programar Entrega en Muelle →" },

  // Product units
  perLb: { en: "per lb", es: "por libra" },
  perDozen: { en: "per dozen", es: "por docena" },
  perFish: { en: "per fish", es: "por pescado" },
  perBottle: { en: "per bottle", es: "por botella" },
  perCase6: { en: "per case (6)", es: "por caja (6)" },
  perCase24: { en: "per case (24)", es: "por caja (24)" },
  perSet12: { en: "per set (12)", es: "por set (12)" },

  // Product tags
  tagPremium: { en: "Premium", es: "Premium" },
  tagSeasonal: { en: "Seasonal", es: "De Temporada" },
  tagChefsPick: { en: "Chef's Pick", es: "Selección del Chef" },
  tagLive: { en: "Live", es: "Vivo" },
  tagOrganic: { en: "Organic", es: "Orgánico" },
  tagUltraPremium: { en: "Ultra Premium", es: "Ultra Premium" },

  // ===== FLEET VIEW =====
  fleetDashboard: { en: "Fleet Dashboard", es: "Panel de Flota" },
  fleetSub: { en: "Manage all vessels and their provisioning status", es: "Gestiona todas las embarcaciones y su estado de aprovisionamiento" },
  captain: { en: "Captain", es: "Capitán" },
  provisionProgress: { en: "Provision Progress", es: "Progreso de Provisión" },
  startOrder: { en: "Start Order", es: "Iniciar Orden" },
  viewDetails: { en: "View Details", es: "Ver Detalles" },

  // ===== ORDERS VIEW =====
  orderManagement: { en: "Order Management", es: "Gestión de Órdenes" },
  ordersSub: { en: "Track and manage all provision orders across your fleet", es: "Rastrea y gestiona todas las órdenes de provisión de tu flota" },
  filterAll: { en: "all", es: "todas" },
  filterDelivering: { en: "delivering", es: "en entrega" },
  filterPending: { en: "pending", es: "pendiente" },
  filterComplete: { en: "complete", es: "completada" },
  thOrderId: { en: "Order ID", es: "ID de Orden" },
  thVessel: { en: "Vessel", es: "Embarcación" },
  thDate: { en: "Date", es: "Fecha" },
  thItems: { en: "Items", es: "Artículos" },
  thTotal: { en: "Total", es: "Total" },
  thStatus: { en: "Status", es: "Estado" },

  // ===== SUPPLIERS VIEW =====
  supplierNetwork: { en: "Supplier Network", es: "Red de Proveedores" },
  suppliersSub: { en: "47 vetted suppliers across 10 categories", es: "47 proveedores verificados en 10 categorías" },
  activeSuppliers: { en: "Active Suppliers", es: "Proveedores Activos" },
  tenCategories: { en: "10 categories", es: "10 categorías" },
  avgFillRate: { en: "Avg Fill Rate", es: "Tasa Promedio de Cumplimiento" },
  vsLastMonth: { en: "+0.3% vs last month", es: "+0.3% vs mes anterior" },
  supplierGMV: { en: "Supplier GMV", es: "GMV de Proveedores" },
  last30Days: { en: "Last 30 days", es: "Últimos 30 días" },
  thSupplier: { en: "Supplier", es: "Proveedor" },
  thCategory: { en: "Category", es: "Categoría" },
  thRating: { en: "Rating", es: "Calificación" },
  thOrders: { en: "Orders", es: "Órdenes" },
  thRevenue: { en: "Revenue", es: "Ingresos" },
  thFillRate: { en: "Fill Rate", es: "Cumplimiento" },
  thTier: { en: "Tier", es: "Nivel" },

  // Supplier tiers
  tierPremium: { en: "Premium", es: "Premium" },
  tierVerified: { en: "Verified", es: "Verificado" },
  tierOrganic: { en: "Organic", es: "Orgánico" },
  tierUltraPremium: { en: "Ultra Premium", es: "Ultra Premium" },

  // ===== STATUS BADGES =====
  statusDelivering: { en: "Delivering", es: "En Entrega" },
  statusComplete: { en: "Complete", es: "Completado" },
  statusPending: { en: "Pending", es: "Pendiente" },
  statusInProgress: { en: "In Progress", es: "En Progreso" },
  statusAwaiting: { en: "Awaiting Approval", es: "Esperando Aprobación" },
  statusNotStarted: { en: "Not Started", es: "No Iniciado" },
};

export function t(key, lang) {
  const entry = T[key];
  if (!entry) return key;
  return entry[lang] || entry.en || key;
}

// Helper to translate product units
const UNIT_MAP = {
  "per lb": "perLb",
  "per dozen": "perDozen",
  "per fish": "perFish",
  "per bottle": "perBottle",
  "per case (6)": "perCase6",
  "per case (24)": "perCase24",
  "per set (12)": "perSet12",
};
export function tUnit(unit, lang) {
  const key = UNIT_MAP[unit];
  return key ? t(key, lang) : unit;
}

// Helper to translate product tags
const TAG_MAP = {
  "Premium": "tagPremium",
  "Seasonal": "tagSeasonal",
  "Chef's Pick": "tagChefsPick",
  "Live": "tagLive",
  "Organic": "tagOrganic",
  "Ultra Premium": "tagUltraPremium",
};
export function tTag(tag, lang) {
  const key = TAG_MAP[tag];
  return key ? t(key, lang) : tag;
}

// Helper to translate supplier tiers
const TIER_MAP = {
  "Premium": "tierPremium",
  "Verified": "tierVerified",
  "Organic": "tierOrganic",
  "Ultra Premium": "tierUltraPremium",
};
export function tTier(tier, lang) {
  const key = TIER_MAP[tier];
  return key ? t(key, lang) : tier;
}

// Category label map
const CAT_MAP = {
  proteins: "catProteins",
  seafood: "catSeafood",
  produce: "catProduce",
  dairy: "catDairy",
  bakery: "catBakery",
  beverages: "catBeverages",
  spirits: "catSpirits",
  dry: "catDry",
  cleaning: "catCleaning",
  specialty: "catSpecialty",
};
export function tCat(id, lang) {
  const key = CAT_MAP[id];
  return key ? t(key, lang) : id;
}

// Supplier category translate (uses the same cat names)
const SUP_CAT_MAP = {
  "Seafood": "catSeafood",
  "Beverages": "catBeverages",
  "Proteins": "catProteins",
};
export function tSupCat(cat, lang) {
  const key = SUP_CAT_MAP[cat];
  return key ? t(key, lang) : cat;
}
