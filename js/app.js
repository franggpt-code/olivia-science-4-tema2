// =============================================================================
// APLICACIÓN EDUCATIVA PRINCIPAL · SCIENCE 4.º PRIMARIA · TEMA 2
// «La vida de las plantas» · Proyecto CLAVES Santillana / Grazalema
// Diseñado para Olivia · SPA Interactiva, Lúdica y Accesible
// =============================================================================

class ScienceApp {
  constructor() {
    this.currentView = "home";
    this.stars = parseInt(localStorage.getItem("olivia_science4_stars") || "0", 10);
    this.completedMissions = JSON.parse(localStorage.getItem("olivia_science4_completed") || "[]");
    this.lastExamScore = localStorage.getItem("olivia_science4_score") || null;
    this.studentName = localStorage.getItem("olivia_science4_name") || "Olivia";

    // Estados de sesiones de pruebas
    this.activeMission = null;
    this.activeMissionIdx = 0;
    this.activeExam = null;
    this.activeExamQuestions = [];
    this.currentExamIdx = 0;
    this.examUserAnswers = {};
    this.examSubmitted = false;

    // Estado del Desafío Express
    this.expressQuestions = [];
    this.expressIdx = 0;
    this.expressAnswers = {};
    this.expressStreak = 0;

    // Estado del Modo Arcade
    this.arcadeMode = "type"; // "type", "fruit", "stem"
    this.arcadeItemIdx = 0;
    this.arcadeScore = 0;
    this.arcadeStreak = 0;
    this.arcadeItems = [];

    // Estado Fotosíntesis Drag & Drop / Ordenación
    this.photoOrder = [0, 1, 2, 3, 4];
  }

  init() {
    this.updateStatsDisplay();
    this.setupEventListeners();
    this.renderHome();
    this.renderMissionList();
    this.renderAnatomyCard('leaves');
    this.renderFlowerPart('corolla');
    this.renderSummaryGuide();
  }

