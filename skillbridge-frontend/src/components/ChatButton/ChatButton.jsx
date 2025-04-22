import React, { useState } from "react";
import styles from "./ui/ChatButton.module.sass";
import { FaComments } from "react-icons/fa";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "operator", text: "Здравствуйте! Чем можем помочь?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [...prev, { from: "user", text: input }]);
      setInput("");
      // Можно добавить фейковый ответ от оператора:
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "operator", text: "Оператор скоро ответит..." }]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <div className={styles.chatButton} onClick={() => setIsChatOpen(!isChatOpen)}>
        <FaComments size={24} color="#fff" />
      </div>

      {isChatOpen && (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <span>Чат с оператором</span>
            <button onClick={() => setIsChatOpen(false)}>×</button>
          </div>
          <div className={styles.chatBody}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.from === "user" ? styles.userMessage : styles.operatorMessage
                }
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Введите сообщение..."
            />
            <button onClick={handleSend}>Отправить</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;

