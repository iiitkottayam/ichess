import React, { useState } from "react";
import "../assets/styles/org.css";

const Committee = () => {
  const [event, setEvent] = useState([
    {
      name: "Patron",
      people: [
        "Dr. Rajiv V. Dharaskar, Director, IIIT Kottayam",
        "Dr. M Radhakrishnan, Registrar, IIIT Kottayam",
      ],
    },
    {
      name: "Organizing Chairs",
      people: ["Dr. Panchami V.", "Dr. Manjith B.C."],
    },
    {
      name: "Technical Program committee",
      people: [
        "Dr. Olivier Markowitch, Université libre de Bruxelles, Brussels, Belgium",
        "Dr. Uttam Ghosh, Vanderbilt University, USA",
        "Dr. Valentina Emilia Balas, Aurel Vlaicu University of Arad, Romania",
        "Dr. Arindam Pal, CSIRO's Data 61 and Cyber Security CRC , UNSW Sydney, Australia",
        "Dr. Prashant Pillai, Wolverhampton Cyber Research Institute , United Kingdom",
        "Dr. Li Xiaoli, Institute for Infocomm Research, Singapore",
        "Dr. Salah Agha, The American University in Cairo, Egypt",
        "Dr. Mohamed Benbouzid, University of Brest, France",
        "Dr. Xing Wang Li, Henan Polytechnic University, China",
        "Dr. Pao-Ann Hsiung , CCU, Taiwan",
        "Dr. Nehru Kandasamy, National University of Singapore",
        "Dr. Honghu Cheng, Fuzhou University, China",
        "Dr. Lalit Garg, University of Malta, Italy",
        "Dr. Mehdi Gheisari, Islamic Azad University, Iran",
        "Dr. Sumit Kalra, IIT Jodhpur, India",
        "Dr. Lakshmi Narasimhan Theagarajan, IIT Palakkad, India",
        "Dr. Abraham Varghese, University of Technology and Applied Sciences, Sultanate of Oman",
        "Dr. Gunasekaran Thangavel, University of Technology and Applied Sciences, Sultanate of Oman",
        "Dr. Muhammad Reza Kahar Aziz, Institut Technologi Sumatera (ITERA), Indonesia",
        "Dr. Michael Onyema Edeh, Coal City University, Nigeria",
        "Dr. Aslam Hayat, Wuhan University, China",
        "Dr.Arathy Varghese, Cardiff University, United Kingdom",
        "Dr. N.Ramasubramanian, Professor,  National Institute of Technology, Tiruchirappalli, India",
        "Dr. S. Mary Saira Bhanu, Professor,  National Institute of Technology, Tiruchirappalli, India",
        "Dr. R.Mohan, Assistant Professor, National Institute of Technology, Tiruchirappalli, India",
        "Dr.M. Brindha, Assistant Professor, National Institute of Technology, Tiruchirappalli, India",
        "Dr. S. Jaya Nirmala, Assistant Professor/CSE, National Institute of Technology, Tiruchirappalli, India",
        "Dr. M. Brindha, Assistant Professor, National Institute of Technology, Tiruchirappalli, India",
        "Dr. Sitara K., Assistant Professor, National Institute of Technology, Tiruchirappalli, India",
        "Dr. Kamalika Bhattacharjee, National Institute of Technology, Tiruchirappalli, India",
        "Dr. Sai Krishna Mothku, Assistant Professor, National Institute of Technology, Tiruchirappalli, India",
        "Dr. Lakshmi Sutha . G, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. Vinopraba, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. B. Surendiran, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. Chandrasekar, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. M. M. Rajan Singaravel, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. Ansuman Mahapatra, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. Aniruddha Kanhe, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. Venkadesan .A. , Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. Surendar M, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. Harigovindan V P, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr.P.Kumaran, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. K. Navin Sam,  Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr. Narendran Rajagopalan, Assistant Professor, National Institute of Technology Puducherry, India",
        "Dr.T.Vinopraba, Assistant Professor, National Institute of Technology, Puducherry, India",
        "Dr. J. Kokila, Assistant Professor, Assistant Professor, Indian Institute of Information Technology Allahabad, India",
        "Dr. Boddepalli SanthiBhushan, Assistant Professor,  Indian Institute of Information Technology Allahabad, India",
        "Dr. Sakthivel R, Associate Professor, Vellore Institute of Technology University, Vellore",
        "Dr. R. Dhanalakshmi, Associate Professor, Indian Institute of Information Technology Tiruchirappalli",
      ],
    },
  ]);
  return (
    <div className="org_container">
      <div class="text-center org-div">
        <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-white">
          Organizing <span class="text-indigo-600">Committee</span>
        </h3>
      </div>
      <div className="orgs">
        {event.map((data) => (
          <>
            <div className="org-out">{data.name}</div>
            {data.people.map((pep) => (
              <div className="org-in">{pep}</div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Committee;