  // ---------------------------------------------------------------------------
  // NAVEGACIÓN Y CAMBIO DE VISTAS
  // ---------------------------------------------------------------------------
  navigate(viewId, payload) {
    if (window.soundManager) window.soundManager.playClick();
    this.currentView = viewId;

    // Detener cualquier locución activa
    if (window.soundManager) window.soundManager.stopVoice();

    // Ocultar todas las secciones
    const views = document.querySelectorAll("main > section");
    views.forEach(v => v.classList.add("hidden"));

    // Desactivar botones de navegación activa
    document.querySelectorAll("nav button").forEach(b => {
      b.classList.remove("text-emerald-700", "bg-emerald-50", "border-b-2", "border-emerald-600");
      b.classList.add("text-slate-600");
    });

    // Mostrar la vista requerida
    const target = document.getElementById("view-" + viewId);
    if (target) {
      target.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Iluminar botón de navegación activo
    const navBtn = document.getElementById("nav-" + viewId);
    if (navBtn) {
      navBtn.classList.remove("text-slate-600");
      navBtn.classList.add("text-emerald-700", "bg-emerald-50");
    }

    // Inicializaciones específicas según vista
    if (viewId === "home") {
      this.renderHome();
    } else if (viewId === "misiones") {
      this.renderMissionList();
    } else if (viewId === "mision-detail" && payload) {
      this.startMission(payload);
    } else if (viewId === "arcade") {
      this.initArcadeClassifier("type");
    } else if (viewId === "express") {
      this.startExpressChallenge();
    } else if (viewId === "diploma") {
      this.renderDiploma();
    }
  }

  // ---------------------------------------------------------------------------
  // CONTROLADORES DE AUDIO Y ESTADÍSTICAS
  // ---------------------------------------------------------------------------
  toggleSound() {
    const enabled = window.soundManager.toggleSound();
    const btn = document.getElementById("btn-sound");
    if (btn) {
      btn.innerHTML = enabled ? "🔊" : "🔇";
      btn.classList.toggle("opacity-50", !enabled);
    }
    if (enabled) window.soundManager.playClick();
  }

  toggleVoice() {
    const enabled = window.soundManager.toggleVoice();
    const btn = document.getElementById("btn-voice");
    if (btn) {
      btn.innerHTML = enabled ? "🗣️" : "🤫";
      btn.classList.toggle("bg-emerald-100", enabled);
      btn.classList.toggle("text-emerald-700", enabled);
    }
    if (enabled && window.soundManager) {
      window.soundManager.speak("¡Modo lector de voz activado! Escucharás las preguntas y explicaciones.");
    }
  }

  addStars(count) {
    this.stars += count;
    localStorage.setItem("olivia_science4_stars", this.stars.toString());
    this.updateStatsDisplay();
    if (window.confetti && count >= 5) {
      window.confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    }
  }

  updateStatsDisplay() {
    const starEl = document.getElementById("star-count");
    if (starEl) starEl.textContent = this.stars;
    const homeStarEl = document.getElementById("home-star-count");
    if (homeStarEl) homeStarEl.textContent = this.stars;
  }

  // ---------------------------------------------------------------------------
  // VISTA 1: HOME
  // ---------------------------------------------------------------------------
  renderHome() {
    const greetingEl = document.getElementById("home-student-name");
    if (greetingEl) greetingEl.textContent = this.studentName;

    // Calcular progreso
    const totalMissions = SCIENCE_DATA.missions.length;
    const completedCount = this.completedMissions.length;
    const progressPct = Math.round((completedCount / totalMissions) * 100);

    const progressPctEl = document.getElementById("home-progress-pct");
    if (progressPctEl) progressPctEl.textContent = progressPct + "%";

    const progressBarEl = document.getElementById("home-progress-bar");
    if (progressBarEl) progressBarEl.style.width = progressPct + "%";

    const completedMissionsEl = document.getElementById("home-completed-missions");
    if (completedMissionsEl) completedMissionsEl.textContent = `${completedCount} de ${totalMissions}`;

    const lastScoreEl = document.getElementById("home-last-score");
    if (lastScoreEl) {
      lastScoreEl.textContent = this.lastExamScore !== null ? `${this.lastExamScore}/10` : "Pendiente";
    }
  }

  // ---------------------------------------------------------------------------
  // VISTA 2: LISTA DE MISIONES TEMÁTICAS
  // ---------------------------------------------------------------------------
  renderMissionList() {
    const container = document.getElementById("missions-container");
    if (!container) return;

    container.innerHTML = SCIENCE_DATA.missions.map(m => {
      const isCompleted = this.completedMissions.includes(m.id);
      return `
        <div class="card-playful p-6 flex flex-col justify-between hover:shadow-lg transition-all border-2 ${isCompleted ? 'border-emerald-300 bg-emerald-50/40' : 'border-slate-200 bg-white'}">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-3xl">${m.icon}</span>
              ${isCompleted ? '<span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-black flex items-center gap-1">✅ Completada</span>' : '<span class="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-black">Por realizar</span>'}
            </div>
            <h3 class="text-lg font-black text-slate-900 mb-1">${m.title}</h3>
            <span class="inline-block bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded-md font-bold mb-3">Insignia: ${m.badge}</span>
            <p class="text-sm text-slate-600 mb-4 leading-relaxed">${m.description}</p>
          </div>
          <button onclick="app.navigate('mision-detail', '${m.id}')" class="btn-bouncy w-full py-2.5 px-4 rounded-xl ${isCompleted ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'} font-black text-sm flex items-center justify-center gap-2">
            ${isCompleted ? '🔄 Repasar Misión' : '🚀 Iniciar Entrenamiento'}
          </button>
        </div>
      `;
    }).join("");
  }

  // ---------------------------------------------------------------------------
  // MISIONES: INTERFAZ DE PREGUNTAS PASO A PASO
  // ---------------------------------------------------------------------------
  startMission(missionId) {
    const mission = SCIENCE_DATA.missions.find(m => m.id === missionId);
    if (!mission) return;

    this.activeMission = mission;
    this.activeMissionIdx = 0;
    this.renderCurrentMissionQuestion();
  }

  renderCurrentMissionQuestion() {
    const mission = this.activeMission;
    const q = mission.questions[this.activeMissionIdx];
    const totalQ = mission.questions.length;

    const titleEl = document.getElementById("mission-title");
    if (titleEl) titleEl.textContent = mission.title;

    const progressEl = document.getElementById("mission-progress-text");
    if (progressEl) progressEl.textContent = `Pregunta ${this.activeMissionIdx + 1} de ${totalQ}`;

    const barEl = document.getElementById("mission-progress-bar");
    if (barEl) barEl.style.width = `${((this.activeMissionIdx + 1) / totalQ) * 100}%`;

    const questionTextEl = document.getElementById("mission-question-text");
    if (questionTextEl) questionTextEl.textContent = q.question;

    // Locución si la voz está activa
    if (window.soundManager) {
      window.soundManager.speak(q.question);
    }

    const optionsContainer = document.getElementById("mission-options-container");
    if (optionsContainer) {
      optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button onclick="app.checkMissionAnswer(${i})" class="pill-option w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-400 bg-white hover:bg-emerald-50/50 transition-all font-bold text-slate-800 flex items-start gap-3">
          <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm shrink-0 mt-0.5">${String.fromCharCode(65 + i)}</span>
          <span class="flex-1">${opt}</span>
        </button>
      `).join("");
    }

    // Ocultar caja de retroalimentación
    const feedbackBox = document.getElementById("mission-feedback-box");
    if (feedbackBox) feedbackBox.classList.add("hidden");
  }

  checkMissionAnswer(selectedIdx) {
    const mission = this.activeMission;
    const q = mission.questions[this.activeMissionIdx];
    const isCorrect = selectedIdx === q.correct;

    const options = document.querySelectorAll("#mission-options-container button");
    options.forEach((opt, idx) => {
      opt.disabled = true;
      if (idx === q.correct) {
        opt.classList.add("correct", "bg-emerald-100", "border-emerald-500", "text-emerald-900");
      } else if (idx === selectedIdx && !isCorrect) {
        opt.classList.add("incorrect", "bg-rose-100", "border-rose-500", "text-rose-900");
      }
    });

    const feedbackBox = document.getElementById("mission-feedback-box");
    const feedbackTitle = document.getElementById("mission-feedback-title");
    const feedbackText = document.getElementById("mission-feedback-text");
    const nextBtn = document.getElementById("mission-next-btn");

    if (isCorrect) {
      if (window.soundManager) {
        window.soundManager.playCorrect();
        window.soundManager.speak("¡Excelente! " + q.explanation);
      }
      this.addStars(1);
      feedbackBox.className = "mt-6 p-5 rounded-2xl border-2 border-emerald-300 bg-emerald-50 text-emerald-950";
      feedbackTitle.innerHTML = "🎉 ¡Brillante acierto, Olivia!";
    } else {
      if (window.soundManager) {
        window.soundManager.playError();
        window.soundManager.speak("Atenta para la próxima: " + q.explanation);
      }
      feedbackBox.className = "mt-6 p-5 rounded-2xl border-2 border-amber-300 bg-amber-50 text-amber-950";
      feedbackTitle.innerHTML = "💡 ¡Aprendamos juntos!";
    }

    feedbackText.textContent = q.explanation;
    feedbackBox.classList.remove("hidden");

    const isLast = this.activeMissionIdx + 1 >= mission.questions.length;
    nextBtn.textContent = isLast ? "🏆 Finalizar Misión y Ganar Insignia" : "Siguiente Pregunta ➡️";
  }

  nextMissionQuestion() {
    const mission = this.activeMission;
    if (this.activeMissionIdx + 1 < mission.questions.length) {
      this.activeMissionIdx++;
      this.renderCurrentMissionQuestion();
    } else {
      // Completar misión
      if (!this.completedMissions.includes(mission.id)) {
        this.completedMissions.push(mission.id);
        localStorage.setItem("olivia_science4_completed", JSON.stringify(this.completedMissions));
      }
      this.addStars(5);
      if (window.soundManager) window.soundManager.playSuccess();
      alert(`🎉 ¡Enhorabuena, Olivia! Has superado la ${mission.title}.\nHas ganado la insignia de: "${mission.badge}" y 5 estrellas extra.`);
      this.navigate("misiones");
    }
  }

  // ---------------------------------------------------------------------------
  // VISTA 3: EXAMEN OFICIAL (PRUEBAS A Y B DE SANTILLANA)
  // ---------------------------------------------------------------------------
  startExam(testType) {
    if (window.soundManager) window.soundManager.playClick();
    const examData = testType === 'A' ? SCIENCE_DATA.exams.testA : SCIENCE_DATA.exams.testB;
    this.activeExam = examData;
    this.activeExamQuestions = examData.questions;
    this.currentExamIdx = 0;
    this.examUserAnswers = {};
    this.examSubmitted = false;

    // Mostrar sección del examen
    this.navigate("examen-running");

    const titleEl = document.getElementById("exam-active-title");
    if (titleEl) titleEl.textContent = examData.name;

    const subtitleEl = document.getElementById("exam-active-subtitle");
    if (subtitleEl) subtitleEl.textContent = examData.subtitle;

    const introEl = document.getElementById("exam-active-intro");
    if (introEl) {
      if (examData.intro) {
        introEl.textContent = examData.intro;
        introEl.parentElement.classList.remove("hidden");
      } else {
        introEl.parentElement.classList.add("hidden");
      }
    }

    this.renderExamQuestion();
  }

  renderExamQuestion() {
    const q = this.activeExamQuestions[this.currentExamIdx];
    const totalQ = this.activeExamQuestions.length;

    const numEl = document.getElementById("exam-q-number");
    if (numEl) numEl.textContent = `Pregunta ${this.currentExamIdx + 1} de ${totalQ}`;

    const progBar = document.getElementById("exam-q-progress");
    if (progBar) progBar.style.width = `${((this.currentExamIdx + 1) / totalQ) * 100}%`;

    const textEl = document.getElementById("exam-q-text");
    if (textEl) textEl.textContent = q.question;

    if (window.soundManager) window.soundManager.speak(q.question);

    const hintContainer = document.getElementById("exam-q-hint-container");
    const hintText = document.getElementById("exam-q-hint-text");
    if (hintContainer && hintText) {
      if (q.hint) {
        hintText.textContent = q.hint;
        hintContainer.classList.remove("hidden");
      } else {
        hintContainer.classList.add("hidden");
      }
    }

    const optionsContainer = document.getElementById("exam-options-container");
    const selectedAnswer = this.examUserAnswers[q.id];

    if (optionsContainer) {
      optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button onclick="app.selectExamAnswer('${q.id}', ${i})" class="pill-option w-full text-left p-4 rounded-xl border-2 transition-all font-bold flex items-start gap-3 ${selectedAnswer === i ? 'selected border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md' : 'border-slate-200 bg-white hover:border-emerald-300'}">
          <span class="w-7 h-7 rounded-lg ${selectedAnswer === i ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800'} flex items-center justify-center font-black text-sm shrink-0 mt-0.5">${String.fromCharCode(65 + i)}</span>
          <span class="flex-1">${opt}</span>
        </button>
      `).join("");
    }

    // Botones anterior/siguiente
    const prevBtn = document.getElementById("exam-prev-btn");
    if (prevBtn) prevBtn.disabled = (this.currentExamIdx === 0);

    const nextBtn = document.getElementById("exam-next-btn");
    if (nextBtn) {
      const isLast = (this.currentExamIdx + 1 === totalQ);
      nextBtn.textContent = isLast ? "📝 Entregar y Corregir Examen" : "Siguiente ➡️";
    }
  }

