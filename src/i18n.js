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
  slideWhyUs: { en: "Why Us", es: "Por Qué" },
  slideRevenue: { en: "Revenue", es: "Ingresos" },
  back: { en: "← Back", es: "← Atrás" },
  continue: { en: "Continue →", es: "Continuar →" },
  begin: { en: "Begin →", es: "Comenzar →" },
  launchDemo: { en: "Launch Demo →", es: "Ver Demo →" },
  orClick: { en: "or click to navigate", es: "o haz clic para navegar" },

  // ===== TITLE SLIDE =====
  titleTagline: { en: "The first platform where yacht captains and chief stewardesses order all food, drinks, and supplies in one place — delivered dockside before departure", es: "La primera plataforma donde capitanes y jefas de servicio de yates ordenan toda la comida, bebidas y suministros en un solo lugar — entregados en el muelle antes de zarpar" },
  titleMarket: { en: "Global Market", es: "Mercado Global" },
  titleFLOpp: { en: "FL Opportunity", es: "Oportunidad FL" },
  titleSeed: { en: "Raising", es: "Ronda" },
  titleMotto: { en: "Think Shopify meets DoorDash — but for luxury yachts", es: "Imagina Shopify y DoorDash — pero para yates de lujo" },

  // ===== PROBLEM SLIDE =====
  theProblem: { en: "The Problem", es: "El Problema" },
  problemH2a: { en: "Ordering supplies for a yacht is ", es: "Ordenar suministros para un yate está " },
  problemH2b: { en: "broken", es: "roto" },
  problemSub: { en: "Every time a yacht prepares to leave port, the captain and chief stewardess must manually source food, drinks, and supplies from scratch — by phone, text, and spreadsheets", es: "Cada vez que un yate se prepara para salir del puerto, el capitán y la jefa de servicio deben buscar comida, bebidas y suministros desde cero — por teléfono, texto y hojas de cálculo" },
  pain1Title: { en: "6–10 Vendor Calls Per Trip", es: "6–10 Llamadas a Proveedores Por Viaje" },
  pain1Desc: { en: "The captain calls the meat vendor, the chief stewardess calls the seafood supplier, someone else handles drinks and cleaning products — repeated every single departure.", es: "El capitán llama al proveedor de carnes, la jefa de servicio llama al de mariscos, alguien más se encarga de bebidas y productos de limpieza — repetido en cada salida." },
  pain2Title: { en: "Deliveries Don't Sync", es: "Entregas Desincronizadas" },
  pain2Desc: { en: "Different vendors show up at different times. Perishable food sits on the dock in the heat. Late deliveries delay the yacht's departure.", es: "Diferentes proveedores llegan a distintas horas. La comida perecedera queda en el muelle bajo el calor. Entregas tardías retrasan la salida del yate." },
  pain3Title: { en: "Customs Paperwork by Hand", es: "Documentación Aduanal a Mano" },
  pain3Desc: { en: "Leaving the U.S. by boat requires a detailed government cargo manifest. The captain builds these by hand from scattered receipts every trip.", es: "Salir de EE.UU. por barco requiere un manifiesto de carga gubernamental detallado. El capitán lo hace a mano desde recibos dispersos cada viaje." },
  pain4Title: { en: "No Consolidated Billing", es: "Sin Facturación Consolidada" },
  pain4Desc: { en: "Every vendor sends a separate invoice. The yacht owner has no clear view of total spending. Fleet managers juggle dozens of invoices per vessel.", es: "Cada proveedor envía una factura separada. El dueño del yate no tiene vista clara del gasto total. Los gerentes de flota manejan docenas de facturas por embarcación." },
  pain5Title: { en: "Starting From Zero Every Time", es: "Empezar Desde Cero Cada Vez" },
  pain5Desc: { en: "No saved orders. No guest dietary preferences on file. Even if last week's trip was identical, the captain and chief stewardess redo the entire process.", es: "Sin órdenes guardadas. Sin preferencias dietéticas de invitados archivadas. Aunque el viaje pasado fuera idéntico, el capitán y la jefa de servicio repiten todo el proceso." },
  pain6Title: { en: "WhatsApp & Spreadsheets", es: "WhatsApp y Hojas de Cálculo" },
  pain6Desc: { en: "This $60 billion industry has zero purpose-built software. Everything runs on group chats, phone calls, and personal relationships.", es: "Esta industria de $60 mil millones no tiene software dedicado. Todo funciona con chats grupales, llamadas y relaciones personales." },

  // ===== SOLUTION SLIDE =====
  theSolution: { en: "The Solution", es: "La Solución" },
  solutionH2a: { en: "One app to order ", es: "Una app para ordenar " },
  solutionH2b: { en: "everything", es: "todo" },
  solutionDesc: { en: "Captains and chief stewardesses open the app, browse vetted local suppliers, build a complete supply order across every category, and schedule one coordinated delivery straight to the dock. Fleet managers track spending and orders across all their vessels from a single dashboard.", es: "Capitanes y jefas de servicio abren la app, exploran proveedores locales verificados, arman una orden completa en cada categoría, y programan una sola entrega coordinada al muelle. Los gerentes de flota monitorean gastos y órdenes de todas sus embarcaciones desde un solo panel." },
  roiTitle: { en: "4+ hours saved per supply order", es: "4+ horas ahorradas por orden de suministros" },
  roiSub: { en: "Replaces dozens of phone calls with one checkout flow", es: "Reemplaza docenas de llamadas con un solo flujo de compra" },
  feat1Title: { en: "One Catalog, All Vendors", es: "Un Catálogo, Todos los Proveedores" },
  feat1Desc: { en: "Captains and chief stewardesses browse pre-vetted local suppliers across 10 categories — from premium seafood to cleaning supplies — in one place.", es: "Capitanes y jefas de servicio exploran proveedores locales verificados en 10 categorías — desde mariscos premium hasta productos de limpieza — en un solo lugar." },
  feat2Title: { en: "Auto-Timed Delivery", es: "Entrega Auto-Programada" },
  feat2Desc: { en: "Enter when the yacht departs. The app schedules delivery so perishables arrive fresh, on time.", es: "Ingresa cuándo zarpa el yate. La app programa la entrega para que los perecederos lleguen frescos, a tiempo." },
  feat3Title: { en: "Reusable Order Templates", es: "Plantillas Reutilizables" },
  feat3Desc: { en: "Save past orders and reorder with one tap. A weekly trip? Two taps and you're done.", es: "Guarda órdenes pasadas y reordena con un toque. ¿Un viaje semanal? Dos toques y listo." },
  feat4Title: { en: "Fleet Dashboard", es: "Panel de Flota" },
  feat4Desc: { en: "Fleet managers overseeing multiple yachts see all orders, spending, and delivery status in one control panel.", es: "Los gerentes de flota que supervisan múltiples yates ven todas las órdenes, gastos y estado de entregas en un panel." },
  feat5Title: { en: "Auto Customs Paperwork", es: "Documentación Aduanal Automática" },
  feat5Desc: { en: "Automatically generates the government cargo manifest required for international departures — saving hours of manual work.", es: "Genera automáticamente el manifiesto de carga gubernamental requerido para salidas internacionales — ahorrando horas de trabajo manual." },
  feat6Title: { en: "Guest Allergy Alerts", es: "Alertas de Alergias" },
  feat6Desc: { en: "Stores guest dietary needs and flags conflicts in real time while the captain or chief stew is ordering.", es: "Almacena necesidades dietéticas de invitados y señala conflictos en tiempo real mientras el capitán o la jefa de servicio ordena." },

  // ===== MARKET SLIDE =====
  theMarket: { en: "The Market", es: "El Mercado" },
  marketH2a: { en: "A ", es: "Una industria de " },
  marketH2b: { en: "$60 billion", es: "$60 mil millones" },
  marketH2c: { en: " industry with zero software", es: " sin software" },
  tamLabel: { en: "TAM — Global Yacht Spending", es: "TAM — Gasto Global en Yates" },
  tamDesc: { en: "All food, beverage, and supply spending across chartered and private yachts worldwide", es: "Todo el gasto en comida, bebidas y suministros en yates alquilados y privados a nivel mundial" },
  samLabel: { en: "SAM — South Florida", es: "SAM — Sur de Florida" },
  samDesc: { en: "100,000+ registered boats in the yachting capital: Ft. Lauderdale, Miami, Palm Beach, the Keys", es: "100,000+ embarcaciones registradas en la capital náutica: Ft. Lauderdale, Miami, Palm Beach, los Cayos" },
  somLabel: { en: "SOM — Year 1–3 Target", es: "SOM — Meta Año 1–3" },
  somDesc: { en: "Capture 2–3% of South Florida yacht supply orders → $1.5–3M net revenue", es: "Capturar 2–3% de las órdenes de suministros de yates en el sur de Florida → $1.5–3M ingresos netos" },
  mktStat1: { en: "Ft. Lauderdale hosts the world's largest boat show", es: "Ft. Lauderdale alberga el show náutico más grande del mundo" },
  mktStat2: { en: "Registered boats in South Florida alone", es: "Embarcaciones registradas solo en el sur de Florida" },
  mktStat3: { en: "Software platforms built for yacht supply ordering (none exist)", es: "Plataformas de software para pedidos de suministros de yates (no existe ninguna)" },
  mktStat4: { en: "Estimated break-even at $4–5M annual order volume", es: "Punto de equilibrio estimado a $4–5M volumen anual de órdenes" },

  // ===== WHY US / COMPETITIVE SLIDE =====
  whyUs: { en: "Why Us", es: "Por Qué Nosotros" },
  whyUsH2a: { en: "They help you account for provisioning. We help you ", es: "Ellos te ayudan a contabilizar el aprovisionamiento. Nosotros te ayudamos a " },
  whyUsH2b: { en: "do it.", es: "hacerlo." },

  // Landscape section
  landscapeTitle: { en: "The Current Landscape", es: "El Panorama Actual" },
  landscapeDesc: { en: "DeepBlue, Voly, Seazone, and Sevenstar all manage the administrative side of yachting — tracking APA spend, storing guest preferences, generating reports. They're good at what they do. But none of them touch the actual supply chain.", es: "DeepBlue, Voly, Seazone y Sevenstar gestionan el lado administrativo de los yates — rastreo de gastos APA, almacenamiento de preferencias de invitados, generación de reportes. Son buenos en lo que hacen. Pero ninguno toca la cadena de suministro real." },
  existingLabel: { en: "DeepBlue, Voly, Seazone, Sevenstar", es: "DeepBlue, Voly, Seazone, Sevenstar" },
  existingDesc: { en: "Help you account for provisioning after the fact", es: "Te ayudan a contabilizar el aprovisionamiento después del hecho" },
  yppLabel: { en: "Yacht Provisions Pro", es: "Yacht Provisions Pro" },
  yppDesc: { en: "Makes the provisioning actually happen — before the yacht leaves the dock", es: "Hace que el aprovisionamiento realmente suceda — antes de que el yate salga del muelle" },
  gapQuote: { en: "Today, the captain still picks up the phone, calls the seafood guy, calls the wine guy, calls the produce guy, coordinates arrival times at the dock separately, and logs it all into Voly or DeepBlue after the fact. That's the gap.", es: "Hoy, el capitán aún levanta el teléfono, llama al de mariscos, llama al de vinos, llama al de frutas, coordina horarios de llegada al muelle por separado, y lo registra todo en Voly o DeepBlue después del hecho. Ese es el vacío." },

  // What no one else does
  noOneElseTitle: { en: "What No One Else Does", es: "Lo Que Nadie Más Hace" },
  gap1: { en: "Connecting captains to actual suppliers with a live catalog and real pricing", es: "Conectar capitanes con proveedores reales con un catálogo en vivo y precios reales" },
  gap2: { en: "Consolidating orders from multiple vendors into a single dockside delivery", es: "Consolidar órdenes de múltiples proveedores en una sola entrega en muelle" },
  gap3: { en: "Building cold-chain logistics infrastructure at marinas", es: "Construir infraestructura logística de cadena de frío en marinas" },
  gap4: { en: "Auto-generating customs manifests from order data", es: "Generar automáticamente manifiestos de aduana desde datos de órdenes" },

  // Moat section
  moatTitle: { en: "The Real Moat", es: "La Verdadera Ventaja" },
  moatDesc: { en: "Anyone can build a catalog app. The hard thing to replicate is what happens on the ground:", es: "Cualquiera puede construir una app de catálogo. Lo difícil de replicar es lo que sucede en tierra:" },
  moat1Title: { en: "Vetted Supplier Network", es: "Red de Proveedores Verificados" },
  moat1Desc: { en: "Exclusive relationships with local suppliers who meet yacht-grade quality standards and can handle premium, high-value orders", es: "Relaciones exclusivas con proveedores locales que cumplen estándares de calidad para yates y pueden manejar pedidos premium de alto valor" },
  moat2Title: { en: "Cold-Chain Dock Logistics", es: "Logística de Cadena de Frío" },
  moat2Desc: { en: "Physical refrigerated delivery infrastructure at specific marinas — temperature-controlled from warehouse to yacht", es: "Infraestructura física de entrega refrigerada en marinas específicas — temperatura controlada desde el almacén hasta el yate" },
  moat3Title: { en: "Marina-Level Density", es: "Densidad a Nivel de Marina" },
  moat3Desc: { en: "Each marina we operate in gets harder for competitors to enter — we own the supplier relationships, delivery routes, and captain trust at each location", es: "Cada marina donde operamos se vuelve más difícil de penetrar para competidores — controlamos las relaciones con proveedores, rutas de entrega y la confianza de los capitanes en cada ubicación" },

  // ===== REVENUE SLIDE =====
  revenueEngine: { en: "How We Make Money", es: "Cómo Generamos Ingresos" },
  revenueH2a: { en: "Six revenue streams. ", es: "Seis fuentes de ingreso. " },
  revenueH2b: { en: "One platform.", es: "Una plataforma." },
  revenueSub: { en: "We earn on every transaction and through monthly subscriptions — revenue grows with every new yacht crew", es: "Ganamos en cada transacción y a través de suscripciones mensuales — los ingresos crecen con cada nueva tripulación" },
  rev1Name: { en: "Order Commission", es: "Comisión por Orden" },
  rev1Ex: { en: "$1,440–$3,600 per order", es: "$1,440–$3,600 por orden" },
  rev1Desc: { en: "Our core revenue. We take 15–22% on every supply order placed through the app.", es: "Nuestro ingreso principal. Tomamos 15–22% en cada orden de suministros realizada por la app." },
  rev2Name: { en: "Delivery Fee", es: "Tarifa de Entrega" },
  rev2Ex: { en: "$75–$200 per delivery", es: "$75–$200 por entrega" },
  rev2Desc: { en: "A flat fee per delivery covering dock-side coordination and refrigerated handling.", es: "Tarifa fija por entrega que cubre coordinación en muelle y manejo refrigerado." },
  rev3Name: { en: "Fleet Subscription", es: "Suscripción de Flota" },
  rev3Ex: { en: "80%+ margins", es: "80%+ márgenes" },
  rev3Desc: { en: "Monthly subscription for fleet managers overseeing multiple yachts — includes dashboard, analytics, and priority service.", es: "Suscripción mensual para gerentes de flota que supervisan múltiples yates — incluye panel, analíticas y servicio prioritario." },
  rev4Name: { en: "Supplier Ads & Placement", es: "Publicidad de Proveedores" },
  rev4Ex: { en: "$200–$500/mo per vendor", es: "$200–$500/mes por proveedor" },
  rev4Desc: { en: "Suppliers pay for premium placement to reach captains and chief stewardesses who spend $5K–$15K per order.", es: "Los proveedores pagan por ubicación premium para llegar a capitanes y jefas de servicio que gastan $5K–$15K por orden." },
  rev5Name: { en: "White-Glove Concierge", es: "Concierge de Lujo" },
  rev5Ex: { en: "$500–$1,500 per order", es: "$500–$1,500 por orden" },
  rev5Desc: { en: "A premium tier where a dedicated human concierge handles the entire order for superyacht owners and their captains.", es: "Un nivel premium donde un concierge humano dedicado maneja toda la orden para dueños de superyates y sus capitanes." },
  rev6Name: { en: "Charter Broker Deals", es: "Acuerdos con Brokers" },
  rev6Ex: { en: "Wholesale volume", es: "Volumen mayorista" },
  rev6Desc: { en: "Yacht rental brokers bundle supply ordering into rental contracts. We fulfill those orders at scale.", es: "Los brokers de alquiler de yates incluyen pedidos de suministros en los contratos de alquiler. Nosotros cumplimos esas órdenes a escala." },
  revAvgOrder: { en: "Avg Order Size", es: "Tamaño Promedio de Orden" },
  revPerOrder: { en: "Our Cut Per Order", es: "Nuestro Ingreso Por Orden" },
  revCaptains: { en: "100 Captains Year 1", es: "100 Capitanes Año 1" },
  revSeedRound: { en: "Raising", es: "Ronda" },

  // ===== HEADER / SEARCH =====
  searchPlaceholder: { en: "Search vessels, orders...", es: "Buscar embarcaciones, órdenes..." },

  // ===== DASHBOARD =====
  bridgeOverview: { en: "Bridge Overview", es: "Vista del Puente" },
  dashSubtitle: { en: "Thursday, February 19, 2026 — Fort Lauderdale, FL", es: "Jueves, 19 de febrero de 2026 — Fort Lauderdale, FL" },
  activeOrders: { en: "Active Orders", es: "Órdenes Activas" },
  monthlyGMV: { en: "Monthly Volume", es: "Volumen Mensual" },
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
  supplierGMV: { en: "Supplier Volume", es: "Volumen de Proveedores" },
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

  // ===== ORDER CONFIRMATION =====
  orderConfirmed: { en: "Order Confirmed!", es: "¡Orden Confirmada!" },
  orderConfirmedSub: { en: "Your provision order has been submitted successfully", es: "Tu orden de provisiones ha sido enviada exitosamente" },
  deliveryWindow: { en: "Delivery Window", es: "Ventana de Entrega" },
  todayDelivery: { en: "Today 2:00–4:00 PM", es: "Hoy 2:00–4:00 PM" },
  viewOrders: { en: "View Orders", es: "Ver Órdenes" },
  continueShopping: { en: "Continue Shopping", es: "Seguir Comprando" },

  // ===== CUSTOMS MANIFEST =====
  customsManifest: { en: "CBP Customs Manifest", es: "Manifiesto de Aduanas CBP" },
  manifestDocNum: { en: "Document #", es: "Documento #" },
  portOfDeparture: { en: "Port of Departure", es: "Puerto de Salida" },
  destination: { en: "Destination", es: "Destino" },
  departureDate: { en: "Departure Date", es: "Fecha de Salida" },
  declaredValue: { en: "Declared Value", es: "Valor Declarado" },
  generatedBy: { en: "Generated by Yacht Provisions Pro", es: "Generado por Yacht Provisions Pro" },
  downloadPdf: { en: "Download PDF", es: "Descargar PDF" },
  close: { en: "Close", es: "Cerrar" },
  manifestGenerated: { en: "Manifest generated successfully", es: "Manifiesto generado exitosamente" },

  // ===== ORDER DETAILS =====
  orderDetails: { en: "Order Details", es: "Detalles de la Orden" },
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
  "Produce": "catProduce",
  "Dairy & Eggs": "catDairy",
  "Bakery": "catBakery",
  "Spirits & Wine": "catSpirits",
  "Dry Goods": "catDry",
  "Cleaning": "catCleaning",
  "Specialty": "catSpecialty",
};
export function tSupCat(cat, lang) {
  const key = SUP_CAT_MAP[cat];
  return key ? t(key, lang) : cat;
}
