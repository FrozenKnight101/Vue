<template>
  <div>
    <!-- Navbar -->
    <nav>
      <ul>
        <li @click="currentSection = 'about'">About</li>
        <li @click="currentSection = 'education'">Education</li>
        <li @click="currentSection = 'experience'">Experience</li>
        <li @click="currentSection = 'skills'">Skills</li>
        <li @click="currentSection = 'contact'">Contact</li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
      </ul>
    </nav>

    <!-- Transition Wrapper -->
    <transition name="fade" mode="out-in">
      <div :key="currentSection">

        <!-- About Section -->
        <section v-if="currentSection === 'about'" id="about">
          <h2>About Me</h2>
          <br>
          <div class="about-content">
    <div class="about-image">
      <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt=" Image" />
    </div>
    <div class="caption">This is not me :| </div>
  </div>
          
          <div>
            <br>
        <p>
          I am a passionate
          <transition name="fade" mode="out-in">
            <span :key="currentRole" class="role-text">{{ currentRole }}</span>
          </transition> !!
        </p>
        <br>
        <p align = "left"> 
          A firm believer of “Leadership is the capacity to translate vision into reality from passion and not position. It is about inspiration, influence, and impact.”, a third-year Computer Science student at Deakin University with an aspiration to be the youngest winner of Turing Award. <br> <br>

Ever since I was a little kid, learning various computer languages, principles and frameworks have been my passion. I still remember typing in my very first commands in LOGO and making me realize that it was almost magic, being able to do whatever I wanted, just by typing a few commands, limited only by my imagination and ingenuity. I felt that it was easier for me to communicate in these languages rather than human language. Throughout middle and high school. I latched on to any ideas for a project I could get, moving from “Hello World” all the way to building an AI virtual assistant. I yearned to learn more, yearned to learn something different. <br> <br>

Apart from being passionate about computer languages and algorithms, I am enthusiastic about being a global citizen and leader, which led me to gain education from different countries across the globe. After completing my schooling in India, I have had the opportunity to attend Harvard Extension School – the USA, Audencia’s Winter Program – France, Stuttgart’s Winter Program – Germany, and my bachelor’s degree from Deakin University – Australia. <br> <br>
When I am not at work or studying or in denial about having a social life, I develop and improve my soft skills like leadership, communication, digital literacy, critical thinking, problem-solving, self-management, teamwork, work ethic, emotional intelligence, cultural intelligence, management. Additionally, I know English and Hindi languages at naïve proficiency and learning French and German. <br> <br>

Turning smaller steps of virtuality into bigger steps of reality.
          
          </p>
      </div>
        </section>

        <!-- Education Section -->
          <section v-if="currentSection === 'education'" id="education">
          <h2>Education</h2>
          <div class="timeline">
    <div v-for="edu in education" :key="edu.id" class="timeline-item">
      <div class="timeline-content">
        <h3>{{ edu.year }}</h3>
        <p>{{ edu.degree }} - {{ edu.school }}</p>
      </div>
      <div class="timeline-icon"></div>
    </div>
  </div>
        </section>

        <!-- Experience Section -->
        <section v-if="currentSection === 'experience'" id="experience">
          <h2>Experience</h2>
          <ul>
            <li v-for="job in jobs" :key="job.id">
              <h3>{{ job.title }} at {{ job.company }}</h3>
              <p>{{ job.description }}</p>
            </li>
          </ul>
        </section>

        <!-- Skills Table -->
        <section v-if="currentSection === 'skills'" id="skills">
          <h2>Skills</h2>
  <div v-for="skill in skills" :key="skill.id" class="skill-bar">
    <div class="skill-label">{{ skill.name }} - {{ skill.proficiency }}</div>
    <div class="skill-progress">
      <div class="progress-bar" :style="{width: skill.level + '%'}"></div>
    </div>
  </div>
        </section>

        <!-- Contact Form -->
        <section v-if="currentSection === 'contact'" id="contact">
          <h2>Contact Me</h2>
          <form @submit.prevent="submitForm">
            <label>
              Name:
              <input v-model="contactForm.name" type="text" required>
            </label>
            <label>
              Message:
              <textarea v-model="contactForm.message" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentSection: 'about',
      currentRoleIndex: 0,
      roles: ['Web Developer', 'App Developer', 'UI/UX Designer', 'Gamer'], // Add more roles as needed
      education: [
        { id: 1, degree: 'High School', school: 'Sunbeam School', year: '2015-2016' },
        { id: 2, degree: 'Bachelor of Computer Science', school: 'Deakin University', year: '2020-2023' },
        { id: 3, degree: 'Diploma - ESports Management', school: 'Audencia University', year: '2021-2022' },
      ],
      jobs: [
        { id: 1, title: 'Frontend Developer', company: 'Tech Corp', description: 'Developed various web applications.' },
        { id: 2, title: 'Backend Developer', company: 'Data Inc', description: 'Managed databases and APIs.' }
      ],
      skills: [
        { id: 1, name: 'JavaScript', level: 80, proficiency: 'Intermediate' },
        { id: 2, name: 'Vue', level: 40, proficiency: 'Beginner' },
        { id: 3, name: 'HTML', level: 90, proficiency: 'Professiona' },
        { id: 4, name: 'CSS', level: 70, proficiency: 'Intermediate' },
        { id: 5, name: 'PHP', level: 100, proficiency: 'Professional' },
        { id: 6, name: 'MySQL', level: 85, proficiency: 'Intermediate' }
        // Level is a percentage representing the skill proficiency
      ],
      contactForm: {
        name: '',
        message: ''
      }
    };
  },
  computed: {
    currentRole() {
      return this.roles[this.currentRoleIndex];
    },
  },
  methods: {
    submitForm() {
      alert(`Thank you for your message, ${this.contactForm.name}!`);
      this.contactForm.name = '';
      this.contactForm.message = '';
    },
    // Add this method to toggle between roles
    toggleRole() {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
    },
  },

  created() {
    // Automatically switch roles every 1 second
    setInterval(() => {
      this.toggleRole();
    }, 1000);
  },
  
};


