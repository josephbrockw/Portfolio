<?php

$pageTitle = "Projects";
include("inc/header.php");

?>
		<section>
			<h2><?php echo $pageTitle; ?></h2>
		</section>
    <section class="project">
      <div class="info-section">
        <img class="project-img" src="./images/ctb.png">
        <div class="description">
          <h2><a href="https://github.com/josephbrockw/codeTheBlock">Code the Block's Website</a></h2>
          <p><span class='assign'>Assignment:</span> To build a functional website that explains what we do and how we do it. The website should be able to take donations and track Google Analytics.</p>
        </div>
      </div>
    </section>
    <section class="project">
      <div class="info-section">
        <img class="project-img" src="./images/shoppingApp.jpg">
        <div class="description">
          <h2><a href="http://josephbrockw.github.io/shoppingApp/">Shopping List App</a></h2>
          <p><span class='assign'>Assignment:</span> In this lesson, you will design and code a project from scratch: a shopping list app. The basic requirements for this app are users should be able to enter items the need to purchase, users should be able to check and uncheck items, and users should be able to permanently remove items.</p>
        </div>
      </div>
    </section>
    <section>
      <div class="info-section">
        <img src="./images/bullsQuiz.png" class="project-img">
        <div class="description">
          <h2><a href="http://josephbrockw.github.io/quizApp/">Interactive Quiz App</a></h2>
          <p><span class='assign'>Assignment:</span> Design and code an interactive quiz app from scratch. First, design and wireframe the app. Second, create a static version of your app using HTML5 and CSS3. Third, add interactive elements using JavaScript.</p>
        </div>
      </div>
    </section>

<?php 

include("inc/footer.php");

?>
