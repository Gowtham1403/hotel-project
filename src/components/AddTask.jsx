import { useState } from "react"
import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SelectTable from "./SelectTable";


function AddTask({onAdd,data,updateId}){
    const [name,setName] = useState('')
    const [phNum, setPhNum] = useState('')
    const [ table, setTable] = useState('')
    const [peopleCount, setCapacity] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        
        if(!name){
            alert('please add a task')
            return
        }
        onAdd({name,phNum,table,peopleCount})
        updateId(table)
        setName('')
        setPhNum('')
        setTable('')
        setCapacity('')

        // window.location.reload();

        
    
    }
    // console.log(data);

    window.onload = checkAvailability(data);
    function checkAvailability(data) {
      const availSeats = [];
      for (var i=0; i < data.length; i++){
      if (data[i].availablity === true) {
          availSeats.push(data[i]);
      }
    }
      return availSeats
  }

  const seats = checkAvailability(data);
  
    return(
        <div>
            <Form onSubmit={onSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label htmlFor="">Name</Form.Label>
            <Form.Control required type="text"  placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} >
            <Form.Label htmlFor="">Phone Number</Form.Label>
            <Form.Control required type="text" placeholder="Enter Phone Number" value={phNum} onChange={(e)=> setPhNum(e.target.value)}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>No. of peoples:</Form.Label>
          <Form.Control required type="text" placeholder="Enter people count" value={peopleCount} onChange={(e)=> setCapacity(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col}>
        <Form.Label>Tables</Form.Label>
          <Form.Select required onChange={(e)=> setTable(e.target.value)}>
            <option>Choose...</option>
            {
              seats.map((table)=><option value={table.id}>{table.name}</option>)
            }
          </Form.Select>
        </Form.Group>

      </Row>


      <Button variant="outline-secondary" type='submit'>
        Submit
      </Button>
    </Form>
        </div>
    )
    }

export default AddTask;