import { 
  Button,
  Modal as ModalImport,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

import {useState} from 'react'

function Modal({toggle, onSave, activeItemProp}) {

  const [activeItem, setActiveItem] = useState(activeItemProp)
  
  const handleChange = (e) => {
    let {name, value} = e.target

    if(e.target.type === "checkbox") {
      value = e.target.checked
    }

    setActiveItem({...activeItem, [name]: value})
  }

  return (
    <ModalImport isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="todo-title">Title</Label>
            <Input
              type="text"
              id="todo-title"
              name="title"
              value={activeItem.title}
              onChange={handleChange}
              placeholder="Enter Todo Title"
            />
          </FormGroup>

          <FormGroup>
            <Label for="todo-description">Description</Label>
            <Input
              type="text"
              id="todo-description"
              name="description"
              value={activeItem.description}
              onChange={handleChange}
              placeholder="Enter Todo description"
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="completed"
                checked={activeItem.completed}
                onChange={handleChange}
              />
              Completed
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          onClick={() => onSave(activeItem)}
        >
          Save
        </Button>
      </ModalFooter>
    </ModalImport>
  )
}

export default Modal