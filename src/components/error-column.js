import React from 'react'
import MessageColumn from './message-column'

function ErrorColumn ({messages, priority, clearMessage}) {
    return (
            <MessageColumn
        messages={messages}
        priority={priority}
        clearMessage={clearMessage}
        label="Error" />
    )
}

export default ErrorColumn
