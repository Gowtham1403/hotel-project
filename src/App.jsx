import { useState, useEffect } from "react"
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddTask from "./components/AddTask"
import SelectTable from "./components/SelectTable"

function App() {

  // const [showAddTask, setShowAddTask] = useState(false)
  const [bookings, setBookings] = useState([])
  const [tables, setTables] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const bkngsFromServer = await fetchBookings()
      const tablesFromServer = await fetchTables()
      setBookings(bkngsFromServer)
      setTables(tablesFromServer)
    }

    getTasks()
  }, [])

  //Fetch Tasks
  const fetchBookings = async () => {
    const res = await fetch('http://localhost:5000/bookings')
    const data = await res.json()
    return data
  }

  const fetchTables = async () => {
    const res = await fetch('http://localhost:5000/table')
    const data = await res.json()
    return data
  }
  const fetchTable = async (id) =>{
    const res = await fetch(`http://localhost:5000/table/${id}`)
    const data = await res.json()
    return data
  }

  // Add Task
  const addBookings = async (booking) => {
    const res = await fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    const data = await res.json()

    setBookings([...bookings, data])
  }


  const reminder = async (id) => {
    const table = await fetchTable(id)
    const updatedAvail = { ...table, availablity: !table.availablity }

    const res = await fetch(`http://localhost:5000/table/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedAvail)

    })
    const data = res.json()

  setTables(
    tables.map((table)=>
    table.id === id ? {...table, availablity:!data.availablity}: table
    ))
  }

    //toggle reminder

    return (
      <>
        {/* <AddTask onAdd={addBookings} data={tables} updateId={reminder}/> */}
        <SelectTable data={tables}/>
        {/* <Tasks tasks={bookings}/> */}
      </>
    )
  }

  export default App;
