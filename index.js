document.addEventListener("DOMContentLoaded", function () {
  const listContacts = document.getElementById("list-contacts");
  const dummyData = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "1234567890",
      email: "john@example.com",
      groups: ["Colleagues", "Friends"],
      company: "Example Company",
      title: "Software Engineer",
      birthYear: "1990",
      birthMonth: "5",
      birthDay: "15",
      address: "123 Main St, City, Country",
      timeCreated: "12:00",
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "9876543210",
      email: "jane@example.com",
      groups: ["Friends"],
      company: "Tech Co.",
      title: "Marketing Manager",
      birthYear: "1988",
      birthMonth: "7",
      birthDay: "20",
      address: "456 Elm St, City, Country",
      timeCreated: "10:30",
    },
    {
      id: "3",
      firstName: "Michael",
      lastName: "Johnson",
      phoneNumber: "5551234567",
      email: "michael@example.com",
      groups: ["Family"],
      company: "Start-Up Inc.",
      title: "Project Manager",
      birthYear: "1995",
      birthMonth: "2",
      birthDay: "15",
      address: "789 Oak St, Town, Country",
      timeCreated: "15:45",
    },
    {
      id: "4",
      firstName: "Emily",
      lastName: "Brown",
      phoneNumber: "1239876543",
      email: "emily@example.com",
      groups: ["Colleagues", "Friends"],
      company: "Digital Solutions",
      title: "Software Developer",
      birthYear: "1992",
      birthMonth: "10",
      birthDay: "10",
      address: "321 Maple St, Village, Country",
      timeCreated: "08:15",
    },
    {
      id: "5",
      firstName: "David",
      lastName: "Lee",
      phoneNumber: "4567890123",
      email: "david@example.com",
      groups: ["Friends"],
      company: "Tech Innovations",
      title: "Product Manager",
      birthYear: "1987",
      birthMonth: "5",
      birthDay: "5",
      address: "567 Cedar St, City, Country",
      timeCreated: "11:00",
    },
  ];

  function renderContacts(contact) {
    return `
    <li class="list-contacts" id="contact-${contact.id}">
    <h3>${contact.firstName} ${contact.lastName}</h3>
    <p>Phone: ${contact.phoneNumber}</p>
    <p>Email: ${contact.email}</p>
    <p>Groups: ${contact.groups.join(", ")}</p>
    <p>Company: ${contact.company}</p>
    <p>Title: ${contact.title}</p>
    <p>Birthday: ${contact.birthMonth}
    /${contact.birthDay}
    /${contact.birthYear}</p>
    <p>Address: ${contact.address}</p>
    <p>Time Created: ${contact.timeCreated}</p>
    </li>
    <li>
    <button>Edit</button>
    <button>Delete</button>
    </li>
  `;
  }

  function addContactsDummy() {
    let addDummy = "";
    dummyData.forEach((contact) => {
      addDummy += renderContacts(contact);
    });
    listContacts.innerHTML = addDummy;
  }

  function saveDummy() {
    localStorage.setItem("seebook", JSON.stringify(dummyData));
  }

  addContactsDummy();

  saveDummy();
});
