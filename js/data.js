apl.factory('data', function(){
  var listOfPlayers = [
    {
      name: 'Aakash Sharma',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I am a good opener. I can provide a good start to the team. Also I am a good fielder.',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Abhimanyu Kahal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Abhinav Dasmana',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I am a good opener. I can provide a good start to the team. Also I am a good fielder.',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Abhishek Nalwaya',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I have dropped all the catches that ever came to me. Planning to write a book on How To Catch',
      image: 'images/team/abhisheknalwaya.png'
    },
    {
      name: 'Aditya Pal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Primarily a Batsman, can bowl few spin, medium pace overs as well.',
      image: 'images/team/sachin.jpg'
    },
    // {
    //   name: 'Aditya Saxena',
    //   bats: true,
    //   bowls: true,
    //   team: '',
    //   cost:100,
    //   sold: false,
    //   active: true,
    //   description: 'Played at college level.',
    //   image: 'image/sachin.jpg'
    // },
    {
      name: 'Akshay Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'You know me well. Super fitness with exceptional fielding and bowling. Dare to have a face off :)',
      image: 'images/team/akshaygupta.jpg'
    },
    {
      name: 'Akshaya Kumar Sharma',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Left Arm Fast Bowler',
      image: 'images/team/akshaya.jpg'
    },
    {
      name: 'Aman Singal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Can Catch the ball with eyes closed apart from brilliant batting and bowling',
      image: 'images/team/aman.jpg'
    },
     {
      name: 'Anuj Dua',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I was member of Cricket team in my previous organization & used to open the innings. Can bowl medium pace as well.',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Arpit Kulsreshta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Love to Open.',
      image: 'images/team/arpit.jpg'
    },
    {
      name: 'Ashish Manchanda',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'With win win attitude I ensure I fight to win till the last ball is bowled be it batting, bowling or fielding, My contribution will always be more than 100%.',
      image: 'images/team/manchanda.jpg'
    },
    {
      name: 'Awanish Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I love to play cricket',
      image: 'images/team/Awanish.jpg'
    },
    {
      name: 'Biju',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Can hit sixes as much as the team wants. Get opposition teams top order batsmen out at will!',
      image: 'images/team/biju.jpg'
    },
    {
      name: 'Gagan Sahni',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Played at college level.',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Hemant Gulati',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/sachin.jpg'
    },    
    {
      name: 'Jatin Setia',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Opening Batsman and Medium pace part time bowler. Good fielding and catching skills.',
      image: 'images/team/sachin.jpg'
    },    
    {
      name: 'Jyoti Prakash Datta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I Bat defensively and very slowly for hours. I bowl even slower but get batsmen caught out on the boundary(sometimes). I field ok and do not let go of any catches and I do not misfield!',
      image: 'images/team/jyoti.jpg'
    },
    {
      name: 'Karan Arora',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/karanarora.jpg'
    },
    // {
    //   name: 'Mahesh Saini',
    //   bats: true,
    //   bowls: true,
    //   team: '',
    //   cost:100,
    //   sold: false,
    //   active: true,
    //   description: 'NA',
    //   image: 'image/sachin.jpg'
    // },
    {
      name: 'Neeraj Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Nitish Bhatnagar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Nitin Verma',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Currently training in South Africa with the team that defeated India. Highly motivated player with impeccable track record in gully cricket.',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Pankaj Arora',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/pankajarora.jpg'
    },
    {
      name: 'Pinakpani Das',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Right Arm Medium Bowler, Right Hand Batsmen. Played for MSO XI  and won the third position in the last Mckinsey Cricket League.',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Prashant Jain',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I am a medium fast bowler and mid level batsman. I like playing in pressure situations and could come handy.',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Prayag Mittal',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I am passionate about cricket. I am a bowler but appdev players treat me as batsman , now I am all rounder',
      image: 'images/team/prayag.png'
    },
    {
      name: 'Puneet Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'I play as a fast bowler in team and usually bat at number 4-5',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Ranjeet',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Sanjeev Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/sanjeev.jpg'
    },
    {
      name: 'Sanjeev Mishra',
      bats: true,
      bowls: true,
      team: '',
      cost: 100,
      sold: false,
      active: true,
      description: 'Bowler',
      image: 'images/team/sanjeevmishra.jpg'
    },
    {
      name: 'Shadab Ahmed',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'Like my favourite language Ruby, I blend sound base technique along with scope of great flexibility.',
      image: 'images/team/shadab.jpg'
    },
    {
      name: 'Siddharth Joshi',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'A batsman who can bowl and a bolwer who can bat.',
      image: 'images/team/siddharth.jpg'
    },
    {
      name: 'Sourabh Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/sourabhgupta.jpg'
    },    
    {
      name: 'Sumit Jolly',
      bats: true,
      bowls: true,
      team: '',
      cost:100,
      sold: false,
      active: true,
      description: 'A solid WicketKeeper',
      image: 'images/team/sumitjolly.jpg'
    },
    {
      name: 'Sundeep Gupta',
      bats: true,
      bowls: true,
      team: '',
      cost: 100,
      sold: false,
      active: true,
      description: 'NA',
      image: 'images/team/sachin.jpg'
    },
    {
      name: 'Vikas Kumar',
      bats: true,
      bowls: true,
      team: '',
      cost: 100,
      sold: false,
      active: true,
      description: 'Although I have last played cricket long ago, I had been the best bowler of my colony Team and very good batsman as well. I have mostly played with Tennis ball(Flash and Mark ball) and sometimes with leather',
      image: 'images/team/sachin.jpg'
    }
  ];

  function saveListOfPlayers(players){
    localStorage.setItem('players', JSON.stringify(players));
  }

  function getListOfPlayers(){
    return JSON.parse(localStorage.getItem('players')) || listOfPlayers;
  }

  return {
    getListOfPlayers: getListOfPlayers,
    saveListOfPlayers : saveListOfPlayers
  }
});