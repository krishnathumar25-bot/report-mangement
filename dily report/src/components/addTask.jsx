import React from 'react'
import { useForm  } from "react-hook-form"
import { Button, Form,Row, Col,Container,Card} from 'react-bootstrap'
import { BrowserRouter } from 'react-router'




function addTask() {

    const {

    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
} = useForm()

const onSubmit = (data) => console.log(data)


    return (
   
    <Container className='flex justify-center items-center mt-5'>
        <Card className='shadow p-4 w-2xl'>
            <Card.Body className='text-center p-3 '>
                <Card.Title className='pb-4'>Add Report </Card.Title>
                <Form className='' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Row} className='formGroup' controlId="1">
                         <Form.Label column className='text-start'>
                                  Employee name
                                </Form.Label>
                            <Col xs={8}>
                        <Form.Control type="text" placeholder="enter name" />
                            </Col>

                    </Form.Group>

                    <Form.Group as={Row} controlId='2' className='formGroup'>
                         <Form.Label column className='text-start' > Description </Form.Label>
                        <Col xs={8}>
                        <Form.Control type="textbox" placeholder="Placeholder text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId='2' className='formGroup'>
                         <Form.Label column className='text-start' > hours </Form.Label>
                        <Col xs={8}>
                        <Form.Control 
                        required
                        type="time"
                        placeholder="Placeholder text" 
                        use
                         {...register("time", { max: 24, min: 1})}
                        />
                        </Col>
                    </Form.Group>

                </Form>
            </Card.Body>
        </Card>
    </Container>
    )
}

export default addTask
