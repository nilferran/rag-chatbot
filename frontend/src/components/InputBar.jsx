function InputBar({ onSend, loading }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter' && !loading) {
      onSend(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <div style={{
      padding: '16px 20px',
      borderTop: '1px solid #3f3f3f',
      backgroundColor: '#212121',
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
      <input
        type="text"
        placeholder="Escribe una pregunta sobre tus documentos..."
        onKeyDown={handleKeyDown}
        disabled={loading}
        style={{
          flex: 1,
          padding: '12px 18px',
          borderRadius: '24px',
          border: '1px solid #3f3f3f',
          backgroundColor: '#2f2f2f',
          color: '#ececec',
          fontSize: '14px',
          outline: 'none',
        }}
      />
      <button
        onClick={(e) => {
          const input = e.target.previousSibling
          if (input.value && !loading) {
            onSend(input.value)
            input.value = ''
          }
        }}
        disabled={loading}
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: loading ? '#3f3f3f' : '#2f6feb',
          color: 'white',
          fontSize: '18px',
          cursor: loading ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        {loading ? '⏳' : '➤'}
      </button>
    </div>
  )
}

export default InputBar