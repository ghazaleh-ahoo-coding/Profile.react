import './App.css'
import avatarImage from './assets/avatar.jpg'
import ProfilePage from './component/ProfilePage' // make sure folder name is correct

function App() {
  const user = {
    name: "Ghazaleh Azimi",
    username: "ghazaleh.azimi",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 22 2025",
    streakDays: "15",
    longestStreak: "30",
    recentBadgesText: "No recent badges",
    personalInfo: {
      email: "ghazalehazimi23@gmail.com",
      age: 23,
      location: "Herat, Afghanistan"
    },
    accountDetails: {
      plan: "Free",
      memberSince: "2023",
      status: "Active"
    }
  }

  return <ProfilePage user={user} />
}

export default App
