import React, { useState, useEffect } from 'react';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img12 from './images/img12.jpg';
import img13 from './images/img13.jpg';
import img14 from './images/img14.jpg';
import img15 from './images/img15.jpg';
import img16 from './images/img16.jpg';
import img17 from './images/img17.jpg';
import img18 from './images/img18.jpg';
import img19 from './images/img19.jpg';
import img20 from './images/img20.jpg';
import img21 from './images/img21.jpg';
import img23 from './images/img23.jpg';
import img24 from './images/img24.jpg';
import img25 from './images/img25.jpg';
import img26 from './images/img26.jpg';


const images = {
  
  'img1': img1,
  'img2': img2,
  'img3': img3,
  'img4': img4,
  'img5': img5,
  'img6': img6,
  'img7': img7,
  'img8': img8,
  'img9': img9,
  'img10': img10,
  'img11': img11,
  'img12': img12,
  'img13': img13,
  'img14': img14,
  'img15': img15,
  'img16': img16,
  'img17': img17,
  'img18': img18,
  'img19': img19,
  'img20': img20,
  'img21': img21,
  'img23': img23,
  'img24': img24,
  'img25': img25,
  'img26': img26
}

const StudentCard = ({ faculty }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card" style={{ backgroundColor: '#F0F0F0' }}>
        <div className="card-body">
          <img src={images[faculty.icon]} alt="Faculty" /> {/* Added alt attribute */}
          <h5 className="card-title"><b style={{ color: 'orange' }}>{faculty.Name}</b></h5>
          <p className="card-text">Position: {faculty.Position}</p>
          <p className="card-text">Qualification: {faculty.Qualification}</p>
          <p className="card-text"><b style={{ color: 'orange' }}>Experience:</b> {faculty.Experience}</p>
        </div>
      </div>
    </div>
  );
};

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://sreenathkalluri.github.io/FacultyList/FacultyList.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data.Sheet1); // Assuming students are in the "Sheet1" array
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchStudents();
  }, []);

  const filteredData = students.filter(faculty =>
    faculty.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row text-center" style={{ backgroundColor: '' }}>
        <div className="col-md-4" style={{ backgroundColor: '' }}>
          <b style={{ color: 'orange' }}>Faculty List</b>
          
          <input type="text" onChange={handleSearch} />
        </div>
      </div>
      <div className="row mt-3">
        {filteredData.map((faculty, index) => (
          <StudentCard key={index} faculty={faculty} />
        ))}
      </div>
    </div>
  );
};

export default Students;
