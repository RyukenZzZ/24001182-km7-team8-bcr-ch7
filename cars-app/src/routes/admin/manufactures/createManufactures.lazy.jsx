import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { createManufacture } from '../../../service/manufacture'
import Protected from '../../../components/Auth/Protected'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const Route = createLazyFileRoute(
  '/admin/manufactures/createManufactures',
)({
  component: () => (
    <Protected roles={[1]}>
      <CreateManufacture />
    </Protected>
  ),
})

function CreateManufacture() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [logo, setLogo] = useState(undefined)
  const [currentLogo, setCurrentLogo] = useState(undefined)

  const { mutate: createManufactureData, isPending } = useMutation({
    mutationFn: (request) => createManufacture(request),
    onSuccess: () => {
      toast.success('New manufacture created')
      navigate({ to: '/admin/dashboard' })
    },
  })
  useEffect(() => {
    if (logo) {
      const reader = new FileReader()
      reader.onload = () => {
        setCurrentLogo(reader.result)
      }
      reader.readAsDataURL(logo)
    }
  }, [logo])

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      name,
      logo,
    }
    createManufactureData(request)
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Create a new manufacture</Card.Title>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="logo">
                  <Form.Label column sm={3}>
                    Logo
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="file"
                      placeholder="Choose File"
                      required
                      onChange={(event) => {
                        setLogo(event.target.files[0])
                        setCurrentLogo(
                          URL.createObjectURL(event.target.files[0]),
                        )
                      }}
                      accept=".jpg,.png"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="currentLogo">
                  <Form.Label column sm={3}></Form.Label>
                  <Col sm={9}>
                    <Image src={currentLogo} fluid />
                  </Col>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isPending}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
