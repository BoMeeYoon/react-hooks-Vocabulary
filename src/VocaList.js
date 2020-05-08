import React from 'react' 

function Vocabulary ({ voca, onRemove, onToggle }) {
    const { word, meaning, id, done } = voca
    console.log('id : ', id, ' done : ', done)
    const style = {
        color : done ? 'crimson' : 'gold',
        cursor : 'pointer'
    }
    return (
        <ul>
            <li key = {id}>
                <b style={ style } onClick={() => onToggle(id)}> 
                    { done ? '학습완료' : '학습중' }
                </b> 
                {word} : {meaning} 
                <button onClick = {() => onRemove(id)}>삭제</button>
            </li>
        </ul>
    )
}

function VocaList ({ words, onRemove, onToggle }) {

    return (
        <div>
            {
                words.map( 
                    voca => ( <Vocabulary voca={voca} key={voca.id} onRemove = {onRemove} onToggle = {onToggle} /> ) 
                )
            }
        </div>
    )
}

export default VocaList