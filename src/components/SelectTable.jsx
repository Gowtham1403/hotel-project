import Form from 'react-bootstrap/Form';
import './selectTable.css';

function checkAvailability(availability, name , tag) {
    if (availability === true){
        return(
    <div class="center">
        <Form.Check >
      <input type="checkbox" name={tag} class={tag} id={name}/>
 
           
    </Form.Check>
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
            data.map((table)=> checkAvailability(table.availablity,table.id,table.class))
        }
        </Form.Group>
        
    )
}

export default SelectTable;