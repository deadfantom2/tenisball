import React from 'react';
import { Form, Image, Dropdown } from 'react-bootstrap';

const AvatarList = ({ setAvatar }) => {
  const tsars = [
    { name: 'Petr 1', photoPath: '/images/petr1.jpg' },
    { name: 'Ekaterina 1', photoPath: '/images/ekaterina1.jpg' },
    { name: 'Petr 2', photoPath: '/images/petr2.jpg' },
    { name: 'Anna Ioannovna', photoPath: '/images/anna.jpg' },
    { name: 'Ioann Antonovich', photoPath: '/images/anton.jpg' },
    { name: 'Elizaveta', photoPath: '/images/elizaveta.jpg' },
    { name: 'Petr 3', photoPath: '/images/petr3.jpg' },
    { name: 'Ekaterina 2', photoPath: '/images/ekaterina2.jpg' },
    { name: 'Pavel 1', photoPath: '/images/pavel1.jpg' },
    { name: 'Aleksandr 1', photoPath: '/images/aleksandr1.jpg' },
    { name: 'Nicolai 1', photoPath: '/images/nicolas1.jpg' },
    { name: 'Aleksandr 2', photoPath: '/images/aleksandr2.jpg' },
    { name: 'Aleksandr 3', photoPath: '/images/aleksandr3.jpg' },
    { name: 'Nicolai 2', photoPath: '/images/nicolas2.jpg' },
  ];

  return (
    <Form.Group controlId="avatar">
      <Dropdown>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          Choose your avatar
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {tsars.map((tsar) => (
            <Dropdown.Item
              key={tsar.name}
              value={tsar.photoPath}
              onClick={() => setAvatar(tsar.photoPath)}
            >
              <Image src={tsar.photoPath} roundedCircle className="img_tsar" />
              {'    '}
              {tsar.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>{' '}
    </Form.Group>
  );
};
export default AvatarList;
