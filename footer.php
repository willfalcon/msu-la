    </div>
    
    <footer class="footer">

      <?php if (get_field('footer_message', 'options')) : ?>
        <div class="footer__message"><?php the_field('footer_message', 'options'); ?></div>
      <?php endif; ?>

      <?php if (have_rows('social_media', 'options')) : ?>
        <ul class="footer__social">
          <?php while (have_rows('social_media', 'options')) : the_row(); ?>
            <li>
              <a href="<?php the_sub_field('link'); ?>" target="_blank">
              <?php the_sub_field('icon'); ?>
              <span><?php the_sub_field('label'); ?></span>
              </a>
            </li>
          <?php endwhile; ?>
        </ul>
      <?php endif; ?>
    </footer>
        
    <?php wp_footer(); ?>
  </body>
</html>