</script>

<style>


/* Default theme (light) */
:root {
  --primary-bg-color: #ffffff;
  --primary-text-color: #333333;
  --link-color: #0000ff;  
  --highlight-color: #5c6ac4;
 
}

/* Dark theme */
[data-theme='dark'] {
  --primary-bg-color: #333333;
  --primary-text-color: #ffffff;
  --link-color: #0099ff; 
  --highlight-color: #5c6ac4;
}

a {
  color: var(--link-color);
}

body {
  background-color: var(--primary-bg-color) !important;
  color: var(--primary-text-color) !important;
}

.skill-bar {
  margin: 10px 0;
}

.skill-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.skill-progress {
  background-color: #e4e4e4; /* Light grey for background */
  border-radius: 5px;
  height: 20px;
  overflow: hidden;
}

.progress-bar {
  background-color: var(--highlight-color); /* Use the highlight color */
  height: 100%;
  transition: width 0.5s ease; /* Animation for the progress bar filling up */
}

/* Education Timeline Styles */
.timeline {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: #5c6ac4; /* Use your highlight color or a color that fits your design */
}

.timeline-item {
  position: relative;
  padding: 10px 0;
  display: flex;
  align-items: flex-start;
  margin-left: 30px; /* Adjust the spacing between the timeline and content */
}

.timeline-content {
  padding: 20px;
  background: #f9f9f9;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 60%; /* Adjust the width of the content box */
  z-index: 1;
}

.timeline-item:nth-child(even) .timeline-content {
  left: auto;
  right: 30px;
}

.timeline-icon {
  width: 30px;
  height: 30px;
  background: #5c6ac4; /* Use your highlight color or a color that fits your design */
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: 0 0 0 4px #f9f9f9; /* Create a border around the circle */
}

/* Animation for Timeline Items */
.timeline-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover Effect for Education Timeline Items */
.timeline-item:hover .timeline-content {
  background: var(--highlight-color); /* Use the highlight color defined for the theme */
  transition: background 0.3s ease; /* Smooth transition for background color */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Add a subtle box shadow on hover */
}

.timeline-item:hover .timeline-content * {
  color: var(--primary-text-color) !important; /* Change text color to primary text color on hover */
}

.timeline-item:hover .timeline-icon {
  background: #fff; /* Change to your desired circle color on hover */
  box-shadow: 0 0 0 4px var(--highlight-color); /* Add a border around the circle on hover */
}

/* Fix for Dark Mode Timeline Cards */
[data-theme='dark'] .timeline-content {
  background: #333; /* Change to your desired background color for dark mode */
  color: #fff; /* Change to your desired text color for dark mode */
}

/* Fix for Dark Mode Year Text */
[data-theme='dark'] .timeline-item .timeline-year {
  color: var(--primary-text-color); /* Change to your desired year text color for dark mode */
}


/* Contact Form Styles */
#contact {
  text-align: center;
  padding: 40px;
}

#contact h2 {
  font-size: 28px;
  color: var(--highlight-color); /* Use your highlight color */
}

#contact form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  background: #f0f4f7; /* Light mode background color */
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  text-align: center; /* Align form elements to the center */
}

#contact form label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--highlight-color); /* Label text color */
  text-align: left; /* Align labels to the left */
}

#contact form input[type="text"],
#contact form textarea {
  width: 100%;
  padding: 15px;
  margin: 0 auto; /* Center-align input fields horizontally */
  border: 2px solid #5c6ac4; /* Input border color */
  border-radius: 8px;
  background: #fff; /* Input background color */
  transition: border-color 0.3s ease;
  font-size: 16px;
  color: #333; /* Text color for dark mode */
}

#contact form input[type="text"] {
  max-width: 80%; /* Ensure the "Name" input doesn't exceed the form's width */
}

#contact form input[type="text"]:focus,
#contact form textarea:focus {
  border-color: var(--highlight-color); /* Highlight border color on focus */
}

#contact form button {
  display: block;
  width: 100%;
  padding: 15px;
  background: var(--highlight-color); /* Use your highlight color for the button */
  color: #fff; /* Button text color */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 18px;
}

#contact form button:hover {
  background: #5c6ac4; /* Change to your desired hover background color */
}

/* Additional Styles for Success Message (Optional) */
.success-message {
  font-size: 20px;
  color: #5c6ac4; /* Success message text color */
  margin-top: 20px;
}


/* About Section Styles */
#about {
  text-align: center;
  padding: 40px;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  max-width: 800px; /* Adjust the max width of the content */
  margin: 0 auto;
}

.about-image {
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.about-image img {
  max-width: 100%;
  height: auto;
}

.caption {
  position: absolute;
  bottom: 20px; /* Align to the bottom */
  left: 0;
  right: 0;
  text-align: center; /* Center the text horizontally */
  background-color: var(--highlight-color); /* Background color for the caption */
  color: #fff; /* Text color for the caption */
  padding: 5px 0; /* Adjust vertical padding as needed */
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

h2 {
  font-size: 28px;
  color: var(--highlight-color); /* Header text color */
  margin-top: 20px; /* Adjust the margin as needed */
}


/* Transition for role text */
.role-transition {
  display: inline-block;
  transition: opacity 0.3s ease-out;
  animation: roleChange 4s infinite alternate;
}

@keyframes roleChange {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
