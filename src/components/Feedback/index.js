// src\components\Feedback\index.js

import './styles.css'

function Feedback({mensagem, tipo, visivel, onclose}) {
    if (!visivel) {
        return null
    }

    return (
        <div
            id='mensgem'
            className={`mensagem ${tipo} visivel`}
            onClick={onclose}
        >
            {mensagem}
        </div>
    )
}

export default Feedback