  selectExamAnswer(qId, optionIdx) {
    if (window.soundManager) window.soundManager.playClick();
    this.examUserAnswers[qId] = optionIdx;
    this.renderExamQuestion();
  }

  prevExamQuestion() {
    if (this.currentExamIdx > 0) {
      this.currentExamIdx--;
      this.renderExamQuestion();
    }
  }

  nextExamQuestion() {
    const totalQ = this.activeExamQuestions.length;
    if (this.currentExamIdx + 1 < totalQ) {
      this.currentExamIdx++;
      this.renderExamQuestion();
    } else {
      this.finishExam();
    }
  }

  finishExam() {
    // Verificar si contestó todas las preguntas
    const totalQ = this.activeExamQuestions.length;
    const answeredCount = Object.keys(this.examUserAnswers).length;

    if (answeredCount < totalQ) {
      const confirmSubmit = confirm(`Aún te faltan ${totalQ - answeredCount} preguntas por responder.\n¿Deseas corregir el examen ahora de todos modos?`);
      if (!confirmSubmit) return;
    }

    let correctCount = 0;
    this.activeExamQuestions.forEach(q => {
      if (this.examUserAnswers[q.id] === q.correct) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / totalQ) * 10);
    this.lastExamScore = score;
    localStorage.setItem("olivia_science4_score", score.toString());
    this.addStars(correctCount * 2);

    if (score >= 9) {
      if (window.soundManager) window.soundManager.playSuccess();
      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      }
    } else {
      if (window.soundManager) window.soundManager.playCorrect();
    }

