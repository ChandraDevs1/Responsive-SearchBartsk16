const students = [
  {
    name: "Simran",
    marks: 85,
    class: 10,
    address: "Kolkata",
  },
  {
    name: "Prachi",
    marks: 92,
    class: 11,
    address: "Bangalore",
  },
  {
    name: "Rohan",
    marks: 78,
    class: 12,
    address: "Kolkata",
  },
  {
    name: "Neha",
    marks: 88,
    class: 10,
    address: "Delhi",
  },
  {
    name: "Aryan",
    marks: 90,
    class: 11,
    address: "Hyderabad",
  },
  {
    name: "Ananya",
    marks: 95,
    class: 12,
    address: "Chennai",
  },
  {
    name: "Akash",
    marks: 82,
    class: 10,
    address: "Pune",
  },
  {
    name: "Riya",
    marks: 91,
    class: 11,
    address: "Ahmedabad",
  },
  {
    name: "Kartik",
    marks: 84,
    class: 12,
    address: "Jaipur",
  },
  {
    name: "Saanvi",
    marks: 89,
    class: 10,
    address: "Lucknow",
  },
  {
    name: "Arjun",
    marks: 93,
    class: 11,
    address: "Chandigarh",
  },
  {
    name: "Pari",
    marks: 86,
    class: 12,
    address: "Indore",
  },
  {
    name: "Vivaan",
    marks: 94,
    class: 10,
    address: "Bhopal",
  },
  {
    name: "John",
    marks: 85,
    class: 12,
    address: "New York",
  },
  {
    name: "Emma",
    marks: 90,
    class: 11,
    address: "London",
  },
  {
    name: "Alexander",
    marks: 88,
    class: 10,
    address: "Moscow",
  },
  {
    name: "Sophia",
    marks: 96,
    class: 12,
    address: "Paris",
  },
  {
    name: "Mia",
    marks: 92,
    class: 11,
    address: "Tokyo",
  },
  {
    name: "Rahul",
    marks: 95,
    class: 10,
    address: "Mumbai",
  },
  {
    name: "Priya",
    marks: 88,
    class: 12,
    address: "Delhi",
  },
  {
    name: "Rajesh",
    marks: 91,
    class: 11,
    address: "Bangalore",
  },
  {
    name: "Sanjana",
    marks: 85,
    class: 10,
    address: "Hyderabad",
  },
  {
    name: "Ankit",
    marks: 92,
    class: 12,
    address: "Pune",
  },
  {
    name: "Pooja",
    marks: 89,
    class: 11,
    address: "Chennai",
  },
  {
    name: "Kartik",
    marks: 93,
    class: 10,
    address: "Kolkata",
  },
  {
    name: "Divya",
    marks: 87,
    class: 12,
    address: "Jaipur",
  },
  {
    name: "Manish",
    marks: 90,
    class: 11,
    address: "Ahmedabad",
  },
  {
    name: "Aisha",
    marks: 94,
    class: 10,
    address: "Lucknow",
  },
  {
    name: "Arjun",
    marks: 86,
    class: 12,
    address: "Chandigarh",
  },
  {
    name: "Ishika",
    marks: 97,
    class: 12,
    address: "Indore",
  },
];

// //  mapping A data

const MapData = function (students) {
  return students
    .map((student) => {
      return `
        <div class="card-container">
        <ul class="card">
       <li>Student Name : ${student.name}</li>
       <li>Student Marks : ${student.marks} </li>
       <li>Student Class : ${student.class}</li>
       <li>Student Address : ${student.address}</li>
        </ul>
       </div>`;
    })
    .join("");
};

const allStudentCards = MapData(students);
document.querySelector(".card-container").innerHTML = allStudentCards;

// //  Filtering A data

// document.addEventListener("DOMContentLoaded", function () {

 
// });

const dataSearch = document.querySelector("#txt");
const btn = document.querySelector(".btn");

function handleData(event) {
  event.preventDefault();
  const filteredData = students.filter((student) => {
    return student.name
      .toLowerCase()
      .includes(dataSearch.value.toLowerCase());
  });
  document.querySelector(".card-container").innerHTML = MapData(filteredData);
}

btn.addEventListener("click", handleData);
