import React from "react"
import MessageColumn from "./message-column"

function WarningColumn({ messages, priority, clearMessage }) {
  return (
    <MessageColumn
      messages={messages}
      priority={priority}
      clearMessage={clearMessage}
      label="warning"
    />
  )
}

export default WarningColumn
