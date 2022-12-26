import React , {useState , useEffect} from 'react'

export const App = () => {
  const [name ,setname] = useState('sanket')

  // mounting component
  useEffect(() => {
    alert('savaliya');
  },[])

  return (
    <div>

      name is {name}
    </div>
  )
}

export default App
