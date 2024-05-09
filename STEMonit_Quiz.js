<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STEMonIT Landing Page</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background-color: gold;
            color: gold;
        }
        header {
            background-color: blue;
        }
        footer {
            background-color: green;
        }
        #features, #about, #app {
            background-color: gold;
            color: green;
        }
        /* New styles */
        #intro {
            text-align: center;
            padding: 100px 0;
            /* background-image: url('https://anagha-lin.github.io/STEMonit-App/STEMonit.html'); */
            background-size: cover;
            color: white;
        }

        #intro h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        #intro p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<header>
    <div class="logo">
        <h1>STEMonIT</h1>
    </div>
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <section id="intro">
        <div class="intro-content">
            <h1>Welcome to STEMonIT</h1>
            <p>Explore interactive quizzes and learn STEM topics in a fun way!</p>
            <!-- Updated link to landing file -->
            <a href="https://anagha-lin.github.io/STEMonit-App/STEMonit.html" class="btn">Visit Landing Page</a>
        </div>
    </section>

    <section id="features">
        <div class="feature">
            <img src="https://github.com/Anagha-lin/STEMonit-App/blob/main/landing_file/STEMonIT_red_button.jpg?raw=true" alt="Feature 1">
            <h2>Interactive Quizzes</h2>
            <p>Engage with quizzes covering various STEM subjects.</p>
        </div>
        <div class="feature">
            <img src="https://github.com/Anagha-lin/STEMonit-App/blob/main/landing_file/STEMonIT_library_button.jpg?raw=true" alt="Feature 2">
            <h2>Learning Resources</h2>
            <p>Access a library of resources to enhance your STEM knowledge.</p>
        </div>
        <div class="feature">
            <img src="https://github.com/Anagha-lin/STEMonit-App/blob/main/landing_file/STEMonIT_tracker_png.jpg?raw=true" alt="Feature 3">
            <h2>Progress Tracking</h2>
            <p>Track your progress and see your improvement over time.</p>
        </div>
    </section>

    <section id="about">
        <div class="about-content">
            <h2>About the Developer</h2>
            <p>Hi, I'm Anagha Linus, the developer behind STEMonIT. As a passionate advocate for STEM education, I created this platform to make learning STEM topics more accessible and enjoyable for everyone.</p>
            <p>STEMonIT is not just a project for Holberton School; it's a manifestation of my commitment to empowering learners in the STEM fields.</p>
            <p>Connect with me on <a href="https://www.linkedin.com/in/anagha-linus-4b826519a">LinkedIn</a>, <a href="https://github.com/Anagha-lin">GitHub</a>, and <a href="https://twitter.com/Anaghalinu78299">Twitter</a>.</p>
        </div>
    </section>

    <section id="app">
        <div class="app-content">
            <h2>Try STEMonIT Now!</h2>
            <p>Start exploring our interactive quizzes and dive into the world of STEM!</p>
            <!-- Updated link to landing file -->
            <a href="https://anagha-lin.github.io/STEMonit-App/STEMonit.html" class="btn">Explore Now</a>
        </div>
    </section>
</main>

<footer>
    <div class="footer-content">
        <p>&copy; 2024 STEMonIT. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="social-media">
            <a href="#" aria-label="GitHub"><img src="github-icon.png" alt="GitHub"></a>
            <a href="https://github.com/Anagha-lin/STEMonit-App/blob/main/landing_file/facebook%20logo%20(2).png?raw=true" aria-label="Facebook"><img src="https://github.com/Anagha-lin/STEMonit-App/blob/main/landing_file/facebook%20logo%20(2).png?raw=true" alt="Facebook"></a>
        </div>
    </div>
</footer>

<script src="STEMonit_Quiz.js"></script> <!-- Added script tag to link JavaScript file -->
</body>
</html>

