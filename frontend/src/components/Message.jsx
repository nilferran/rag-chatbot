import ReactMarkdown from 'react-markdown'

function Message({ text, isUser }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '16px',
      gap: '10px',
      alignItems: 'flex-end'
    }}>
      {!isUser && (
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#10a37f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          flexShrink: 0
        }}>
          🤖
        </div>
      )}
      <div style={{
        maxWidth: '70%',
        padding: '12px 16px',
        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        backgroundColor: isUser ? '#2f6feb' : '#2f2f2f',
        color: '#ececec',
        fontSize: '14px',
        lineHeight: '1.6',
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
      }} className={!isUser ? 'markdown' : ''}>
        {isUser ? text : <ReactMarkdown>{text}</ReactMarkdown>}
      </div>
      {isUser && (
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#2f6feb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          flexShrink: 0
        }}>
          👤
        </div>
      )}
    </div>
  )
}

export default Message