    this.renderExamResults(score, correctCount, totalQ);
  }

  renderExamResults(score, correctCount, totalQ) {
    const container = document.getElementById("exam-results-container");
    const runningBox = document.getElementById("exam-running-box");

    if (runningBox) runningBox.classList.add("hidden");
    if (container) {
      container.classList.remove("hidden");

      let badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
      let message = "¡Matrícula de Honor! ¡Eres una auténtica científica botánica!";
      if (score < 5) {
        badgeColor = "bg-rose-100 text-rose-800 border-rose-300";
        message = "¡Buen intento! Repasa las misiones y los esquemas botánicos y repite para subir nota.";
      } else if (score < 7) {
        badgeColor = "bg-amber-100 text-amber-800 border-amber-300";
        message = "¡Bien hecho, Olivia! Tienes los conceptos básicos, pero puedes aspirar al sobresaliente.";
      } else if (score < 9) {
        badgeColor = "bg-blue-100 text-blue-800 border-blue-300";
        message = "¡Notable alto! Dominas la anatomía de las plantas y su nutrición.";
      }

      container.innerHTML = `
        <div class="card-playful p-6 sm:p-8 text-center bg-white border-2 border-slate-200">
          <div class="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center text-5xl shadow-lg mb-4">
            ${score >= 9 ? '🏆' : (score >= 5 ? '🌱' : '📖')}
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Resultado de ${this.activeExam.name}</h2>
          <p class="text-slate-600 mb-6 font-semibold">${message}</p>

          <div class="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border-2 ${badgeColor} font-black text-2xl mb-8">
            <span>Nota Final:</span>
            <span class="text-3xl">${score} / 10</span>
            <span class="text-base text-slate-500 font-bold">(${correctCount} de ${totalQ} aciertos)</span>
          </div>

          <div class="space-y-4 text-left max-w-3xl mx-auto mb-8">
            <h3 class="text-lg font-black text-slate-900 border-b pb-2">Desglose formativo de tus respuestas:</h3>
            ${this.activeExamQuestions.map((q, idx) => {
              const userAns = this.examUserAnswers[q.id];
              const isCorrect = userAns === q.correct;
              return `
                <div class="p-4 rounded-xl border-2 ${isCorrect ? 'border-emerald-300 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'}">
                  <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="font-black text-sm text-slate-900">Pregunta ${idx + 1}: ${q.question}</span>
                    <span class="text-xs font-black px-2.5 py-0.5 rounded-full ${isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'}">${isCorrect ? '✅ Correcta' : '❌ A mejorar'}</span>
                  </div>
                  <p class="text-xs text-slate-600 mb-1"><strong>Tu respuesta:</strong> ${userAns !== undefined ? q.options[userAns] : '<em>No respondida</em>'}</p>
                  ${!isCorrect ? `<p class="text-xs text-emerald-700 font-bold mb-1"><strong>Respuesta correcta:</strong> ${q.options[q.correct]}</p>` : ''}
                  <p class="text-xs text-slate-500 mt-2 bg-white p-2.5 rounded-lg border border-slate-200"><strong>Explicación:</strong> ${q.explanation}</p>
                </div>
              `;
            }).join("")}
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <button onclick="app.navigate('examen')" class="btn-bouncy px-6 py-3 rounded-xl bg-slate-800 text-white font-black text-sm">
              🔙 Volver a Exámenes
            </button>
            <button onclick="app.startExam('${this.activeExam.id === 'test-a' ? 'A' : 'B'}')" class="btn-bouncy px-6 py-3 rounded-xl bg-emerald-600 text-white font-black text-sm">
              🔄 Repetir este Control
            </button>
            <button onclick="app.navigate('diploma')" class="btn-bouncy px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-sm shadow-md">
              🎓 Ver y Descargar mi Diploma
            </button>
          </div>
        </div>
      `;
    }
  }

  // ---------------------------------------------------------------------------
  // VISTA 4: DESAFÍO EXPRESS (ENTRENAMIENTO ALEATORIO INFINITO)
  // ---------------------------------------------------------------------------
  startExpressChallenge() {
    // Mezclar banco de preguntas y tomar 10
    const shuffled = [...SCIENCE_DATA.expressQuestions].sort(() => 0.5 - Math.random());
    this.expressQuestions = shuffled.slice(0, 10);
    this.expressIdx = 0;
    this.expressStreak = 0;
    this.expressAnswers = {};

    this.renderExpressQuestion();
  }

  renderExpressQuestion() {
    const q = this.expressQuestions[this.expressIdx];
    const totalQ = this.expressQuestions.length;

    const countEl = document.getElementById("express-counter");
    if (countEl) countEl.textContent = `Pregunta ${this.expressIdx + 1} de ${totalQ}`;

    const streakEl = document.getElementById("express-streak");
    if (streakEl) streakEl.textContent = this.expressStreak;

    const qTextEl = document.getElementById("express-question-text");
    if (qTextEl) qTextEl.textContent = q.q;

    if (window.soundManager) window.soundManager.speak(q.q);

    const container = document.getElementById("express-options-container");
    if (container) {
      container.innerHTML = q.options.map((opt, i) => `
        <button onclick="app.answerExpress(${i})" class="pill-option w-full p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-400 bg-white hover:bg-emerald-50/50 transition-all font-bold text-slate-800 text-left flex items-center gap-3">
          <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xs shrink-0">${String.fromCharCode(65 + i)}</span>
          <span>${opt}</span>
        </button>
      `).join("");
    }

    const feedbackBox = document.getElementById("express-feedback-box");
    if (feedbackBox) feedbackBox.classList.add("hidden");
  }

  answerExpress(selectedIdx) {
    const q = this.expressQuestions[this.expressIdx];
    const isCorrect = (selectedIdx === q.correct);

    const buttons = document.querySelectorAll("#express-options-container button");
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === q.correct) {
        b.classList.add("bg-emerald-100", "border-emerald-500", "text-emerald-900");
      } else if (i === selectedIdx && !isCorrect) {
        b.classList.add("bg-rose-100", "border-rose-500", "text-rose-900");
      }
    });

    const feedbackBox = document.getElementById("express-feedback-box");
    const feedbackTitle = document.getElementById("express-feedback-title");
    const feedbackText = document.getElementById("express-feedback-text");
    const nextBtn = document.getElementById("express-next-btn");

    if (isCorrect) {
      this.expressStreak++;
      this.addStars(1);
      if (window.soundManager) {
        window.soundManager.playCorrect();
        window.soundManager.speak("¡Bien! " + q.exp);
      }
      feedbackBox.className = "mt-6 p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50 text-emerald-950";
      feedbackTitle.innerHTML = "🔥 ¡Racha aumentada! ¡Gran respuesta!";
    } else {
      this.expressStreak = 0;
      if (window.soundManager) {
        window.soundManager.playError();
        window.soundManager.speak("¡No te preocupes! Recuerda: " + q.exp);
      }
      feedbackBox.className = "mt-6 p-4 rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-950";
      feedbackTitle.innerHTML = "🌱 ¡Para la próxima ya te lo sabes!";
    }

    feedbackText.textContent = q.exp;
    feedbackBox.classList.remove("hidden");

    const isLast = (this.expressIdx + 1 >= this.expressQuestions.length);
    nextBtn.textContent = isLast ? "🏁 Ver Puntuación del Desafío" : "Siguiente Desafío ⚡";
  }

  nextExpress() {
    if (this.expressIdx + 1 < this.expressQuestions.length) {
      this.expressIdx++;
      this.renderExpressQuestion();
    } else {
      if (window.soundManager) window.soundManager.playSuccess();
      alert(`⚡ ¡Desafío Express Completado!\nHas conseguido ${this.expressStreak} aciertos en racha y sumado estrellas a tu marcador.`);
      this.startExpressChallenge();
    }
  }

  // ---------------------------------------------------------------------------
  // VISTA 5: MINI-JUEGOS ARCADE BOTÁNICOS
  // ---------------------------------------------------------------------------
  initArcadeClassifier(mode) {
    this.arcadeMode = mode;
    this.arcadeScore = 0;
    this.arcadeStreak = 0;
    this.arcadeItemIdx = 0;

    // Filtrar elementos según modo
    if (mode === "type") {
      this.arcadeItems = SCIENCE_DATA.arcade.classifierItems.filter(i => i.category);
    } else if (mode === "fruit") {
      this.arcadeItems = SCIENCE_DATA.arcade.classifierItems.filter(i => i.fruitType);
    } else if (mode === "stem") {
      this.arcadeItems = SCIENCE_DATA.arcade.classifierItems.filter(i => i.stemType);
    }
    this.arcadeItems.sort(() => 0.5 - Math.random());

    this.renderArcadeClassifierUI();
    this.renderArcadeCard();
  }

  renderArcadeClassifierUI() {
    const tabsContainer = document.getElementById("arcade-tabs");
    if (!tabsContainer) return;

    tabsContainer.innerHTML = `
      <div class="flex gap-2 p-1 bg-slate-100 rounded-xl max-w-md mx-auto mb-6">
        <button onclick="app.initArcadeClassifier('type')" class="flex-1 py-2 px-3 rounded-lg font-black text-xs transition-all ${this.arcadeMode === 'type' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600'}">🌲 Por Tipo de Planta</button>
        <button onclick="app.initArcadeClassifier('fruit')" class="flex-1 py-2 px-3 rounded-lg font-black text-xs transition-all ${this.arcadeMode === 'fruit' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600'}">🍎 Fruto Carnoso/Seco</button>
        <button onclick="app.initArcadeClassifier('stem')" class="flex-1 py-2 px-3 rounded-lg font-black text-xs transition-all ${this.arcadeMode === 'stem' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600'}">🌿 Tallo Herbáceo/Leñoso</button>
      </div>
    `;

    // Botones de categorías
    const targetsContainer = document.getElementById("arcade-targets-container");
    if (!targetsContainer) return;

    if (this.arcadeMode === "type") {
      targetsContainer.innerHTML = `
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          <button onclick="app.classifyCurrent('Musgo')" class="btn-bouncy p-4 rounded-2xl bg-emerald-700 text-white font-black text-sm flex flex-col items-center gap-1 shadow-md">
            <span class="text-2xl">🌱</span>
            <span>Musgo</span>
          </button>
          <button onclick="app.classifyCurrent('Helecho')" class="btn-bouncy p-4 rounded-2xl bg-teal-600 text-white font-black text-sm flex flex-col items-center gap-1 shadow-md">
            <span class="text-2xl">🌿</span>
            <span>Helecho</span>
          </button>
          <button onclick="app.classifyCurrent('Gimnosperma')" class="btn-bouncy p-4 rounded-2xl bg-green-800 text-white font-black text-sm flex flex-col items-center gap-1 shadow-md">
            <span class="text-2xl">🌲</span>
            <span>Gimnosperma</span>
          </button>
          <button onclick="app.classifyCurrent('Angiosperma')" class="btn-bouncy p-4 rounded-2xl bg-pink-600 text-white font-black text-sm flex flex-col items-center gap-1 shadow-md">
            <span class="text-2xl">🌸</span>
            <span>Angiosperma</span>
          </button>
        </div>
      `;
    } else if (this.arcadeMode === "fruit") {
      targetsContainer.innerHTML = `
        <div class="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <button onclick="app.classifyCurrent('Carnoso')" class="btn-bouncy p-5 rounded-2xl bg-orange-500 text-white font-black text-base flex flex-col items-center gap-2 shadow-md">
            <span class="text-3xl">🍊</span>
            <span>Fruto Carnoso</span>
            <span class="text-xs font-semibold opacity-90">Jugoso con mucha agua</span>
          </button>
          <button onclick="app.classifyCurrent('Seco')" class="btn-bouncy p-5 rounded-2xl bg-amber-800 text-white font-black text-base flex flex-col items-center gap-2 shadow-md">
            <span class="text-3xl">🌰</span>
            <span>Fruto Seco</span>
            <span class="text-xs font-semibold opacity-90">Cáscara dura, poca agua</span>
          </button>
        </div>
      `;
    } else if (this.arcadeMode === "stem") {
      targetsContainer.innerHTML = `
        <div class="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <button onclick="app.classifyCurrent('Herbáceo')" class="btn-bouncy p-5 rounded-2xl bg-lime-600 text-white font-black text-base flex flex-col items-center gap-2 shadow-md">
            <span class="text-3xl">🌾</span>
            <span>Tallo Herbáceo</span>
            <span class="text-xs font-semibold opacity-90">Blando, verde y flexible</span>
          </button>
          <button onclick="app.classifyCurrent('Leñoso')" class="btn-bouncy p-5 rounded-2xl bg-amber-900 text-white font-black text-base flex flex-col items-center gap-2 shadow-md">
            <span class="text-3xl">🌳</span>
            <span>Tallo Leñoso</span>
            <span class="text-xs font-semibold opacity-90">Duro y rígido (madera)</span>
          </button>
        </div>
      `;
    }
  }

  renderArcadeCard() {
    const cardContainer = document.getElementById("arcade-current-card");
    if (!cardContainer) return;

    if (this.arcadeItemIdx >= this.arcadeItems.length) {
      if (window.soundManager) window.soundManager.playSuccess();
      cardContainer.innerHTML = `
        <div class="p-8 text-center bg-emerald-50 border-2 border-emerald-300 rounded-2xl">
          <span class="text-5xl block mb-2">🎉</span>
          <h3 class="text-2xl font-black text-emerald-950 mb-1">¡Clasificación Completada!</h3>
          <p class="text-sm text-emerald-800 font-semibold mb-4">Puntuación: ${this.arcadeScore} puntos · Máxima Racha: ${this.arcadeStreak}</p>
          <button onclick="app.initArcadeClassifier('${this.arcadeMode}')" class="btn-bouncy px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-black text-sm">
            🔄 Jugar Otra Partida
          </button>
        </div>
      `;
      return;
    }

    const item = this.arcadeItems[this.arcadeItemIdx];
    cardContainer.innerHTML = `
      <div class="card-playful p-6 text-center max-w-md mx-auto border-2 border-slate-200 bg-white">
        <span class="text-5xl block mb-2 float-bounce">${item.icon}</span>
        <h4 class="text-2xl font-black text-slate-900 mb-1">${item.name}</h4>
        <p class="text-xs text-slate-500 font-semibold mb-2">Pista: ${item.hint}</p>
        <span class="inline-block bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-bold">Elemento ${this.arcadeItemIdx + 1} de ${this.arcadeItems.length}</span>
      </div>
    `;

    const scoreEl = document.getElementById("arcade-score-val");
    if (scoreEl) scoreEl.textContent = this.arcadeScore;
    const streakEl = document.getElementById("arcade-streak-val");
    if (streakEl) streakEl.textContent = this.arcadeStreak;
  }

  classifyCurrent(chosenCategory) {
    const item = this.arcadeItems[this.arcadeItemIdx];
    let correct = false;

    if (this.arcadeMode === "type") {
      correct = (item.category === chosenCategory);
    } else if (this.arcadeMode === "fruit") {
      correct = (item.fruitType === chosenCategory);
    } else if (this.arcadeMode === "stem") {
      correct = (item.stemType === chosenCategory);
    }

    if (correct) {
      this.arcadeStreak++;
      this.arcadeScore += (10 + (this.arcadeStreak * 2));
      this.addStars(1);
      if (window.soundManager) window.soundManager.playCorrect();
    } else {
      this.arcadeStreak = 0;
      if (window.soundManager) window.soundManager.playError();
    }

    this.arcadeItemIdx++;
    this.renderArcadeCard();
  }

  // ---------------------------------------------------------------------------
  // VISTA 6: LABORATORIO ANATÓMICO INTERACTIVO (EXPLORADOR SVG)
  // ---------------------------------------------------------------------------
  renderAnatomyCard(partId) {
    const part = SCIENCE_DATA.anatomy.plantParts.find(p => p.id === partId);
    if (!part) return;

    if (window.soundManager) window.soundManager.playPlantGrow();

    // Actualizar botones de partes
    document.querySelectorAll(".plant-part-btn").forEach(b => {
      b.classList.remove("bg-emerald-600", "text-white", "border-emerald-700");
      b.classList.add("bg-white", "text-slate-700");
    });
    const activeBtn = document.getElementById("btn-part-" + partId);
    if (activeBtn) {
      activeBtn.classList.remove("bg-white", "text-slate-700");
      activeBtn.classList.add("bg-emerald-600", "text-white", "border-emerald-700");
    }

    const card = document.getElementById("anatomy-info-card");
    if (card) {
      card.innerHTML = `
        <div class="card-playful p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xl font-black text-emerald-950">${part.name}</h4>
            <span class="bg-emerald-200 text-emerald-900 text-xs px-2.5 py-1 rounded-full font-black">${part.role}</span>
          </div>
          <p class="text-sm text-slate-700 leading-relaxed mb-4">${part.details}</p>
          <div class="p-3 bg-white rounded-xl border border-emerald-200 flex items-start gap-2 text-xs text-emerald-900">
            <span class="text-base shrink-0">💡</span>
            <div><strong>Dato Curioso:</strong> ${part.curiosity}</div>
          </div>
        </div>
      `;
      if (window.soundManager) window.soundManager.speak(part.name + ". " + part.role + ". " + part.details);
    }
  }

  renderFlowerPart(partId) {
    const part = SCIENCE_DATA.anatomy.flowerParts.find(p => p.id === partId);
    if (!part) return;

    if (window.soundManager) window.soundManager.playClick();

    document.querySelectorAll(".flower-part-btn").forEach(b => {
      b.classList.remove("bg-pink-600", "text-white", "border-pink-700");
      b.classList.add("bg-white", "text-slate-700");
    });
    const activeBtn = document.getElementById("btn-flower-" + partId);
    if (activeBtn) {
      activeBtn.classList.remove("bg-white", "text-slate-700");
      activeBtn.classList.add("bg-pink-600", "text-white", "border-pink-700");
    }

    const card = document.getElementById("flower-info-card");
    if (card) {
      card.innerHTML = `
        <div class="card-playful p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-300">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xl font-black text-pink-950">${part.name}</h4>
            <span class="bg-pink-200 text-pink-900 text-xs px-2.5 py-1 rounded-full font-black">${part.color}</span>
          </div>
          <p class="text-sm text-slate-700 leading-relaxed">${part.description}</p>
        </div>
      `;
      if (window.soundManager) window.soundManager.speak(part.name + ". " + part.description);
    }
  }

  // ---------------------------------------------------------------------------
  // VISTA 7: ESQUEMAS / GUÍA VISUAL RESUMIDA
  // ---------------------------------------------------------------------------
  renderSummaryGuide() {
    const container = document.getElementById("summary-guide-container");
    if (!container) return;

    container.innerHTML = SCIENCE_DATA.summaryGuide.map(block => `
      <div class="card-playful p-6 border-2 border-slate-200 bg-white">
        <h3 class="text-lg font-black text-emerald-900 border-b border-emerald-100 pb-2 mb-3 flex items-center gap-2">
          <span>🌿</span>
          <span>${block.title}</span>
        </h3>
        <ul class="space-y-2 text-sm text-slate-700">
          ${block.points.map(pt => `
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
              <div>${pt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-extrabold">$1</strong>')}</div>
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");
  }

  // ---------------------------------------------------------------------------
  // VISTA 8: DIPLOMA OFICIAL IMPRIMIBLE
  // ---------------------------------------------------------------------------
  renderDiploma() {
    const nameEl = document.getElementById("diploma-student-name");
    if (nameEl) nameEl.textContent = this.studentName;

    const scoreEl = document.getElementById("diploma-score-text");
    const scoreVal = this.lastExamScore !== null ? this.lastExamScore : 10;
    if (scoreEl) scoreEl.textContent = `Calificación de Honor: ${scoreVal} / 10`;

    const dateEl = document.getElementById("diploma-date-text");
    if (dateEl) {
      const today = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      dateEl.textContent = today.toLocaleDateString("es-ES", options);
    }
  }

  editStudentName() {
    const newName = prompt("Introduce tu nombre para el diploma:", this.studentName);
    if (newName && newName.trim()) {
      this.studentName = newName.trim();
      localStorage.setItem("olivia_science4_name", this.studentName);
      this.renderDiploma();
      this.renderHome();
    }
  }

  printDiploma() {
    if (window.soundManager) window.soundManager.playSuccess();
    window.print();
  }

  setupEventListeners() {
    // Tecla rápida para atajos
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.navigate("home");
      }
    });
  }
}

// Inicializar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  window.app = new ScienceApp();
  window.app.init();
});
