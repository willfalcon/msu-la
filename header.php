<!doctype html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <?php wp_head(); ?>

  </head>

  <body <?php body_class(); ?> data-root="<?php bloginfo('url'); ?>">
    <?php wp_body_open(); ?>

    <header class="header" id="site-header">

      <a class="header-logo" href="<?php bloginfo('url'); ?>">
        <img class="header-logo__logo" src="<?php echo get_template_directory_uri() . '/dist/HORIZONTAL_WEB_white.svg'; ?>" alt="<?php bloginfo('name'); ?>" />  
      </a>

      <!-- <button class="nav-toggle" id="nav-toggle" aria-label="<?php _e('Open menu', 'cdhq'); ?>">
        <span></span>
        <span></span>
        <span></span>
      </button> -->

      <nav class="header-nav" id="header-nav">
        <?php 
          wp_nav_menu( 
            array(
              'theme_location' => 'main_menu',
              'menu_class' => 'header-nav__menu main-menu',
              'container' => null,
            )
          );

        ?>
      </nav>


    </header>
    
    <div class="page-container">