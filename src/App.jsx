import { useEffect, useMemo, useState } from "react";
import "./App.css";

const SITE_PASSWORD = "MalakSayed112006";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const content = useMemo(
    () => ({
      heroName: "ملك",
      heroSub: "قلبي وكل دنيتي ❤️",
      heroText:
        "يا ملك، من وقت ما دخلتي حياتي وأنا حاسس إن كل حاجة بقت أهدى وأجمل. وجودك فرق معايا بجد، وبقيتي الشخص اللي لما أفكر فيه قلبي يهدى، ولما أفتقده أحس إن في حاجة كبيرة ناقصة جوايا.",
      meetTitle: "أول كلام بينا ❤️",
      meetDate: "28/1/2026",
      timerTitle: "من أول كلام بينا ❤️",
      timerText:
        "ومن اليوم ده وأنا كل يوم بتعلق بيكي أكتر، وكل لحظة بتعدي بتأكدلي إنك مش شخص عادي في حياتي… إنتِ الحياة نفسها.",
      longMessage:
        "ملك، يمكن الكلام أوقات ما يطلعش مني بسهولة، ويمكن ما بعرفش أشرح كل اللي جوايا زي ما نفسي، لكن الحقيقة الثابتة هي إنك بقيتي أقرب واحدة لقلبي. بقيتي راحتي، وضحكتي، والحنية اللي بروحلها من زحمة الدنيا. أنا بحب وجودك، بحب طريقتك، بحب إحساس الأمان اللي بيجي مع اسمك، وبحب إنك بقيتي أجمل تفصيلة في أيامي. ومن أول مرة اتكلمنا فيها وأنا حاسس إن في حاجة حلوة جدًا بدأت، ومع كل يوم بيعدي إحساسي ناحيتك بيكبر أكتر وأكتر.",
      cuteText:
        "كل لحظة معاكي ليها معنى… وكل يوم بيعدي بيقربني منك أكتر يا ملك 💖",
      footerText:
        "وفي الآخر… مهما كتبت ومهما وصفت، هيفضل اسمك يا ملك أكبر من كل الكلام، لأنك مش مجرد شخص بحبه… إنتِ حتة من قلبي وروحي ❤️",
      videoTitle: "فيديو ليكي وبس 🎥",
      videoText:
        "الفيديو ده مجرد لحظة صغيرة، لكن بالنسبالي شايل إحساس كبير… لأن أي حاجة فيها وجودك بتبقى غالية عليا.",
    }),
    []
  );

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "أول كلام بينا",
        image: "/1.jpg",
        date: "28/1/2026",
        text: "اليوم اللي بدأ فيه أجمل إحساس، ومنه بدأت تفاصيلك تدخل قلبي واحدة واحدة ❤️",
      },
      {
        id: 2,
        title: "الرؤية الشرعية",
        image: "/2.jpg",
        date: "2/2/2026",
        text: "يوم مميز جدًا، محفور جوايا، وكل ما أفتكره أحس إن القدر كان بيكتب بداية أجمل حكاية.",
      },
      {
        id: 3,
        title: "قراءة الفاتحة",
        image: "/3.jpg",
        date: "6/2/2026",
        text: "يوم له مكانة خاصة جدًا في قلبي، يوم كان مليان فرحة وطمأنينة وحلم حلو بيكبر.",
      },
      {
        id: 4,
        title: "ملك",
        image: "/4.jpg",
        date: "أجمل صدفة",
        text: "إنتِ مش مجرد اسم جميل… إنتِ إحساس جميل، وراحة، وحب حقيقي دخل حياتي وغيّرها للأحلى.",
      },
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "أول كلام بينا",
        date: "28/1/2026",
        text: "من هنا بدأت الحكاية، ومن هنا بدأ قلبي ينتبه لوجودك بشكل مختلف.",
      },
      {
        title: "الرؤية الشرعية",
        date: "2/2/2026",
        text: "يوم جميل له هيبة خاصة، خلّى المشاعر تبقى أوضح وأعمق وأقرب للقلب.",
      },
      {
        title: "قراءة الفاتحة",
        date: "6/2/2026",
        text: "واحدة من أجمل اللحظات اللي هتفضل دايمًا محفورة جوايا بكل فرحتها.",
      },
      {
        title: "وكل اللي جاي",
        date: "إن شاء الله",
        text: "أجمل بكتير… طول ما إنتِ موجودة، كل حاجة جاية هتبقى أحن وأجمل.",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "الاسم الأغلى", value: "ملك" },
      { title: "مكانها", value: "قلبي" },
      { title: "الإحساس", value: "أمان" },
      { title: "مستوى الحب", value: "∞" },
    ],
    []
  );

  const reasons = useMemo(
    () => ["ضحكتك", "هدوءك", "طيبتك", "رقتك", "قلبك", "وجودك"],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const startDate = new Date("2026-01-28T00:00:00");

    const updateCounter = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const difference = now - start;

      if (difference <= 0) {
        setCounter({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCounter({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [isUnlocked]);

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");

      setTimeout(async () => {
        const audio = document.getElementById("loveAudio");
        if (!audio) return;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }, 250);
    } else {
      setError("الباسورد غلط… جربي تاني يا ملك 💖");
    }
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-hearts">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>
        <div className="loader-circle"></div>
        <h1>جارِ تجهيز أجمل حاجة لملك 💖</h1>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <audio id="loveAudio" loop preload="auto">
          <source src="/love.mp3" type="audio/mpeg" />
        </audio>

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/1.jpg" alt="ملك" />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🔐</div>
          <div className="cute-badge">💖 خاص بملك</div>

          <h1>اكتبي الباسورد يا أجمل ملك</h1>

          <p className="password-subtext">
            المكان ده معمول ليكي وبس، ومش هيفتح غير لما تكتبي كلمة السر الصح ❤️
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتبي كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">دخول للمفاجأة ❤️</button>
          </form>

          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <audio id="loveAudio" loop preload="auto">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      <main className="container">
        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">✨ ملك ✨</span>
            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>
            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button className="btn btn-primary" onClick={toggleMusic}>
                {isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("counterSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                انزلي تحت
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/1.jpg" alt="ملك" />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>{counter.days}</strong>
            <span>يوم</span>
          </div>
          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{counter.hours}</strong>
            <span>ساعة</span>
          </div>
          <div className="stat-card glass">
            <strong>{counter.minutes}</strong>
            <span>دقيقة</span>
          </div>
          <div className="stat-card glass">
            <strong>{counter.seconds}</strong>
            <span>ثانية</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          {cuteFacts.map((item, index) => (
            <div className="cute-fact-card glass" key={index}>
              <h4>{item.title}</h4>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="full-cover-section glass">
          <div className="full-cover-image">
            <img src="/2.jpg" alt="ملك" />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.meetTitle}</div>
            <div className="scene-date">{content.meetDate}</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.heroText}</p>
          </div>
        </section>

        <section className="huge-counter-section glass" id="counterSection">
          <span className="small-badge">⏳ عداد الحكاية</span>
          <h2>{content.timerTitle}</h2>
          <p>{content.timerText}</p>

          <div className="huge-counter-grid">
            <div className="huge-counter-box animated-counter">
              <strong>{counter.days}</strong>
              <span>يوم</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.hours}</strong>
              <span>ساعة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.minutes}</strong>
              <span>دقيقة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.seconds}</strong>
              <span>ثانية</span>
            </div>
          </div>

          <div className="music-mini-bar giant-music-bar">
            <div className="music-mini-left">
              <div className={`disc ${isPlaying ? "spin" : ""}`}>🎵</div>
              <div>
                <strong>أغنيتنا</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 رسالة لملك</span>
          <h2>كلام من قلبي ليكي</h2>
          <p>{content.longMessage}</p>
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>وجودك بالنسبالي</h3>
            <ul>
              <li>راحة بعد أي تعب</li>
              <li>أمان وسط أي خوف</li>
              <li>فرحة صافية من غير مجهود</li>
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>الحقيقة اللي جوايا</h3>
            <ul>
              <li>إنتِ فارقة معايا جدًا</li>
              <li>كل يوم بتكبري جوا قلبي أكتر</li>
              <li>واسمك بقى مرتبط بكل حاجة حلوة</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <h3>Timeline الحكاية</h3>
            <p>أجمل التواريخ اللي ليها مكانة خاصة</p>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reasons-section glass">
          <div className="section-head">
            <h3>ليه ملك؟</h3>
            <p>عشان في حاجات كتير فيكي بتخليني أحبك أكتر</p>
          </div>

          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div className="reason-chip glass" key={index}>
                {reason}
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>أربع لحظات مميزة</h3>
              <p>4 صور وكل صورة شايلة إحساس خاص</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card slider-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="video-love-section glass">
          <div className="section-head">
            <h3>{content.videoTitle}</h3>
            <p>{content.videoText}</p>
          </div>

          <div className="video-love-card">
            <video controls playsInline preload="metadata" className="love-video">
              <source src="/1.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">
            “يا ملك… وجودك لوحده كفاية يخلّي اليوم كله أهدى وأجمل.”
          </div>
          <div className="quote-box">
            “من أول كلام بينا وأنا حاسس إنك مختلفة عن أي حد.”
          </div>
          <div className="quote-box">
            “مشاعري ناحيتك حقيقية… وكبرت يوم بعد يوم.”
          </div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <h3>جاليري ملك</h3>
            <p>صور قريبة للقلب ومليانة إحساس</p>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section glass">
          <div className="extra-love-card glass">
            <h3>اسمك راحة</h3>
            <p>مجرد ما ييجي اسمك في بالي بحس إن قلبي اطمّن.</p>
          </div>
          <div className="extra-love-card glass">
            <h3>وجودك فرق</h3>
            <p>إنتِ من الناس القليلة اللي وجودها بيغيّر اليوم كله للأحسن.</p>
          </div>
          <div className="extra-love-card glass">
            <h3>اللي جاي أجمل</h3>
            <p>وطول ما إنتِ موجودة… أي حاجة جاية هتبقى أحن وأجمل.</p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <h2>وفي الآخر…</h2>
          <p>{content.footerText}</p>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">💌 لحظة خاصة</span>
              <small>{selectedCard.date || "ذكرى جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}