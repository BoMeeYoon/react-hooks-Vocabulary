import React from 'react'
import './CreateVoca.css'

function CreateVoca ({ word, meaning, onChange, onCreate, wordFocus }) {

    return (
        <div className="CreateVoca-wrapper">
            <div className="CreateVoca-items">
                <span className="CreateVoca-text">* 단어 : </span><input name="word" placeholder="단어를 입력하세요" onChange={onChange} value={word} ref={ wordFocus } /><br/>
                <span className="CreateVoca-text">* 뜻  : </span><input name="meaning" placeholder="뜻을 입력하세요" onChange={onChange} value={meaning}  /><br/>
            </div>
            <div className="CreateVoca-items">
                <button onClick={onCreate}>입력</button>
            </div>
        </div>
    )
}

export default CreateVoca