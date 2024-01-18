<?php

  $classes = 'content-decoration';

  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }
  if ($is_preview) {
    $classes .= ' is-preview';
  }
  $style = '';
  if (array_key_exists('style', $block)) {
    $style .= 'height: ' . $block['style']['dimensions']['minHeight'] . ';';
  }

  $image = get_field('image');
  
  if ($image['sizes']['medium_large-width']) {
    $style .= 'aspect-ratio:' . $image['sizes']['medium_large-width'] . '/' . $image['sizes']['medium_large-height'] . ';';
  }

  if (have_rows('positioning')) {
    while(have_rows('positioning')) {
      the_row();
      $style .= 'transform:';
      if (get_sub_field('vertical')) {
        $style .= 'translateY(' . get_sub_field('vertical') . 'px)';
      }
      if (get_sub_field('horizontal')) {
        $style .= 'translateX(' . get_sub_field('horizontal') . 'px)';
      }
      $style .= ';';
    }
  }

  write_log($image);
?>

<?php if ($is_preview) : ?>
  <div class="content-decoration-handle"><p>Content Decoration</p></div>
<?php endif; ?>

<div class="<?php echo $classes; ?>" style="<?php echo $style; ?>">
  <?php if ($image) : ?>
    <img src="<?php echo $image['sizes']['medium_large']; ?>" alt="" /> 
  <?php endif; ?>
</div>