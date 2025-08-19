let cardContainer = document.querySelector('.cardContainer');
let searchInput = document.querySelector('#searchInput');

const userData = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
    { name: "Alice Johnson", email: "alice.johnson@example.com" },
    { name: "Bob Williams", email: "bob.williams@example.com" },
    { name: "Charlie Brown", email: "charlie.brown@example.com" },
    { name: "Emily Davis", email: "emily.davis@example.com" },
    { name: "Michael Scott", email: "michael.scott@example.com" },
    { name: "Dwight Schrute", email: "dwight.schrute@example.com" },
    { name: "Pam Beesly", email: "pam.beesly@example.com" },
    { name: "Jim Halpert", email: "jim.halpert@example.com" },
    { name: "Angela Martin", email: "angela.martin@example.com" },
    { name: "Stanley Hudson", email: "stanley.hudson@example.com" },
    { name: "Kevin Malone", email: "kevin.malone@example.com" },
    { name: "Oscar Martinez", email: "oscar.martinez@example.com" },
    { name: "Phyllis Vance", email: "phyllis.vance@example.com" },
    { name: "Meredith Palmer", email: "meredith.palmer@example.com" },
    { name: "Kelly Kapoor", email: "kelly.kapoor@example.com" },
    { name: "Ryan Howard", email: "ryan.howard@example.com" },
    { name: "Creed Bratton", email: "creed.bratton@example.com" },
    { name: "Toby Flenderson", email: "toby.flenderson@example.com" },
];


function displayUsers(users) {
    cardContainer.innerHTML = ''; // Clear previous content
    users.forEach(user => {
        let userElement = document.createElement('div');
        userElement.className = 'card';
        userElement.innerHTML = `
            <h4>${user.name}</h4>
            <p>Email: ${user.email}</p>
        `;
        cardContainer.appendChild(userElement);
    });
}

displayUsers(userData);

searchInput.addEventListener('input', function() {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredUser = userData.filter((user)=>{
        return user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm);
    })
    displayUsers(filteredUser);
});