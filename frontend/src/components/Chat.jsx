import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Message from './Message'
import InputBar from './InputBar'

function Chat() {
  const [messages, setMessages] = useState([
    { text: '¡Hola! Soy tu asistente RAG. Hazme preguntas sobre tus documentos.', isUser: false }
  ])
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend(text) {
    if (!text.trim()) return

    setMessages(prev => [...prev, { text, isUser: true }])
    setLoading(true)

    try {
      const response = await axios.post('http://127.0.0.1:8000/ask', {
        question: text,
        history: history
      })

      const answer = response.data.answer

      setMessages(prev => [...prev, { text: answer, isUser: false }])
      setHistory(prev => [
        ...prev,
        { role: 'user', content: text },
        { role: 'assistant', content: answer }
      ])
    } catch (error) {
      setMessages(prev => [...prev, { text: 'Error al conectar con el servidor.', isUser: false }])
    }

    setLoading(false)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxWidth: '100%',
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 24px',
        borderBottom: '1px solid #3f3f3f',
        backgroundColor: '#212121',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#10a37f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          🤖
        </div>
        <div>
          <h1 style={{ fontSize: '16px', fontWeight: '600', color: '#ececec' }}>RAG Chatbot</h1>
          <p style={{ fontSize: '12px', color: '#8e8ea0' }}>Pregunta sobre tus documentos</p>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '24px 20px',
        backgroundColor: '#212121'
      }}>
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} isUser={msg.isUser} />
        ))}
        {loading && <Message text="Pensando..." isUser={false} />}
        <div ref={bottomRef} />
      </div>

      <InputBar onSend={handleSend} loading={loading} />
    </div>
  )
}

export default Chat