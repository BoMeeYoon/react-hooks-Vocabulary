import React, {useRef, useState} from 'react';
import CreateVoca from './CreateVoca.js'
import VocaList from './VocaList.js'


function App() {

  const [inputs, setInputs] = useState({
    word : '',
    meaning : '',
  })

  const [words, setWords] = useState([
    {
      id: 0,
      word: '',
      meaning: '',
      done : false,
    }
  ])

  const { word, meaning } = inputs
  const nextId = useRef(0)
  const wordFocus = useRef()

  const onChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name] : value,
    })
    console.log('onChange')
    console.log(name, 'name', value, 'value')
  }

  const onCreate = () => {
    nextId.current += 1

    const voca = {
      id: nextId.current,
      word,
      meaning,
      done: false,
    }
    console.log(voca.id, 'id', 'onCreate')
    setWords (words.concat(voca))

    setInputs ({
      word:'',
      meaning:'',
    })

    wordFocus.current.focus()

  }

  const onRemove = id => {
    setWords( words.filter(voca => voca.id !== id) )
  }

  const onToggle = id => {
    setWords( words.map(
        voca => voca.id === id ? 
          {...voca, done: !voca.done }
          :
          voca
      )
    )
  }

  return (
  <div>
    <CreateVoca word={word} meaning={meaning} onChange={onChange} onCreate={onCreate} wordFocus={wordFocus} />
    <VocaList words = {words} onRemove={onRemove} onToggle={onToggle} />
  </div>  
  )
}

export default App;
