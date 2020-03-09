import React from 'react'
import MessageColumn from './message-column'

function WarningColumn ({messages, priority}) {
    return (
            <MessageColumn
        messages={messages}
        priority={priority}
        label="Warning" />
    )
}

export default WarningColumn
