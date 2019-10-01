<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="shortcut icon" href="assets/css/images/favicon.png" type="image/x-icon" />
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Questrial&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/biblio.css" />
  <title>Biblioteca USB</title>
</head>

<body>
  <div id="images">
    <div class="container">
      <img src="assets/css/images/medalla.png" alt="" />
      <img src="assets/css/images/unisimon-logo-25.png" alt="" />
    </div>
  </div>
  <div id="navigation-bar" class="container">
    <ul>
      <li><a href="">Inicio</a></li>
      <li><a href="">Quienes Somos</a></li>
      <li><a class="last" href="">Contactenos</a></li>
      <li><a class="last" href="">Acerca de</a></li>
    </ul>
  </div>

  <section id="landing-section">
    <div class="container">
      <h1 class="alt-font">Biblioteca USB</h1>
      <p>
        La universidad Simón Bolivar cuenta con una biblioteca con una gran
        variedad de libros, revistas y videos que podras ver, leer y reservar
        por nuestro sitio web o directamente en la biblioteca ya sea tu
        prefencia.
      </p>
      <a href="#pricing-section">Reserva ya!</a>
    </div>
  </section>


  <?php



  require "assets/php/Clase.php";

  $lib1 = new Libro("37829", "Ingenieria de Software", "Disponible", "Libros", "Pressman", "Norma", 2019, "12345", "General");
  $lib2 = new Libro("82974", "Ingenieria de Web", "Disponible", "Libros", "Pressman", "Norma", 2019, "123458", "Reserva");
  $lib3 = new Libro("93723", "100 años de soledad", "Disponible", "Libros", "Garcia Marquez", "Norma", 2018, "12345832", "General");
  $rev1 = new Revista("83714", "Semana", "Disponible", "Revistas", "VOL 1", "12/08/2010", "Semanal", "1245124");
  $rev2 = new Revista("897736", "TU", "Disponible", "Revistas", "VOL 12", "02/11/2018", "Mensual", "23487");
  $rev3 = new Revista("927342", "Motor", "Disponible", "Revistas", "VOL 132", "14/02/2019", "Semanal", "622345");
  $vid1 = new Video("72342", "2012", "Disponible", "Videos", "Blu-Ray", "1:36:12", 2012);
  $vid2 = new Video("49723", "Titanic", "Disponible", "Videos", "DVD", "1:54:12", 2008);
  $vid3 = new Video("773252", "Vertigo", "Disponible", "Videos", "Blue-Ray", "2:04:12", 1973);

  $biblio = array($lib1, $lib2, $lib3, $rev1, $rev2, $rev3, $vid1, $vid2, $vid3);

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    /* Collect value of input field */
    $numero = $_POST['button'];
    echo $biblio[$numero];
  }
  ?>

  <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <section id="pricing-section" class="container">
      <div id="pricing">
        <h2>Nuestro Catalogo</h2>
        <h3>Llevate los que desees!.</h3>
        <?php
        for ($i = 0; $i < count($biblio); $i++) {
          echo '

        <div class="chart">
        <h6>Sección: <span style="color: #232323;">' . $biblio[$i]->seccion . '</span> </h6>
          <h4>Codigo:  <span style="color: #232323;">' . $biblio[$i]->codigo . '</span> </h4>
          <h5>Nombre:  <span style="color: #232323;">' . $biblio[$i]->nombre . '</span> </h5>

          <h6>Estado: <span style="color: #232323;">' . $biblio[$i]->estado . '</span> </h6>
          <button type="submit" name="button" value="' . $i . '" >Mas Info</button>
          </div>
        ';
          /* echo "<h2>" . ($i + 1) . ". " . $biblio[$i]->nombre . "</h2>"; */
        }

        ?>
      </div>
    </section>
  </form>

  <!-- Footer Section -->
  <footer id="footer-section">
    <div class="container">
      <div id="branding">
        <h3 class="alt-font">Biblioteca USB</h3>
        <p>
          Somos una Universidad sin ánimo de lucro dedicada a la formación integral, al desarrollo de la investigación e innovación, que articulada con el Estado, el sector productivo y la comunidad en general, responde al compromiso con el desarrollo del entorno social, político, cultural y económico.
        </p>
        <h5 class="alt-font">Copyright &copy; 2019</h5>
      </div>

      <div id="links">
        <h3>Nuestras Redes.</h3>
        <div id="social-icons">
          <img src="assets/css/images/google-plus.png" alt="A google plus icon" />
          <img src="assets/css/images/facebook.png" alt="" />
          <img src="assets/css/images/linkedin.png" alt="" />
          <img src="assets/css/images/twitter.png" alt="" />
          <img src="assets/css/images/instagram.png" alt="" />
        </div>

        <nav>

          <ul>
            <li>
              <h6>Navigation</h6>
            </li>
            <li><a href="">Acerca de</a></li>
            <li><a href="">Contactenos</a></li>
            <li><a href="">Politica</a></li>
            <li><a href="">Reserve ya!</a></li>
          </ul>

          <ul>
            <li>
              <h6>Universidad</h6>
            </li>
            <li><a href="">Terminos de servicio</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Programas</a></li>
            <li><a href="">Trabajos</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</body>

</html>