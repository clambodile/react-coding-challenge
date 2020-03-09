import React from 'react'
import MessageColumn from './message-column'

function ErrorColumn ({messages, priority}) {
    return (
            <MessageColumn
        messages={messages}
        priority={priority}
        label="Error" />
    )
}

export default ErrorColumn
