# 🌿 Science 4.º de Primaria · Tema 2: «La vida de las plantas»

Aplicación web interactiva, pedagógica y lúdica diseñada especialmente para **Olivia (4.º de Educación Primaria)** para repasar, comprender a fondo los conceptos y sacar un 10 en el examen de Ciencias de la Naturaleza / Conocimiento del Medio sobre el **Tema 2: «La vida de las plantas»** (Colección *CLAVES · World Makers*, Grazalema–Santillana).

---

## 🌟 Características Principales

1. **🎒 5 Misiones de Aprendizaje Temático (Paso a Paso):**
   - **Misión 1: Anatomía Secreta de las Plantas:** funciones de la raíz (sujeción y absorción), tallos herbáceos vs. leñosos, diferencia entre árbol y arbusto, y anatomía de la hoja (peciolo, limbo, haz y envés).
   - **Misión 2: El Laboratorio de la Fotosíntesis:** diferencia entre savia bruta (agua + sales) y savia elaborada (alimento azucarado), los 4 ingredientes de la fotosíntesis, la clorofila, liberación de oxígeno ($O_2$) y la respiración día y noche.
   - **Misión 3: Detective de la Flor y la Reproducción:** las 4 partes de la flor (cáliz/sépalos, corola/pétalos, estambres masculinos con polen y pistilo femenino con ovario y óvulos), polinización, fecundación y formación del fruto y semillas.
   - **Misión 4: Clasificación del Reino Vegetal:** plantas sin semillas (musgos y helechos con esporas) vs. plantas con semillas (gimnospermas con piñas y acículas vs. angiospermas con flores y frutos).
   - **Misión 5: Frutos, Ecosistemas y Utilidades:** frutos carnosos vs. secos, dispersión de semillas, oxígeno, madera, papel, algodón, medicinas y prevención de la erosión del suelo.

2. **🏆 Simulador de Examen Oficial Santillana:**
   - **Prueba A: La Gran Expedición Botánica en la Sierra:** 10 preguntas competenciales aplicadas a una excursión en la naturaleza, examinando especies reales, frutos y ecosistemas.
   - **Prueba B: Dominio de Conceptos y Saberes Clave:** 10 preguntas de máximo rigor conceptual sobre definiciones formales y fases de la nutrición y reproducción vegetal.
   - Desglose formativo de respuestas con explicaciones pedagógicas adaptadas a 9-10 años.

3. **⚡ Desafío Express (Entrenamiento Infinito):**
   - Generador aleatorio de tandas de 10 preguntas extraídas de un banco ampliado con contador de racha y puntuación dinámica.

4. **🕹️ Arcade Botánico (Mini-Juegos de Clasificación Rápida):**
   - Clasificador contra el reloj en 3 modalidades:
     - 🌲 *Por Tipo de Planta* (Musgo, Helecho, Gimnosperma, Angiosperma).
     - 🍎 *Por Fruto* (Carnoso vs. Seco).
     - 🌿 *Por Tallo* (Herbáceo vs. Leñoso).

5. **🔬 Explorador Anatómico Interactivo:**
   - Panel visual donde Olivia puede tocar las partes de la planta (Raíz, Tallo, Hojas, Flor/Fruto) y de la flor (Cáliz, Corola, Estambres, Pistilo) para descubrir sus secretos, funciones biológicas y curiosidades.

6. **📖 Guía Visual de Repaso (Chuleta Imprimible):**
   - Resumen estructurado en 5 bloques esenciales con formato de lectura rápida y diseño optimizado para imprimir antes del examen.

7. **🎓 Diploma Oficial Imprimible de Olivia:**
   - Diploma personalizable de «Honor en Botánica» con su nombre, nota, fecha y sellos oficiales, listo para imprimir o guardar en PDF (`Ctrl + P`).

8. **🔊 Efectos de Sonido y Voz Lectora (SpeechSynthesis):**
   - Efectos sonoros sintetizados nativos con **Web Audio API** (sin dependencias de archivos de audio externos pesados).
   - Lector de preguntas en voz alta en español para que Olivia pueda escuchar cada pregunta, opción y explicación.
   - Celebración con lluvia de confeti nativo en notas sobresalientes.

---

## 🚀 Cómo Ejecutar en Local

No requiere instalaciones complejas ni node_modules. Funciona de manera nativa en cualquier navegador (Chrome, Edge, Safari, Firefox):

### Opción 1: Con Python (Recomendado)
```bash
cd c:\99_CODIGOFUENTE\Personal\Olivia_4\Science_Tema2
python -m http.server 3000
```
Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

### Opción 2: Doble clic directo
Haz doble clic sobre el archivo `index.html` en cualquier ordenador, portátil o tablet.

---

## ☁️ Despliegue en Vercel

La aplicación está preparada con `vercel.json` para desplegarse automáticamente en la nube:

1. El repositorio está alojado en GitHub en: `https://github.com/franggpt-code/olivia-science-4-tema2`.
2. En [vercel.com](https://vercel.com):
   - Haz clic en **"Add New..."** -> **"Project"**.
   - Conecta tu cuenta de GitHub y selecciona el repositorio `olivia-science-4-tema2`.
   - Vercel detectará automáticamente que es un proyecto web estático.
   - Pulsa **"Deploy"**.
3. ¡Listo! En segundos tendrás una URL pública para acceder desde el iPad, tablet o móvil de Olivia.

---

## 📁 Estructura del Proyecto

```text
├── index.html                           # Interfaz SPA interactiva principal
├── css/
│   ├── tailwind.min.css                 # Framework de diseño visual
│   └── style.css                        # Estilos personalizados botánicos y accesibles
├── js/
│   ├── confetti.min.js                  # Motor de partículas de celebración
│   ├── audio.js                         # Web Audio API y síntesis de voz (Text-to-Speech)
│   ├── data.js                          # Banco pedagógico (Misiones, Exámenes A/B, Express y Chuleta)
│   └── app.js                           # Lógica de la SPA, navegación, puntuación y diploma
├── Science_4_Tema2_Claves_Santillana.md # Resumen curricular y base conceptual
├── vercel.json                          # Configuración de despliegue y seguridad
├── package.json                         # Metadatos del proyecto
└── README.md                            # Documentación completa
```
