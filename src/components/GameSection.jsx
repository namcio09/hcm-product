import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaCheckCircle, FaLock, FaRedoAlt, FaTrophy } from "react-icons/fa";
import {
  gameConfig,
  gameLessonSummary,
  gameQuestions,
  imagePlaceholders
} from "../data/contentData";
import "../styles/game.css";

const directionByKey = {
  ArrowUp: [-1, 0],
  ArrowDown: [1, 0],
  ArrowLeft: [0, -1],
  ArrowRight: [0, 1],
  w: [-1, 0],
  s: [1, 0],
  a: [0, -1],
  d: [0, 1]
};

function cellKey(row, col) {
  return `${row}-${col}`;
}

function GameSection() {
  const sectionRef = useRef(null);
  const [playerPosition, setPlayerPosition] = useState(gameConfig.start);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isWin, setIsWin] = useState(false);
  const [statusText, setStatusText] = useState(
    "Di chuyển để khám phá mê cung tri thức."
  );

  const wallSet = useMemo(() => new Set(gameConfig.walls), []);
  const checkpointMap = useMemo(() => {
    const map = new Map();
    gameConfig.checkpoints.forEach((item) => map.set(item.key, item.questionId));
    return map;
  }, []);

  const totalQuestions = gameConfig.checkpoints.length;
  const answeredCount = Object.keys(answeredQuestions).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const activeQuestion = activeQuestionId ? gameQuestions[activeQuestionId] : null;

  const resetGame = () => {
    setPlayerPosition(gameConfig.start);
    setAnsweredQuestions({});
    setActiveQuestionId(null);
    setSelectedOption(null);
    setFeedback("");
    setIsWin(false);
    setStatusText("Di chuyển để khám phá mê cung tri thức.");
  };

  const tryMove = useCallback(
    (nextRow, nextCol) => {
      if (activeQuestionId || isWin) {
        return;
      }

      const outOfBounds =
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= gameConfig.rows ||
        nextCol >= gameConfig.cols;

      if (outOfBounds || wallSet.has(cellKey(nextRow, nextCol))) {
        return;
      }

      const nextKey = cellKey(nextRow, nextCol);
      setPlayerPosition({ row: nextRow, col: nextCol });
      setStatusText("Tiếp tục đi tới các cổng tri thức để mở đường.");

      const questionId = checkpointMap.get(nextKey);

      // Khi chạm checkpoint chưa mở khóa, người học phải trả lời đúng câu hỏi để đi tiếp.
      if (questionId && !answeredQuestions[questionId]) {
        setActiveQuestionId(questionId);
        setSelectedOption(null);
        setFeedback("");
        return;
      }

      const reachedFinish =
        nextRow === gameConfig.finish.row && nextCol === gameConfig.finish.col;

      if (reachedFinish) {
        if (answeredCount === totalQuestions) {
          setIsWin(true);
          setStatusText("Chúc mừng! Bạn đã hoàn thành mê cung tri thức.");
        } else {
          setStatusText(
            "Bạn đã tới đích nhưng còn cổng chưa mở. Hãy quay lại trả lời đủ câu hỏi."
          );
        }
      }
    },
    [
      activeQuestionId,
      answeredCount,
      answeredQuestions,
      checkpointMap,
      isWin,
      totalQuestions,
      wallSet
    ]
  );

  const handleMove = useCallback(
    (deltaRow, deltaCol) => {
      const nextRow = playerPosition.row + deltaRow;
      const nextCol = playerPosition.col + deltaCol;
      tryMove(nextRow, nextCol);
    },
    [playerPosition, tryMove]
  );

  const submitAnswer = () => {
    if (!activeQuestion || selectedOption === null) {
      return;
    }

    if (selectedOption === activeQuestion.correctIndex) {
      const nextAnsweredCount = answeredQuestions[activeQuestion.id]
        ? answeredCount
        : answeredCount + 1;

      setAnsweredQuestions((prev) => ({ ...prev, [activeQuestion.id]: true }));
      setStatusText("Chính xác! Cổng tri thức đã được mở.");
      setFeedback("");
      setActiveQuestionId(null);
      setSelectedOption(null);

      if (
        playerPosition.row === gameConfig.finish.row &&
        playerPosition.col === gameConfig.finish.col &&
        nextAnsweredCount === totalQuestions
      ) {
        setIsWin(true);
      }

      return;
    }

    setFeedback(
      `Chưa chính xác. ${activeQuestion.explanation} Vui lòng chọn lại để tiếp tục.`
    );
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      const isTypingField =
        event.target instanceof HTMLElement &&
        (event.target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName));

      if (isTypingField) {
        return;
      }

      const normalizedKey = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      const direction = directionByKey[normalizedKey];
      if (!direction) {
        return;
      }

      const rect = sectionRef.current?.getBoundingClientRect();
      const isSectionVisible =
        rect && rect.top < window.innerHeight - 80 && rect.bottom > 120;

      // Chỉ bắt phím khi khu vực game đang hiển thị để tránh cản trở thao tác cuộn ở section khác.
      if (!isSectionVisible) {
        return;
      }

      event.preventDefault();
      handleMove(direction[0], direction[1]);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleMove]);

  return (
    <section id="game" className="section game-section" ref={sectionRef}>
      <div className="container" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Tab Game - Giải mã mê cung tri thức</p>
          <h2>Ôn tập kiến thức bằng tương tác ghi nhớ</h2>
          <p>
            Dùng nút điều hướng hoặc phím mũi tên để di chuyển. Mỗi cổng tri
            thức sẽ mở khi bạn trả lời đúng câu hỏi.
          </p>
        </div>

        <div className="game-layout">
          <div className="game-board-wrap">
            <div className="game-progress">
              <div className="game-progress__head">
                <strong>Tiến trình mở cổng</strong>
                <span>
                  {answeredCount}/{totalQuestions} câu
                </span>
              </div>
              <div className="game-progress__bar">
                <span style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            <div
              className="maze-grid"
              style={{
                gridTemplateColumns: `repeat(${gameConfig.cols}, minmax(0, 1fr))`
              }}
            >
              {Array.from({ length: gameConfig.rows }).map((_, rowIndex) =>
                Array.from({ length: gameConfig.cols }).map((__, colIndex) => {
                  const key = cellKey(rowIndex, colIndex);
                  const isWall = wallSet.has(key);
                  const isStart =
                    rowIndex === gameConfig.start.row &&
                    colIndex === gameConfig.start.col;
                  const isFinish =
                    rowIndex === gameConfig.finish.row &&
                    colIndex === gameConfig.finish.col;
                  const isPlayer =
                    rowIndex === playerPosition.row &&
                    colIndex === playerPosition.col;
                  const checkpointQuestionId = checkpointMap.get(key);
                  const isCheckpoint = Boolean(checkpointQuestionId);
                  const isCheckpointSolved = checkpointQuestionId
                    ? Boolean(answeredQuestions[checkpointQuestionId])
                    : false;

                  return (
                    <div
                      key={key}
                      className={`maze-cell ${isWall ? "wall" : ""} ${
                        isStart ? "start" : ""
                      } ${isFinish ? "finish" : ""}`}
                    >
                      {isCheckpoint && !isWall && (
                        <span className="maze-cell__gate" aria-hidden="true">
                          {isCheckpointSolved ? <FaCheckCircle /> : <FaLock />}
                        </span>
                      )}

                      {isPlayer && <span className="maze-cell__player" />}
                    </div>
                  );
                })
              )}
            </div>

            <p className="game-status">{statusText}</p>
            <p className="game-keyboard-hint">
              Điều khiển bằng bàn phím: <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd>{" "}
              <kbd>→</kbd> hoặc <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>
            </p>

            <div className="game-controls">
              <button type="button" onClick={() => handleMove(-1, 0)}>
                Lên
              </button>
              <div className="game-controls__middle">
                <button type="button" onClick={() => handleMove(0, -1)}>
                  Trái
                </button>
                <button type="button" onClick={() => handleMove(0, 1)}>
                  Phải
                </button>
              </div>
              <button type="button" onClick={() => handleMove(1, 0)}>
                Xuống
              </button>
              <button type="button" className="reset" onClick={resetGame}>
                <FaRedoAlt /> Chơi lại
              </button>
            </div>
          </div>

          <aside className="game-note">
            <img
              className="game-note__image"
              src={imagePlaceholders.game.src}
              alt={imagePlaceholders.game.alt}
              loading="lazy"
            />
            <h3>Luật chơi ngắn gọn</h3>
            <ul>
              <li>Đi từ ô xuất phát tới đích trong bản đồ grid 7x7.</li>
              <li>Mỗi checkpoint là một câu hỏi trắc nghiệm bắt buộc.</li>
              <li>Trả lời đúng để mở cổng và tăng tiến trình.</li>
              <li>
                Chỉ khi mở đủ cổng tri thức, bạn mới hoàn thành chặng học tập.
              </li>
            </ul>
          </aside>
        </div>

        {activeQuestion && (
          <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-card">
              <p className="modal-card__title">Câu hỏi checkpoint</p>
              <h3>{activeQuestion.prompt}</h3>

              <div className="options-list">
                {activeQuestion.options.map((option, index) => (
                  <button
                    type="button"
                    key={option}
                    className={`option-btn ${
                      selectedOption === index ? "selected" : ""
                    }`}
                    onClick={() => setSelectedOption(index)}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </button>
                ))}
              </div>

              {feedback && <p className="modal-feedback">{feedback}</p>}

              <button type="button" className="submit-btn" onClick={submitAnswer}>
                Xác nhận đáp án
              </button>
            </div>
          </div>
        )}

        {isWin && (
          <div className="win-panel">
            <p className="win-title">
              <FaTrophy /> Hoàn thành mê cung tri thức
            </p>
            <h3>Bạn đã kết nối đúng mạch tư tưởng cốt lõi</h3>
            <ul>
              {gameLessonSummary.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text}>
                    <Icon /> {item.text}
                  </li>
                );
              })}
            </ul>
            <button type="button" onClick={resetGame}>
              Ôn lại từ đầu
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GameSection;
