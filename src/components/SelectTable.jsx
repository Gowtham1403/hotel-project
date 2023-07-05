import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function checkAvailability(availability, name) {
    if (availability == true) {
        return (
            <Form.Group as={Row} className="mb-3">
                <Form.Check
                    inline
                    label={name}
                    type='radio'
                />
            </Form.Group>
        )
    }
}

function SelectTable({ data }) {
    return (
        <Form>
            {checkAvailability(data.availablity, data.name)}
        </Form>
    )
}

export default SelectTable;