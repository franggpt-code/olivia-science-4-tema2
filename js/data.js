// =============================================================================
// BANCO DE DATOS PEDAGÓGICOS · SCIENCE 4.º PRIMARIA · TEMA 2
// «La vida de las plantas» · Proyecto CLAVES Santillana / Grazalema
// Diseñado para Olivia · Preguntas conceptuales, misiones, exámenes y juegos
// =============================================================================

const SCIENCE_DATA = {
  // ---------------------------------------------------------------------------
  // METADATOS DEL TEMA
  // ---------------------------------------------------------------------------
  meta: {
    unit: 2,
    subject: "Ciencias de la Naturaleza / Science",
    title: "La vida de las plantas",
    subtitle: "Entrenador Oficial para el Examen de Olivia (4.º de Primaria)",
    author: "Fran Guerrero",
    bookCollection: "CLAVES / Construyendo Mundos (Grazalema-Santillana)"
  },

  // ---------------------------------------------------------------------------
  // MISIONES TEMÁTICAS DE APRENDIZAJE (ENTRENAMIENTO PASO A PASO)
  // ---------------------------------------------------------------------------
  missions: [
    {
      id: "mision-1",
      title: "Misión 1: Anatomía Secreta de las Plantas",
      icon: "🌱",
      badge: "Maestra de Tallos y Raíces",
      description: "Descubre cómo son por dentro las raíces, los diferentes tipos de tallos y los secretos de las hojas.",
      questions: [
        {
          id: "m1-q1",
          type: "single",
          question: "¿Cuáles son las DOS funciones principales que realiza la raíz en las plantas?",
          options: [
            "Fabricar las flores y captar la luz del sol.",
            "Sujetar la planta al suelo y absorber agua y sales minerales.",
            "Producir frutos carnosos y repartir savia elaborada.",
            "Expulsar dióxido de carbono y sostener las ramas."
          ],
          correct: 1,
          explanation: "¡Exacto! La raíz cumple una doble misión vital: ancla firmemente la planta al terreno para que no se caiga y absorbe el agua y las sales minerales de la tierra a través de sus finos pelos absorbentes."
        },
        {
          id: "m1-q2",
          type: "single",
          question: "¿En qué se diferencia un árbol de un arbusto?",
          options: [
            "El árbol tiene tallo blando y el arbusto tiene tallo de madera.",
            "El árbol tiene un tronco leñoso alto del que salen las ramas a cierta altura; el arbusto tiene ramas que nacen casi a ras de suelo.",
            "Los árboles siempre dan frutos carnosos y los arbustos solo dan piñas.",
            "Los árboles no tienen raíces y los arbustos sí."
          ],
          correct: 1,
          explanation: "¡Muy bien! Ambos tienen tallo leñoso (de madera), pero el árbol tiene un único tronco alto que se ramifica arriba (como el pino o el roble), mientras que el arbusto tiene varios tallos que se ramifican desde la base del suelo (como el romero o la jara)."
        },
        {
          id: "m1-q3",
          type: "single",
          question: "Observa estas cuatro plantas: amapola, manzano, césped y trigo. ¿Cuáles de ellas tienen tallo herbáceo?",
          options: [
            "Solo el manzano.",
            "La amapola, el césped y el trigo.",
            "El manzano y el trigo únicamente.",
            "Ninguna, todas tienen tallo leñoso."
          ],
          correct: 1,
          explanation: "¡Genial! Los tallos herbáceos son delgados, verdes, blandos y flexibles. La amapola, el trigo y el césped son hierbas con tallo herbáceo. El manzano, en cambio, es un árbol con tronco leñoso."
        },
        {
          id: "m1-q4",
          type: "single",
          question: "En una hoja completa distinguimos el limbo y el peciolo. ¿Qué es el ENVÉS de la hoja?",
          options: [
            "El rabillo verde que une la hoja a la rama.",
            "La cara superior de la hoja que recibe el sol directo.",
            "La cara inferior (de abajo) de la hoja, donde suelen situarse los estomas.",
            "La punta afilada por donde gotea el agua de lluvia."
          ],
          correct: 2,
          explanation: "¡Correctísimo! El limbo tiene dos caras: el haz (la cara superior, más brillante y expuesta al sol) y el envés (la cara inferior, más protegida, donde están los estomas que dejan entrar y salir los gases)."
        },
        {
          id: "m1-q5",
          type: "single",
          question: "¿Por qué el tallo es tan importante para la nutrición de la planta?",
          options: [
            "Porque sostiene la planta y contiene conductos para transportar la savia bruta hacia las hojas y la savia elaborada al resto del cuerpo.",
            "Porque absorbe directamente las sales minerales del aire.",
            "Porque en él se produce todo el polen de la floración.",
            "Porque es el encargado de enterrar las semillas en otoño."
          ],
          correct: 0,
          explanation: "¡Exacto! El tallo no solo sostiene erguida la planta, sino que funciona como una autopista con dos direcciones de tubitos conductores: unos suben la savia bruta y otros reparten la savia elaborada."
        },
        {
          id: "m1-q6",
          type: "single",
          question: "La lechuga y las espinacas que comemos en la ensalada, ¿qué parte de la planta son principalmente?",
          options: [
            "Son las raíces subterráneas.",
            "Son los frutos secos.",
            "Son las hojas de la planta.",
            "Son las semillas del tallo."
          ],
          correct: 2,
          explanation: "¡Brillante! Cuando comemos lechuga, acelgas o espinacas nos alimentamos de las hojas de la planta. Cuando comemos zanahorias comemos la raíz, y cuando comemos apio comemos el tallo."
        }
      ]
    },

    {
      id: "mision-2",
      title: "Misión 2: El Laboratorio de la Fotosíntesis",
      icon: "☀️",
      badge: "Alquimista de la Clorofila",
      description: "Domina la transformación de la savia bruta en savia elaborada y el misterio del oxígeno.",
      questions: [
        {
          id: "m2-q1",
          type: "single",
          question: "¿Qué es exactamente la SAVIA BRUTA y de dónde procede?",
          options: [
            "Es el líquido azucarado fabricado en las hojas con la luz solar.",
            "Es la mezcla de agua y sales minerales absorbida del suelo por las raíces.",
            "Es el polen disuelto en el agua de la lluvia.",
            "Es el aceite que desprenden las flores para oler bien."
          ],
          correct: 1,
          explanation: "¡Eso es! La savia bruta es el agua y las sales minerales que las raíces toman de la tierra. Sube por el tallo hasta las hojas para servir de ingrediente a la fotosíntesis."
        },
        {
          id: "m2-q2",
          type: "single",
          question: "Para realizar la FOTOSÍNTESIS en sus hojas, ¿qué cuatro elementos necesita indispensablemente una planta?",
          options: [
            "Oxígeno, tierra seca, insectos y frío.",
            "Agua con sales minerales (savia bruta), dióxido de carbono (CO2), luz solar y clorofila.",
            "Azúcar refinado, abono artificial, viento y oscuridad.",
            "Savia elaborada, polen, frutos secos y lluvia torrencial."
          ],
          correct: 1,
          explanation: "¡Perfecto! La receta mágica de la fotosíntesis necesita: 1) Agua y sales (savia bruta), 2) Dióxido de carbono del aire, 3) Luz del sol, y 4) Clorofila (la sustancia verde que atrapa la luz en las hojas)."
        },
        {
          id: "m2-q3",
          type: "single",
          question: "¿Qué gas vital LIBERAN las plantas a la atmósfera durante la fotosíntesis?",
          options: [
            "Dióxido de carbono (CO2).",
            "Gas helio.",
            "Oxígeno (O2).",
            "Vapor de mercurio."
          ],
          correct: 2,
          explanation: "¡Correcto! Durante la fotosíntesis, las plantas expulsan oxígeno a la atmósfera. Gracias a ese oxígeno respiramos los seres humanos y el resto de animales."
        },
        {
          id: "m2-q4",
          type: "single",
          question: "¿Es verdad que las plantas respiran durante la noche?",
          options: [
            "No, las plantas solo respiran a pleno sol.",
            "Sí, las plantas respiran día y noche (toman oxígeno y expulsan CO2), aunque de día la fotosíntesis produce mucho más oxígeno del que consumen.",
            "No, las plantas nunca respiran, solo hacen fotosíntesis.",
            "Solo respiran las plantas que dan flores carnosas."
          ],
          correct: 1,
          explanation: "¡Pregunta de 10! Como todos los seres vivos, las plantas necesitan respirar continuamente (día y noche) tomando oxígeno. Pero de día hacen además la fotosíntesis, generando muchísimo más oxígeno del que gastan."
        },
        {
          id: "m2-q5",
          type: "single",
          question: "¿En qué se diferencia la savia BRUTA de la savia ELABORADA?",
          options: [
            "La bruta es el alimento terminado y la elaborada solo tiene agua.",
            "La bruta contiene agua y sales que suben desde la raíz; la elaborada es el alimento rico en nutrientes fabricado en las hojas que se reparte por toda la planta.",
            "Son exactamente lo mismo, solo cambia el color según la estación.",
            "La savia elaborada solo existe en las raíces de los árboles viejos."
          ],
          correct: 1,
          explanation: "¡Clarísimo! La savia bruta son los ingredientes iniciales (agua + sales). La savia elaborada es el «plato preparado» (alimento nutritivo fabricado en las hojas) que nutre a toda la planta."
        },
        {
          id: "m2-q6",
          type: "single",
          question: "¿Cómo se llama el pigmento de color verde presente en las hojas que atrapa la energía del sol?",
          options: [
            "Melanina.",
            "Clorofila.",
            "Hemoglobina.",
            "Polenina."
          ],
          correct: 1,
          explanation: "¡Genial! La clorofila es la sustancia verde presente en las hojas y tallos verdes. Es la responsable del color de la vegetación y la clave para capturar la energía lumínica del sol."
        }
      ]
    },

    {
      id: "mision-3",
      title: "Misión 3: Detective de la Flor y la Reproducción",
      icon: "🌸",
      badge: "Inspectora Polinizadora",
      description: "Aprende las 4 partes de la flor, cómo viaja el polen y el nacimiento de frutos y semillas.",
      questions: [
        {
          id: "m3-q1",
          type: "single",
          question: "¿Cuáles son las cuatro partes principales de una flor completa?",
          options: [
            "Raíz, tronco, ramas y corteza.",
            "Cáliz (sépalos), corola (pétalos), estambres y pistilo.",
            "Limbo, peciolo, haz y envés.",
            "Savia bruta, savia elaborada, estoma y clorofila."
          ],
          correct: 1,
          explanation: "¡Excelente! Una flor completa consta de: Cáliz (formado por sépalos verdes), Corola (formada por pétalos de colores), Estambres (órganos masculinos) y Pistilo (órgano femenino)."
        },
        {
          id: "m3-q2",
          type: "single",
          question: "¿Qué parte de la flor es el órgano FEMENINO y qué forma suele tener?",
          options: [
            "Los estambres, que parecen bastoncillos con polvo amarillo.",
            "La corola, que tiene forma de corona plana.",
            "El pistilo, que tiene forma de botella o matraz en el centro de la flor.",
            "El cáliz, que tiene forma de estrella verde."
          ],
          correct: 2,
          explanation: "¡Correcto! El pistilo es el órgano reproductor femenino. En su base ensanchada (el ovario) se encuentran los óvulos esperando a ser fecundados por el polen."
        },
        {
          id: "m3-q3",
          type: "single",
          question: "¿Dónde se fabrica y almacena el POLEN en la flor?",
          options: [
            "En el ovario del pistilo.",
            "En las anteras de los estambres (órgano masculino).",
            "En los sépalos del cáliz.",
            "En el envés de las hojas verdes."
          ],
          correct: 1,
          explanation: "¡Muy bien! Los estambres son los órganos masculinos. En su extremo tienen unos saquitos llamados anteras, donde se producen miles de granos de polen."
        },
        {
          id: "m3-q4",
          type: "single",
          question: "Tras la fecundación, los pétalos se marchitan y caen. ¿En qué se transforman el OVARIO y los ÓVULOS?",
          options: [
            "El ovario se convierte en una nueva raíz y los óvulos en hojas.",
            "El ovario madura y se convierte en el FRUTO, y los óvulos en las SEMILLAS.",
            "El ovario se convierte en corteza de árbol y los óvulos en ramas.",
            "El ovario desaparece por completo y no queda nada."
          ],
          correct: 1,
          explanation: "¡Impresionante! Esta es una regla de oro de la botánica: el ovario fecundado crece y se convierte en el fruto jugoso o seco, y los óvulos de su interior se convierten en las semillas."
        },
        {
          id: "m3-q5",
          type: "single",
          question: "¿Por qué los pétalos de la corola suelen tener colores tan llamativos y aromas agradables?",
          options: [
            "Para asustar a los pájaros herbívoros.",
            "Para atraer a los insectos polinizadores (como abejas y mariposas) que transportarán el polen.",
            "Para no enfriarse durante la noche de invierno.",
            "Para absorber más sales minerales de las gotas de lluvia."
          ],
          correct: 1,
          explanation: "¡Cierto! La naturaleza es ingeniosa: los colores brillantes y los olores dulces de los pétalos invitan a abejas y mariposas a beber néctar. Al hacerlo, se les pega el polen al cuerpo y lo llevan a otra flor."
        },
        {
          id: "m3-q6",
          type: "single",
          question: "¿Qué contiene en su interior toda semilla?",
          options: [
            "Solamente agua pura congelada.",
            "Un embrión (una plantita en miniatura) y una reserva de sustancias nutritivas.",
            "Un grano de arena y una gota de clorofila.",
            "Una flor diminuta con pétalos ya abiertos."
          ],
          correct: 1,
          explanation: "¡Exacto! La semilla es como una cuna mágica: guarda un embrión vivo y una despensa de alimentos para que la pequeña plantita pueda germinar y crecer hasta tener sus primeras raíces y hojas."
        }
      ]
    },

    {
      id: "mision-4",
      title: "Misión 4: Clasificación del Reino Vegetal",
      icon: "🌲",
      badge: "Guardiana de la Biodiversidad",
      description: "Distingue plantas con semillas de las que no las tienen, y gimnospermas de angiospermas.",
      questions: [
        {
          id: "m4-q1",
          type: "single",
          question: "¿En qué dos grupos se clasifican las plantas según su forma de reproducirse?",
          options: [
            "Plantas acuáticas y plantas aéreas.",
            "Plantas con semillas y plantas sin semillas.",
            "Plantas con frutos carnosos y plantas venenosas.",
            "Plantas comestibles y plantas decorativas."
          ],
          correct: 1,
          explanation: "¡Así es! El gran criterio científico de clasificación de las plantas es su reproducción: plantas sin semillas (que se reproducen por esporas) y plantas con semillas (espermatofitas)."
        },
        {
          id: "m4-q2",
          type: "single",
          question: "¿Cuáles de los siguientes son ejemplos de plantas SIN SEMILLAS que se reproducen mediante esporas?",
          options: [
            "El manzano y el limonero.",
            "Los musgos y los helechos.",
            "El pino piñonero y el abeto.",
            "El trigo y la amapola."
          ],
          correct: 1,
          explanation: "¡Perfecto! Los musgos y los helechos son plantas sin flores ni semillas. Producen esporas diminutas y ligeras que el viento o el agua dispersan en ambientes húmedos."
        },
        {
          id: "m4-q3",
          type: "single",
          question: "¿Qué caracteriza a las plantas GIMNOSPERMAS como los pinos y los cipreses?",
          options: [
            "Tienen flores muy vistosas con pétalos de colores y frutos con pulpa dulce.",
            "No producen frutos; sus semillas se forman al descubierto dentro de piñas o conos, y suelen tener hojas con forma de aguja o escama.",
            "Son plantas acuáticas que no tienen raíces.",
            "Solo crecen en el fondo del mar."
          ],
          correct: 1,
          explanation: "¡Muy bien! Las gimnospermas (palabra que significa 'semilla desnuda') tienen semillas en piñas leñosas, nunca en frutos carnosos, y sus hojas suelen tener forma de aguja (acículas) perennes."
        },
        {
          id: "m4-q4",
          type: "single",
          question: "¿Por qué el almendro, la tomatera y el rosal pertenecen al grupo de las ANGIOSPERMAS?",
          options: [
            "Porque tienen flores verdaderas y sus semillas están protegidas dentro de un fruto.",
            "Porque no necesitan agua para sobrevivir.",
            "Porque se reproducen únicamente por esporas.",
            "Porque sus hojas son siempre agujas afiladas que pinchan."
          ],
          correct: 0,
          explanation: "¡Exacto! Las angiospermas son las plantas con flores completas cuyas semillas se desarrollan y maduran protegidas en el interior de un fruto."
        },
        {
          id: "m4-q5",
          type: "single",
          question: "Si paseas por un bosque cerca de un arroyo sombrío y encuentras plantas con hojas grandes divididas (frondes) y puntos marrones (soros) por detrás, ¿qué planta estás observando?",
          options: [
            "Un pino carrasco.",
            "Un helecho.",
            "Un rosal silvestre.",
            "Un naranjo."
          ],
          correct: 1,
          explanation: "¡De película botánica! Se trata de un helecho. Sus hojas características se llaman frondes y en su envés tienen soros, que son los saquitos que albergan miles de esporas."
        },
        {
          id: "m4-q6",
          type: "single",
          question: "¿Por qué los musgos son plantas tan pequeñas y viven siempre en rocas o troncos húmedos y a la sombra?",
          options: [
            "Porque son muy sencillos, carecen de vasos conductores verdaderos y necesitan absorber humedad directamente por toda su superficie.",
            "Porque les da miedo la luz del sol.",
            "Porque sus raíces miden más de diez metros bajo tierra.",
            "Porque son parásitos de los pájaros."
          ],
          correct: 0,
          explanation: "¡Excelente razonamiento! Los musgos son plantas microscópicas o milimétricas sin tallos leñosos ni vasos complejos. Como no tienen raíces profundas, necesitan vivir pegados a lugares con humedad constante."
        }
      ]
    },

    {
      id: "mision-5",
      title: "Misión 5: Frutos, Ecosistemas y Utilidades",
      icon: "🍎",
      badge: "Defensora del Bosque",
      description: "Clasifica frutos carnosos y secos, y descubre por qué las plantas salvan nuestro planeta.",
      questions: [
        {
          id: "m5-q1",
          type: "single",
          question: "Observa estos alimentos: melocotón, nuez, sandía y almendra. ¿Cuáles son FRUTOS SECOS?",
          options: [
            "El melocotón y la sandía.",
            "La nuez y la almendra.",
            "Todos ellos son frutos carnosos.",
            "Solo la sandía es un fruto seco."
          ],
          correct: 1,
          explanation: "¡Correcto! La nuez y la almendra tienen cáscaras duras y leñosas y apenas contienen agua: son frutos secos. El melocotón y la sandía son jugosos y carnosos."
        },
        {
          id: "m5-q2",
          type: "single",
          question: "¿Por qué los frutos carnosos son tan jugosos y dulces?",
          options: [
            "Para atraer a los animales que, al comérselos, transportan y dispersan las semillas a otros lugares lejos de la planta madre.",
            "Para que la planta pueda beber de su propio jugo si hay sequía.",
            "Para hacer que el árbol pese más y se caiga.",
            "Es una casualidad, no tiene ninguna función."
          ],
          correct: 0,
          explanation: "¡Genial! Es una maravillosa estrategia de dispersión de semillas: los pájaros o mamíferos comen el fruto jugoso y expulsan la semilla intacta en otro sitio, permitiendo que la especie conquiste nuevos territorios."
        },
        {
          id: "m5-q3",
          type: "single",
          question: "¿Cómo ayudan las raíces de los árboles y plantas a prevenir la EROSIÓN del suelo?",
          options: [
            "Haciendo que la tierra se vuelva de cristal.",
            "Sujetando la tierra con una densa red de raíces para que las lluvias fuertes y el viento no se lleven el suelo fértil.",
            "Calentando el terreno como una estufa.",
            "Atrayendo a los topos."
          ],
          correct: 1,
          explanation: "¡Muy importante! En los montes sin vegetación, las tormentas arrastran la tierra y crean desiertos. Los bosques con sus millones de raíces entrelazadas actúan como una malla que sujeta y protege el suelo fértil."
        },
        {
          id: "m5-q4",
          type: "single",
          question: "¿Cuál de estos materiales de uso cotidiano procede DIRECTAMENTE del reino vegetal?",
          options: [
            "El plástico sintético de las botellas.",
            "El papel de tus cuadernos, la madera de las mesas y el hilo de algodón de tu camiseta.",
            "El hierro de las tijeras y las cucharas.",
            "El vidrio de las ventanas."
          ],
          correct: 1,
          explanation: "¡Exacto! El papel se elabora a partir de la celulosa de los árboles, los muebles de madera proceden de los troncos y el algodón es una fibra que envuelve las semillas de la planta del algodón."
        },
        {
          id: "m5-q5",
          type: "single",
          question: "¿Qué planta medicinal es comúnmente utilizada en infusión para aliviar el dolor de estómago o ayudar a la digestión?",
          options: [
            "La manzanilla.",
            "El ciprés.",
            "El pino piñonero.",
            "El musgo de las rocas."
          ],
          correct: 0,
          explanation: "¡De diez! La manzanilla es una planta con flores parecidas a margaritas muy apreciada por sus propiedades calmantes y digestivas desde hace siglos."
        },
        {
          id: "m5-q6",
          type: "single",
          question: "¿Por qué decimos que las plantas son la 'base de la cadena trófica' en todos los ecosistemas terrestres?",
          options: [
            "Porque son los productores primarios capaces de fabricar su propio alimento y alimentar a los animales herbívoros.",
            "Porque son los animales más rápidos cazando presas.",
            "Porque solo comen carne en la selva.",
            "Porque viven debajo de las piedras de los ríos."
          ],
          correct: 0,
          explanation: "¡Sobresaliente! Sin las plantas, ningún animal terrestre podría vivir: los herbívoros no tendrían qué comer, y los carnívoros tampoco tendrían presas. ¡Toda la vida animal depende del reino vegetal!"
        }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // EXÁMENES OFICIALES SIMULADOS (PRUEBAS A Y B DE EVALUACIÓN OFICIAL)
  // ---------------------------------------------------------------------------
  exams: {
    // PRUEBA A: Caso Práctico Competencial (Expedición de Olivia al Parque Natural)
    testA: {
      id: "test-a",
      name: "Prueba A: La Gran Expedición Botánica en la Sierra",
      badge: "Exploradora de Campo",
      subtitle: "10 preguntas prácticas basadas en una jornada de estudio en la naturaleza",
      intro: "Olivia y su clase de 4.º de Primaria han salido de excursión de investigación a la Sierra. Llevan cuaderno de campo, lupa de mano y una guía botánica para analizar los seres vivos del bosque, las orillas del río y el huerto de la granja escuela.",
      questions: [
        {
          id: "pa-1",
          question: "Al llegar al bosque, Olivia observa altos pinos y robles centenarios junto a matas de romero y jara. ¿Qué tipo de tallo comparten todos ellos y cómo se distingue un árbol de un arbusto?",
          options: [
            "Todos tienen tallo herbáceo verde; los árboles dan frutos y los arbustos no.",
            "Todos tienen tallo leñoso (duro y de madera); en el árbol el tronco es alto y se ramifica arriba, mientras que en el arbusto las ramas salen desde la base del suelo.",
            "Los pinos tienen tallo herbáceo y el romero tiene tronco hueco.",
            "No tienen tallo, solo hojas directamente unidas a la raíz."
          ],
          correct: 1,
          hint: "Fíjate en dónde nacen las ramas del romero comparado con el pino.",
          explanation: "¡Muy bien! Tanto el pino (árbol) como el romero (arbusto) tienen tallos leñosos. La diferencia es que los árboles tienen un tronco único y alto que se ramifica a cierta distancia del suelo, y los arbustos se ramifican desde la misma tierra."
        },
        {
          id: "pa-2",
          question: "La patrulla de Olivia se sienta a descansar junto al césped y unas amapolas silvestres. ¿Qué tipo de tallo tienen estas pequeñas plantas y qué características presenta?",
          options: [
            "Tallo leñoso, rígido y grueso con corteza marrón.",
            "Tallo herbáceo, que es delgado, flexible, blando y de color verde.",
            "Tallo subterráneo de madera dura.",
            "No tienen tallo porque son flores flotantes."
          ],
          correct: 1,
          hint: "Piensa en lo fácil que se dobla una brizna de hierba sin romperse.",
          explanation: "¡Exacto! El césped, el trébol y las amapolas poseen tallo herbáceo: es blando, verde y flexible, permitiendo a la planta crecer rápidamente con la luz."
        },
        {
          id: "pa-3",
          question: "Durante el almuerzo en la granja escuela, les sirven una ensalada con zanahorias ralladas, lechuga, tomates y espárragos. ¿A qué partes de la planta corresponde cada alimento?",
          options: [
            "Zanahoria (raíz), lechuga (hojas), tomate (fruto) y espárrago (tallo).",
            "Zanahoria (fruto), lechuga (tallo), tomate (semilla) y espárrago (raíz).",
            "Todos ellos son frutos carnosos de árbol.",
            "Zanahoria (flor), lechuga (raíz), tomate (hoja) y espárrago (fruto)."
          ],
          correct: 0,
          hint: "La zanahoria crece enterrada, la lechuga son hojas verdes y el tomate contiene semillas en su interior.",
          explanation: "¡Excelente conocimiento! Nos alimentamos de distintas partes de las plantas: la zanahoria es una raíz de reserva, la lechuga son hojas, el espárrago es el tallo tierno y el tomate es el fruto."
        },
        {
          id: "pa-4",
          question: "El monitor de ciencias les pregunta cómo logra un árbol de 20 metros alimentar a sus hojas más altas a pleno sol. ¿Cuál es el orden correcto de la nutrición vegetal?",
          options: [
            "1. Absorción de savia bruta en las raíces -> 2. Transporte por el tallo -> 3. Fotosíntesis en hojas -> 4. Reparto de savia elaborada por toda la planta.",
            "1. Las hojas absorben tierra -> 2. El fruto fabrica savia bruta -> 3. Las raíces expulsan oxígeno -> 4. Se secan las ramas.",
            "1. La savia elaborada entra por las flores -> 2. Se convierte en savia bruta en el tronco -> 3. Las hojas descansan.",
            "1. El sol calienta la madera -> 2. Se forman piñas -> 3. Las raíces beben savia elaborada."
          ],
          correct: 0,
          hint: "El viaje del agua empieza siempre abajo en la tierra con las raíces.",
          explanation: "¡Perfecto! El ciclo de nutrición empieza con la absorción de agua y sales en la raíz (savia bruta), su ascenso por los vasos del tallo hasta las hojas, la fotosíntesis con luz solar y CO2 para crear savia elaborada, y su posterior distribución a toda la planta."
        },
        {
          id: "pa-5",
          question: "Olivia se fija en una flor de jara con cinco grandes pétalos blancos y un montón de filamentos amarillos en el centro. ¿Qué partes de la flor está viendo?",
          options: [
            "Los pétalos forman la corola y los filamentos amarillos son los estambres (órganos masculinos con polen).",
            "Los pétalos son el cáliz y los filamentos amarillos son las raíces aéreas.",
            "Los pétalos son las semillas y los filamentos amarillos son el ovario.",
            "Toda la flor es el pistilo femenino."
          ],
          correct: 0,
          hint: "Los pétalos de colores son la corola y los saquitos con polen amarillo son los estambres.",
          explanation: "¡De matrícula! La corola está formada por los pétalos llamativos, y esos finos pelitos amarillos coronados con polvo de polen son los estambres, que constituyen la parte masculina de la flor."
        },
        {
          id: "pa-6",
          question: "Al caminar por la ribera del río, en una zona sombría y muy húmeda entre las rocas, el grupo encuentra musgos verdes alfombrando una peña y helechos con frondes frondosos. ¿Por qué crecen justamente en ese lugar?",
          options: [
            "Porque son plantas sin semillas que se reproducen por esporas y necesitan mucha humedad para vivir y propagarse.",
            "Porque no soportan el aire fresco y necesitan el agua del río para no quemarse.",
            "Porque los musgos solo crecen sobre plástico mojado.",
            "Porque las esporas solo germinan si están sumergidas a diez metros de profundidad."
          ],
          correct: 0,
          hint: "Recuerda que no tienen flores ni semillas y dependen del agua ambiental para sus esporas.",
          explanation: "¡Exacto! Los musgos y los helechos carecen de flores y semillas; dependen de la humedad ambiental para que sus esporas germinen y los musgos, al no tener vasos leñosos, absorben el agua directamente por su superficie."
        },
        {
          id: "pa-7",
          question: "En lo alto de la ladera hay un pinar de pino piñonero y unos abetos. ¿A qué grupo de plantas pertenecen y por qué no vemos frutos carnosos en ellos?",
          options: [
            "Son gimnospermas: sus semillas no están dentro de un fruto carnoso, sino agrupadas en conos o piñas protectoras.",
            "Son angiospermas que han perdido sus manzanas por el viento.",
            "Son musgos gigantes que han crecido durante siglos.",
            "Son plantas sin semillas que producen esporas en las acículas."
          ],
          correct: 0,
          hint: "Gimnosperma significa 'semilla desnuda' (en piñas, no en frutos).",
          explanation: "¡Correctísimo! Los pinos y abetos son gimnospermas. No forman frutos jugosos; sus semillas (como los ricos piñones) se forman protegidas entre las escamas duras de las piñas."
        },
        {
          id: "pa-8",
          question: "Para merendar, Olivia y sus compañeros comen manzanas y un puñado de nueces. ¿Cómo clasificarías ambos frutos?",
          options: [
            "La manzana es un fruto carnoso (jugoso con mucha agua) y la nuez es un fruto seco (cáscara dura y leñosa con poca agua).",
            "Ambos son frutos secos porque se pueden llevar en la mochila.",
            "La manzana es un tubérculo y la nuez es una espora.",
            "La manzana es un fruto seco y la nuez es carnosa."
          ],
          correct: 0,
          hint: "Piensa en el jugo de la manzana al morderla frente a la cáscara dura de la nuez.",
          explanation: "¡Brillante! Los frutos carnosos, como la manzana, tienen abundante pulpa tierna y agua. Los frutos secos, como la nuez o la almendra, tienen paredes leñosas y secas."
        },
        {
          id: "pa-9",
          question: "El guarda forestal les explica que tras un incendio en un monte cercano, el suelo quedó expuesto a las lluvias y se produjeron desprendimientos de tierra. ¿Qué beneficio de las plantas se perdió?",
          options: [
            "La sujeción del terreno que aportan las raíces para evitar la erosión del suelo.",
            "El color verde de las piedras.",
            "El calor del invierno en el bosque.",
            "La luz que desprenden las hojas de noche."
          ],
          correct: 0,
          hint: "Las raíces de miles de plantas forman una red subterránea que retiene la tierra fértil.",
          explanation: "¡Fundamental para el medio ambiente! Las raíces de las plantas sujetan el suelo como una red natural. Cuando desaparecen por talas o fuegos, las lluvias arrastran la tierra fértil provocando graves problemas de erosión y desprendimientos."
        },
        {
          id: "pa-10",
          question: "Al final del día, Olivia anota en su cuaderno tres medidas que todas las personas podemos cumplir para proteger las plantas. ¿Cuál de las siguientes es la más acertada?",
          options: [
            "Arrancar las ramas con flores para que no pesen tanto a los árboles.",
            "No tirar basuras ni vidrios en el bosque para evitar incendios, respetar la flora silvestre sin arrancarla y plantar árboles autóctonos.",
            "Pintar los troncos de los árboles con purpurina.",
            "Cortar todos los arbustos para que el césped esté solo."
          ],
          correct: 1,
          hint: "Cuidar los bosques evitando incendios y respetando los seres vivos.",
          explanation: "¡Magnífica conclusión! Cuidar el medio natural evitando basuras que provoquen incendios, no arrancar plantas silvestres y colaborar en reforestaciones son compromisos esenciales para proteger la biodiversidad vegetal."
        }
      ]
    },

    // PRUEBA B: Conceptos Clave y Definiciones de Rigor Escolar
    testB: {
      id: "test-b",
      name: "Prueba B: Dominio de Conceptos y Saberes Clave",
      badge: "Catedrática de Botánica",
      subtitle: "10 preguntas de precisión conceptual basadas en el libro oficial de Santillana",
      intro: "Esta prueba evalúa con máxima precisión las definiciones formales, los nombres técnicos de las partes anatómicas y los procesos biológicos de las plantas exigidos en 4.º de Primaria.",
      questions: [
        {
          id: "pb-1",
          question: "La raíz de una planta cumple dos funciones clave. ¿Cuáles son?",
          options: [
            "Sujetar la planta al terreno y absorber agua y sales minerales del suelo.",
            "Fabricar savia elaborada y desprender polen.",
            "Captar la luz del sol y el dióxido de carbono.",
            "Proteger las semillas dentro de una cáscara leñosa."
          ],
          correct: 0,
          explanation: "¡Exacto! La raíz ancla la planta a la tierra para que no sea arrastrada y absorbe agua con sales minerales a través de los pelos absorbentes."
        },
        {
          id: "pb-2",
          question: "¿Cómo se llama el proceso biológico por el cual las hojas transforman la savia bruta en savia elaborada?",
          options: [
            "Germinación.",
            "Fotosíntesis.",
            "Polinización.",
            "Erosión."
          ],
          correct: 1,
          explanation: "¡Definición perfecta! La fotosíntesis es el proceso mediante el cual las plantas fabrican su propio alimento combinando savia bruta y dióxido de carbono gracias a la energía de la luz solar capturada por la clorofila."
        },
        {
          id: "pb-3",
          question: "Relaciona cada parte de la flor con su descripción formal: ¿Qué es el CÁLIZ?",
          options: [
            "La parte más colorida de la flor, formada por los pétalos.",
            "La base de la flor formada por unas hojitas verdes llamadas sépalos.",
            "El órgano masculino donde se genera el polen.",
            "El ovario con los óvulos."
          ],
          correct: 1,
          explanation: "¡Así es! El cáliz es la estructura externa de soporte y protección, constituida por unas hojitas verdes denominadas sépalos."
        },
        {
          id: "pb-4",
          question: "¿Cuál es el órgano MASCULINO de la flor y qué elemento reproduce?",
          options: [
            "El pistilo, que produce óvulos.",
            "La corola, que produce néctar.",
            "Los estambres, que constan de filamento y antera, donde se produce el polen.",
            "El cáliz, que produce semillas desnudas."
          ],
          correct: 2,
          explanation: "¡Correcto! Los estambres son los órganos reproductores masculinos; en sus extremos ensanchados (las anteras) se forman miles de diminutos granos de polen."
        },
        {
          id: "pb-5",
          question: "En la clasificación de las plantas, ¿qué rasgo distingue a las ANGIOSPERMAS de las GIMNOSPERMAS?",
          options: [
            "Las angiospermas tienen flores vistosas y semillas protegidas en frutos; las gimnospermas no producen frutos y sus semillas se forman en piñas o conos.",
            "Las angiospermas no tienen hojas y las gimnospermas no tienen raíces.",
            "Las angiospermas se reproducen por esporas y las gimnospermas por huevos.",
            "Las gimnospermas son siempre hierbas acuáticas y las angiospermas solo árboles secos."
          ],
          correct: 0,
          explanation: "¡Respuesta de 10! Las angiospermas son las plantas con flor típica y fruto (como el manzano o el almendro). Las gimnospermas tienen hojas perennes (acículas/escamas) y semillas desnudas agrupadas en piñas leñosas (como el pino o el cedro)."
        },
        {
          id: "pb-6",
          question: "¿Qué afirmación sobre los HELECHOS y MUSGOS es totalmente CORRECTA?",
          options: [
            "Son plantas con semillas que dan frutos de cáscara dura.",
            "Son plantas sin flores ni semillas que se reproducen mediante esporas.",
            "Los musgos tienen troncos leñosos de más de 3 metros de altura.",
            "Los helechos dan flores rojas muy aromáticas en primavera."
          ],
          correct: 1,
          explanation: "¡Impecable! Tanto los musgos como los helechos son plantas sin flores ni semillas; su reproducción se efectúa a través de esporas microscópicas."
        },
        {
          id: "pb-7",
          question: "¿Qué gas es expulsado a la atmósfera por las hojas durante la fotosíntesis?",
          options: [
            "Oxígeno (O2).",
            "Dióxido de carbono (CO2).",
            "Metano.",
            "Nitrógeno líquido."
          ],
          correct: 0,
          explanation: "¡Exacto! El oxígeno es el gas residual generado en la fotosíntesis y desprendido al aire, elemento vital para la respiración de los seres vivos heterótrofos."
        },
        {
          id: "pb-8",
          question: "Identifica la afirmación FALSA acerca de las flores y los frutos:",
          options: [
            "En los estambres se produce el polen.",
            "El ovario madura tras la fecundación y se transforma en el fruto.",
            "Los frutos secos son siempre jugosos porque acumulan gran cantidad de agua en su interior.",
            "La semilla contiene en su interior un embrión vivo y reservas nutritivas."
          ],
          correct: 2,
          explanation: "¡Falsa descubierta! Los frutos secos NO son jugosos ni tienen mucha agua en su interior; por el contrario, sus paredes son secas, duras y leñosas (como en la almendra o la avellana). Los jugosos con agua son los frutos carnosos."
        },
        {
          id: "pb-9",
          question: "Ordena cronológicamente los 5 momentos clave en la nutrición de una planta:",
          options: [
            "1. Absorción de savia bruta -> 2. Transporte por el tallo -> 3. Fotosíntesis en hojas -> 4. Creación de savia elaborada -> 5. Distribución por toda la planta.",
            "1. Fotosíntesis -> 2. Absorción de savia elaborada -> 3. Formación de polen -> 4. Caída de hojas -> 5. Subida de savia bruta.",
            "1. Distribución de savia elaborada -> 2. Absorción de tierra -> 3. Respiración -> 4. Producción de piñas -> 5. Fotosíntesis.",
            "1. Transporte -> 2. Distribución -> 3. Absorción -> 4. Evaporación -> 5. Fecundación."
          ],
          correct: 0,
          explanation: "¡Orden perfecto! Primero las raíces absorben agua y sales (savia bruta), luego sube por el tallo hasta las hojas, allí con la luz solar y el CO2 ocurre la fotosíntesis creando savia elaborada, y finalmente esta se distribuye a todos los órganos vegetales."
        },
        {
          id: "pb-10",
          question: "Nombra al menos tres utilidades fundamentales de las plantas para la vida humana y la sociedad:",
          options: [
            "Alimentación directa (frutas, verduras, cereales), producción de oxígeno y obtención de madera, papel y medicinas.",
            "Solo sirven para poner flores en jarrones los domingos.",
            "Exclusivamente para dar sombra a los automóviles aparcados.",
            "Únicamente para alimentar a las hormigas del campo."
          ],
          correct: 0,
          explanation: "¡Magnífica respuesta! Las plantas nos nutren (frutas, verduras, harinas), oxigenan el planeta, proporcionan materias primas indispensables (madera, algodón, celulosa para papel) y sustancias curativas para elaborar medicamentos."
        }
      ]
    }
  },

  // ---------------------------------------------------------------------------
  // BANCO EXTENDIDO PARA EL DESAFÍO EXPRESS (ALEATORIO INFINITO)
  // ---------------------------------------------------------------------------
  expressQuestions: [
    {
      q: "¿Cómo se llama el rabillo que une la lámina de la hoja con la rama?",
      options: ["Peciolo", "Limbo", "Estambre", "Cáliz"],
      correct: 0,
      exp: "El peciolo es el rabillo vegetal que conecta el limbo de la hoja con el tallo."
    },
    {
      q: "¿En qué cara de la hoja se encuentran habitualmente los estomas para respirar?",
      options: ["En el envés (cara inferior)", "En el haz (cara superior)", "En la punta de la espina", "En la corteza de la raíz"],
      correct: 0,
      exp: "Los estomas están en el envés (cara inferior) para estar protegidos del sol directo y evitar que la planta pierda demasiada agua."
    },
    {
      q: "El roble y el naranjo son árboles. ¿Qué tipo de tallo tienen?",
      options: ["Tallo leñoso (tronco de madera)", "Tallo herbáceo blando", "Tallo acuático", "No tienen tallo"],
      correct: 0,
      exp: "Tienen un tallo leñoso fuerte, rígido y grueso llamado tronco."
    },
    {
      q: "¿Qué parte de la planta es la encargada de fabricar la savia elaborada?",
      options: ["Las hojas", "Las raíces profundas", "La corteza del árbol", "Los pétalos marchitos"],
      correct: 0,
      exp: "Las hojas son los laboratorios de la fotosíntesis donde se elabora el alimento de la planta."
    },
    {
      q: "Las esporas de los helechos se encuentran agrupadas en unos puntitos marrones en el envés llamados...",
      options: ["Soros", "Estambres", "Cálices", "Sépalos"],
      correct: 0,
      exp: "Los soros son los pequeños saquitos marrones del envés de los frondes donde maduran las esporas."
    },
    {
      q: "¿Cuál de estos árboles produce semillas en piñas y tiene hojas en forma de aguja?",
      options: ["El pino", "El manzano", "La palmera datilera", "El cerezo"],
      correct: 0,
      exp: "El pino es una gimnosperma con acículas en forma de aguja y semillas desnudas dentro de piñas."
    },
    {
      q: "¿Qué parte de la flor se encarga de proteger al capullo antes de abrirse?",
      options: ["Los sépalos (que forman el cáliz)", "Los pétalos de la corola", "El estigma del pistilo", "El polen de la antera"],
      correct: 0,
      exp: "Los sépalos son las pequeñas hojas verdes que envuelven y cuidan la flor tierna antes de su apertura."
    },
    {
      q: "¿Qué fruto de los siguientes es CARNOSO?",
      options: ["El melocotón", "La avellana", "La nuez", "La castaña"],
      correct: 0,
      exp: "El melocotón es carnoso porque posee una pulpa tierna muy jugosa cargada de agua y azúcares."
    },
    {
      q: "¿Qué gas absorben las hojas de la atmósfera durante el día para hacer la fotosíntesis?",
      options: ["Dióxido de carbono (CO2)", "Gas butano", "Oxígeno puro", "Monóxido de plomo"],
      correct: 0,
      exp: "Toman dióxido de carbono (CO2) del aire y devuelven oxígeno limpio."
    },
    {
      q: "¿Cómo se llama la pequeña plantita en miniatura que duerme protegida dentro de una semilla?",
      options: ["Embrión", "Pistilo", "Limbo", "Yema"],
      correct: 0,
      exp: "El embrión es el ser vivo en miniatura que empezará a crecer cuando la semilla germine."
    },
    {
      q: "El algodón con el que se tejen camisetas suaves procede de...",
      options: ["Las fibras que envuelven las semillas de la planta del algodón", "La corteza del pino", "Las raíces de la lechuga", "La savia bruta del roble"],
      correct: 0,
      exp: "El algodón es una fibra vegetal pura que rodea a las semillas de la planta de algodón para dispersarlas."
    },
    {
      q: "¿A qué reino biológico pertenecen los pinos, helechos, musgos y rosales?",
      options: ["Reino de las Plantas (Vegetal)", "Reino de los Hongos", "Reino Animal", "Reino Protoctista"],
      correct: 0,
      exp: "Pertenecen al reino de las Plantas: son pluricelulares, autótrofas y no pueden desplazarse por sí mismas."
    },
    {
      q: "Si una planta tiene ramas que nacen desde el mismo suelo y no tiene un tronco alto, es...",
      options: ["Un arbusto", "Un árbol gigante", "Una planta flotante", "Un hongo"],
      correct: 0,
      exp: "Es un arbusto (como el romero o el tomillo), caracterizado por ramificarse desde la misma base."
    },
    {
      q: "¿Qué líquido nutritivo viaja desde las hojas hacia toda la planta para alimentarla?",
      options: ["Savia elaborada", "Savia bruta", "Agua destilada", "Aceite de oliva"],
      correct: 0,
      exp: "La savia elaborada es el alimento ya transformado que reparte energía por todos los rincones de la planta."
    },
    {
      q: "¿Quién transporta el polen en las plantas polinizadas por entomofilia?",
      options: ["Insectos como abejas y mariposas", "Los peces del río", "Los topos subterráneos", "Las piedras del camino"],
      correct: 0,
      exp: "Las abejas, mariposas y abejorros transportan el polen pegado a su cuerpo de flor en flor."
    }
  ],

  // ---------------------------------------------------------------------------
  // MINI-JUEGOS ARCADE BOTÁNICOS
  // ---------------------------------------------------------------------------
  arcade: {
    // Clasificador Botánico Rápido
    classifierItems: [
      // 1. Por Tipo de Planta (Musgo, Helecho, Gimnosperma, Angiosperma)
      { name: "Pino Piñonero", category: "Gimnosperma", hint: "Tiene piñas y hojas en aguja", icon: "🌲" },
      { name: "Musgo común", category: "Musgo", hint: "Diminuto, sobre rocas húmedas", icon: "🌱" },
      { name: "Helecho de ribera", category: "Helecho", hint: "Hojas grandes llamadas frondes", icon: "🌿" },
      { name: "Tomatera de huerto", category: "Angiosperma", hint: "Flor amarilla y fruto jugoso", icon: "🍅" },
      { name: "Abeto blanco", category: "Gimnosperma", hint: "Árbol de montaña con piñas", icon: "🎄" },
      { name: "Manzano", category: "Angiosperma", hint: "Flores blancas y manzanas dulces", icon: "🍏" },
      { name: "Ciprés de jardín", category: "Gimnosperma", hint: "Hojas en forma de escama y piñas redondeadas", icon: "🌲" },
      { name: "Amapola silvestre", category: "Angiosperma", hint: "Grandes pétalos rojos y cápsula con semillas", icon: "🌺" },

      // 2. Por Fruto (Carnoso vs Seco)
      { name: "Nuez de nogal", fruitType: "Seco", hint: "Cáscara leñosa muy dura", icon: "🥜" },
      { name: "Naranja dulce", fruitType: "Carnoso", hint: "Pulpa jugosa llena de zumo", icon: "🍊" },
      { name: "Almendra", fruitType: "Seco", hint: "Cáscara dura y poca agua", icon: "🌰" },
      { name: "Melocotón", fruitType: "Carnoso", hint: "Tierno y con mucha agua", icon: "🍑" },
      { name: "Avellana", fruitType: "Seco", hint: "Fruto seco tradicional", icon: "🌰" },
      { name: "Uva moscatel", fruitType: "Carnoso", hint: "Baya jugosa y dulce", icon: "🍇" },
      { name: "Castaña", fruitType: "Seco", hint: "Se asa en otoño, cáscara dura", icon: "🌰" },
      { name: "Cereza", fruitType: "Carnoso", hint: "Rojita, jugosa y dulce", icon: "🍒" },

      // 3. Por Tallo (Herbáceo vs Leñoso)
      { name: "Roble centenario", stemType: "Leñoso", hint: "Tronco ancho de madera resistente", icon: "🌳" },
      { name: "Brizna de césped", stemType: "Herbáceo", hint: "Verde, blanda y flexible", icon: "🌾" },
      { name: "Romero aromático", stemType: "Leñoso", hint: "Arbusto leñoso con ramitas duras", icon: "🌿" },
      { name: "Trigo dorado", stemType: "Herbáceo", hint: "Tallo fino de hierba", icon: "🌾" }
    ],

    // Desafío de Ordenar la Fotosíntesis (5 pasos)
    photosynthesisSteps: [
      { step: 1, text: "Las raíces absorben agua y sales minerales de la tierra formando la savia bruta." },
      { step: 2, text: "La savia bruta asciende por los finos conductos del tallo hasta las hojas." },
      { step: 3, text: "Las hojas capturan la luz solar gracias a la clorofila y absorben CO2 por los estomas." },
      { step: 4, text: "En las hojas ocurre la fotosíntesis: se crea la savia elaborada y se expulsa oxígeno (O2)." },
      { step: 5, text: "La savia elaborada se distribuye por toda la planta para nutrir raíces, tronco, flores y frutos." }
    ]
  },

  // ---------------------------------------------------------------------------
  // DATOS PARA EL EXPLORADOR VISUAL ANATÓMICO (SVG INTERACTIVO)
  // ---------------------------------------------------------------------------
  anatomy: {
    plantParts: [
      {
        id: "flower",
        name: "Flor y Fruto",
        role: "Órgano de Reproducción",
        details: "Contiene los estambres y el pistilo. Tras ser polinizada, se transforma en fruto para proteger a las semillas.",
        curiosity: "¡El girasol no es una sola flor, sino cientos de flores diminutas agrupadas!"
      },
      {
        id: "leaves",
        name: "Hojas Verdes",
        role: "La Cocina (Fotosíntesis y Respiración)",
        details: "Atrapan la luz del sol con su clorofila y toman CO2 del aire para fabricar el alimento de la planta y liberar oxígeno.",
        curiosity: "Tienen dos caras: el haz (mira al sol) y el envés (donde se esconden los estomas para respirar)."
      },
      {
        id: "stem",
        name: "El Tallo",
        role: "Sostén y Transporte de Savias",
        details: "Sostiene erguida la planta y alberga los conductos por donde sube la savia bruta y baja la savia elaborada.",
        curiosity: "Puede ser herbáceo (blando y verde como el trigo) o leñoso (de madera dura como los árboles y arbustos)."
      },
      {
        id: "roots",
        name: "Las Raíces",
        role: "Fijación y Absorción",
        details: "Fijan la planta firmemente al suelo y absorben del terreno agua con sales minerales a través de sus pelos absorbentes.",
        curiosity: "¡Las raíces de un árbol maduro pueden medir cientos de kilómetros sumando todos sus pelillos!"
      }
    ],

    flowerParts: [
      {
        id: "calyx",
        name: "El Cáliz (Sépalos)",
        description: "Hojitas verdes en la base que protegen a la flor tierna antes de que se abra el capullo.",
        color: "Verde esmeralda"
      },
      {
        id: "corolla",
        name: "La Corola (Pétalos)",
        description: "Hojas de vistosos colores y aromas agradables diseñadas para atraer a insectos polinizadores como abejas.",
        color: "Colores vivos (rosa, rojo, amarillo)"
      },
      {
        id: "stamens",
        name: "Los Estambres (Órgano Masculino)",
        description: "Filamentos que terminan en las anteras, unos saquitos donde se produce y madura el polen amarillo.",
        color: "Amarillo dorado"
      },
      {
        id: "pistil",
        name: "El Pistilo (Órgano Femenino)",
        description: "Estructura con forma de botella en el centro. En su base está el ovario con los óvulos, que darán lugar a las semillas.",
        color: "Verde botella en el centro"
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // GUÍA VISUAL RESUMIDA (CHULETA PARA REPASAR ANTES DEL EXAMEN)
  // ---------------------------------------------------------------------------
  summaryGuide: [
    {
      title: "1. Órganos de la Planta",
      points: [
        "**Raíz:** ancla al terreno y absorbe agua + sales minerales con sus pelos absorbentes.",
        "**Tallo:** sostiene la planta y transporta las dos savias. Puede ser **herbáceo** (verde, blando) o **leñoso** (madera).",
        "**Árbol vs. Arbusto:** el árbol tiene tronco alto que se divide arriba; el arbusto se ramifica desde el suelo.",
        "**Hojas:** hacen la fotosíntesis. Tienen **peciolo** (rabillo) y **limbo** (lámina con haz brillante y envés con estomas)."
      ]
    },
    {
      title: "2. La Nutrición y Fotosíntesis",
      points: [
        "**Savia bruta:** agua + sales minerales tomadas de la tierra por las raíces.",
        "**Fotosíntesis:** ocurre en las hojas con luz del sol + clorofila verde + dióxido de carbono ($CO_2$) + savia bruta.",
        "**Savia elaborada:** alimento nutritivo con azúcares obtenido tras la fotosíntesis, repartido por toda la planta.",
        "**Gas expulsado:** la fotosíntesis libera **oxígeno ($O_2$)** limpio a la atmósfera.",
        "**Respiración:** las plantas respiran día y noche (toman $O_2$ y desprenden $CO_2$), pero de día producen mucho más oxígeno del que consumen."
      ]
    },
    {
      title: "3. Clasificación de las Plantas",
      points: [
        "**Sin semillas (por esporas):**",
        "  - *Musgos:* diminutos, sin vasos complejos, sobre rocas húmedas y umbrías.",
        "  - *Helechos:* mayores, hojas grandes llamadas frondes con soros en el envés.",
        "**Con semillas:**",
        "  - *Gimnospermas:* semillas desnudas en **piñas/conos**, hojas en acículas/escamas perennes (pinos, abetos, cipreses). Sin frutos carnosos.",
        "  - *Angiospermas:* flores verdaderas y semillas protegidas dentro de un **fruto** (manzano, tomatera, trigo, encina)."
      ]
    },
    {
      title: "4. Las Partes de la Flor",
      points: [
        "**Cáliz:** hojitas verdes (**sépalos**) que protegen la flor en capullo.",
        "**Corola:** hojas coloridas (**pétalos**) para llamar a los polinizadores.",
        "**Estambres:** órgano **masculino** con antera donde se forma el polen.",
        "**Pistilo:** órgano **femenino** en forma de botella. El estigma atrapa el polen y el ovario guarda los óvulos.",
        "**Fecundación:** el ovario se transforma en el **fruto** y el óvulo en la **semilla** (con embrión y reservas)."
      ]
    },
    {
      title: "5. Tipos de Frutos y Beneficios",
      points: [
        "**Frutos carnosos:** jugosos, con agua y pulpa dulce (manzana, naranja, tomate, melocotón).",
        "**Frutos secos:** duros, leñosos y con poca agua (nuez, almendra, avellana, bellota).",
        "**Importancia:** producen oxígeno, alimento para seres vivos, madera, papel, algodón y medicinas, además de sujetar el suelo evitando la erosión."
      ]
    }
  ]
};

// Exportar en window para uso modular en el navegador
window.SCIENCE_DATA = SCIENCE_DATA;
