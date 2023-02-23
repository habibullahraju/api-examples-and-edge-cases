const randomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}
const displayUser = (user)=>{
    const name = document.getElementById('name')
    name.innerText = user.results[0].name.first + ' ' + user.results[0].name.last;
    const gender = document.getElementById('gender');
    gender.innerText = user.results[0].gender;
    document.getElementById('img').src = user.results[0].picture.medium
    document.getElementById('location').innerText = user.results[0].location.street.name;
    document.getElementById('phone').innerText = user.results[0].phone;
    
}
randomUser();