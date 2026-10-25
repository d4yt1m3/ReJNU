/* =========================================================
   江南大学本科生模拟器 · 游戏引擎
   ========================================================= */

(() => {
  "use strict";

  const SAVE_KEY = "jnu_sim_save_v2";
  const META_KEY = "jnu_sim_meta_v1";
  const TURNS_PER_SEMESTER = 6;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const UI = {
    topbar: $("#topbar"),
    topbarSub: $("#topbar-sub"),
    saveState: $("#save-state"),
    screens: ["title", "create", "game", "ending"].reduce((acc, name) => {
      acc[name] = $(`#screen-${name}`);
      return acc;
    }, {}),
    topbarSound: $("#btn-sound"),
    topbarGallery: $("#btn-gallery"),
    topbarMenu: $("#btn-menu"),

    btnNew: $("#btn-new"),
    btnContinue: $("#btn-continue"),
    btnGalleryTitle: $("#btn-gallery-title"),
    btnAiTitle: $("#btn-ai-title"),
    galleryCount: $("#gallery-count"),

    inputName: $("#input-name"),
    btnRandomName: $("#btn-random-name"),
    genderGroup: $("#gender-group"),
    selectHome: $("#select-home"),
    collegeGrid: $("#college-grid"),
    collegeDetail: $("#college-detail"),
    majorGrid: $("#major-grid"),
    majorCount: $("#major-count"),
    traitGrid: $("#trait-grid"),
    createSummary: $("#create-summary"),
    btnEnroll: $("#btn-enroll"),

    avatar: $("#avatar"),
    studentName: $("#student-name"),
    studentMajor: $("#student-major"),
    studentId: $("#student-id"),
    studentCollege: $("#student-college"),
    studentHome: $("#student-home"),
    studentTrait: $("#student-trait"),
    studentMotto: $("#student-motto"),
    semesterTag: $("#semester-tag"),

    statGpa: $("#stat-gpa"),
    gpaRank: $("#gpa-rank"),
    statList: $("#stat-list"),
    studyBar: $("#study-bar"),
    studyValue: $("#study-value"),

    turnLabel: $("#turn-label"),
    semesterDots: $("#semester-dots"),
    eventCard: $("#event-card"),
    eventFootNote: $("#event-foot-note"),
    timeline: $("#timeline"),
    achGrid: $("#ach-grid"),
    achCount: $("#ach-count"),

    modalRoot: $("#modal-root"),
    toastRoot: $("#toast-root"),
    petals: $("#petals"),

    endingTitle: $("#ending-title"),
    endingRarity: $("#ending-rarity"),
    endingDesc: $("#ending-desc"),
    endingStats: $("#ending-stats"),
    endingTimeline: $("#ending-timeline"),
    endingComment: $("#ending-comment"),
    endingName: $("#ending-name"),
    btnRestart: $("#btn-restart"),
    btnGalleryEnding: $("#btn-gallery-ending"),
    btnBackTitle: $("#btn-back-title")
  };

  const RARITY_LABEL = { common: "普通", rare: "稀有", legend: "传说", secret: "隐藏" };
  const STAT_META = {
    knowledge: { label: "学识", icon: "book" },
    energy: { label: "精力", icon: "bolt" },
    mood: { label: "心情", icon: "sun" },
    social: { label: "社交", icon: "people" }
  };
  const STAT_ICON = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.4"/><path d="M16 15.5a5 5 0 0 1 5 4.5"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 9h18"/><circle cx="17" cy="14" r="1.2"/></svg>'
  };

  const FALLBACK_EVENT = {
    id: "ordinary_day",
    title: "普通的一天",
    scene: "蠡湖校区 · 日常",
    kicker: "日常",
    text: "今天没有课，也没有必须完成的事。你坐在宿舍里，忽然不知道该怎么安排这半天。",
    choices: [
      {
        label: "去图书馆坐一下午",
        hint: "学习 +2 · 心情 +2",
        effects: { study: 2, mood: 2, inc: { library: 1 } },
        result: "你在图书馆坐了一下午，看完了半本书。闭馆时，你觉得自己没有浪费这一天。"
      },
      {
        label: "在校园里随便走走",
        hint: "心情 +5 · 精力 +3",
        effects: { mood: 5, energy: 3 },
        result: "你沿着蠡湖走了一圈，看了会儿黑天鹅。什么都没做，但心情好了一点。"
      },
      {
        label: "回宿舍补觉",
        hint: "精力 +8 · 心情 +2",
        effects: { energy: 8, mood: 2 },
        result: "你睡了一个很长的午觉，醒来时天已经快黑了。你伸了个懒腰，觉得世界又好了。"
      }
    ]
  };

  const ALL_EVENTS = [...JNU_FIXED, ...JNU_RANDOM];

  let state = null;
  let meta = loadMeta();
  let selected = { college: "food", major: null, trait: "grinder", gender: "男" };
  let audioCtx = null;
  let modalDismissible = true;
  let saveFlashTimer = null;
  let turnToken = 0;
  let aiCredentialWarned = false;

  /* =========================================================
     工具
     ========================================================= */

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[ch]);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randInt(min, max) {
    return Math.floor(rand(min, max + 1));
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function round2(value) {
    return Math.round(value * 100) / 100;
  }

  function fmtMoney(value) {
    const number = Math.round(Number(value) || 0);
    return "¥" + number.toLocaleString("zh-CN");
  }

  function fmtSignedMoney(value) {
    const number = Math.round(Number(value) || 0);
    return (number >= 0 ? "+" : "-") + "¥" + Math.abs(number).toLocaleString("zh-CN");
  }

  function getCollege(id) {
    return JNU.colleges.find((item) => item.id === id) || JNU.colleges[0];
  }

  function getTrait(id) {
    return JNU.traits.find((item) => item.id === id) || JNU.traits[0];
  }

  function getHometown(id) {
    return JNU.hometowns.find((item) => item.id === id) || JNU.hometowns[0];
  }

  function semesterInfo(index) {
    return JNU.semesters[index] || { name: "毕业", year: 2030, weeks: ["第16-18周", "第16-18周", "第16-18周", "第16-18周", "第16-18周", "第16-18周"] };
  }

  function currentSemesterName() {
    return semesterInfo(state ? state.semester : 0).name;
  }

  function currentWeekLabel() {
    const info = semesterInfo(state ? state.semester : 0);
    return info.weeks[state ? state.turn : 0] || "第16-18周";
  }

  function typeText(value) {
    return typeof value === "function" ? value(state) : value;
  }

  /* =========================================================
     存档
     ========================================================= */

  function loadMeta() {
    try {
      const raw = localStorage.getItem(META_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return {
        endings: Array.isArray(parsed.endings) ? parsed.endings : [],
        achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [],
        runs: Number(parsed.runs) || 0,
        muted: Boolean(parsed.muted)
      };
    } catch (error) {
      return { endings: [], achievements: [], runs: 0, muted: false };
    }
  }

  function saveMeta() {
    try {
      localStorage.setItem(META_KEY, JSON.stringify(meta));
    } catch (error) {
      /* 本地存储不可用时静默失败，游戏本身仍可继续 */
    }
  }

  function readSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && parsed.version === 2 ? parsed : null;
    } catch (error) {
      return null;
    }
  }

  function save(options = {}) {
    if (!state || state.ended) return;
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      if (!options.silent) flashSave();
    } catch (error) {
      if (!options.silent) toast("存档失败", "浏览器禁用了本地存储，本次进度不会被保存。", "danger");
    }
  }

  function flashSave() {
    if (!UI.saveState) return;
    UI.saveState.textContent = "已自动存档";
    UI.saveState.classList.add("is-saving");
    window.clearTimeout(saveFlashTimer);
    saveFlashTimer = window.setTimeout(() => {
      UI.saveState.classList.remove("is-saving");
    }, 700);
  }

  function hasSave() {
    return Boolean(readSave());
  }

  function clearSave() {
    try {
      localStorage.removeItem(SAVE_KEY);
    } catch (error) {
      /* ignore */
    }
  }

  /* =========================================================
     初始化
     ========================================================= */

  function init() {
    try {
      localStorage.removeItem("jnu_sim_save_v1");
    } catch (error) {
      /* 旧版存档不存在或本地存储不可用时忽略 */
    }
    populateHometowns();
    renderCollegeOptions();
    renderTraitOptions();
    bindEvents();
    updateSoundButton();
    updateGalleryCount();
    updateAiEntry();
    createPetals();
    updateContinueButton();
    showScreen("title");
    if (meta.muted) UI.topbarSound.classList.add("is-muted");
  }

  function bindEvents() {
    UI.btnNew.addEventListener("click", () => {
      play("click");
      if (hasSave()) {
        confirmAction(
          "开始新的人生？",
          "当前已有一份未完成的存档。开始新游戏会覆盖它，但已解锁的结局与成就会保留。",
          "覆盖存档，重新入学",
          () => {
            clearSave();
            state = null;
            showCreate();
          }
        );
      } else {
        showCreate();
      }
    });

    UI.btnContinue.addEventListener("click", () => {
      play("click");
      continueGame();
    });

    UI.btnGalleryTitle.addEventListener("click", () => {
      play("click");
      openGallery("endings");
    });

    UI.btnAiTitle.addEventListener("click", () => {
      play("click");
      openAISettings();
    });

    UI.btnRandomName.addEventListener("click", () => {
      play("click");
      UI.inputName.value = randomName();
      updateCreateSummary();
    });

    UI.genderGroup.addEventListener("click", (event) => {
      const button = event.target.closest(".seg");
      if (!button) return;
      $$(".seg", UI.genderGroup).forEach((seg) => seg.classList.toggle("is-active", seg === button));
      selected.gender = button.dataset.value;
      updateCreateSummary();
    });

    UI.collegeGrid.addEventListener("click", (event) => {
      const card = event.target.closest(".college-card");
      if (!card) return;
      selected.college = card.dataset.id;
      const college = getCollege(selected.college);
      selected.major = college.majors[0];
      renderCollegeOptions();
      updateCreateSummary();
      play("click");
    });

    UI.majorGrid.addEventListener("click", (event) => {
      const card = event.target.closest(".major-card");
      if (!card) return;
      selected.major = card.dataset.major;
      renderMajorOptions();
      updateCreateSummary();
      play("click");
    });

    UI.traitGrid.addEventListener("click", (event) => {
      const card = event.target.closest(".trait-card");
      if (!card) return;
      selected.trait = card.dataset.id;
      renderTraitOptions();
      updateCreateSummary();
      play("click");
    });

    UI.selectHome.addEventListener("change", updateCreateSummary);

    UI.btnEnroll.addEventListener("click", () => {
      const name = UI.inputName.value.trim();
      if (!name) {
        toast("还差一步", "请先填写姓名，再领取你的学生证。", "danger");
        UI.inputName.focus();
        return;
      }
      if (name.length > 12) {
        toast("名字有点长", "请控制在 12 个字符以内。", "danger");
        return;
      }
      state = createState(name);
      save();
      showScreen("game");
      renderAll();
      startTurn();
      play("success");
    });

    UI.topbarSound.addEventListener("click", toggleSound);
    UI.topbarGallery.addEventListener("click", () => {
      play("click");
      openGallery("endings");
    });
    UI.topbarMenu.addEventListener("click", () => {
      play("click");
      openMenu();
    });

    UI.eventCard.addEventListener("click", (event) => {
      const choice = event.target.closest(".choice");
      if (choice && !choice.disabled) {
        choose(Number(choice.dataset.index));
        return;
      }
      const next = event.target.closest("#btn-next");
      if (next) advance();
    });

    UI.modalRoot.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal-overlay") && modalDismissible) {
        closeModal();
      }
      if (event.target.closest(".modal-close") && modalDismissible) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modalDismissible && UI.modalRoot.firstElementChild) {
        closeModal();
        return;
      }
      if (!state || state.ended || UI.modalRoot.firstElementChild) return;
      if (document.body.dataset.screen !== "game") return;
      if (state.pending && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        advance();
        return;
      }
      if (!state.pending && ["1", "2", "3", "4", "5"].includes(event.key)) {
        const index = Number(event.key) - 1;
        const button = UI.eventCard.querySelector(`.choice[data-index="${index}"]`);
        if (button && !button.disabled) {
          event.preventDefault();
          choose(index);
        }
      }
    });

    UI.btnRestart.addEventListener("click", () => {
      play("click");
      state = null;
      clearSave();
      showCreate();
    });

    UI.btnGalleryEnding.addEventListener("click", () => {
      play("click");
      openGallery("endings");
    });

    UI.btnBackTitle.addEventListener("click", () => {
      play("click");
      state = null;
      showScreen("title");
      updateContinueButton();
    });

    window.addEventListener("beforeunload", () => state && save({ silent: true }));
  }

  function populateHometowns() {
    UI.selectHome.innerHTML = JNU.hometowns
      .map((home) => `<option value="${home.id}">${esc(home.name)}</option>`)
      .join("");
    UI.selectHome.value = "wuxi";
  }

  function renderCollegeOptions() {
    UI.collegeGrid.innerHTML = JNU.colleges.map((college) => `
      <button type="button" class="college-card ${college.id === selected.college ? "is-selected" : ""}"
        data-id="${college.id}" role="radio" aria-checked="${college.id === selected.college}"
        title="${esc(college.name)}">
        <strong>${esc(college.name)}</strong>
        <small>${esc(college.short)} · ${college.majors.length} 个专业</small>
      </button>
    `).join("");
    renderCollegeDetail();
    renderMajorOptions();
  }

  function renderCollegeDetail() {
    const college = getCollege(selected.college);
    UI.collegeDetail.innerHTML = `
      <div class="college-detail-top">
        <div>
          <h4>${esc(college.name)}</h4>
          <p>${esc(college.desc)}</p>
        </div>
        <span class="college-detail-badge">${esc(college.short)}</span>
      </div>
      <div class="college-detail-foot">
        <span class="motto">${esc(college.motto)}</span>
        <span class="bonus">${esc(college.bonusText)}</span>
      </div>
    `;
  }

  function renderMajorOptions() {
    const college = getCollege(selected.college);
    if (!selected.major || !college.majors.includes(selected.major)) {
      selected.major = college.majors[0];
    }
    UI.majorCount.textContent = `${college.majors.length} 个专业可选`;
    UI.majorGrid.innerHTML = college.majors.map((major) => `
      <button type="button" class="major-card ${major === selected.major ? "is-selected" : ""}"
        data-major="${esc(major)}" role="radio" aria-checked="${major === selected.major}">
        <strong>${esc(major)}</strong>
        <small>四年制本科 · ${esc(college.short)}</small>
      </button>
    `).join("");
  }

  function renderTraitOptions() {
    UI.traitGrid.innerHTML = JNU.traits.map((trait) => `
      <button type="button" class="trait-card ${trait.id === selected.trait ? "is-selected" : ""}"
        data-id="${trait.id}" role="radio" aria-checked="${trait.id === selected.trait}">
        <strong>${esc(trait.name)}</strong>
        <span class="trait-desc">${esc(trait.desc)}</span>
        <span class="trait-bonus">${esc(trait.bonusText)}</span>
      </button>
    `).join("");
  }

  function updateCreateSummary() {
    const college = getCollege(selected.college);
    const major = selected.major || college.majors[0];
    const trait = getTrait(selected.trait);
    const home = getHometown(UI.selectHome.value);
    const aiConfig = JNU_AI.loadConfig();
    UI.createSummary.innerHTML = `
      你将以 <b>2026 级新生</b> 的身份，进入 <b>${esc(college.name)}</b> 的
      <b>${esc(major)}</b> 专业。来自 <b>${esc(home.name)}</b>，性格 <b>${esc(trait.name)}</b>。
      <div class="summary-tags">
        <span class="summary-tag">${esc(college.bonusText)}</span>
        <span class="summary-tag">${esc(trait.bonusText)}</span>
        <span class="summary-tag">生活费 ${fmtMoney(home.allowance)} / 学期</span>
        ${aiConfig.enabled ? '<span class="summary-tag summary-tag-ai">AI 剧情 · 已开启</span>' : ""}
      </div>
    `;
  }

  function showCreate() {
    showScreen("create");
    if (!UI.inputName.value) UI.inputName.value = randomName();
    const college = getCollege(selected.college);
    if (!selected.major || !college.majors.includes(selected.major)) {
      selected.major = college.majors[0];
    }
    renderCollegeOptions();
    renderTraitOptions();
    updateCreateSummary();
    window.setTimeout(() => UI.inputName.focus(), 120);
  }

  function showScreen(name) {
    document.body.dataset.screen = name;
    Object.entries(UI.screens).forEach(([key, element]) => {
      element.hidden = key !== name;
    });
    UI.topbar.hidden = name !== "game";
    if (name === "title") updateContinueButton();
  }

  function updateContinueButton() {
    const exists = hasSave();
    UI.btnContinue.hidden = !exists;
    updateGalleryCount();
  }

  function updateGalleryCount() {
    UI.galleryCount.textContent = `${meta.endings.length} / ${JNU.endings.length}`;
  }

  /* =========================================================
     角色创建
     ========================================================= */

  function randomName() {
    const surnames = ["陈", "林", "沈", "周", "许", "顾", "苏", "陆", "江", "何", "唐", "宋", "叶", "程", "温", "贺"];
    const given = ["知远", "晚晴", "一舟", "南星", "清和", "予安", "星野", "听澜", "见微", "向晚", "舒窈", "嘉树", "云舟", "若谷", "明川", "静姝", "予同", "亦舟"];
    return pick(surnames) + pick(given);
  }

  function createState(name) {
    const college = getCollege(selected.college);
    const trait = getTrait(selected.trait);
    const home = getHometown(UI.selectHome.value);
    const stats = { gpa: 0, knowledge: 18, energy: 82, mood: 72, social: 28, money: 2000 };

    Object.entries(college.stats || {}).forEach(([key, value]) => {
      stats[key] = (stats[key] || 0) + value;
    });
    Object.entries(trait.stats || {}).forEach(([key, value]) => {
      stats[key] = (stats[key] || 0) + value;
    });
    stats.money += home.money || 0;

    ["knowledge", "energy", "mood", "social"].forEach((key) => {
      stats[key] = clamp(stats[key], 0, 100);
    });
    stats.money = Math.max(0, stats.money);

    return {
      version: 2,
      player: {
        name,
        gender: selected.gender,
        hometown: home.id,
        hometownName: home.name,
        college: college.id,
        collegeId: college.id,
        collegeName: college.name,
        major: selected.major || college.majors[0],
        trait: trait.id,
        traitName: trait.name,
        studentId: `2026${randInt(100000, 999999)}`
      },
      stats,
      semester: 0,
      turn: 0,
      study: 0,
      flags: {
        cet4: 0,
        cet6: 0,
        food: 0,
        library: 0,
        night: 0,
        esports: 0,
        internship: 0,
        competition: 0
      },
      used: [],
      currentEventId: null,
      pending: null,
      report: null,
      reportFinal: false,
      loggedTurns: [],
      logs: [],
      achievements: [],
      lastGpa: 0,
      lastPct: 100,
      endingId: null,
      endingRarity: null,
      ended: false,
      createdAt: Date.now()
    };
  }

  /* =========================================================
     游戏主流程
     ========================================================= */

  function continueGame() {
    const saved = readSave();
    if (!saved || saved.ended) {
      if (saved && saved.ended) clearSave();
      toast("没有找到存档", "开始一段新的大学生活吧。", "danger");
      updateContinueButton();
      return;
    }
    state = saved;
    showScreen("game");
    renderAll();
    if (state.report) {
      showReport();
    } else if (state.pending) {
      renderPendingEvent();
    } else {
      startTurn();
    }
  }

  function startTurn() {
    if (!state || state.ended) return;
    if (state.report) {
      showReport();
      return;
    }
    if (state.semester >= JNU.semesters.length) {
      finishGame();
      return;
    }
    if (state.turn >= TURNS_PER_SEMESTER) {
      settleSemester(false);
      return;
    }
    runTurn();
  }

  async function runTurn() {
    const token = ++turnToken;
    const runState = state;
    renderAll();

    // 已生成（或已选好）的事件优先恢复，刷新页面不会重复请求 AI
    if (state.dynamicEvent && state.dynamicEvent.id === state.currentEventId) {
      renderEvent(state.dynamicEvent);
      return;
    }
    const existing = state.currentEventId
      ? ALL_EVENTS.find((event) => event.id === state.currentEventId)
      : null;
    if (existing) {
      renderEvent(existing);
      return;
    }

    const fixed = JNU_FIXED.find((event) => {
      if (event.sem !== state.semester || event.turn !== state.turn) return false;
      return conditionMet(event);
    });
    if (fixed) {
      state.currentEventId = fixed.id;
      state.dynamicEvent = null;
      renderEvent(fixed);
      save({ silent: true });
      return;
    }

    const aiConfig = JNU_AI.loadConfig();
    if (aiConfig.enabled) {
      if (!JNU_AI.hasCredentials(aiConfig)) {
        if (!aiCredentialWarned) {
          aiCredentialWarned = true;
          toast("AI 剧情待配置", "还没有可用的 API Key，本回合先使用本地事件。可在菜单的「AI 剧情」里设置。", "danger");
        }
        renderStaticTurn();
        return;
      }

      renderAiLoading(aiConfig);
      try {
        const aiEvent = await JNU_AI.generateEvent(state);
        if (token !== turnToken || state !== runState || state.ended) return;
        state.dynamicEvent = aiEvent;
        state.currentEventId = aiEvent.id;
        save({ silent: true });
        renderAll();
        renderEvent(aiEvent);
        play("success");
      } catch (error) {
        if (token !== turnToken || state !== runState || state.ended) return;
        toast("AI 生成失败", `${JNU_AI.describeError(error)}。已切换到本地事件。`, "danger");
        renderStaticTurn();
      }
      return;
    }

    renderStaticTurn();
  }

  function renderStaticTurn() {
    const event = pickStaticEvent();
    renderAll();
    renderEvent(event);
    save({ silent: true });
  }

  function pickStaticEvent() {
    const pool = JNU_RANDOM.filter((event) => {
      if (state.used.includes(event.id)) return false;
      if (event.minSem != null && state.semester < event.minSem) return false;
      if (event.maxSem != null && state.semester > event.maxSem) return false;
      if (event.college && event.college !== state.player.collegeId) return false;
      return conditionMet(event);
    });

    state.dynamicEvent = null;

    if (!pool.length) {
      state.currentEventId = FALLBACK_EVENT.id;
      return FALLBACK_EVENT;
    }

    const weights = pool.map((event) => {
      const base = Number(event.weight) || 1;
      return event.college ? base * 2.6 : base;
    });
    const total = weights.reduce((sum, value) => sum + value, 0);
    let roll = Math.random() * total;
    let chosen = pool[0];
    for (let i = 0; i < pool.length; i += 1) {
      roll -= weights[i];
      if (roll <= 0) {
        chosen = pool[i];
        break;
      }
    }
    state.currentEventId = chosen.id;
    return chosen;
  }

  function conditionMet(event) {
    if (!event.cond) return true;
    try {
      return Boolean(event.cond(state));
    } catch (error) {
      return false;
    }
  }

  function currentEvent() {
    if (state.dynamicEvent && state.dynamicEvent.id === state.currentEventId) {
      return state.dynamicEvent;
    }
    return ALL_EVENTS.find((event) => event.id === state.currentEventId) || FALLBACK_EVENT;
  }

  function renderEventText(text) {
    return String(text || "")
      .split(/\n{2,}/)
      .map((part) => `<p class="event-text">${esc(part)}</p>`)
      .join("");
  }

  function renderEvent(event) {
    const info = semesterInfo(state.semester);
    const week = info.weeks[state.turn] || "第16-18周";
    const body = state.pending
      ? renderResultBody(event)
      : renderChoicesBody(event);

    UI.eventCard.innerHTML = `
      <div class="event-head">
        <span class="event-scene">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <span>${esc(event.scene)}</span>
        </span>
        <div class="event-tags">
          ${event.ai ? `<span class="event-ai" title="由 ${esc(event.model || "AI")} 生成">AI 生成</span>` : ""}
          <span class="event-turn">${info.name} · ${week}</span>
        </div>
      </div>
      <p class="event-kicker">${esc(event.kicker || "江大日常")}</p>
      <h2 class="event-title">${esc(event.title)}</h2>
      ${renderEventText(typeText(event.text))}
      ${body}
    `;

    UI.eventFootNote.textContent = state.pending
      ? "选择已经做出，没有撤回键。"
      : event.ai
        ? "本回合由 AI 生成 · 固定里程碑仍由剧本控制。"
        : "每一次选择，都会在四年后的档案里留下痕迹。";

    UI.eventCard.style.animation = "none";
    // 触发重排，让每张事件卡都有一次入场动画
    void UI.eventCard.offsetWidth;

    UI.eventCard.style.animation = "";
  }

  function renderAiLoading(config) {
    const info = semesterInfo(state.semester);
    const week = info.weeks[state.turn] || "第16-18周";
    const preset = JNU_AI.PRESETS[config.preset];
    const label = preset ? preset.label : config.model;

    UI.eventCard.innerHTML = `
      <div class="event-head">
        <span class="event-scene">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <span>AI 剧情 · 正在生成</span>
        </span>
        <div class="event-tags">
          <span class="event-ai">AI</span>
          <span class="event-turn">${info.name} · ${week}</span>
        </div>
      </div>
      <div class="ai-loading">
        <div class="ai-loading-top">
          <span class="ai-orb" aria-hidden="true"></span>
          <div>
            <p class="ai-loading-title">正在写这一周</p>
            <p class="ai-loading-sub">${esc(label)} · 结合你的专业、状态与最近经历</p>
          </div>
        </div>
        <div class="sk-lines" aria-hidden="true">
          <i style="width:94%"></i><i style="width:88%"></i><i style="width:96%"></i><i style="width:62%"></i>
        </div>
        <div class="ai-loading-choices" aria-hidden="true"><i></i><i></i><i></i></div>
        <p class="ai-loading-note">生成失败或超时会自动使用本地事件。</p>
      </div>
    `;

    UI.eventFootNote.textContent = "AI 正在写作，固定节点不会被打断。";
    UI.eventCard.style.animation = "none";
    void UI.eventCard.offsetWidth;
    UI.eventCard.style.animation = "";
  }

  function renderChoicesBody(event) {
    const choices = event.choices
      .map((choice, index) => ({ choice, index }))
      .filter(({ choice }) => (typeof choice.show === "function" ? choice.show(state) : true));

    return `
      <div class="event-choices">
        ${choices.map(({ choice, index }, visibleIndex) => renderChoice(choice, index, visibleIndex)).join("")}
      </div>
    `;
  }

  function renderChoice(choice, index, keyIndex) {
    const requirement = checkRequirement(choice.require);
    const disabled = !requirement.ok;
    return `
      <button type="button" class="choice" data-index="${index}" ${disabled ? "disabled" : ""}>
        <span class="choice-key">${"甲乙丙丁戊"[keyIndex] || keyIndex + 1}</span>
        <span class="choice-body">
          <strong>${esc(choice.label)}</strong>
          <span class="choice-hint">${formatHint(choice.hint || "")}</span>
        </span>
        ${disabled
          ? `<span class="choice-lock">${esc(requirement.text)}</span>`
          : '<span class="choice-arrow">→</span>'}
      </button>
    `;
  }

  function formatHint(hint) {
    const positive = new Set(["学习", "学识", "精力", "心情", "社交", "存款"]);
    const special = ["熬夜", "干饭", "图书馆", "电竞", "四级", "六级", "风险"];
    return String(hint)
      .split(" · ")
      .map((token) => {
        const text = token.trim();
        if (!text) return "";
        const match = text.match(/^(.+?)\s*([+-])(\d+)(.*)$/);
        if (!match) return `<span>${esc(text)}</span>`;
        const label = match[1].trim();
        let className = "";
        if (positive.has(label)) {
          className = match[2] === "+" ? "up" : "down";
        } else if (special.some((word) => label.includes(word))) {
          className = "gold";
        }
        return `<span class="${className}">${esc(text)}</span>`;
      })
      .filter(Boolean)
      .join('<span class="hint-sep">·</span>');
  }

  function checkRequirement(require) {
    if (!require) return { ok: true, text: "" };
    const labels = { gpa: "绩点", knowledge: "学识", money: "存款", energy: "精力", mood: "心情", social: "社交" };
    const failures = [];
    Object.entries(require).forEach(([key, value]) => {
      const current = state.stats[key];
      if ((current || 0) < value) {
        const display = key === "money" ? fmtMoney(value) : key === "gpa" ? value.toFixed(1) : value;
        failures.push(`${labels[key] || key} ${display}`);
      }
    });
    return { ok: failures.length === 0, text: failures.length ? `需要 ${failures.join(" / ")}` : "" };
  }

  function renderResultBody(event) {
    const pending = state.pending;
    const deltas = (pending.deltas || []).map((item) => {
      const sign = item.delta > 0 ? "+" : "";
      const value = item.key === "money" ? fmtSignedMoney(item.delta) : `${sign}${item.delta}`;
      return `<span class="delta ${item.delta > 0 ? "up" : "down"}">${item.label} ${value}</span>`;
    }).join("");
    const rollChip = pending.roll
      ? `<span class="delta ${pending.roll.success ? "flat" : "down"}">判定${pending.roll.success ? "成功" : "失败"} · ${Math.round(pending.roll.p * 100)}%</span>`
      : "";
    const buttonLabel = event.id === "graduation" ? "领取毕业档案" : "继续";

    return `
      <div class="event-result">
        <span class="result-label">结果</span>
        <p class="result-text">${esc(pending.text)}</p>
        <div class="delta-row">
          ${deltas || '<span class="delta flat">状态平稳</span>'}
          ${rollChip}
        </div>
        <button type="button" class="btn btn-primary btn-next" id="btn-next">${buttonLabel} <span>→</span></button>
      </div>
    `;
  }

  function renderPendingEvent() {
    const event = currentEvent();
    renderAll();
    renderEvent(event);
  }

  function choose(index) {
    if (!state || state.pending) return;
    const event = currentEvent();
    const choice = event.choices[index];
    if (!choice) return;
    const requirement = checkRequirement(choice.require);
    if (!requirement.ok) return;

    const resolved = resolveChoice(choice);
    const deltas = applyEffects(resolved.effects || {});
    state.pending = {
      eventId: event.id,
      choiceIndex: index,
      text: typeText(resolved.text || ""),
      deltas,
      roll: resolved.roll
    };
    state.lastChoice = {
      eventTitle: event.title,
      choiceLabel: choice.label,
      result: String(state.pending.text || "").slice(0, 140)
    };

    logEvent(event);
    checkAchievements();
    checkThresholdWarnings();
    save();
    renderAll();
    renderEvent(event);
    play(resolved.roll && !resolved.roll.success ? "fail" : "click");
  }

  function resolveChoice(choice) {
    if (choice.roll) {
      let probability = choice.roll;
      if (choice.rollStat) {
        const raw = choice.rollStat === "gpa" ? (state.stats.gpa / 4) * 100 : state.stats[choice.rollStat];
        probability += ((raw || 0) - 50) * 0.004;
      }
      probability = clamp(probability, 0.08, 0.94);
      const success = Math.random() < probability;
      const branch = success ? choice.success : choice.fail;
      return {
        text: (branch && branch.text) || choice.result || "",
        effects: (branch && branch.effects) || {},
        roll: { success, p: probability }
      };
    }
    return {
      text: choice.result || "",
      effects: choice.effects || {},
      roll: null
    };
  }

  function applyEffects(effects) {
    const deltas = [];
    ["knowledge", "energy", "mood", "social", "money", "study"].forEach((key) => {
      if (effects[key] == null) return;
      if (key === "study") {
        const before = state.study;
        state.study = Math.max(0, state.study + effects[key]);
        const delta = Math.round(state.study - before);
        if (delta !== 0) deltas.push({ key, label: "学习", delta });
        return;
      }
      const before = state.stats[key] || 0;
      if (key === "money") {
        state.stats.money = Math.max(0, state.stats.money + effects[key]);
      } else {
        state.stats[key] = clamp(state.stats[key] + effects[key], 0, 100);
      }
      const delta = Math.round(state.stats[key] - before);
      if (delta !== 0) {
        deltas.push({ key, label: key === "money" ? "存款" : STAT_META[key].label, delta });
      }
    });

    if (effects.flags) {
      Object.entries(effects.flags).forEach(([key, value]) => {
        state.flags[key] = value;
      });
    }

    if (effects.inc) {
      Object.entries(effects.inc).forEach(([key, value]) => {
        state.flags[key] = (Number(state.flags[key]) || 0) + Number(value);
      });
    }

    return deltas;
  }

  function checkThresholdWarnings() {
    if (state.stats.mood < 20) {
      toast("状态提醒", "心情已经很低了。下一次选择时，记得对自己好一点。", "danger");
    }
    if (state.stats.energy < 10) {
      toast("状态提醒", "精力见底。再硬撑下去，效率会越来越低。", "danger");
    }
  }

  function advance() {
    if (!state || !state.pending) return;
    const event = currentEvent();
    if (event && !event.fixed && !event.ai && !state.used.includes(event.id)) {
      state.used.push(event.id);
    }
    const isGraduation = Boolean(event && event.id === "graduation");

    state.pending = null;
    state.currentEventId = null;
    state.dynamicEvent = null;

    if (isGraduation) {
      save({ silent: true });
      settleSemester(true);
      return;
    }

    state.turn += 1;
    if (state.turn >= TURNS_PER_SEMESTER) {
      save({ silent: true });
      settleSemester(false);
      return;
    }
    state.stats.energy = clamp(state.stats.energy + 5, 0, 100);
    save({ silent: true });
    startTurn();
  }

  function logEvent(event) {
    const key = `${state.semester}-${state.turn}`;
    if (state.loggedTurns.includes(key)) return;
    state.loggedTurns.push(key);
    state.logs.push({
      sem: semesterInfo(state.semester).name,
      title: event.title,
      key: Boolean(event.fixed)
    });
  }

  /* =========================================================
     学期结算
     ========================================================= */

  function settleSemester(final) {
    if (!state || state.report) return;
    if (state.semester >= JNU.semesters.length) {
      finishGame();
      return;
    }

    const semesterIndex = state.semester;
    const info = semesterInfo(semesterIndex);
    const college = getCollege(state.player.collegeId);
    const trait = getTrait(state.player.trait);
    const home = getHometown(state.player.hometown);

    let base = 1.6
      + state.study * 0.14
      + state.stats.knowledge * 0.010
      + (trait.studyBonus || 0)
      + (college.studyBonus || 0)
      + rand(-0.1, 0.1);

    if (state.stats.mood < 30) base -= 0.15;
    if (state.stats.energy < 20) base -= 0.1;
    base = clamp(base, 0, 4);

    const courses = buildCourses(semesterIndex, college, base);
    const totalCredits = courses.reduce((sum, course) => sum + course.credit, 0);
    const weighted = courses.reduce((sum, course) => sum + course.gp * course.credit, 0) / totalCredits;
    const semGpa = round2(weighted);

    const priorSemesters = semesterIndex;
    const cumulative = round2((state.stats.gpa * priorSemesters + semGpa) / (priorSemesters + 1));
    state.stats.gpa = cumulative;
    state.lastGpa = semGpa;

    const percentile = clamp(Math.round(100 - semGpa * 22 + rand(-4, 4)), 3, 100);
    state.lastPct = percentile;

    let scholarship = 0;
    let scholarshipName = "";
    if (semGpa >= 3.9) {
      scholarship = 4000;
      scholarshipName = "校一等奖学金";
    } else if (semGpa >= 3.7) {
      scholarship = 2500;
      scholarshipName = "校二等奖学金";
    } else if (semGpa >= 3.5) {
      scholarship = 1000;
      scholarshipName = "校三等奖学金";
    }
    if (scholarship > 0) state.flags.scholarship = true;

    const allowance = home.allowance;
    const expense = 1200;
    const moneyDelta = allowance - expense + scholarship;
    state.stats.money = Math.max(0, state.stats.money + moneyDelta);
    state.stats.energy = clamp(state.stats.energy + 30, 0, 100);
    if (state.stats.mood < 50) state.stats.mood = clamp(state.stats.mood + 6, 0, 100);
    if (state.stats.mood > 80) state.stats.mood = clamp(state.stats.mood - 3, 0, 100);

    const probation = semGpa < 1.5;
    if (probation) {
      state.flags.probationCount = (Number(state.flags.probationCount) || 0) + 1;
      if (state.flags.probationCount >= 2) {
        state.flags.dropout = true;
      }
    }

    const awards = [];
    if (scholarshipName) awards.push(`${scholarshipName} +${fmtMoney(scholarship)}`);
    if (state.flags.national) awards.push("国家奖学金（已获得）");
    if (state.flags.cet4 >= 425) awards.push(`四级 ${state.flags.cet4} 分`);
    if (state.flags.cet6 >= 425) awards.push(`六级 ${state.flags.cet6} 分`);
    if (state.flags.competition) awards.push("学科竞赛获奖");
    if (probation) awards.push("学业预警");
    if (state.flags.warning) awards.push("辅导员约谈");

    const report = {
      semName: info.name,
      year: info.year,
      courses,
      semGpa,
      gpa: cumulative,
      percentile,
      credits: totalCredits,
      study: state.study,
      scholarship,
      scholarshipName,
      allowance,
      expense,
      moneyDelta,
      awards,
      financeText: `生活费 +${fmtMoney(allowance)} · 基本开销 -${fmtMoney(expense)}${scholarship ? ` · 奖学金 +${fmtMoney(scholarship)}` : ""}`,
      comment: buildComment(semGpa, probation),
      probation,
      dropout: Boolean(state.flags.dropout)
    };

    state.report = report;
    state.reportFinal = Boolean(final) || Boolean(state.flags.dropout);
    state.study = 0;
    state.turn = 0;
    state.semester = semesterIndex + 1;
    state.currentEventId = null;
    state.pending = null;

    checkAchievements();
    save({ silent: true });
    renderAll();
    showReport();
  }

  function buildCourses(semesterIndex, college, baseGpa) {
    const majorPool = college.courses || [];
    const rows = [];
    const seen = new Set();
    const add = (name, credit, type) => {
      if (!name || seen.has(name)) return false;
      seen.add(name);
      rows.push(makeCourse(name, credit, baseGpa, type));
      return true;
    };

    let majorAdded = 0;
    for (let i = 0; i < majorPool.length * 2 && majorAdded < 3; i += 1) {
      if (add(majorPool[(semesterIndex * 3 + i) % majorPool.length], 3, "专业必修")) {
        majorAdded += 1;
      }
    }

    let commonAdded = 0;
    for (let i = 0; i < JNU.commonCourses.length * 2 && commonAdded < 2; i += 1) {
      if (add(JNU.commonCourses[(semesterIndex + i * 3) % JNU.commonCourses.length], 2, "通识必修")) {
        commonAdded += 1;
      }
    }

    const electives = JNU.electiveCourses.filter((name) => !seen.has(name));
    add(electives.length ? pick(electives) : "通识选修", 2, "通识选修");

    return rows;
  }

  function makeCourse(name, credit, baseGpa, type) {
    const score = clamp(Math.round(43 + baseGpa * 12.5 + rand(-4, 4)), 0, 100);
    const gp = round2(clamp((score - 50) / 10, 0, 4));
    const grade = score >= 90 ? "优秀" : score >= 80 ? "良好" : score >= 70 ? "中等" : score >= 60 ? "及格" : "不及格";
    return { name, credit, score, gp, grade, type };
  }

  function buildComment(semGpa, probation) {
    if (state.flags.dropout) {
      return "这是第二次学业预警。按照学校规定，你将无法继续本科学业。老师知道你已经很努力了，但有些规则不会因为努力而改变。先好好睡一觉，再想想下一步。";
    }
    if (semGpa >= 3.9) {
      return "这一学期，你几乎把每一分钟都用在刀刃上。满绩不是终点，但确实值得为自己骄傲一次。记得抬头看看蠡湖。";
    }
    if (semGpa >= 3.5) {
      return "稳定、踏实，偶尔也会在课堂上举手。你正在成为那种“让人放心”的学生。保持节奏，不必把自己逼得太紧。";
    }
    if (probation) {
      return "这学期不太顺利。绩点不会说谎，但它也不能定义你。下学期把课表重新排一排，先从一件小事开始做起来。";
    }
    if (state.flags.romance) {
      return "听说你最近状态不错，恋爱和学习都可以认真，但别把两件事都拖到截止日期。";
    }
    if (state.stats.mood < 30) {
      return "老师注意到你最近状态不太好。如果累了，去心理中心坐坐，或者找朋友吃顿饭。学业可以慢一点。";
    }
    if (state.flags.cheating) {
      return "考试违纪这件事，学院已经记录在案。希望你把它当成一个昂贵的教训，而不是一次倒霉。";
    }
    return pick([
      "这一学期有惊无险。你逃过几次早八，也认真上过几节课。大学大概就是这样，在摆烂和自救之间反复横跳。",
      "你的出勤率还行，作业也交了，考试也过了。没有特别耀眼，但也没有掉队。继续走吧。",
      "这学期你好像想明白了一些事，又好像什么都没想明白。没关系，二十岁本来就该这样。",
      "曲水桥的风照常吹，图书馆的灯照常亮。你在这座校园里，慢慢长成了自己的样子。"
    ]);
  }

  function showReport() {
    if (!state || !state.report) return;
    const report = state.report;
    const isFinal = state.reportFinal;

    const courseRows = report.courses.map((course) => {
      const gradeClass = course.score >= 90 ? "grade-excellent"
        : course.score >= 80 ? "grade-good"
        : course.score >= 60 ? "grade-pass" : "grade-fail";
      return `
        <tr>
          <td>${esc(course.name)}</td>
          <td class="num">${course.credit}</td>
          <td class="num">${course.score}</td>
          <td class="num">${course.gp.toFixed(1)}</td>
          <td><span class="grade ${gradeClass}">${course.grade}</span></td>
        </tr>
      `;
    }).join("");

    const awards = report.awards.length
      ? report.awards.map((award) => `<span class="chip chip-gold">${esc(award)}</span>`).join("")
      : '<span class="chip chip-plain">本学期无特别奖项</span>';

    openModal(`
      <div class="report-head">
        <div>
          <p class="eyebrow">教务系统 · 学期成绩单</p>
          <h2>${esc(report.semName)} · 成绩单</h2>
          <p>${report.year} 学年 · 共修 ${report.credits} 学分 · ${esc(state.player.collegeName)}</p>
        </div>
        <div class="report-gpa">
          <span>SEMESTER GPA</span>
          <strong>${report.semGpa.toFixed(2)}</strong>
        </div>
      </div>
      <div class="report-body">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>课程</th><th class="num">学分</th><th class="num">成绩</th><th class="num">绩点</th><th>等级</th></tr>
            </thead>
            <tbody>${courseRows}</tbody>
          </table>
        </div>
        <div class="report-summary">
          <div class="report-cell"><span>专业排名</span><strong>前 ${report.percentile}%</strong></div>
          <div class="report-cell"><span>本学期学习投入</span><strong>${report.study}</strong></div>
          <div class="report-cell"><span>本学期收支</span><strong>${report.moneyDelta >= 0 ? "+" : ""}${fmtMoney(report.moneyDelta)}</strong></div>
        </div>
        <div class="report-note"><b>辅导员评语：</b>${esc(report.comment)}</div>
        <div class="report-awards">${awards}</div>
        <p class="create-tip" style="text-align:left;margin-top:8px">${esc(report.financeText)} · 累计绩点 ${report.gpa.toFixed(2)} / 4.0</p>
        <div class="report-actions">
          <button type="button" class="btn btn-primary" id="report-next">${isFinal ? "领取毕业档案" : "继续下一学期"} →</button>
        </div>
      </div>
    `, { className: "report-modal", dismissible: false });

    const next = $("#report-next");
    if (next) {
      next.addEventListener("click", () => {
        const final = state.reportFinal;
        state.report = null;
        state.reportFinal = false;
        state.flags.dropout = Boolean(state.flags.dropout);
        closeModal();
        save({ silent: true });
        if (final || state.flags.dropout) {
          finishGame();
        } else {
          renderAll();
          startTurn();
        }
      });
    }
  }

  /* =========================================================
     成就
     ========================================================= */

  const ACHIEVEMENT_CHECKS = {
    first: (s) => s.logs.length > 0,
    military: (s) => Boolean(s.flags.military),
    club: (s) => Boolean(s.flags.club),
    cet4: (s) => Number(s.flags.cet4) >= 425,
    cet6: (s) => Number(s.flags.cet6) >= 425,
    fullgpa: (s) => Number(s.lastGpa) >= 3.95,
    scholar: (s) => Boolean(s.flags.scholarship),
    national: (s) => Boolean(s.flags.national),
    research: (s) => Boolean(s.flags.research),
    paper: (s) => Boolean(s.flags.paper),
    competition: (s) => Number(s.flags.competition) >= 1,
    intern: (s) => Number(s.flags.internship) >= 3,
    romance: (s) => Boolean(s.flags.romance),
    breakup: (s) => Boolean(s.flags.breakup),
    foodie: (s) => Number(s.flags.food) >= 4,
    library: (s) => Number(s.flags.library) >= 4,
    night: (s) => Number(s.flags.night) >= 4,
    fitness: (s) => Boolean(s.flags.fitness),
    singer: (s) => Boolean(s.flags.singer),
    startup: (s) => Boolean(s.flags.startup),
    rich: (s) => s.stats.money >= 10000,
    social: (s) => s.stats.social >= 80,
    knowledge: (s) => s.stats.knowledge >= 90,
    allround: (s) => ["knowledge", "energy", "mood", "social"].every((key) => s.stats[key] >= 65),
    graduate: (s) => Boolean(s.flags.graduated) || Boolean(s.ended),
    legend: (s) => s.endingRarity === "legend"
  };

  function checkAchievements() {
    if (!state) return;
    JNU.achievements.forEach((achievement) => {
      if (state.achievements.includes(achievement.id)) return;
      const check = ACHIEVEMENT_CHECKS[achievement.id];
      if (!check || !check(state)) return;
      state.achievements.push(achievement.id);
      if (!meta.achievements.includes(achievement.id)) {
        meta.achievements.push(achievement.id);
        saveMeta();
      }
      toast(`成就解锁 · ${achievement.name}`, achievement.desc, "gold");
      play("ach");
    });
    renderAchievements();
  }

  /* =========================================================
     主界面渲染
     ========================================================= */

  function renderAll() {
    if (!state) return;
    renderTopbar();
    renderStudent();
    renderStats();
    renderTimeline();
    renderAchievements();
    renderSemesterDots();
  }

  function renderTopbar() {
    const info = semesterInfo(state.semester);
    UI.topbarSub.textContent = `2026级 · ${info.name} · ${currentWeekLabel()}`;
  }

  function renderStudent() {
    const player = state.player;
    UI.avatar.textContent = player.name.slice(0, 1);
    UI.studentName.textContent = player.name;
    UI.studentMajor.textContent = `${player.collegeName} · ${player.major}`;
    UI.studentId.textContent = player.studentId;
    UI.studentCollege.textContent = player.collegeName;
    UI.studentHome.textContent = player.hometownName;
    UI.studentTrait.textContent = player.traitName;
    UI.studentMotto.textContent = getCollege(player.collegeId).motto;
  }

  function renderStats() {
    const stats = state.stats;
    const hasGpa = stats.gpa > 0;
    UI.statGpa.textContent = hasGpa ? stats.gpa.toFixed(2) : "待结算";
    UI.statGpa.classList.toggle("is-empty", !hasGpa);
    UI.semesterTag.textContent = currentSemesterName();

    if (state.lastGpa > 0) {
      UI.gpaRank.textContent = `专业前 ${state.lastPct}%`;
      UI.gpaRank.classList.toggle("is-top", state.lastPct <= 15);
    } else {
      UI.gpaRank.textContent = "暂无排名";
      UI.gpaRank.classList.remove("is-top");
    }

    const rows = ["knowledge", "energy", "mood", "social"].map((key) => {
      const metaInfo = STAT_META[key];
      const value = Math.round(stats[key]);
      const low = (key === "energy" && value < 20) || (key === "mood" && value < 25);
      return `
        <div class="stat-row ${low ? "is-low" : ""}" data-stat="${key}">
          <span class="stat-name">${STAT_ICON[metaInfo.icon]}${metaInfo.label}</span>
          <span class="stat-track"><i data-width="${value}"></i></span>
          <span class="stat-value">${value}</span>
        </div>
      `;
    }).join("");

    UI.statList.innerHTML = `
      ${rows}
      <div class="stat-row money-row">
        <span class="stat-name">${STAT_ICON.wallet}存款</span>
        <span class="money-value ${stats.money < 300 ? "is-low" : ""}">${fmtMoney(stats.money)}</span>
      </div>
    `;

    const study = Math.round(state.study);
    UI.studyValue.textContent = study;
    UI.studyBar.style.width = `${clamp(study / 18 * 100, 0, 100)}%`;

    requestAnimationFrame(() => {
      $$("#stat-list .stat-track i").forEach((bar) => {
        bar.style.width = `${clamp(Number(bar.dataset.width), 0, 100)}%`;
      });
    });
  }

  function renderTimeline() {
    const logs = state.logs.slice(-14);
    if (!logs.length) {
      UI.timeline.innerHTML = '<li class="timeline-empty" style="display:block">还没有写下第一笔。<br>你的四年，从下一次选择开始。</li>';
      return;
    }
    UI.timeline.innerHTML = logs.map((log) => `
      <li><div><b>${esc(log.title)}</b><span>${esc(log.sem)}</span></div></li>
    `).join("");
    UI.timeline.scrollTop = UI.timeline.scrollHeight;
  }

  function renderAchievements() {
    UI.achGrid.innerHTML = JNU.achievements.map((achievement) => {
      const unlocked = state.achievements.includes(achievement.id);
      return `
        <span class="ach-badge ${unlocked ? "is-unlocked" : "is-locked"}"
          data-tip="${esc(achievement.name)} · ${esc(achievement.desc)}">
          ${unlocked ? esc(achievement.glyph) : "?"}
        </span>
      `;
    }).join("");
    UI.achCount.textContent = `${state.achievements.length} / ${JNU.achievements.length}`;
  }

  function renderSemesterDots() {
    UI.turnLabel.textContent = `${currentWeekLabel()} · ${Math.min(state.turn + 1, TURNS_PER_SEMESTER)}/${TURNS_PER_SEMESTER}`;
    UI.semesterDots.innerHTML = JNU.semesters.map((info, index) => {
      const current = index === state.semester;
      const past = index < state.semester;
      return `<span class="${past ? "is-past" : ""} ${current ? "is-current" : ""}" title="${info.name}"></span>`;
    }).join("");
  }

  /* =========================================================
     结局
     ========================================================= */

  function finishGame() {
    if (!state || state.ended) return;
    const ending = JNU.endings.find((item) => {
      try {
        return item.when(state);
      } catch (error) {
        return false;
      }
    }) || JNU.endings[JNU.endings.length - 1];

    state.ended = true;
    state.endingId = ending.id;
    state.endingRarity = ending.rarity;
    state.flags.graduated = state.flags.graduated || !state.flags.dropout;

    if (!meta.endings.includes(ending.id)) {
      meta.endings.push(ending.id);
    }
    meta.runs += 1;
    saveMeta();
    checkAchievements();

    clearSave();
    renderEnding(ending);
    showScreen("ending");
    play(ending.rarity === "legend" || ending.rarity === "secret" ? "ach" : "success");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "auto" : "auto" });
  }

  function renderEnding(ending) {
    UI.endingTitle.textContent = ending.title;
    UI.endingRarity.textContent = RARITY_LABEL[ending.rarity] || "结局";
    UI.endingRarity.className = `ending-rarity rarity-${ending.rarity}`;
    UI.endingDesc.textContent = ending.desc;
    UI.endingName.textContent = state.player.name;
    UI.endingComment.textContent = typeof ending.comment === "function" ? ending.comment(state) : ending.comment;

    const stats = [
      ["绩点", state.stats.gpa > 0 ? state.stats.gpa.toFixed(2) : "—"],
      ["学识", Math.round(state.stats.knowledge)],
      ["社交", Math.round(state.stats.social)],
      ["存款", fmtMoney(state.stats.money)],
      ["心情", Math.round(state.stats.mood)],
      ["成就", `${state.achievements.length} / ${JNU.achievements.length}`]
    ];
    UI.endingStats.innerHTML = stats.map(([label, value]) => `
      <div class="ending-stat"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>
    `).join("");

    const keyLogs = state.logs.filter((log) => log.key);
    const timeline = (keyLogs.length ? keyLogs : state.logs).slice(-10);
    UI.endingTimeline.innerHTML = timeline.length
      ? timeline.map((log) => `<li><b>${esc(log.sem)}</b><span>${esc(log.title)}</span></li>`).join("")
      : "<li><b>—</b><span>这四年，好像什么都没发生，又好像什么都发生了。</span></li>";

    $("#ending-class").textContent = "CLASS OF 2030";
  }

  /* =========================================================
     图鉴
     ========================================================= */

  function openGallery(tab = "endings") {
    const unlockedEndings = new Set(meta.endings);
    const unlockedAchievements = new Set(meta.achievements);

    const panel = (activeTab) => {
      if (activeTab === "achievements") {
        return `
          <p class="gallery-progress">已解锁 <b>${meta.achievements.length}</b> / ${JNU.achievements.length} 个成就</p>
          <div class="ach-gallery">
            ${JNU.achievements.map((achievement) => {
              const unlocked = unlockedAchievements.has(achievement.id);
              return `
                <div class="ach-item ${unlocked ? "" : "is-locked"}">
                  <div class="ach-icon">${unlocked ? esc(achievement.glyph) : "?"}</div>
                  <div><strong>${unlocked ? esc(achievement.name) : "？？？"}</strong><span>${esc(achievement.desc)}</span></div>
                </div>
              `;
            }).join("")}
          </div>
        `;
      }

      return `
        <p class="gallery-progress">已解锁 <b>${meta.endings.length}</b> / ${JNU.endings.length} 个结局 · 已完成 ${meta.runs} 周目</p>
        <div class="gallery-grid">
          ${JNU.endings.map((ending) => {
            const unlocked = unlockedEndings.has(ending.id);
            return `
              <div class="ending-item ${unlocked ? "" : "is-locked"}">
                <div class="ending-item-top">
                  <h4>${unlocked ? esc(ending.title) : "？？？"}</h4>
                  <span class="rarity rarity-${ending.rarity}">${RARITY_LABEL[ending.rarity]}</span>
                </div>
                <p>${unlocked ? esc(ending.desc) : `尚未解锁 · ${esc(ending.tag)}`}</p>
              </div>
            `;
          }).join("")}
        </div>
      `;
    };

    openModal(`
      <div class="modal-head">
        <button type="button" class="modal-close" aria-label="关闭">×</button>
        <p class="eyebrow">JNU ARCHIVE · 2026—2030</p>
        <h2>结局与成就图鉴</h2>
        <p>每一种选择，都通向一个不一样的四年。</p>
      </div>
      <div class="gallery-body">
        <div class="gallery-tabs">
          <button type="button" class="gallery-tab ${tab === "endings" ? "is-active" : ""}" data-tab="endings">结局图鉴</button>
          <button type="button" class="gallery-tab ${tab === "achievements" ? "is-active" : ""}" data-tab="achievements">成就墙</button>
        </div>
        <div id="gallery-panel">${panel(tab)}</div>
      </div>
    `, { className: "gallery-modal", dismissible: true });

    $$("#modal-root .gallery-tab").forEach((button) => {
      button.addEventListener("click", () => {
        $$("#modal-root .gallery-tab").forEach((item) => item.classList.toggle("is-active", item === button));
        const target = $("#gallery-panel");
        if (target) target.innerHTML = panel(button.dataset.tab);
        play("click");
      });
    });
  }

  /* =========================================================
     菜单与通用弹窗
     ========================================================= */

  function aiStatusText(config = JNU_AI.loadConfig()) {
    if (!config.enabled) return "未开启";
    if (!JNU_AI.hasCredentials(config)) return "待配置密钥";
    const preset = JNU_AI.PRESETS[config.preset];
    return `已开启 · ${preset ? preset.label : config.model}`;
  }

  function updateAiEntry() {
    if (!UI.btnAiTitle) return;
    const config = JNU_AI.loadConfig();
    const ready = config.enabled && JNU_AI.hasCredentials(config);
    UI.btnAiTitle.textContent = config.enabled
      ? ready ? "AI 剧情 · 已开启" : "AI 剧情 · 待配置"
      : "AI 剧情 · 未开启";
    UI.btnAiTitle.classList.toggle("is-on", ready);
    UI.btnAiTitle.title = "配置 AI 剧情生成";
  }

  function openAISettings() {
    const config = JNU_AI.loadConfig();
    let activePreset = config.preset || "custom";

    const presetButtons = Object.entries(JNU_AI.PRESETS)
      .map(([id, preset]) => `
        <button type="button" class="ai-preset ${id === activePreset ? "is-active" : ""}" data-preset="${id}">
          ${esc(preset.label)}
        </button>
      `)
      .join("");

    openModal(`
      <div class="modal-head">
        <button type="button" class="modal-close" aria-label="关闭">×</button>
        <p class="eyebrow">AI NARRATIVE · 可选</p>
        <h2>AI 剧情设置</h2>
        <p>固定里程碑仍由剧本控制，只有随机回合交给模型生成。</p>
      </div>
      <div class="ai-body">
        <label class="ai-toggle-row">
          <span>
            <b>开启 AI 剧情</b>
            <small>每个非固定回合调用一次模型；失败会自动回退本地事件</small>
          </span>
          <input type="checkbox" class="switch-input" id="ai-enabled" ${config.enabled ? "checked" : ""}>
        </label>

        <div class="ai-preset-label">选择接口</div>
        <div class="ai-presets" id="ai-presets">${presetButtons}</div>

        <label class="field ai-field">
          <span class="field-label">Base URL</span>
          <input class="input ai-mono" id="ai-base" type="url" spellcheck="false" autocomplete="off"
            value="${esc(config.baseUrl)}" placeholder="https://api.deepseek.com/v1">
        </label>
        <label class="field ai-field">
          <span class="field-label">模型</span>
          <input class="input ai-mono" id="ai-model" type="text" spellcheck="false" autocomplete="off"
            value="${esc(config.model)}" placeholder="deepseek-chat">
        </label>
        <label class="field ai-field">
          <span class="field-label">API Key</span>
          <input class="input ai-mono" id="ai-key" type="password" spellcheck="false" autocomplete="off"
            value="${esc(config.key)}" placeholder="${activePreset === "ollama" ? "本地 Ollama 可留空" : "sk-..."}">
        </label>

        <p class="ai-hint">密钥只保存在本机浏览器的 localStorage，不会发往你填写的接口之外的任何地方。公共电脑上请不要保存密钥。DeepSeek、Moonshot 与本地 Ollama 已验证可用于浏览器直连；OpenAI 官方接口可能拦截跨域请求，若提示“无法连接接口”，可改用本地 Ollama 或自建代理。</p>

        <div class="ai-status" id="ai-status"></div>

        <div class="ai-actions">
          <button type="button" class="btn btn-secondary" id="ai-test">测试连接</button>
          <button type="button" class="btn btn-primary" id="ai-save">保存设置</button>
        </div>

        <div class="ai-foot">
          <button type="button" class="link-btn" id="ai-clear-key">清除已保存的密钥</button>
          <span>·</span>
          <span>AI 生成失败时自动回退本地事件</span>
        </div>
      </div>
    `, { className: "ai-modal", dismissible: true });

    const enabled = $("#ai-enabled");
    const baseInput = $("#ai-base");
    const modelInput = $("#ai-model");
    const keyInput = $("#ai-key");
    const status = $("#ai-status");
    const testButton = $("#ai-test");
    const saveButton = $("#ai-save");

    const setStatus = (text, kind) => {
      if (!status || !document.body.contains(status)) return;
      status.textContent = text || "";
      status.className = `ai-status${kind ? ` is-${kind}` : ""}`;
    };

    const readForm = () => ({
      enabled: Boolean(enabled && enabled.checked),
      preset: activePreset,
      baseUrl: baseInput ? baseInput.value.trim() : "",
      model: modelInput ? modelInput.value.trim() : "",
      key: keyInput ? keyInput.value.trim() : "",
      timeout: 45000
    });

    $$("#modal-root .ai-preset").forEach((button) => {
      button.addEventListener("click", () => {
        const previousPreset = activePreset;
        activePreset = button.dataset.preset;
        $$("#modal-root .ai-preset").forEach((item) => item.classList.toggle("is-active", item === button));
        const preset = JNU_AI.PRESETS[activePreset];
        if (preset && activePreset !== "custom") {
          if (baseInput) baseInput.value = preset.baseUrl;
          if (modelInput) modelInput.value = preset.model;
        }
        if (keyInput) keyInput.placeholder = activePreset === "ollama" ? "本地 Ollama 可留空" : "sk-...";
        const changed = previousPreset !== activePreset;
        if (changed && keyInput) keyInput.value = "";
        setStatus(changed ? "已切换接口，请重新填写 API Key。" : "", changed ? "pending" : "");
        play("click");
      });
    });

    if (testButton) {
      testButton.addEventListener("click", async () => {
        const form = readForm();
        if (!form.baseUrl || !form.model) {
          setStatus("请先填写 Base URL 与模型。", "err");
          return;
        }
        testButton.disabled = true;
        setStatus("正在连接…", "pending");
        try {
          const result = await JNU_AI.testConnection(form);
          setStatus(`连接成功 · ${result.ms}ms · ${result.preview}`, "ok");
        } catch (error) {
          setStatus(JNU_AI.describeError(error), "err");
        } finally {
          if (document.body.contains(testButton)) testButton.disabled = false;
        }
      });
    }

    if (saveButton) {
      saveButton.addEventListener("click", () => {
        const form = readForm();
        if (!form.baseUrl || !form.model) {
          setStatus("请先填写 Base URL 与模型。", "err");
          return;
        }
        if (!JNU_AI.saveConfig(form)) {
          setStatus("无法写入本地存储，请检查浏览器设置。", "err");
          return;
        }
        aiCredentialWarned = false;
        updateAiEntry();
        updateCreateSummary();
        closeModal();
        if (form.enabled && !JNU_AI.hasCredentials(form)) {
          toast("AI 剧情已开启", "还缺少 API Key，随机回合会先使用本地事件。", "gold");
        } else if (form.enabled) {
          toast("AI 剧情已开启", "随机回合由 AI 生成，固定节点保持剧本控制。");
        } else {
          toast("AI 剧情已关闭", "所有事件将使用本地剧本。");
        }
      });
    }

    const clearKey = $("#ai-clear-key");
    if (clearKey) {
      clearKey.addEventListener("click", () => {
        const next = { ...JNU_AI.loadConfig(), key: "", enabled: false };
        JNU_AI.saveConfig(next);
        if (keyInput) keyInput.value = "";
        if (enabled) enabled.checked = false;
        aiCredentialWarned = false;
        updateAiEntry();
        updateCreateSummary();
        setStatus("已清除本机保存的密钥，并关闭 AI 剧情。", "ok");
      });
    }
  }

  function openMenu() {
    if (!state) return;
    const aiConfig = JNU_AI.loadConfig();
    openModal(`
      <div class="modal-head">
        <button type="button" class="modal-close" aria-label="关闭">×</button>
        <p class="eyebrow">PAUSE</p>
        <h2>暂停一下</h2>
        <p>当前进度已自动保存在本机。</p>
      </div>
      <div class="menu-body">
        <div class="menu-list">
          <button type="button" class="menu-row" data-action="resume">
            <span><b>继续游戏</b><small>回到 ${esc(currentSemesterName())} · ${esc(currentWeekLabel())}</small></span><span>→</span>
          </button>
          <button type="button" class="menu-row" data-action="ai">
            <span><b>AI 剧情</b><small>${esc(aiStatusText(aiConfig))} · 随机回合由模型生成</small></span><span>${aiConfig.enabled ? "设置" : "开启"}</span>
          </button>
          <button type="button" class="menu-row" data-action="sound">
            <span><b>音效</b><small>当前：${meta.muted ? "关闭" : "开启"}</small></span><span>${meta.muted ? "开启" : "关闭"}</span>
          </button>
          <button type="button" class="menu-row" data-action="title">
            <span><b>返回标题</b><small>进度会保留，可从标题页继续</small></span><span>→</span>
          </button>
          <button type="button" class="menu-row" data-action="restart">
            <span><b>重新开始</b><small>覆盖当前存档，已解锁图鉴保留</small></span><span>→</span>
          </button>
        </div>
        <p class="menu-foot">江南大学本科生模拟器 · 本地单机版<br>存档与图鉴保存在本机；开启 AI 后，当前档案摘要会发送给你配置的模型接口。</p>
      </div>
    `, { className: "menu-modal", dismissible: true });

    $$("#modal-root [data-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "resume") {
          closeModal();
        } else if (action === "ai") {
          closeModal();
          openAISettings();
        } else if (action === "sound") {
          toggleSound();
          closeModal();
          openMenu();
        } else if (action === "title") {
          closeModal();
          save({ silent: true });
          state = null;
          showScreen("title");
          updateContinueButton();
        } else if (action === "restart") {
          confirmAction(
            "重新开始？",
            "当前存档会被覆盖，但已经解锁的结局和成就会保留在图鉴里。",
            "覆盖存档，重新入学",
            () => {
              clearSave();
              state = null;
              closeModal();
              showCreate();
            }
          );
        }
      });
    });
  }

  function confirmAction(title, message, confirmLabel, onConfirm) {
    openModal(`
      <div class="modal-head">
        <button type="button" class="modal-close" aria-label="关闭">×</button>
        <p class="eyebrow">CONFIRM</p>
        <h2>${esc(title)}</h2>
        <p>这一步无法撤回。</p>
      </div>
      <div class="menu-body">
        <p class="confirm-text">${esc(message)}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-secondary" id="confirm-cancel">再想想</button>
          <button type="button" class="btn btn-primary" id="confirm-ok">${esc(confirmLabel)}</button>
        </div>
      </div>
    `, { className: "menu-modal", dismissible: true });

    $("#confirm-cancel").addEventListener("click", closeModal);
    $("#confirm-ok").addEventListener("click", () => {
      closeModal();
      onConfirm();
    });
  }

  function openModal(innerHTML, options = {}) {
    modalDismissible = options.dismissible !== false;
    UI.modalRoot.innerHTML = `
      <div class="modal-overlay" role="dialog" aria-modal="true">
        <div class="modal ${options.className || ""}" tabindex="-1">${innerHTML}</div>
      </div>
    `;
    const modal = UI.modalRoot.querySelector(".modal");
    if (modal) modal.focus({ preventScroll: true });
  }

  function closeModal() {
    UI.modalRoot.innerHTML = "";
    modalDismissible = true;
  }

  /* =========================================================
     音效 / 提示 / 花瓣
     ========================================================= */

  function toggleSound() {
    meta.muted = !meta.muted;
    saveMeta();
    updateSoundButton();
    if (!meta.muted) play("click");
    toast("音效", meta.muted ? "已关闭音效。" : "已开启音效。");
  }

  function updateSoundButton() {
    UI.topbarSound.classList.toggle("is-muted", meta.muted);
    UI.topbarSound.setAttribute("aria-label", meta.muted ? "开启音效" : "关闭音效");
    UI.topbarSound.title = meta.muted ? "开启音效" : "关闭音效";
  }

  function play(kind) {
    if (meta.muted) return;
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      const now = audioCtx.currentTime;
      const notes = kind === "ach" ? [660, 880, 1160]
        : kind === "success" ? [520, 780, 1040]
        : kind === "fail" ? [300, 220]
        : [460];
      notes.forEach((frequency, index) => {
        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        const start = now + index * 0.08;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.045, start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);
        oscillator.connect(gain).connect(audioCtx.destination);
        oscillator.start(start);
        oscillator.stop(start + 0.24);
      });
    } catch (error) {
      /* 音频不是核心功能，失败时静默 */
    }
  }

  function toast(title, message, kind = "") {
    const element = document.createElement("div");
    element.className = `toast ${kind}`;
    element.innerHTML = `<b>${esc(title)}</b>${esc(message)}`;
    UI.toastRoot.appendChild(element);
    window.setTimeout(() => {
      element.classList.add("is-leaving");
      window.setTimeout(() => element.remove(), 280);
    }, 3600);
  }

  function createPetals() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const count = 12;
    for (let i = 0; i < count; i += 1) {
      const petal = document.createElement("span");
      petal.className = "petal";
      const size = rand(6, 13);
      petal.style.left = `${rand(0, 100)}%`;
      petal.style.width = `${size}px`;
      petal.style.height = `${size * 0.82}px`;
      petal.style.animationDuration = `${rand(14, 26)}s`;
      petal.style.animationDelay = `${rand(-22, 0)}s`;
      petal.style.opacity = "0";
      UI.petals.appendChild(petal);
    }
  }

  /* =========================================================
     启动
     ========================================================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
