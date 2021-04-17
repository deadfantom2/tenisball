import React from 'react';
import { Form, Image, Dropdown } from 'react-bootstrap';
import { tsars } from '../outils/TsarList';

const AvatarList = ({ setAvatar }) => {
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
              <Image
                src={tsar.photoPath}
                roundedCircle
                className="avatar__tsar"
              />
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
