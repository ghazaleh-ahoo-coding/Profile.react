
import './App.css'
import avatarImage from './assets/avatar.jpg'
import ProfilePage from './components/ProfilePage'
function App() {
  const user={
    name:"Ghazaleh Azimi",
    username: "ghazaleh.azimi",
    avatarImage:avatarImage,
    xp:80,
    lastactive:"Dec 22 2025",
    streakDays:"15",
    longestStreak:"30",
    recentBudgesText:"No recent Budges",

    personalInfo:{
      email:"ghazalehazimi23@gmail.com",
      gender:"Female",
      phone:"+93 70 123 456",
      "country":"Afghanistan",
      "Date Of Birth":"14 Nov 2002",
      "Portfolio Link":"N/A","Linkdin Link":"https://www.linkedin.com/in/ghazaleh-azimi-142002ahoo/",
      Languages:"English, Dari",
      Bio:"Aspiring Software Engineer with a passion for Front-end Development"

    },
    aacountDetails:{
      Role:"Student",
      Status:"Active",
      Varification:"Varified",
    }
    
   }
 return(
  <div className='page'>
    <ProfilePage user={user}></ProfilePage>
  </div>
 )
 
}
export default App
