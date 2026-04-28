import type { Locale } from "../lib/i18n";

type ArchiveLocaleOverride = {
  title?: string;
  summary?: string;
  body?: string;
};

type ArchiveOverride = {
  locales?: Partial<Record<Locale, ArchiveLocaleOverride>>;
};

export const archiveOverrides: Record<string, ArchiveOverride> = {
  "2026-04-28-streaming-cancellation-is-one-of-those-llm-features-people-216384": {
    locales: {
      en: {
        title: "Streaming cancellation is an architectural boundary",
        summary:
          "Stopping the UI and stopping inference are not the same thing. The difference tells you how mature an LLM stack really is."
      },
      ru: {
        title: "Остановка стрима — это архитектурная граница",
        summary:
          "Разница между тем, чтобы перестать показывать токены, и тем, чтобы реально остановить инференс, хорошо измеряет зрелость LLM-стека.",
        body: `Streaming cancellation часто недооценивают, пока счета за инференс не становятся по-настоящему заметными.

Многим кажется, что кнопка Stop уже решает проблему. На деле важно другое: перестал ли интерфейс показывать токены или модель действительно перестала считать.

Если клиент просто перестал читать стрим, а сервер продолжает декодировать ответ, вы всё равно тратите GPU-время, бюджет на задержку и часто вполне реальные деньги. Пользователь думает, что ответ остановился. Инфраструктура знает, что нет.

Поэтому остановка стрима — это не только UX-деталь. Это архитектурная граница.

В серьёзном LLM-продукте действие Stop должно проходить через весь стек: от кнопки в интерфейсе через транспортный слой к самому inference job. Иначе cancel остаётся красивой визуальной иллюзией.

Это особенно важно в агентных системах и потоках с инструментами. Если модель уже пошла не туда, каждая лишняя секунда генерации повышает шанс на бесполезные токены, плохие tool calls и ненужные downstream-затраты.

Практический вопрос здесь очень простой: что именно происходит, когда пользователь нажимает Stop?

Провайдер действительно завершает инференс на своей стороне, или фронтенд просто перестаёт рендерить ответ?

Это различие очень многое говорит о зрелости всей системы.

Сильные LLM-продукты определяются не только качеством ответа.

Они определяются ещё и тем, насколько быстро и чисто они умеют останавливаться.`
      }
    }
  },
  "2026-04-27-i-ve-been-rethinking-my-github-profile-as-a-public-snapshot-of-what-331713": {
    locales: {
      en: {
        title: "GitHub as a snapshot of what I build now",
        summary:
          "A small public repositioning pass: less archaeology, more honest signal about coding agents, LLM backends, and production GenAI work."
      },
      ru: {
        title: "GitHub как честный снимок того, что я строю сейчас",
        summary:
          "Небольшой публичный repositioning-pass: меньше археологии, больше честного сигнала про coding agents, LLM-backends и production GenAI.",
        body: `Я заново посмотрел на свой GitHub-профиль как на публичный снимок того, чем я реально занимаюсь сейчас, а не того, что было главным несколько лет назад.

Сегодня мой основной фокус — AI-native engineering: coding agents, LLM-бэкенды, OpenAI-compatible infrastructure и production GenAI-системы.

Поэтому я обновил профиль так, чтобы он честнее отражал и системную, и продуктовую стороны моей работы.

Если вам интересны AI-агенты, GenAI-инфраструктура или сборка программных систем через AI-assisted development, там теперь гораздо более точная карта местности.`
      }
    }
  },
  "2026-04-26-tiny-teams-157696": {
    locales: {
      ru: {
        title: "Почему tiny teams снова кажутся важными",
        summary:
          "Tiny teams — это не новая мода, а старая организационная идея, которой AI неожиданно добавил новый рычаг."
      },
      en: {
        title: "Why tiny teams feel relevant again",
        summary:
          "Tiny teams are not an AI-era novelty. They are an older organizational idea that now has a new economic lever.",
        body: `This was my free retelling of the tiny-teams idea: not a defense yet, just a human explanation of where it came from and why it suddenly feels current again.

Tiny teams are often framed as a brand-new concept of the AI era. I think that misses the deeper pattern. The core idea is older: difficult problems are often solved better by small autonomous groups of strong people than by larger structures with heavier coordination costs.

At its heart, a tiny team is a compact group of strong generalists with high trust, low bureaucracy, and direct responsibility for the result. The point is not that “five people should do the work of fifty.” The point is to remove friction and shorten the distance between idea and execution.

The roots are familiar. Brooks's Law reminds us that adding people to an already difficult project often slows it down. Skunk Works showed how small autonomous groups can move faster inside large organizations when they get freedom and a clear task. Amazon's two-pizza teams made the same point in more corporate language: keep the unit small enough for ownership, autonomy, and speed to remain real.

What changed now is that AI acts as an amplifier. A small team used to lose to a larger machine on sheer labor capacity. Now part of the research, analysis, support work, prototyping, and automation can be pushed into model-assisted systems. The principle stayed old. The leverage became new.

I like to explain it through cinema. There is the giant studio pipeline with many people, many processes, and many approvals. It is great at scale and repeatability. And then there is a compact auteur crew: strong people who trust each other, make decisions quickly, and do not turn each week into a new season of South Park.

Tiny teams are closer to the second case.

They are not miniature versions of large companies. They are a different organizational form built around quality density, trust, and cycle speed.

That is why the idea feels less like a slogan to me and more like a reinterpretation of small elite teams under AI-era conditions. Less friction, more responsibility, faster loops. The lever just got longer.`
      }
    }
  },
  "2026-04-26-finceptterminal-318464": {
    locales: {
      ru: {
        title: "FinceptTerminal as a local research workstation",
        summary:
          "За описанием open-source финансового терминала скрывается более интересная попытка: собрать единое research-рабочее место для анализа и принятия решений."
      },
      en: {
        title: "FinceptTerminal as a local research workstation",
        summary:
          "Behind the open-source terminal label there is a more ambitious attempt: a unified local workspace for financial research and decision support.",
        body: `I took a careful look at FinceptTerminal, and it is much more interesting than the short GitHub description suggests.

On the surface it looks like an open-source financial terminal. In the code, though, it reads more like an attempt to assemble a full local research workstation for financial analysis.

There is a native desktop layer on C++20 and Qt6, a substantial Python layer, a large script surface, MCP integration, a workflow engine, and an agent layer with memory, personas, and model routing. That is not “yet another UI for market data.” It is a serious attempt to put market data, research, macro analysis, geopolitics, paper trading, and automation into one product.

That is exactly what makes the project stand out.

Most financial workflows still live in fragments: data in one place, analytics in another, execution somewhere else, automation hidden in notebooks and internal scripts. FinceptTerminal is clearly trying to remove that fragmentation and turn a pile of disconnected tools into one desktop workspace.

You can also see both strengths and weaknesses in the code. The strengths are real extension points: MCP tools, an agent service with streaming responses, workflow nodes for tools and agents, and a Python-side FinAgent layer with memory and configurable personas. This is not decorative AI. It is an architectural bet.

The weaker side is that the documentation sometimes trails the codebase. Some descriptions still point to an older technical picture even though the architecture has already moved forward.

Still, those are often the most interesting systems to study. Not because they are perfectly polished, but because they aim at a rare open-source category: not another wrapper around an API, but a serious working system for research and decision-making.`
      }
    }
  },
  "2026-04-23-i-ve-also-been-thinking-a-lot-about-monitoring-for-agents-and-agent-871552": {
    locales: {
      en: {
        title: "Monitoring agents after the demo glow fades",
        summary:
          "Agent monitoring lives halfway between classic DevOps and behavioral product analytics. Green lights are not the same as confidence."
      },
      ru: {
        title: "Мониторинг агентов после того, как проходит демо-эйфория",
        summary:
          "Мониторинг агентных платформ живёт между классическим DevOps и поведенческой аналитикой продукта. Зелёные лампочки ещё не означают уверенности.",
        body: `Я много думаю о мониторинге для агентов и агентных платформ, потому что именно этот слой люди чаще всего пропускают сразу после первого удачного демо.

Один агент ещё легко романтизировать. Флот агентов — это уже момент, где романтика сталкивается с дашбордами.

В агентных платформах мониторинг — это не только вопрос “жив ли сервер”. Нужно понимать, жив ли runtime, здоров ли model gateway, доступны ли secrets, падают ли интеграции, растут ли таймауты, утекает ли бюджет и не принимает ли агент тихо плохие решения, оставаясь формально online. Зелёные индикаторы приятны, но они не равны уверенности.

Именно поэтому observability для меня — не декоративный слой, а часть самой платформы Aquarium. У каждого runtime есть жизненный цикл, диагностика, логи, health-сигналы и связь с monitoring stack. LiteLLM даёт видимость по model-access слою. Control plane показывает оператору короткую и понятную сводку. А остальная monitoring-конфигурация помогает отвечать на главный вопрос: что сломалось, где, почему и какого это типа — runtime, gateway, secrets или integration.

В этом и интерес агентного мониторинга: он находится между классическим DevOps и product analytics. Инфраструктурный слой никуда не исчезает — uptime, health, порты, контейнеры, трассировки, логи. Но сверху появляется поведенческий слой. Агент может “работать” и при этом быть бесполезным. Runtime может быть здоровым, пока умирает Telegram-канал. Model route может отвечать, пока лимиты и стоимость уходят в сторону. И если мониторинг не понимает и системы, и поведение, вы в какой-то момент просто наблюдаете за очень уверенным енотом с API-ключами.

Это одна из причин, почему Aquarium устроен именно так. Он делает внутренности агентной платформы видимыми: control plane, runtime layer, LLM gateway, secret management и observability-контур вокруг всего этого. Если хочется посмотреть, как мониторинг агентной инфраструктуры может выглядеть на практике, это хороший предмет для разбора.`
      }
    }
  },
  "2026-04-21-cached-tokens-are-the-point-where-working-with-llms-stops-feeling-378560": {
    locales: {
      en: {
        title: "Cached tokens as an engineering surface",
        summary:
          "Cached tokens are not just about billing. They force you to structure prompts like reusable computation."
      },
      ru: {
        title: "Cached tokens как инженерная поверхность",
        summary:
          "Cached tokens важны не только для стоимости. Они заставляют проектировать prompts как переиспользуемое вычисление.",
        body: `Cached tokens — это момент, где работа с LLM перестаёт быть похожей на магию и начинает быть похожей на инженерию.

Их часто воспринимают как billing-фичу. На практике смысл глубже: модели не нужно заново пересчитывать уже обработанную часть prompt. Она может переиспользовать внутреннее состояние, собранное на этапе prefill.

Именно поэтому длинные system instructions, tool definitions, RAG-контекст и наборы примеров могут стать и дешевле, и быстрее — если верхняя часть prompt остаётся стабильной между запросами.

Главный урок здесь не про стоимость. Он про архитектуру.

Если верх prompt постоянно дрожит из-за случайных JSON-различий, порядка полей, вспомогательного текста или неровного форматирования контекста, вы ломаете кэш собственными руками. Если статическая часть чистая, а динамическая опущена ниже, система становится заметно эффективнее.

Cached tokens заставляют относиться к prompt как к инженерной поверхности, а не как к просто тексту для модели. Нужны стабильный prefix, детерминированная сериализация и ясная граница между переиспользуемым контекстом и свежим вводом.

Особенно хорошо это видно в agent workflows, coding assistants и RAG-системах, где один и тот же большой контекст переиспользуется снова и снова.

Сильная LLM-интеграция определяется не только качеством ответа.

Она определяется ещё и тем, насколько аккуратно вы проектируете переиспользование вычислений.`
      }
    }
  },
  "2026-04-20-i-ve-been-thinking-about-openclaw-style-hosting-as-the-moment-an-973376": {
    locales: {
      en: {
        title: "Agent hosting begins where local demos end",
        summary:
          "The interesting business model appears when an autonomous agent becomes provisionable, isolated, observable, and supportable."
      },
      ru: {
        title: "Хостинг агентов начинается там, где заканчиваются локальные демо",
        summary:
          "Настоящая бизнес-модель появляется в момент, когда автономного агента можно поднимать, изолировать, тарифицировать, дебажить и поддерживать.",
        body: `Я всё больше думаю про OpenClaw-style hosting как про момент, когда автономный агент перестаёт быть симпатичным локальным экспериментом и начинает вести себя как продукт.

На высоком уровне это agent infrastructure as a service: вместо одного агента на одном ноутбуке появляются множество изолированных runtime-окружений, каждое со своей конфигурацией, секретами, доступом к моделям, health-checks, логами и операторскими controls. То есть меньше “у меня локально работало” и больше “это переживает встречу с реальными пользователями”.

Внутри паттерн удивительно аккуратный. Есть control plane, который знает, какие runtime существуют и в каком состоянии они должны быть. Есть сами runtime, часто контейнеризированные, где живут агенты. Секреты вынесены в отдельную систему, а не лежат под ковром в ".env". Model calls идут через gateway layer, что сильно упрощает budgets, routing, limits и key management. Добавьте мониторинг — и у агента наконец появляются взрослые в комнате.

Почему это важно? Потому что именно здесь возникает бизнес-модель. Ценность уже не только в том, что “вот агент”, а в том, что “вот агент, которого можно провиженить, изолировать, тарифицировать, дебажить и поддерживать”. А это уже открывает подписки, managed hosting, enterprise controls, usage-based pricing и premium support.

Именно поэтому я и строил Aquarium. Мне было важно посмотреть внутрь такого хостингового контура без обычного трюка с чёрным ящиком. В проекте видно реальные механизмы: Django control plane, lifecycle management для каждого runtime, LiteLLM как model gateway, Infisical для secrets и monitoring вокруг каждого инстанса.

Если хочется понять, как на практике устроен хостинг агентной платформы, Aquarium — это мой вариант “поднять половицы и посмотреть на трубы”. Менее глянцево, чем лаборатория Тони Старка, зато заметно ближе к тому, что действительно можно развернуть.`
      }
    }
  },
  "2026-04-02-linkedin-post-870400": {
    locales: {
      ru: {
        title: "Сайт-колода о том, как читать состояние времени",
        summary:
          "Mobile-first колода образов и карт, задуманная не как галерея, а как способ чуть замедлить взгляд и прочитать культурное состояние эпохи."
      },
      en: {
        title: "A card deck for reading the state of time",
        summary:
          "A mobile-first deck of images and cards designed not as a gallery, but as a slower interface for reading cultural tension and exhaustion.",
        body: `I built a small project about reading the state of time not through news and metrics, but through images, pauses, and recurring symbols.

It is a mobile-first deck site: five visual series, three-card flows, and keyword search around ideas like ritual, silence, myth, and algorithm. But for me it is less a gallery than a small hermeneutic tool for the present moment.

We live in a fatigue society where burnout has almost become background radiation, while the language of productivity keeps drowning out subtler ways of understanding ourselves and the era we are moving through.

I wanted an interface that does not accelerate the user, but slows the gaze down a little. A place where the image does not merely illustrate a thesis, but helps reveal an inner state, a tension in the time, a cultural nerve.

Sometimes it matters not only to produce and explain, but also to interpret: overload, digital anxiety, the scraps of hope, and the strange forms of meaning that still survive inside the noise.`
      }
    }
  },
  "2026-03-28-linkedin-post-729408": {
    locales: {
      ru: {
        title: "Когда выбор действительно начинает расползаться",
        summary:
          "Если свою музыку уже проще сгенерировать, а свои игры уже реально собрать, вопрос не в футурологии, а в том, что мы будем делать с новым избытком выбора."
      },
      en: {
        title: "When abundance starts to feel like choice paralysis",
        summary:
          "If it is already easier to generate your own music and build your own small games, the real question is what we do with that new abundance.",
        body: `People keep predicting a future of choice paralysis. That might be right. I can already feel the first practical version of it.

Lately it has become easier for me to listen to my own generated music than to search streaming services. My games are also turning into perfectly decent things for myself. Not masterpieces, just genuinely usable personal worlds.

So the question stops being theoretical.

What do we do when more and more cultural artifacts can be generated to personal taste on demand?

I do not think the answer is clear yet. But the shift already feels less like science fiction and more like a strange new default.`
      }
    }
  },
  "2026-03-26-the-simplest-way-to-explain-the-difference-is-this-aider-behaves-084545": {
    locales: {
      en: {
        title: "Aider is patch-first, OpenHands is loop-first",
        summary:
          "The difference is not about which tool is smarter. It is about where the center of gravity lives: in the patch or in the action loop."
      },
      ru: {
        title: "Aider — patch-first, OpenHands — loop-first",
        summary:
          "Разница между этими системами не в том, какая из них “умнее”, а в архитектурном центре тяжести: в патче или в цикле действий.",
        body: `Самый простой способ объяснить разницу такой: aider ведёт себя как очень собранный senior engineer, который просит нужные файлы, быстро читает большой кусок контекста, немного думает и возвращается с конкретным патчем. OpenHands больше похож на активного оператора в терминале: открыть файл, посмотреть вывод, запустить команду, скорректировать следующий шаг — и так по кругу.

На словах различие кажется тонким, но на практике меняет почти всё.

У aider центр тяжести находится в самом edit. Система построена вокруг того, чтобы сделать кодовое изменение. Она старается собрать достаточно контекста заранее — через карту репозитория и релевантные файлы — а затем потратить больше токенов внутри меньшего числа крупных запросов. По-человечески это значит: сначала понять заметный кусок задачи, потом действовать.

OpenHands устроен иначе. Его центр тяжести не в патче, а в action loop. Он спроектирован жить внутри среды. Поэтому он мыслит маленькими шагами: что смотреть дальше, какую команду запускать, что означал этот вывод, что делать теперь. Меньше “вот патч”, больше “дай я ещё поработаю комнату”.

Ни один подход не универсально лучше другого. Они хороши для разного.

Если главная проблема — навигация по messy environment, tool use и длинные цепочки действий, OpenHands очень уместен. Но если основная задача — дисциплинированное изменение кода внутри уже понятного workflow, aider часто оказывается естественнее. Он спокойнее. Его меньше интересует перформанс агентности и больше — аккуратный edit.

Именно поэтому в нашем случае лучше подошёл aider. Оркестратор у нас уже был. Intake, git worktrees, CI и deploy logic тоже уже были. Нам не требовалась ещё одна сущность, которая будет решать, “что делать дальше”. Нужен был движок, способный войти в существующий pipeline, удержать много контекста за один проход, сделать осторожный patch и не пытаться стать главным героем.

Так что разница здесь не в интеллекте, а в архитектуре. Aider — patch-first. OpenHands — loop-first. И если это увидеть, их токенное поведение сразу становится понятным: aider тратит больше токенов в меньшем числе крупных мыслей, а OpenHands распределяет меньшие траты по большому числу мелких решений.`
      }
    }
  },
  "2026-03-24-we-were-building-an-agentic-coding-workflow-for-a-visually-968960": {
    locales: {
      en: {
        title: "For a visually sensitive product, we needed an instrument, not a second orchestra",
        summary:
          "Why a calmer coding engine fit a design-sensitive agent workflow better than the more theatrical platform choice."
      },
      ru: {
        title: "Для визуально чувствительного продукта нужен был инструмент, а не второй оркестр",
        summary:
          "Почему более спокойный coding engine оказался практичнее для design-sensitive workflow, чем более театральная агентная платформа.",
        body: `Мы строили агентный coding workflow для визуально чувствительного продукта в арт-среде. Там “прошло тесты” — обязательное условие, но вообще не достаточное. Важны были layout, композиция, ритм, качество подачи и тонкая целостность визуальных изменений. То есть софт должен был вести себя как софт, но ещё и как аккуратный production assistant с нормальным вкусом.

Естественно, сначала мы потянулись к более амбициозному варианту — OpenHands. На бумаге это выглядело героическим выбором: полноценный agent runtime, sandbox story, headless mode, мощная архитектурная аура. Такой инструмент делает диаграмму дорогой ещё до того, как делает систему рабочей. И надо признать: это серьёзный инструмент.

Проблема пришла вместе с реальностью.

Нам не был нужен “агентный платформенный слой внутри платформенного слоя”. Платформа у нас уже существовала: Kanboard -> orchestrator -> git worktree -> CI -> live app. Нужен был coding engine, который войдёт в этот pipeline, сделает работу и уйдёт, не пытаясь стать главным персонажем истории.

OpenHands приносил слишком много собственной гравитации: больше runtime-сложности, больше движущихся частей, больше точек интеграции и, как следствие, больше способов дебажить агентный слой вместо самой задачи.

Поэтому мы переключились на aider — и это оказалось прагматически правильным шагом.

Не потому, что aider “магичнее”. Наоборот. Потому что в нём меньше драмы.

Для визуально ориентированного продукта, где корректность тесно связана сдержанностью, эта простота была плюсом. Aider естественно лег в наш "git worktree" flow, уважал узкий write scope и легче управлялся через один версионируемый policy-файл. Самое главное — его execution pattern совпадал с характером работы: меньше запросов, но больше токенов и контекста в каждом проходе, вместо нервной россыпи крошечных вызовов. Для такого проекта важно, чтобы модель держала в голове всю композицию, а не клевала её по кусочкам.

В итоге OpenHands мы заменили не потому, что он слабый. Мы заменили его потому, что проекту нужен был инструмент, а не второй оркестр. Aider оказался спокойнее, уже, послушнее по отношению к уже спроектированному workflow. А в production-adjacent системах именно это очень часто и означает “лучше”.`
      }
    }
  },
  "2026-03-22-the-cost-of-ai-coding-agents-can-vary-10-30x-and-rare-one-bothers-286528": {
    locales: {
      en: {
        title: "Why coding-agent costs can drift by an order of magnitude",
        summary:
          "Agent bills are shaped by the wrapper, the token cliff, and the model choice. If you are not reading the logs, you are paying for folklore."
      },
      ru: {
        title: "Почему стоимость coding agents легко уезжает в разы",
        summary:
          "На счёт влияют не только модели, но и сам агентный wrapper, порог 32K токенов и дисциплина в работе с логами.",
        body: `Стоимость AI coding agents легко может отличаться в 10-30 раз, и об этом почему-то редко говорят всерьёз.

Я посмотрел свои request logs и увидел ожидаемую, но всё равно поучительную картину: цену формируют сразу несколько слоёв.

Во-первых, сам агент. Один и тот же запрос при разной обвязке превращается в очень разные счета. Aider любит отправлять дополнительный контекст, метаданные файлов и более развёрнутые system instructions. OpenHands бывает экономнее, хотя иногда расплачивается за это качеством понимания. А Qwen CLI ведёт себя как аскет: минимум лишнего, минимум сопровождения.

Во-вторых, есть знаменитый порог в 32K токенов. Многие провайдеры резко меняют тарификацию до него и после него. Если агент бездумно швыряет в модель большие куски кода, можно пересечь этот порог и получить стоимость заметно выше ожидаемой. Некоторые системы кэшируют system prompts, другие посылают их заново каждый раз. Сотни лишних токенов на запросе быстро превращаются в привычку дорого платить.

В-третьих, есть простая модельная лотерея. Один провайдер стоит в разы дешевле другого. На практике это выглядит так: Qwen может быть очень выгодным для простого рефакторинга и boilerplate, а более дорогой Sonnet — оправданным там, где цена ошибки и число итераций важнее тарифа за миллион токенов.

Если дешёвая модель требует три-четыре прохода, а дорогая делает задачу правильно с первого, экономика меняется. Но если вы кормите дорогой моделью примитивные задачи, то платите не за качество, а за бренд на счёте.

Вывод довольно прозаичный: если вы не смотрите token logs своего агентного контура, вы почти наверняка тратите деньги по привычке. Нужно смотреть на input/output, понимать поведение обвязки, менять модель под тип задачи и вовремя замечать, когда стоимость растёт не из-за магии, а из-за небрежной архитектуры.`
      }
    }
  },
  "2026-03-18-coding-loop-201856": {
    locales: {
      ru: {
        title: "Мини-прототип автономного coding loop",
        summary:
          "Компактный контур на Docker Compose, где задача уходит с канбан-доски к агенту, проходит тесты и доезжает до живого приложения."
      },
      en: {
        title: "A miniature autonomous coding loop",
        summary:
          "A compact Docker Compose setup where a task leaves the kanban board, flows through an agent, passes CI, and lands in a live application.",
        body: `I built a small prototype of a fully autonomous coding loop inside one Docker Compose setup:

Kanboard -> agent orchestrator -> coding agent -> tests -> Gitea Actions -> live app

This is not a slide deck about AI agents. It is a working box where the task is picked up from a kanban board, the agent actually edits code, CI checks the result, and the change travels into a live application.

I had already used similar logic across a number of projects. Here the interesting part was to show the loop in miniature: without heavy infrastructure, but with real process artifacts.

It is a good format for validating the architecture of agent-driven development with your own hands before dragging the same idea into a larger production environment.`
      }
    }
  },
  "2026-03-14-openclaw-is-a-platform-for-building-an-ai-assistant-with-an-374144": {
    locales: {
      en: {
        title: "OpenClaw needs a perimeter, not just a container",
        summary:
          "The security problem is not that OpenClaw is inherently unsafe. It is that a gateway node with broad access needs a real proxy perimeter around it."
      },
      ru: {
        title: "OpenClaw нужен не просто контейнер, а нормальный периметр",
        summary:
          "Проблема не в том, что OpenClaw сам по себе опасен, а в том, что узлу с большим доступом нужен настоящий proxy-периметр вокруг него.",
        body: `OpenClaw — это платформа для AI-ассистента с интерфейсом, gateway-слоем и подключаемыми skill-блоками. Это не сама модель, а слой вокруг неё: он принимает запросы, маршрутизирует их, подключает инструменты и интеграции и даёт одну точку входа для взаимодействия с ботом.

И именно в этом одновременно сила и риск.

Как только такой узел получает доступ сразу к нескольким внешним системам, он становится чувствительным с точки зрения безопасности. Если запускать OpenClaw как “обычный контейнер”, очень легко получить чрезмерно широкий сетевой доступ. Тогда бот сможет напрямую говорить с model endpoints, API и внутренними сервисами без ясной границы между тем, что ему действительно нужно, и тем, до чего он просто может дотянуться. Для разработки это удобно. Для production это уже плохой контроль.

Решается это не только настройками внутри OpenClaw, но и окружением вокруг него. Базовая идея проста: OpenClaw не должен жить в общей сети с прямым outbound-access. Он должен сидеть внутри внутреннего периметра и общаться с внешним миром только через proxies.

В таком дизайне основной application container находится в центре и работает во внутренней container network. Рядом с ним — outbound proxy, который становится единственным разрешённым путём для внешнего web traffic. Если OpenClaw нужно сходить к модели, внешнему API или корпоративному сервису, он делает это только через этот proxy.

Следующим слоем идёт DNS proxy, чтобы у всего периметра была единая управляемая точка разрешения имён. Затем появляются специализированные proxies для отдельных каналов: например, один для inference-path, другой для mail-access. Вместо широкой сетевой свободы вы получаете узкие коридоры под конкретные маршруты.

Отдельно выносится UI proxy. Через него наружу публикуется только пользовательский интерфейс OpenClaw, а не весь внутренний сервис. Так появляется чистая граница между внутренним периметром бота и внешней точкой входа для пользователя.

В итоге получается довольно ясная role-based архитектура. OpenClaw отвечает за логику ассистента, gateway-поведение и skills. Outbound proxy контролирует внешний трафик. DNS proxy даёт управляемое разрешение имён. Специализированные proxies открывают только необходимые маршруты. UI proxy публикует только интерфейс.

Вывод простой: проблема безопасности OpenClaw не в том, что он “небезопасен по природе”, а в том, что это мощная точка концентрации доступа. Поэтому безопасный запуск — это не “поднять контейнер”, а выстроить вокруг него изолированный proxy-периметр.`
      }
    }
  },
  "2026-02-19-openclaw-940672": {
    locales: {
      ru: {
        title: "OpenClaw и корпоративная реальность",
        summary:
          "Короткий жест вместо длинного объяснения: адаптация agent-платформы к корпоративной среде выглядит смешно ровно до тех пор, пока не начинаешь делать её руками."
      },
      en: {
        title: "OpenClaw meets corporate reality",
        summary:
          "A short note instead of a long explainer: adapting an agent platform to corporate environments is funny right up to the moment you do it for real.",
        body: `I wanted to write a longer post about adapting an OpenClaw bot to corporate reality, but I suspected almost nobody would read the full version.

So I left a shorter gesture instead: a single image and a joke about how that adaptation looked in practice.

The joke only works because the underlying engineering problem is real. The moment an agent system enters a corporate perimeter, it stops being a toy and starts colliding with security, governance, and operational constraints.`
      }
    }
  },
  "2026-02-16-content-608705": {
    locales: {
      ru: {
        title: "Нормальная content factory",
        summary:
          "Серия материалов о том, как я собрал нормальный генеративный контентный конвейер, без привычной липкой магии вокруг этой темы."
      },
      en: {
        title: "Building a proper content factory",
        summary:
          "A short pointer to a longer series about building a usable generative content pipeline without turning the whole story into AI incense.",
        body: `I put together a series of materials about building a proper content factory.

My guess was that not everyone would want the full long-form breakdown, so the post itself stayed short and mostly pointed to the visual side of that work.

Still, the underlying point matters: content generation becomes much more interesting once it moves from isolated prompts to a pipeline that can reliably produce, shape, and package usable output.`
      }
    }
  },
  "2026-02-10-bnpl-buy-now-pay-later-052736": {
    locales: {
      ru: {
        title: "BNPL и cash-flow underwriting",
        summary:
          "Для мгновенного риска в BNPL классического скоринга часто уже мало. Транзакционные данные и cash-flow features дают более живую картину поведения."
      },
      en: {
        title: "BNPL risk scoring through cash-flow underwriting",
        summary:
          "In BNPL, classical credit history is often too slow and too thin. Transaction-level signals give a much more current view of risk.",
        body: `In microfinance, BNPL means a customer receives installment financing directly at the point of purchase, while the lender has to assess risk almost instantly.

In that setting, classical scoring based mostly on credit history is often too slow and not informative enough. Some users simply do not have a meaningful credit history at all. Transaction data tells a more current story: how income arrives, how money leaves, whether there are gaps, spikes, instability, and other behavioral markers.

This is one reason BNPL works so well in the United States. There is a large layer of adults without strong traditional credit profiles, major BNPL players already use machine-learning scoring at checkout, and open-banking-style access creates richer behavioral signals. Hidden load matters too: a user may already be carrying several active installment obligations at the same time.

Technically, the approach we discussed around one prototype was cash-flow underwriting. The feature base came from daily flows, 7/30/90-day windows, trend measures, sparsity, income stability, and balance dynamics. The main score used gradient boosting, with PR-curve evaluation to stay honest on the rare risky cases. SHAP handled interpretability. A SARIMAX state-space layer added latent activity level, trend, and volatility so that the decision could be explained not only as a score, but as a behavioral pattern.

Why could similar logic matter in Russia? Because the market question is familiar: the more BNPL and microfinance products expand, the stronger the demand becomes for fast, explainable risk screening built on alternative data. Cash-flow underwriting is attractive precisely because it works in real time, scales well, and reflects current payment discipline better than older static views do.

If access to transactional data and the regulatory perimeter continue to support these scenarios, the logic of BNPL scoring on top of cash-flow behavior is likely to travel well.`
      }
    }
  },
  "2025-11-25-linkedin-post-508096": {
    locales: {
      ru: {
        title: "ИИ ускоряет работу, но не отменяет когнитивную цену",
        summary:
          "Нейросети действительно разгоняют процессы, но вместе с этим увеличивают количество решений, проверок и переключений, которое должен выдерживать человек."
      },
      en: {
        title: "AI speeds up work, but not its cognitive price",
        summary:
          "AI tools accelerate output, yet they also expand the number of decisions, checks, and context shifts a person has to carry.",
        body: `Neural networks do speed work up. That part is no longer a serious question.

AI tools have already entered everyday life through text, images, code, and task management. But acceleration brought along a second effect that is quieter and more interesting: rising cognitive load.

Older technological speed used to show up in external metrics like throughput, memory, and raw processing power. Now speed passes through human attention. Each time a model accelerates a task, it also tends to increase the number of decisions and the amount of information that someone still has to absorb, compare, verify, and steer.

Researchers describe this through the idea of cognitive load: intrinsic difficulty, extraneous noise, and the effort needed to build meaning. Good AI design can reduce the external noise. Much more often, though, AI redistributes effort rather than removing it. Less manual labor, more supervision. Less typing, more judging.

That is the paradox. We do not exactly run faster anymore; we glide. But fatigue still arrives sooner. The number of branches in a normal workday grows: each generated option becomes a choice, each draft becomes a review task, each shortcut becomes another point of responsibility.

In that sense, AI does not simply save cognition. It changes its shape. We become curators of our own thinking.

So the modern question is not only how to accelerate further. It is how to withstand the acceleration. AI gave us a new scale of action. It has not yet given us a new scale of attention.`
      }
    }
  },
  "2025-11-21-linkedin-post-513536": {
    locales: {
      ru: {
        title: "ИИ-агенты и исчезающая коммунальная функция труда",
        summary:
          "Мультиагентные системы хорошо выполняют деловую функцию труда, но почти не несут в себе его социальную ткань — признание, принадлежность, разговор, трение."
      },
      en: {
        title: "AI agents and the missing social half of work",
        summary:
          "Multi-agent systems reproduce the task side of labor surprisingly well, but almost none of its communal texture: recognition, belonging, friction, and human presence.",
        body: `Modern AI agents may be one of the clearest illustrations of an older sociological distinction: labor has both a business function and a communal one.

The business function is about the task and the measurable result. Was the work done? Was it efficient? The communal function is everything that binds people to one another through work itself: conversation, recognition, hierarchy, informal ties, trust, belonging.

That distinction matters because organizations do not survive on outputs alone. Even very formal systems still depend on the invisible social layer around the work.

Now look at multi-agent systems: manager agents, analyst agents, copywriter agents, assistant agents, all talking to each other and splitting roles. At first glance it resembles a human team.

But if you look closely, almost all of the communal function is gone. An agent does not seek recognition, feel slighted, negotiate status, or build tacit alliances. It executes protocol. Between agents there is no friendship, no sympathy, no awkward silence after a bad meeting. Only task flow.

From an efficiency perspective, that is seductive. The system stays fast, precise, unemotional, and tireless. But it also reveals what disappears when only the business side of labor remains.

We are already starting to borrow that logic ourselves: shorter exchanges, cleaner commands, fewer accidental conversations, more streams of tasks and reports.

That is why conversations about AI drift so often toward meaning. The fear is not only about jobs. It is also about losing one of the places where people still manage to be together, even when the “together” happened at a desk or in a work chat.`
      }
    }
  },
  "2025-08-31-vs-instruct-e-781696": {
    locales: {
      ru: {
        title: "Базовая модель и instruct-модель простыми словами",
        summary:
          "Base-модель продолжает текст. Instruct-модель уже учится слушать и выполнять задачу — и именно это меняет пользовательский опыт."
      },
      en: {
        title: "Base models vs instruct models, in plain language",
        summary:
          "A base model continues text. An instruct model is the same underlying intelligence shaped to listen, comply, and respond in a usable format.",
        body: `The easiest way to explain the difference is through two assistants.

The first one is a brilliant student who has read an absurd amount of text. Ask this person to write a sick-leave email to your boss, and instead of writing the letter they may start discussing what illness means and how people miss work. That is a base model. It continues text.

The second assistant has the same raw intelligence, but was explicitly trained to listen and do the task. Ask for the same email and you get the email. That is an instruct model.

Under the hood, the difference comes from training. A base model is optimized to predict the next token from huge text corpora. It is not trying to “help” you in a human sense. An instruct model gets additional stages like supervised fine-tuning on prompt-response examples and reinforcement from human feedback. In other words, it learns not only to continue language, but to behave like a useful assistant.

That is why instruct models matter whenever you need structured output, strict formatting, short answers, or reliable task compliance. If you ask for “only yes or no,” an instruct model is much more likely to obey.

Base models still matter. They are the foundation from which assistants, copilots, and specialized systems are built. But using them directly for end-user interaction is often like talking to someone who knows a lot and still has not learned to answer the question you actually asked.`
      }
    }
  }
};
