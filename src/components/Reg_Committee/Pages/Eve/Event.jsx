import React, { useState } from 'react'
import { Container, Card, Row, Col, Form, Table, Button } from 'react-bootstrap'
import image from '../../../../Assets/Images/download.jfif'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Event.css'

const Event = () => {

  const [show, setShow] = useState(false)

  const menuItem = [
    {
      path: "/reg/dashboard",
      icon: <MdIcons.MdDashboard size={25} className='m-2' />,
      name: "Dashboard"
    },
    {
      path: "/reg/add",
      icon: <IoIcons.IoMdAdd size={25} className='m-2' />,
      name: "Add"
    },
    {
      path: "/reg/college",
      icon: <FaIcons.FaUniversity size={25} className='m-2' />,
      name: "College"
    },
    {
      path: "/reg/participate",
      icon: <IoIcons.IoMdPerson size={25} className='m-2' />,
      name: "Participates"
    },
    {
      path: "/reg/event",
      icon: <MdIcons.MdEvent size={25} className='m-2' />,
      name: "Event"
    },
  ];
  return (
    <Container fluid className='eventpage'>
      <Row>
        <Col>
          <Card className="sidebar" style={{ height: '100vh', width: show ? '260px' : '80px', border: 'none' }}>
            <Card
              className='card-top'
              style={{ height: '100px', border: '', width: show ? '260px' : '80px', flexDirection: 'row', border: 'none' }}
            >
              {
                show ?
                  (
                    <Card className='card-top' style={{ width: '220px', height: '80px', flexDirection: 'row', border: 'none' }}>
                      <Card className="m-2 card-img" style={{ width: '50px', border: 'none' }}>
                        <img src={image} alt="profile" style={{ borderRadius: '100%', height: '40px', width: '40px' }} />
                      </Card>
                      <Card className="m-2" style={{ width: '150px', border: 'none' }}>
                        <h5>User1</h5>
                        <span>Reg Committee</span>
                      </Card>
                    </Card>
                  ) : null
              }
              <Card className='bars' style={{ height: '40px', border: 'none' }}>
                <FaIcons.FaBars size={25} onClick={() => setShow(!show)} />
              </Card>
            </Card>
            <Card className='card-middle' style={{ width: show ? '260px' : '80px', height: '470px', border: 'none' }}>
              {
                menuItem.map((item, index) => (
                  <Link to={item.path} key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    <Card
                      className='card-items'
                      style={{ display: 'flex', flexDirection: 'row', width: show ? '230px' : '45px', border: 'none' }}
                    >
                      {item.icon}
                      {show ?
                        (<h6 className='mx-2 my-2'>{item.name}</h6>) : null
                      }
                    </Card>
                  </Link>
                ))
              }
            </Card>
            <Card className='card-end' style={{ width: show ? '260px' : '80px', height: '79px', border: 'none' }}>
              <Link to='/'>
                <Card
                  className='card-items'
                  style={{ height: '45px', display: 'flex', flexDirection: 'row', width: show ? '230px' : '45px', border: 'none ' }}
                >
                  <MdIcons.MdLogout size={25} className='m-2' />
                  {show ?
                    (<h6 className='mx-2 my-2'>Logout</h6>) : null
                  }
                </Card>
              </Link>
            </Card>
          </Card>
        </Col>
        <Col className='rightside'>
          <Card style={{height: '97vh', width: show?'1075px': '1255px', transition: 'ease-in-out 0.2s', border: 'none'}} className="eventcontent">
              <h2 className='m-2'>Event Participates List</h2>
              <Card className="top_event mx-2 mt-4" style={{border: 'none'}}>
                <Form className='d-flex justify-content-between'>
                  <Form.Select className='mb-3' style={{width: '30%'}}>
                    <option>Select the event</option>
                    <option>Event1</option>
                    <option>Event1</option>
                    <option>Event1</option>
                    <option>Event1</option>
                  </Form.Select>
                  <Form.Group className='mb-3 col-4'>
                    <Form.Control placeholder='Enter the Participates Name' />
                  </Form.Group>
                </Form>
              </Card>
              <Card className="my-2 mx-2" style={{width: show? '1057px' : '1235px', height: '79vh', border: 'none'}}>
                <Table striped borderless hover>
                  <thead>
                    <tr>
                      <th>Lot No</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>College Name</th>
                      <th>Event</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Deva</td>
                      <td>1234567890</td>
                      <td>ananddeva345@gmail.com</td>
                      <td>Jamal Mohammed College</td>
                      <td>
                        <div className="d-flex flex-column">
                          <span>Event1</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-evenly">
                          <Button>Edit</Button>
                          <Button variant="danger">Delete</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Deva</td>
                      <td>1234567890</td>
                      <td>ananddeva345@gmail.com</td>
                      <td>Jamal Mohammed College</td>
                      <td>
                        <div className="d-flex flex-column">
                          <span>Event1</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-evenly">
                          <Button>Edit</Button>
                          <Button variant="danger">Delete</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Deva</td>
                      <td>1234567890</td>
                      <td>ananddeva345@gmail.com</td>
                      <td>Jamal Mohammed College</td>
                      <td>
                        <div className="d-flex flex-column">
                          <span>Event1</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-evenly">
                          <Button>Edit</Button>
                          <Button variant="danger">Delete</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Deva</td>
                      <td>1234567890</td>
                      <td>ananddeva345@gmail.com</td>
                      <td>Jamal Mohammed College</td>
                      <td>
                        <div className="d-flex flex-column">
                          <span>Event1</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-evenly">
                          <Button>Edit</Button>
                          <Button variant="danger">Delete</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Deva</td>
                      <td>1234567890</td>
                      <td>ananddeva345@gmail.com</td>
                      <td>Jamal Mohammed College</td>
                      <td>
                        <div className="d-flex flex-column">
                          <span>Event1</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-evenly">
                          <Button>Edit</Button>
                          <Button variant="danger">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default Event