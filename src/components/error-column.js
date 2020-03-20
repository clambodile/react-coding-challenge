import React from "react"
import MessageColumn from "./message-column"

export default function ErrorColumn({ messages, priority, clearMessage }) {
  return (
    <MessageColumn
      messages={messages}
      priority={priority}
      clearMessage={clearMessage}
      label="error"
    />
  )
}
