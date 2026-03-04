import React, {useState,useEffect,useRef,useCallback,useMemo,} from "react";
import "./StudyTimer.css";


/* Format giây → mm:ss */
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function StudyTimer() {
  /* ===== STATE ===== */
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [name, setName] = useState("");
  const [sessions, setSessions] = useState([]);

  /* ===== REF ===== */
  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  /* ===== EFFECT: TIMER ===== */
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }

    // Cleanup
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  /* ===== CALLBACK ===== */

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    if (time > 0) {
      setSessions((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: name || "Chưa đặt tên",
          time,
        },
      ]);
    }

    setTime(0);
    setIsRunning(false);
    setName("");

    // Focus input
    inputRef.current?.focus();
  }, [time, name]);

  /* ===== MEMO: TOTAL TIME ===== */
  const totalTime = useMemo(() => {
    return sessions.reduce((sum, s) => sum + s.time, 0);
  }, [sessions]);

  /* ===== RENDER ===== */
  return (
  <div className="timer-container">
    <h1>Thời gian học tập</h1>

    {/* Input */}
    <input
      ref={inputRef}
      className="timer-input"
      type="text"
      placeholder="Tên phiên học"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    {/* Time */}
    <h2 className="timer-time">{formatTime(time)}</h2>

    {/* Buttons */}
    <div className="btn-group">
      <button onClick={startTimer}>Bắt đầu</button>
      <button onClick={pauseTimer}>Tạm dừng</button>
      <button onClick={resetTimer}>Tạo mới</button>
    </div>

    {/* Total */}
    <h3>Tổng thời gian: {formatTime(totalTime)}</h3>

    {/* Sessions */}
    <h3>Danh sách phiên học</h3>

    <ul className="session-list">
      {sessions.map((s, index) => (
        <li key={s.id}>
          {index + 1}. {s.name} - {formatTime(s.time)}
        </li>
      ))}
    </ul>
  </div>
);

}
export default StudyTimer;
