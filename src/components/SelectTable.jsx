import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './selectTable.css';

function checkAvailability(availability, name) {
    if (availability === true){
        return(
    <div class="center">
        <Form.Check 
        type="checkbox"
        id={name}
       
      />
      </div>
        )
    }
    else{
        return(
    <div class="center">
        <Form.Check
        disabled
        type="checkbox"
        id={name}
        
      />
      </div>
      )
    }
}

function SelectTable({ data }) {
    return (
        <Form.Group>
        {
            data.map((table)=> checkAvailability(table.availablity,table.id))
        }
        </Form.Group>
        
    )
}

export default SelectTable;