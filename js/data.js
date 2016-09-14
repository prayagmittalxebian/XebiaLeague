apl.factory('data', function () {
    var listOfPlayers = [
        {name: "Prayag Mittal", mobile: 8588856794, sold: false, gender: "Male"},
        {name: "Brijesh Pant", mobile: 9899581678, sold: false, gender: "Male"},
        {name: "Siddhartha Jain", mobile: 8802039386, sold: false, gender: "Male"},
        {name: "vikram Singh rajpoot", mobile: 9705082987, sold: false, gender: "Male"},
        {name: "Himanshu Arya", mobile: 9899311516, sold: false, gender: "Male"},
        {name: "Nitin Gupta", mobile: 9654377145, sold: false, gender: "Male"},
        {name: "Umesh Maurya", mobile: 9873654184, sold: false, gender: "Male"},
        {name: "Prince Prakash", mobile: 8513866908, sold: false, gender: "Male"},
        {name: "Nishant Gupta", mobile: 9910020462, sold: false, gender: "Male"},
        {name: "Gurpreet Singh", mobile: 8527619772, sold: false, gender: "Male"},
        {name: "Rituraj", mobile: 9717216024, sold: false, gender: "Male"},
        {name: "Yogesh Srivastava", mobile: 9643966241, sold: false, gender: "Male"},
        {name: "Rohan Aggarwal", mobile: 7835892943, sold: false, gender: "Male"},
        {name: "Mohit Kanwar", mobile: 8588832476, sold: false, gender: "Male"},
        {name: "Ravi Tyagi", mobile: 9654300219, sold: false, gender: "Male"},
        {name: "Rajesh Kumar", mobile: 8800188338, sold: false, gender: "Male"},
        {name: "Arun Yadav", mobile: 9871270008, sold: false, gender: "Male"},
        {name: "Tanmay Mehra", mobile: 9739604977, sold: false, gender: "Male"},
        {name: "Sumit Soman", mobile: 9718643329, sold: false, gender: "Male"},
        {name: "Vivek negi", mobile: 8010725971, sold: false, gender: "Male"},
        {name: "Vishal Pachori", mobile: 8826009630, sold: false, gender: "Male"},
        {name: "Saransh Jain", mobile: 9953240326, sold: false, gender: "Male"},
        {name: "Rahul Khanna", mobile: 9818811048, sold: false, gender: "Male"},
        {name: "ADARSH AMAN", mobile: 9734843249, sold: false, gender: "Male"},
        {name: "MANDAVI KISHOR", mobile: 9718870210, sold: false, gender: "Female"},
        {name: "NITISH KUMAR ", mobile: 7863962312, sold: false, gender: "Male"},
        {name: "Mayank Gupta", mobile: 9953965123, sold: false, gender: "Male"},
        {
            name: "Vivek Verma",
            mobile: 9990079216,
            captain: true,
            team: "Super Giants",
            sold: true,
            gender: "Male",
            cost: 0
        },
        {
            name: "Sunny Sharma",
            mobile: 9560539278,
            captain: true,
            team: "The Beasts",
            sold: true,
            gender: "Male",
            cost: 0
        },
        {
            name: "Amit Kumar",
            mobile: 9711141223,
            captain: true,
            team: "Team Raiders",
            sold: true,
            gender: "Male",
            cost: 0
        },
        {
            name: "Vishal Singh",
            mobile: 9990231783,
            captain: true,
            team: "Eleven Ducks",
            sold: true,
            gender: "Male",
            cost: 0
        },
        {name: "Rajiv", mobile: 9810918234, sold: false, gender: "Male"},
        {name: "Md Iqbal", mobile: 9818667050, sold: false, gender: "Male"},
        {name: "Kapil Malhotra", mobile: 9871220809, sold: false, gender: "Male"},
        {name: "Surbhi Varshney", mobile: 8373981131, sold: false, gender: "Female"},
        {name: "Neha Singh", mobile: 8373981131, sold: false, gender: "Female"},
        {name: "Swati Bagga", mobile: 8373981131, sold: false, gender: "Female"},
        {name: "Kapil Choudhary", mobile: 9560654774, sold: false, gender: "Male"},
        {name: "Hemant", mobile: 9818679878, sold: false, gender: "Male"},
        {name: "sheetal singh", mobile: 9911872805, sold: false, gender: "Male"},
        {name: "Shubham purwar", mobile: 9205979473, sold: false, gender: "Male"},
        {name: "Jasleen", mobile: 8527533789, sold: false, gender: "Female"},
        {name: "Shweta", mobile: 8791640735, sold: false, gender: "Female"},
        {name: "Vikrant Singh", mobile: 9873608216, sold: false, gender: "Male"},
        {name: "Ankush Maheshwari", mobile: 9599925374, sold: false, gender: "Male"},
        {name: "Manav", mobile: 8882948255, sold: false, gender: "Male"},
        {name: "Nishant Maggo", mobile: 9910462830, sold: false, gender: "Male"},
        {name: "Manish Saraswat", mobile: 9213519083, sold: false, gender: "Male"},
        {name: "Nikhil Solanki", mobile: 9999091400, sold: false, gender: "Male"},
        {name: "Pankaj Dubey", mobile: 9999091400, sold: false, gender: "Male"}

    ];

    function saveListOfPlayers(players) {
        localStorage.setItem('players', JSON.stringify(players));
    }

    function getListOfPlayers() {
        return JSON.parse(localStorage.getItem('players')) || listOfPlayers;
    }

    return {
        getListOfPlayers: getListOfPlayers,
        saveListOfPlayers: saveListOfPlayers
    }
});