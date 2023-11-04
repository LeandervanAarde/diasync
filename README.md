# UniVerse


<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/LeandervanAarde/diasync)
![GitHub watchers](https://img.shields.io/github/watchers/LeandervanAarde/diasync)
![GitHub language count](https://img.shields.io/github/languages/count/LeandervanAarde/diasync)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/LeandervanAarde/diasync)

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Leander van Aarde - 200211</h5>
<h6 align="center">DV300 - Term 4 | 2023</h6>
</br>
<p align="center">

  <a href="https://github.com/">
    <img src="https://github.com/LeandervanAarde/UniVerse/blob/Develops/UniVerse/Resources/Images/logo.svg" alt="Logo" width="300" height="200">
  </a>

  <p align="center">
   Diasync is an AI-driven self management application for Diabetics. <br>

    
   <br />
   <br />
    <a href="https://github.com/https://github.com/LeandervanAarde/diasync">Report Bug</a>
    ·
    <a href="https://github.com/https://github.com/LeandervanAarde/diasync">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/headerMockup.jpg)

### Project Description

UniVerse is a robust and versatile cross-platform school management desktop application meticulously crafted using the power of C# and the cutting-edge .NET MAUI framework. This sophisticated software solution has been designed to cater to the diverse needs of educational institutions, simplifying the intricate task of managing schools in a comprehensive and efficient manner.

Diasync is a new and AI-driven self-management web application created with NEXT.JS and Django frameworks  to create an exciting and cutting-edge application. This aims at educating and catering a diverse group of Diabetics in order to simplify and ease their management in order to live a long and healthy life

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=15&pause=1000&color=F71D1D&multiline=true&random=false&width=800&height=300&lines=+DISCLAIMER%3A+Diasync+is+not+an+official+or+registered+health+application+if+you+are+having+;problems+with+effective+Diabetes+management%2C+consult+a+healthcare+professional;+Furthermore%2C+this+application+does+not+aim+to+replace+healthcare+professionals%2C;rather+assist+patients+in+gaining+a+better+understanding+of+their+diabetes)](https://git.io/typing-svg)

### Built With

* [NEXT]([https://learn.microsoft.com/en-us/dotnet/maui/](https://nextjs.org/))
* [Django]([https://learn.microsoft.com/en-us/dotnet/maui/](https://www.djangoproject.com/))
* [DjangoRestFramework](https://www.django-rest-framework.org/)
* [Pandas](https://pandas.pydata.org/)
* [OpenAiApi](https://openai.com/)
* [TypeScript]()
* [PostgreSQL](https://www.postgresql.org/)
* [pgAdmin](https://www.pgadmin.org/)
* [Aiven](https://aiven.io/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

To get a copied file of this repository, follow the steps below to get it installed on your local machine. 

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/LeandervanAarde/diasync.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/LeandervanAarde/diasync.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install / npm i
   ```

4. Contact the  [Developer](mailto:200211@virtualwindow.co.za) for API keys that are required or create an OPENAI account for API access.
5. Follow the instructions on [Server](https://github.com/LeandervanAarde/diasyncserver) to clone the server, contact the [Developer](mailto:200211@virtualwindow.co.za) for access to the Database or create a Database and .env.local file. 

6. Ensure that you have Postgres and PgAdmin installed on your machine.

7. Ensure that pip3 and python3 are installed on your local machine.
8.   </br>

9. You can now run the front end using the: 
   ```sh
   npm run dev 
   ```
   command.


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/featuresMockup.jpg)

### Login validation and authentication

The login system ensures that only administrators have access to the application. This authentication process safeguards sensitive school management data.

![image3](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/login.jpg)
### Dashboard View

The dashboard provides snapshots of essential school data. It presents statistics such as the total number of students, staff members, subjects, and the aggregated student fees. Additionally, the dashboard offers a glimpse of upcoming school events, ensuring that administrators are always informed.

![image4](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/dashboard.jpg)
### Students Management Screen

The student management section allows users to efficiently handle student-related tasks. Administrators can browse, and add new students, and navigate to the individual student page to gather insights into individual student data.

![image5](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/studentScreen.jpg)

### Students Overview Screen

Within the student overview screen, users can access detailed information about a specific student, including their personal details, and enrolled subjects. Additionally, administrators can allocate additional subjects to the student.

![image5](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/studentOverview.jpg)

### Staff Management Screen

In the staff management section, administrators can manage all staff members associated with the institution. This includes adding new staff members, and accessing detailed information about each staff member.

![image5](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/staffScreen.jpg)

### Staff Overview Screen

Similar to the student overview screen, the staff overview screen offers a comprehensive view of a specific staff member's information, assigned subjects, and additional details. Users can also assign new subjects to staff members as needed.

![image5](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/staffOverview.jpg)

### Subject Management Screen

The subject management screen provides a centralised location for managing all subjects offered by the institution. Administrators can effortlessly add new subjects and access detailed subject profiles.

![image5](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/subjectScreen.jpg)

### Subject Overview Screen

Within the subject overview screen, users can delve into specific subject details. This includes viewing enrolled students, assigning lecturers to subjects, and adding new students to the subject roster.

![image5](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/subjectOverview.jpg)

### Funds Screen

The financial management section, also known as the funds screen, offers an overview of the institution's financial data. It displays critical financial data, including total income and pending salary payments. Administrators can also use this section to close the month's financial activities, ensuring accurate accounting.

![image5](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/funds.jpg)

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Ideation

![image6](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/Ideation.png)

<br />
<br />

![image7](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/dataRelationalDiagram.svg)

<br />
<br />

![image8](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/userFlow.svg)


### Wireframes

![image9](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/wireframes.png)



<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

##### We started off by implementing the frontend of the application. 

* Simon was responsible for implementing the Login page, as well as the Dashboard. 
* Leander was responsible for implementing the staff and staff overview screen, as well as the Students and student overview screen. He also implemented the flyout navigation.
* Bronwyn created the application designs and she compiled the README. She was responsible for for implementing the subjects and subject overview screen, as well as the funds screen.

##### Following that, we moved onto networking and integration

* Simon handled the validation on the Login screen, adding students and staff, and the imlemetation of the modal for the user to change their password apon their first login. He was also responsible for fot the networking and integration of the funds screen.
* Leander was responsible for researching image uploads, handling the requests for the dashboard on the frontend, implementing charts, handling the login functionality as well as implementing all the functionality in the backend.
* Bronwyn handled the navigation to the overview pages, input capturing, get requests on the frontend for staff, students ans subjects and adding a subject. She also handled removing an enrollment from a subject.

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* Leander enjoyed handling the backend
* Learning C#
* Our group dynamic worked really well.
* Working in a group dynamic and learning more about version control in a group setting

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Image uploads to prostgreSQL
* Adding subjects, staff and students
* Updating information
* Scrollview on the Subject page
* Cross-platform UI
* Learning of a new programming language (C#)

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Refinement of the application's UI
* Refinement of the application's adding and editing functionality
* Uploading images to the postgres database
* Color picker

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image10](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/mockup1.jpg)
<br>

![image11](https://github.com/LeandervanAarde/UniVerse/blob/Develops/README_Assets/mockup2.jpg)

See the [open issues](https://github.com/) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Bronwyn Potgieter** - [bee2805](https://github.com/bee2805)
* **Leander van Aarde** - [LeanderVanAarde](https://github.com/LeandervanAarde)
* **Simon Riley** - [SimonR1ley](https://github.com/SimonR1ley)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Bronwyn Potgieter** - [200089@virtualwindow.co.za](mailto:200089@virtualwindow.co.za) 
* **Leander van Aarde** - [200211@virtualwindow.co.za](mailto:200211@virtualwindow.co.za) 
* **Simon Riley** - [170044@virtualwindow.co.za](mailto:170044@virtualwindow.co.za) 
* **Project Link** - https://github.com/LeandervanAarde/UniVerse

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [illustrations](https://www.freepik.com/author/stories)
* [.NET MAUI Documentation](https://learn.microsoft.com/en-us/dotnet/maui/data-cloud/rest)
